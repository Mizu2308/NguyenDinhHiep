# Express CRUD API with TypeScript

A simple CRUD API built using ExpressJS, TypeScript, and Prisma with PostgreSQL.

## Setup

1. Install dependencies:
    npm install
2. Set up PostgreSQL and update .env:
    DATABASE_URL="postgresql://user:password@localhost:5432/mydatabase"
    PORT=3000
3. Run database migration:
    npx prisma migrate dev --name init
4. Start the server:
    npm run dev