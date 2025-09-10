# EventHub

Welcome to EventHub, your central place for managing and discovering events! This project is a Next.js application designed to provide a seamless experience for event organizers and attendees.

## Getting Started

Follow these steps to get your local development environment up and running.

### Prerequisites

Before you begin, ensure you have the following installed:

*   **Git**: For cloning the repository.
*   **Node.js**: (LTS version recommended) Includes npm.

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/Isuruzenith/EventHub.git
    ```

2.  **Navigate into the project directory:**

    ```bash
    cd EventHub
    ```
    **add file name (.env.local) in root folder copy and pase this txt**
    ```
    # .env.local
    MONGODB_URI=mongodb://localhost:27017/event_db
    
    ```

        
     

3.  **Install dependencies:**

    ```bash
    npm install
    ```
    ```bash
    npm install lucide-react
    ```
    ```bash
    npm install bcrypt
    ```

### Running the Development Server

Once the dependencies are installed, you can start the development server.

1.  **Start the Next.js development server with Turbopack (for faster compilation):**

    ```bash
    npx next dev --turbopack
    ```

    *Alternatively, you can use the standard development command:*

    ```bash
    npm run dev
    