# Import necessary packages
from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware  # For handling Cross-Origin requests
from pydantic import BaseModel
import os
from dotenv import load_dotenv
from llm_service import init_llm_service, get_llm_service, LLMService
import logging

# Set up logging
logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)

# Load environment variables
load_dotenv()

# Create FastAPI application instance
app = FastAPI()

# Initialize services
logger.debug("Initializing services")
init_llm_service()

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    # Allow requests from React app running on port 3000
    allow_origins=["http://localhost:3000"],  
    allow_credentials=True,  # Allow sending cookies
    allow_methods=["*"],    # Allow all HTTP methods (GET, POST, etc.)
    allow_headers=["*"],    # Allow all headers
)

# Define request models
class AgentRequest(BaseModel):
    prompt: str

# Define API endpoints
@app.get("/api/hello")  # HTTP GET request decorator
async def read_root():   # Async function for handling the request
    logger.debug("Handling /api/hello request")
    return {"message": "API is working!"}  # Returns JSON response

@app.post("/api/agent")
async def process_agent_prompt(request: AgentRequest, llm_service: LLMService = Depends(get_llm_service)):
    logger.debug(f"Received agent request with prompt: {request.prompt}")
    try:
        response = await llm_service.generate_response(request.prompt)
        logger.debug("Successfully processed agent prompt")
        return {"response": response}
    except Exception as e:
        logger.error(f"Error in agent endpoint: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))

# Run server if file is executed directly
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)