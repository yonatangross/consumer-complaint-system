# Consumer Complaint Automation System

A modern, full-stack system for automating consumer complaints using FastAPI, LangGraph, Playwright, and React.

## Quick Start

1. Copy `.env.example` to `.env` and fill in your API keys.
2. Build and run with Docker Compose:

```sh
docker-compose up -d
```

- Frontend: http://localhost:3010
- Backend: http://localhost:9876

## Development

- Backend: Python 3.11+, FastAPI, LangGraph, Playwright, uv, Poetry/pyproject.toml
- Frontend: React, TypeScript, Node 20+

## Project Structure

- `backend/` - FastAPI app, LangGraph workflow, Playwright automation
- `frontend/` - React UI
- `shared/schemas/` - JSON schemas
- `.github/chatmodes/` - Chatmode configs

## Health Check

- Backend: `GET /health` returns `{ "status": "ok" }`
