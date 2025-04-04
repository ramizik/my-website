# Import necessary packages
from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware  # For handling Cross-Origin requests
import os
from dotenv import load_dotenv
import logging
from pymongo import MongoClient
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
for db_info in client.list_database_names():
   print(db_info)

###############
### MAIN CODE
###############






###########################
### END OF THE MAIN CODE
###########################
# Run server if file is executed directly
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)