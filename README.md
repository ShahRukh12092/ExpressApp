# Express App - User and Task Management
This is an Express application that provides user and task management functionalities. It allows users to register, login, and perform various operations related to tasks. The application also includes proper validation and pagination for task listing.
# Table of Contents
• Installation

• Usage

• API Endpoints

• Validation

• Pagination

• contributing

• License

# Installation
To install and run the application locally, follow these steps:

**1** Clone the repository through this link:

    git clone <repository_url>

**2** Open the project directory and write this command to I=install the dependencies:

    npm install

**3** Set up the environment variables:

  Create a configs.env file in the root directory of the project.Define the required environment variables in the configs.env file, such as database connection details, JWT token, etc.
   
 **4** Run the application:
 
    npm run dev
    
#  Usage

**Register a new user**

Send a POST request to /register with the user's email and password in the request body.
The API will create a new user and return that user

**Login as a user**

Send a POST request to /login with the user's email and password in the request body.
The API will validate the credentials and return a JWT upon successful login.

**Get user data**

Send a GET request to /user with the JWT in the request headers.
The API will authenticate the user using the JWT and return the user's data.

**Create a new task**

Send a POST request to /create-task with the task details in the request body and JWT in the request headers.
The API will authenticate the user using the JWT and create a new task associated with the authenticated user.

**Get a list of tasks with pagination**

Send a GET request to /list-tasks with JWT in the request headers and optional query parameters for pagination (page and limit).
The API will authenticate the user using the JWT and return a paginated list of tasks.

# API Endpoints
The following API endpoints are available:

• POST /register: Register a new user.

• POST /login: Login as a user.

• GET /user: Get user data.

• POST /task: Create a new task.

• GET /list-task: Get a paginated list of tasks.

# Validation
The application includes validation for user registration, login, and task creation. It ensures that the required fields are provided and validates the data format. If any validation errors occur, appropriate error messages will be returned.

# Pagination
The task listing endpoint (GET /list-task) supports pagination. You can specify the page number (page) and the number of tasks per page (limit) as query parameters. The API will return the requested page of tasks along with metadata such as total number of tasks and total pages.

# contributing

Contributions to this project are welcome. If you have any ideas, improvements, or bug fixes, feel free to submit a pull request. Please follow the existing code style and include tests for any new features.

# License
You are free to use, modify, and distribute the code.
