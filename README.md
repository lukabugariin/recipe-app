# How I worked on this project

- Setup a git workflow
- Commit after every big change
- Try to keep clean commit history

## Why I built the project this way

I didn't use state managmnet library like Redux on purpose. For this simple app useState is sufficient.
I realized that more and more projects don't use Redux anymore since GraphxQL or react-query is used.

## Technologies Used

- **React**: The core of the application, used for building user interfaces.
- **React Router**: For handling client-side routing and navigation.
- **Axios**: For making HTTP requests to interact with backend APIs.

## Features

- User registration and login.
- Browse and search for recipes.
- View recipe details, including instructions and tags.
- Create and add new recipes.
- Pagination for displaying recipes.
- Filtering recipes by tags

## Getting Started

1. Clone this repository to your local machine.

2. Install the required dependencies using `npm install`.

3. Set up your backend API and configure the API endpoints in the code where needed.

4. Start the development server with `npm start`.

## Usage

- After starting the application, you can register or log in to access the Recipe Dashboard.

- Browse, search, and view recipes. Clicking on a recipe allows you to see more details.

- You can create and add new recipes to the dashboard.
