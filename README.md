# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# Expense Tracker

A React-based web application for tracking expenses, built as part of a Phase 2 code challenge. The app allows users to add, view, search, sort, and delete expenses in a user-friendly interface. It demonstrates proficiency in React concepts such as state management, props, event handling, and component-based architecture.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [License](#license)

## Features
### Core Features
- **View Expenses**: Displays a table of all expenses with columns for description, amount, and category.
- **Add Expenses**: Users can fill out a form to add new expenses, which are immediately displayed in the table (no persistence).
- **Search Expenses**: Filter expenses by description or category using a search bar, with real-time updates to the table.

### Advanced Features
- **Sort Expenses**: Sort expenses alphabetically by description or category (ascending/descending).
- **Delete Expenses**: Remove specific expenses from the table with a delete button.

### Additional Features
- Centered layout on the page for better presentation.
- Responsive design for mobile and desktop screens.
- Clean and intuitive UI with a white container, subtle shadows, and a dark background.

## Technologies Used
- **React**: JavaScript library for building the user interface.
- **Vite**: Build tool for fast development and production builds.
- **CSS**: Custom styles for layout, centering, and responsive design.
- **Git**: Version control for tracking changes.
- **Vercel**: Deployment platform for hosting the app.

## Project Structure
expense-tracker/
├── public/
│   └── index.html        # HTML entry point
├── src/
│   ├── components/
│   │   ├── ExpenseTable.jsx  # Table component for displaying expenses
│   │   ├── ExpenseForm.jsx   # Form component for adding expenses
│   │   └── SearchBar.jsx     # Search bar component for filtering expenses
│   ├── App.jsx           # Main app component
│   ├── App.css           # Custom styles for the app
│   ├── index.css         # Global CSS reset
│   └── main.jsx          # Entry point for React
├── package.json          # Project dependencies and scripts
├── vite.config.js        # Vite configuration
└── README.md             # Project documentation


## Setup Instructions
### Prerequisites
- **Node.js**: Version 18.x or 20.x (recommended).
- **npm**: Version 9.x or 10.x.
- **Git**: For version control.

### Installation
1. **Clone the Repository** (if applicable):
   ```bash
   git clone <your-repo-url>
   cd expense-tracker

   License
This project is by Victor Mochoge

