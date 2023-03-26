# Tarot Shop E-commerce API

A simple e-commerce API for a Tarot card shop built using TypeScript, Express, and MongoDB.

## Getting Started

These instructions will help you set up and run the project on your local machine for development and testing purposes.

### Prerequisites

- Node.js (https://nodejs.org/)
- MongoDB (https://www.mongodb.com/try/download/community)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/TC117/TestEcom.git

Change to the project directory:
bash
Copy code
cd tarot-shop
Install the required dependencies:
bash
Copy code
npm install
Start the TypeScript server:
bash
Copy code
npm start
The server will be running at http://localhost:3000.

API Endpoints
GET /api/products: Fetch all products.
POST /api/products: Create a new product.
Example POST Request
json
Copy code
{
  "name": "Sample Tarot Deck",
  "image": "https://your-real-image-url.com/sample-tarot-deck.jpg",
  "description": "A beautiful tarot deck with unique illustrations.",
  "price": 25.99,
  "stock": 100
}
