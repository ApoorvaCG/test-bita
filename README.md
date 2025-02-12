# My Task Manager App

Create and manage your daily tasks

## 🚀 Features

- **User Authenticatio**
  - Integrates Clerk for User Authentication and Management
- **Dashboard Page**
  - Fetches and updates task data from a mock-API.io
  - Fetches a random joke from a jokeapi
  - Supports filtering tasks
  - Navigation with react-router
  - Keep track of web-vitals
  - Zustand for Client state management, React Query for Server state managment with APIs
  - Form handling with react-hook-form
- **Filter Tasks**
  - Filter by task status
- **Memoised data**
  - Task list is memoised to help with performance using useMemo and useCallback hooks
- **Tests**
  - Unit testing with Jest 
- **Docker Support**
  - Includes a `Dockerfile` for easy containerized setup and run the project

## Project Setup
Clone or fork the repository to get started and run the project by installing dependencies or if you have docker setup then pull the image to get started,

**With dependencies**

#### 1.Install dependencies

```bash
npm install
# or
yarn install
```

#### 2. Run the Development Server

```bash
npm run dev
# or
yarn dev
```

**With Docker Image**

```bash
docker pull ghcr.io/apoorvacg/test-bita/test-bita:latest
```

**With Build Docker Container**

#### 1. Build the Image
```bash
docker build -t test-bita
```

#### 2. Run the Container
```bash
docker run -p 3000:3000 test-bita
```

- The app will be available at `http://localhost:3000`


## Running Tests

- The project uses **Jest** and **React Testing Library** for unit tests.

### Run Tests

```bash
npm test
# or
yarn test
```

## Future Enhancements

- List **reordering** and **sorting** by createdAt
- **Vitual scrolling** of list for better UX
- **Theming** for Dark Mode
- **CI Pipeline Integration** for e2e tests, typesafe, linting, build app
- User Profile **theme** customisation for Clerk component
- Utilisation of **useTransition** hook to handle UI changes with forms

---
