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
api_key = os.getenv("OPENAI_API_KEY")
if not api_key:
    logger.error("No OpenAI API key found!")
    raise RuntimeError("OPENAI_API_KEY not found in environment variables")

# Create FastAPI application instance
app = FastAPI()

# Initialize LLM service
logger.debug("Initializing LLM service with API key")
init_llm_service(api_key)

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    # Allow requests from React app running on port 3000
    allow_origins=["http://localhost:3000"],  
    allow_credentials=True,  # Allow sending cookies
    allow_methods=["*"],    # Allow all HTTP methods (GET, POST, etc.)
    allow_headers=["*"],    # Allow all headers
)

# Define request model
class ChatRequest(BaseModel):
    message: str

# Define API endpoint
@app.get("/api/hello")  # HTTP GET request decorator
async def read_root():   # Async function for handling the request
    logger.debug("Handling /api/hello request")
    return {"message": "API is working!"}  # Returns JSON response

@app.post("/api/chat")
async def chat(request: ChatRequest, llm_service: LLMService = Depends(get_llm_service)):
    logger.debug(f"Received chat request with message: {request.message}")
    try:
        response = await llm_service.generate_response(request.message)
        logger.debug("Successfully generated response")
        return {"response": response}
    except Exception as e:
        logger.error(f"Error in chat endpoint: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))

# Run server if file is executed directly
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)