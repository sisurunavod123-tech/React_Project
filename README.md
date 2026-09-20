# Movie App 🎬

A React web app for browsing and searching movies, saving favorites, and exploring movies by release year.

https://github.com/user-attachments/assets/972f18c3-0abb-4824-bbc0-c7564c716070

## Features

- Browse popular movies
- Search for any movie by title
- Add and remove movies from your favorites
- Browse movies by release year using the Year dropdown in the navbar

## Tech Stack

- React
- Vite
- React Router
- Context API (favorites state)
- [TMDB API](https://www.themoviedb.org/documentation/api)
- CSS

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- A free TMDB API key from [themoviedb.org](https://www.themoviedb.org/settings/api)

### Installation

1. Clone the repository:
```bash
   git clone https://github.com/YOUR-USERNAME/movie-app.git
   cd movie-app
```

2. Install dependencies:
```bash
   npm install
```

3. Create a `.env` file in the project root and add your API key:
```
   VITE_TMDB_API_KEY=your_api_key_here
```

4. Start the development server:
```bash
   npm run dev
```

5. Open the local URL shown in the terminal (http://localhost:5173).

## Project Structure

```
src/
├── components/   # Reusable components (NavBar, MovieCard)
├── context/      # MovieContext for favorites
├── css/          # Stylesheets
├── pages/        # Home, Favorites, Year
└── services/     # API functions
```

## Acknowledgements

This product uses the TMDB API but is not endorsed or certified by TMDB.

## Author

Sisuru Navod - [GitHub_profile](https://github.com/sisurunavod123-tech)
