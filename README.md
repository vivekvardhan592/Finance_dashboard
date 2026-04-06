# 💰 Finance Dashboard (Frontend)

A modern finance dashboard built using **React, Tailwind CSS, Zustand, and React Router**, focused on clean UI, structured state management, and real-world user experience — all handled entirely on the frontend.




## 🚀 Overview

This project was developed as part of a frontend assignment to demonstrate the ability to build a **scalable and user-friendly financial dashboard** without relying on any backend or APIs.

The application allows users to:

* Track financial data (income, expenses, balance)
* Manage transactions
* Visualize data through charts
* Experience role-based access control (RBAC)

The goal was not just functionality, but also **clean architecture and thoughtful UI/UX design**.




## 🧠 Key Features

### 📊 Dashboard

* Displays **net worth, revenue, and financial summaries**
* Includes a **performance chart** to visualize trends over time
* Clean and responsive layout




### 💸 Transactions Management

* Add, edit, and delete transactions
* Search, filter, and sort records
* Real-time updates using global state




### 🔐 Role-Based Access Control (RBAC)

* Two roles: **Admin** and **Viewer**
* Both see the same UI
* Only Admin can:

  * Add transactions
  * Edit transactions
  * Delete transactions
* Viewer interactions are disabled at UI level




### 🧠 Insights (Derived Data)

* Automatically calculates:

  * Total transactions
  * Net flow (income vs expenses)
  * Highest transaction
  * Top expense category
* Helps users quickly understand their financial behavior




### 📈 Data Visualization

* Line chart for performance tracking
* Donut chart for expense allocation
* Separate **Allocations page** for detailed breakdown




### 💡 Alpha Opportunities (Bonus Feature)

* Suggests financial improvements (e.g., saving, optimizing spending)
* Demonstrates product-level thinking beyond basic requirements




### 🌍 Market Ticker (Bonus Feature)

* Displays market indicators (stocks/crypto)
* Adds real-world financial context to the dashboard




## 🛠️ Tech Stack

* **React (Vite)** – Fast frontend setup
* **Tailwind CSS** – Utility-first styling
* **Zustand** – Lightweight global state management
* **React Router** – Navigation and routing
* **Chart.js** – Data visualization




## 📦 State Management

Zustand is used to manage:

* Transactions
* Filters and search
* User roles (RBAC)
* Derived financial calculations

The store is structured using **selectors for better performance and scalability**.




## 💾 Data Persistence

* All data is stored in **localStorage**
* Ensures data remains available even after page refresh
* No backend required




## 🎨 UI/UX Approach

* Modern **dark-themed interface**
* Consistent spacing and layout
* Responsive design for different screen sizes
* Focus on clarity, readability, and usability




## 📁 Project Structure

```bash
src/
├── components/
│   ├── dashboard/
│   ├── layout/
│   ├── ui/
│   ├── transactions/
├── pages/
├── store/
├── App.jsx
```

* Components are modular and reusable
* Clear separation between UI, logic, and layout
* Dedicated folder for transactions improves scalability




## 🧩 What This Project Demonstrates

* Ability to build a **real-world frontend application**
* Clean and maintainable component structure
* Efficient state management using Zustand
* Implementation of frontend-based RBAC
* Strong focus on UI/UX and product thinking




## 🔮 Possible Improvements

* Integrate real-time APIs for live financial data
* Add authentication system
* Enhance Alpha Opportunities with dynamic logic
* Add advanced analytics (monthly trends, forecasts)




## 📌 Conclusion

This project goes beyond a basic dashboard by combining:

* Functional features (transactions, charts)
* Structured architecture
* Thoughtful user experience