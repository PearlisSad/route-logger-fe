Route Logger Frontend

This is the React frontend for the Route Logger project, built using create-react-app, react-router-dom, and react-bootstrap. It communicates with a Django backend to allow users to log and view climbing routes.
🚀 Getting Started
1. 📦 Prerequisites

Make sure you have the following installed:

    Node.js and npm
    👉 Download from https://nodejs.org
    Verify installation:

    node -v
    npm -v

2. 🛠 Installation

Clone the repository and install all required packages:

git clone https://github.com/PearlisSad/RouteLogger-frontend.git,
cd RouteLogger-frontend,
npm install

This will install all dependencies listed in your package.json, including:

    react

    react-dom

    react-router-dom

    react-router-bootstrap

    axios

    bootstrap

    react-bootstrap

    react-scripts

    Testing libraries:

        @testing-library/react

        @testing-library/jest-dom

        @testing-library/user-event

        @testing-library/dom

        web-vitals

3. ▶️ Run the App

Start the development server:

npm start

Then open http://localhost:3000 in your browser.

This project uses a proxy to connect to a Django backend at:

http://127.0.0.1:8000

Ensure your backend server is running before testing functionality.
