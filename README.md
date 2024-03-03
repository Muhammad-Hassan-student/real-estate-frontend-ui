# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

//client ui
# Client

This is the client-side codebase for the MERN Estate web application. It is built using React.js and integrates with Redux for state management.

## Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   ```

2. Navigate to the client directory:

   ```
   cd client
   ```

3. Install dependencies:

   ```
   npm install
   ```

## Usage

1. Start the development server:

   ```
   npm run dev
   ```

2. Access the application through your web browser at `http://localhost:3000`.

## Pages and Components

- **Home:** Landing page displaying real estate listings.
- **Sign In:** Page for user authentication.
- **Sign Up:** Page for user registration.
- **About:** Information about the application.
- **Profile:** User profile page.
- **Create Listing:** Page for creating new real estate listings.
- **Update Listing:** Page for updating existing real estate listings.
- **Listing:** Page displaying details of a specific real estate listing.
- **Search:** Page for searching real estate listings.
- **FAQ:** Frequently Asked Questions page.
- **Header:** Header component for navigation.
- **Footer:** Footer component for additional information and links.
- **PrivateRoute:** Component for protecting routes that require authentication.

## Routes

- `/`: Home page
- `/sign-in`: Sign In page
- `/sign-up`: Sign Up page
- `/about`: About page
- `/profile`: Profile page
- `/create-listing`: Create Listing page
- `/update-listing/:listingId`: Update Listing page for a specific listing
- `/listing/:listingId`: Listing page for a specific listing
- `/search`: Search page
- `/faq`: Frequently Asked Questions page

## Redux

The application uses Redux for state management. The Redux store is configured in `redux/store.js`.

## Persistence

Redux state persistence is handled using `redux-persist`. The integration is set up in `index.jsx` using `PersistGate`.

## License

This project is licensed under the ISC License.
//backend ui
# MERN Estate

MERN Estate is a web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to list, browse, and manage real estate properties.

## Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Set up environment variables:

   Create a `.env` file in the root directory and add the following variables:

   ```
   PORT=8080
   DEV_MODE=development
   MONGODB_URI=<your-mongodb-uri>
   ```

## Usage

1. Start the server:

   ```
   npm start
   ```

   or for development with nodemon:

   ```
   npm run hassan
   ```

2. Access the application through your web browser at `http://localhost:8080`.

## API Routes

- `/api/user`: Routes for user management
- `/api/auth`: Routes for authentication
- `/api/listing`: Routes for real estate listings

## Swagger Documentation

The Swagger documentation for the API is available at `/api-docs`.

## Contributing

Contributions are welcome! Feel free to submit pull requests.

## License

This project is licensed under the ISC License.
