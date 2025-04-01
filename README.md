# LLM Attack Interface

A web application built with React and FastAPI for interacting with OpenAI's GPT models.

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
pip install fastapi uvicorn python-dotenv openai
```

3. Create `.env` file in backend directory:
```
OPENAI_API_KEY=your_api_key_here
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
- `OPENAI_API_KEY`: Your OpenAI API key

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 