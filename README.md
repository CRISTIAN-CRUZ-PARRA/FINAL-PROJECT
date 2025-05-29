# BookLibrary

A web application for managing your personal book library.

## Characteristics

- Add new books
- Edit existing books
- Delete books
- View the reading status of each book
- Intuitive and responsive interface

## Technologies used

- React
- Vite
- CSS Modules
- Vitest + React Testing Library
- Husky + lint-staged
- GitHub Actions

## Requirements

- Node.js (version 20 or higher)
- npm

## Installation

1. Clone the repository:
```bash
git clone https://github.com/CRISTIAN-CRUZ-PARRA/FINAL-PROJECT
```

2. Install the dependencies:
```bash
npm install
```

3. Create a `.env` file in the root of the project with the following variable:
```
VITE_API_URL=[URL_OF_YOUR_API]
```

## Desarrollo

To start the development server:
```bash
npm run dev
```

## Tests

To run the tests:
```bash
npm test
```

## Build

To create a production version:
```bash
npm run build
```

## Project structure

```
src/
  ├── components/     # React Components
  ├── hooks/         # Custom hooks
  ├── test/          # Test configuration
  └── App.jsx        # Main component
```
