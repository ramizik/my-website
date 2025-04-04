# Import necessary packages
from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware  # For handling Cross-Origin requests
import os
from dotenv import load_dotenv
import logging
from pymongo import MongoClient

# Import the LLM service
from llm_service import generate_chat_response 
# Pydantic model for request body validation
from pydantic import BaseModel

############
### SET UP
############
# Set up logging
logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)

# Load environment variables
load_dotenv()

# Create FastAPI application instance
app = FastAPI()

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    # Allow requests from React app running on port 3000
    allow_origins=["http://localhost:3000"],  
    allow_credentials=True,  # Allow sending cookies
    allow_methods=["*"],    # Allow all HTTP methods (GET, POST, etc.)
    allow_headers=["*"],    # Allow all headers
)

# MongoDB Configuration
# Load config from a .env file:
# Ask Ramis for MONGODB_URI
load_dotenv()
MONGODB_URI = os.environ['MONGODB_URI']
client = MongoClient(MONGODB_URI)

# List all the databases in the cluster:
# for db_info in client.list_database_names():
#    print(db_info)

###############
### MAIN CODE
###############

# Define the request body model for the chat endpoint
class ChatRequest(BaseModel):
    prompt: str

# Define the response body model for the chat endpoint
class ChatResponse(BaseModel):
    response: str

@app.post("/api/agent", response_model=ChatResponse)
async def handle_chat(request: ChatRequest):
    """
    Handles incoming chat requests from the frontend.
    Receives a prompt, gets a response from the LLM service, 
    and returns it.
    """
    logger.info(f"Received chat request with prompt: {request.prompt[:50]}...") # Log first 50 chars
    try:
        llm_response_text = generate_chat_response(request.prompt)
        logger.info(f"Generated LLM response: {llm_response_text[:50]}...")
        return ChatResponse(response=llm_response_text)
    except Exception as e:
        logger.error(f"Error handling chat request: {e}", exc_info=True)
        raise HTTPException(status_code=500, detail="Internal Server Error: Could not process chat request.")

###########################
### END OF THE MAIN CODE
###########################
# Run server if file is executed directly
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)