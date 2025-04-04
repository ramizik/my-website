# ?????

A web application built with React and FastAPI

## Project Structure

```
website/
├── frontend/          # React frontend
│   ├── src/
│   ├── public/
│   └── package.json
└── backend/          # FastAPI backend
    ├── venv/
    ├── main.py
    └── llm_service.py
```

## Setup

### Backend Setup
1. Create and activate virtual environment:
```bash
cd backend
python -m venv venv
# Windows
.\venv\Scripts\activate
# Unix/MacOS
source venv/bin/activate
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Create `.env` file in backend directory:
```
MONGODB_URI = "URI FROM RAMIS"
```

### Frontend Setup
1. Install dependencies:
```bash
cd frontend
npm install
```

## Running the Application

1. Start the backend server:
```bash
cd backend
.\venv\Scripts\activate  # Windows
uvicorn main:app --reload
```

2. Start the frontend development server:
```bash
cd frontend
npm start
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:8000
- API Documentation: http://localhost:8000/docs

## Environment Variables

### Backend (.env)
- `MONGODB_URI`: MONGODB_URI from Ramis
