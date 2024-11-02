
# Personal AI Assistant

A versatile AI-driven personal assistant that can engage in natural conversations, set reminders, and learn from previous interactions. Built with a Node.js and Express backend, a React frontend, and OpenAI's GPT API, this assistant grows more useful over time.

## Features

- Conversational AI for natural interactions
- Task and reminder management system
- Learning capabilities to provide personalized responses

## Technologies Used

- **Backend**: Node.js, Express, OpenAI API
- **Frontend**: React, React Router
- **Database**: PostgreSQL
- **Containerization**: Docker, Docker Compose

## Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/YourUsername/Personal_AI_Assistant.git
   cd Personal_AI_Assistant
   ```

2. **Setup backend**:
   - Create a `.env` file in `backend` and add your OpenAI API key and database URL as per `.env` example.

3. **Run Docker**:
   ```bash
   docker-compose up --build
   ```

## Project Structure

```
personal_ai/
├── backend/                # Backend API
├── frontend/               # Frontend React application
└── Dockerfile              # Docker configuration
```
