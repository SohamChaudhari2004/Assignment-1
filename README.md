# Full-Stack E-Commerce Platform

This project is a next-generation e-commerce platform that connects buyers and sellers with personalized recommendations and a seamless user experience. The platform includes:

- **Buyers**: Search, browse, and purchase products.
- **Sellers**: Upload and manage product listings, orders, and analytics.
- **Admins**: Oversee platform operations, manage users, and resolve disputes.

## Table of Contents
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Frontend Setup](#frontend-setup)
- [Backend Setup](#backend-setup)
- [API Endpoints](#api-endpoints)
- [Running the Project](#running-the-project)

## Tech Stack
- **Frontend**: React.js, Vite, Tailwind CSS
- **Backend**: Node.js, Express.js, MongoDB
- **Testing**: Jest/Mocha

## Getting Started
To run the project locally, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (LTS recommended)
- [MongoDB](https://www.mongodb.com/) (if using locally)
- [Git](https://git-scm.com/)

## Frontend Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-repo-url.git
   cd your-repo-folder/frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open the application:**
   Visit `http://localhost:5173/` in your browser.

## Backend Setup

1. **Navigate to the backend directory:**
   ```bash
   cd ../backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the `backend` folder with the following:
   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/ecommerce
   ```

4. **Start the backend server:**
   ```bash
   npm run dev
   ```

5. **Test the API:**
   Open `http://localhost:5000/api/reviews` in Postman or browser.

## API Endpoints

- **POST /api/reviews** - Add a new review
- **GET /api/reviews** - Fetch all reviews
- **DELETE /api/reviews/:id** - Delete a review by ID

## Running the Project

1. **Start MongoDB (if using locally):**
   ```bash
   mongod
   ```

2. **Run the backend:**
   ```bash
   cd backend && npm run dev
   ```

3. **Run the frontend:**
   ```bash
   cd frontend && npm run dev
   ```

Now, the frontend will be running on `http://localhost:5173/` and the backend on `http://localhost:5000/`.

---
### Need Help?
If you encounter any issues, feel free to raise an issue or reach out for support!

Happy coding! 🚀

