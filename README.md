

# FormSubmission Express TypeScript Backend

This project is a simple backend server using Express and TypeScript, with a JSON file (db.json) as the database to store submissions. The server has endpoints for saving and retrieving form submissions.

  

## Prerequisites

 - Node.js (version 14.x or higher)
   
 - npm (version 6.x or higher)

## Getting Started

Step 1: Clone the Repository

    git clone <repository-url>
    cd express-ts-backend

Step 2: Install Dependencies

    npm install

Step 3: Run the Server

To start the server, use the following command:

    npx ts-node index.ts

The server will be running at http://localhost:3000.

 

## Endpoints

**1. GET /ping**

This endpoint is used to check if the server is running.

Request:

    GET /ping

Response:

    true

**2. POST /submit**

This endpoint is used to save a form submission. It expects the following parameters in the request body:


    name: string
    email: string
    phone: string
    github_link: string
    stopwatch_time: string

Request:

    POST /submit
    Content-Type: application/json
    {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "phone": "1234567890",
    "github_link": "https://github.com/johndoe",
    "stopwatch_time": "00:02:34"
    }

Response:

    {
    "message": "Submission saved successfully"
    }

**3. GET /read**

This endpoint is used to retrieve a specific submission by its index. It expects the following query parameter:

index: number (0-based index)

Request:

    GET /read?index=0

Response:


    {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "phone": "1234567890",
    "github_link": "https://github.com/johndoe",
    "stopwatch_time": "00:02:34"
    }

Project Structure

    ├── index.ts # Main entry point for the server
    
    │ ├── routes
    
    │ │ ├── ping.ts # Route handler for /ping
    
    │ │ ├── submit.ts # Route handler for /submit
    
    │ │ ├── read.ts # Route handler for /read
    
    ├── db.json # JSON file acting as the database
    
    ├── package.json # Project metadata and dependencies
    
    ├── tsconfig.json # TypeScript configuration

Notes

Ensure that db.json exists in the root directory of the project before running the server. It should be an empty array initially:

    []

If you encounter any issues, please check the logs for error messages and ensure all dependencies are installed correctly.


