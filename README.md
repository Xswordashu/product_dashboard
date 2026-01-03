# Product Dashboard

A simple product listing dashboard built with **React**, **Vite**, and **Redux Toolkit**.
The application fetches products from an external API, displays them in a list, and allows
users to filter and sort products on the client side.

---

## 🚀 Tech Stack

- React (Vite)
- Redux Toolkit + RTK Query
- React Router
- Tailwind CSS
- Vitest + React Testing Library
- MSW (Mock Service Worker) for API mocking

---

## 📦 Setup Instructions

### 1️⃣ Clone the repository

git clone https://github.com/Xswordashu/product_dashboard
cd product-dashboard

### 2️⃣ Install dependencies
npm install

### 3️⃣ Start the development server
npm run dev
<!-- The app will be available at http://localhost:5173  -->

---


## 🧪 Running Tests
### Run all unit and integration tests
npm run test


---

## 📊 Test Coverage
### To generate a coverage report:
npm run test:coverage

---

## ✅ Testing Strategy
### Unit Tests
- Redux reducers
- Redux selectors

### Integration Tests
- Product list rendering after API fetch
- Search filter functionality
- Category filter functionality
- API calls are mocked using MSW, so tests do not depend on real network requests.
