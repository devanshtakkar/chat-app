# Online Multiuser Chat Platform

Welcome to the Online Multiuser Chat Platform project! This web-based chat application is built using React.js for the frontend with React Router for navigation. It integrates Google and Facebook Single Sign-On (SSO) for user authentication, and Google Firebase is utilized as the backend to manage real-time messaging and data storage.

## Demo

Explore the live demo of the chat platform at [k0shal.me](https://k0shal.me).

## Features

- **Real-time Chat:** Users can engage in real-time conversations with other users in various chat rooms.
- **Google and Facebook Single Sign-On:** Users can log in seamlessly using their Google or Facebook accounts.
- **Multiple Chat Rooms:** The platform supports the creation of multiple chat rooms, allowing users to join discussions on different topics.
- **User Authentication:** Secure authentication is ensured through Google and Facebook authentication services.
- **Data Storage:** Google Firebase is used to store user data and chat messages, ensuring reliability and scalability.

## Technologies Used

- **Frontend:**
  - React.js
  - React Router

- **Backend:**
  - Google Firebase

## Usage

To deploy and run the project locally, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/online-multiuser-chat-platform.git
    cd online-multiuser-chat-platform
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Set up Firebase:
   
   - Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
   - Obtain your Firebase configuration (apiKey, authDomain, projectId, etc.).
   - Configure authentication providers (Google and Facebook) in the Firebase Console.
   - Replace the Firebase configuration in your React app's code with your own Firebase configuration.

4. Run the application:

    ```bash
    npm start
    ```

5. Access the application in your web browser at `http://localhost:3000`.

## Contributing

Contributions are welcome! Feel free to fork the repository, make your changes, and submit a pull request.

## Acknowledgments

Special thanks to Google Firebase for providing a robust backend solution and to React.js and React Router for facilitating frontend development.