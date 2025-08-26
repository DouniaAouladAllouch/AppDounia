# AppDounia
AppDounia is a modern web application built with .NET 9 (backend) and React (frontend)

The application idea is inspired by the villages around Al Hoceima (Morocco), which produce natural products with strong health benefits.  
AppDounia provides a digital marketplace where local producers can showcase their products.  

Unlike generic e-commerce apps, this one highlights authentic local creations and encourages their visibility through digitalization.


---
##  Features

Product Management: Create, read, update, and delete natural products ( implemented)  
User Management: Register, login, and manage accounts ( planned for future versions)  
Dashboard: Basic statistics and reporting ( planned for future versions)  
Extensible Modules**: Possibility to add local tourism, cultural content, and other features ( planned for future versions)


---

##  Project Structure
AppDounia/
?
??? AppDounia.API/ # Backend (ASP.NET Core 9)
? ??? Controllers/ # API controllers
? ??? Models/ # Data models
? ??? Services/ # Business logic
? ??? Program.cs # Entry point
?
??? AppDounia.Application/ # Application layer (CQRS, MediatR, DDD)
??? AppDounia.Domain/ # Domain entities, aggregates, value objects
??? AppDounia.Infrastructure/# EF Core, PostgreSQL, repositories
    AppDounia.Tests/ # Unit tests for backend logic and application layer
?
??? frontend-appDounia/ # Frontend (React + Vite + TypeScript)
? ??? src/ # React components & pages
? ??? public/ # Static assets
? ??? package.json # Frontend dependencies
?
??? docker-compose.yml # Docker setup (API + DB)



backend folder:

to backend folder:


cd AppDounia.API
Restore dependencies:


dotnet restore
Run the backend API:

dotnet run
Default URL: https://localhost:5001 or http://localhost:5000

Health check endpoint: /health
  backend folder:


cd AppDounia.API
Restore dependencies:

dotnet restore
Run the backend API:

dotnet run
Default URL: https://localhost:5001 or http://localhost:5000

Health check endpoint: /health

rontend Setup

 frontend folder:

cd frontend-appDounia


Install dependencies:

npm install


Run the frontend:

npm run dev


Default URL: http://localhost:5173

The frontend communicates with the backend API to perform CRUD operations on products.

Docker Setup

To run the project with Docker:

Build and start containers:

docker compose up --build


Services availability:

Backend API: http://localhost:5000

Frontend React: http://localhost:3000 

PostgreSQL database: localhost:5434

To stop and remove containers:

docker compose down -v


