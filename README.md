
# Oship React JS Application

**Oship** is a React JS application developed by Oritech Limited. It is designed to provide users with a convenient way to find couriers and arrange for delivery pickup and drop-offs.

## Features

1. **Courier Search**: Users can search for available couriers in their area based on various criteria such as location, delivery time, and service type.
2. **Delivery Pickup and Drop-off**: Oship enables users to schedule pickup and drop-off locations for their deliveries, making it easy to coordinate shipments.
3. **Tracking**: Users can track the progress of their deliveries in real-time, ensuring transparency and peace of mind.
4. **User Profiles**: Oship allows users to create profiles, where they can store their contact information, delivery preferences, and track their delivery history.
5. **Notification System**: Users receive timely notifications regarding their deliveries, including pickup and drop-off confirmations, estimated delivery times, and any delays or changes in the delivery status.

## Installation

To install and run Oship locally, follow these steps:

1. Clone the repository from GitHub:

   ```
   git clone https://github.com/oritech/oship.git
   ```

2. Navigate to the project directory:

   ```
   cd oship
   ```

3. Install the dependencies:

   ```
   npm install
   ```

4. Start the development server:

   ```
   npm start
   ```

5. Open your web browser and visit `http://localhost:3000` to access Oship.

## Dependencies

Oship relies on the following dependencies:

- React: JavaScript library for building user interfaces.
- React Router: Routing library for React applications.
- Axios: Promise-based HTTP client for making API requests.
- Styled Components: CSS-in-JS library for styling React components.
- Moment.js: JavaScript library for parsing, validating, manipulating, and formatting dates and times.
- Redux: State management library for JavaScript applications.
- Redux Thunk: Middleware for handling asynchronous actions in Redux.
- Firebase: Backend-as-a-Service (BaaS) for storing user profiles and managing authentication.

These dependencies are automatically installed when following the installation steps mentioned above.

## Configuration

Oship requires the following configuration for Firebase:

- Firebase API Key
- Firebase Project ID

These configurations can be obtained by creating a Firebase project and enabling Firebase Authentication and Firestore. Once obtained, add the configurations to the project by creating a `.env` file in the root directory of the project:

```
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
```

Replace `your_api_key` and `your_project_id` with your actual Firebase API Key and Project ID.

## Contributing

We welcome contributions to improve Oship. If you find any issues or have suggestions for new features, please submit an issue or a pull request on the [GitHub repository](https://github.com/oritech/oship).

When contributing, please follow the existing code style, write clear commit messages, and ensure that your changes do not break any existing functionality.

## License

Oship is released under the [MIT License](LICENSE).

---

Thank you for using Oship! If you have any further questions or need assistance, please don't hesitate to reach out to us at <support@oritech.com>.
