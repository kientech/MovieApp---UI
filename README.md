# Movie App - KienTech

A mobile application for browsing and discovering movies, built with React Native. This app allows users to search for movies, view details, and explore movie genres using the Movie DB API.

## Features

- **Browse Movies:** View popular and trending movies.
- **Search Movies:** Find movies by title.
- **Movie Details:** View detailed information about each movie.
- **Navigation:** Seamless navigation between different screens.
- **Responsive Design:** Styled with TailwindCSS for a modern and responsive UI.

## Technologies

- **React Native:** Framework for building native mobile apps using React.
- **TailwindCSS:** Utility-first CSS framework for styling.
- **Axios:** Promise-based HTTP client for making API requests.
- **React Navigation:** Routing and navigation library for React Native.
- **Movie DB API:** API for accessing movie data.

## Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/movie-app.git
   cd movie-app
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Set Up Environment Variables:**

   Create a `.env` file in the root directory and add your Movie DB API key:
   ```
   MOVIE_DB_API_KEY=your_api_key_here
   ```

4. **Run the App:**

   For iOS:
   ```bash
   npx react-native run-ios
   ```

   For Android:
   ```bash
   npx react-native run-android
   ```

## Usage

1. **Home Screen:** Displays popular and trending movies.
2. **Search:** Use the search bar to find movies by title.
3. **Movie Details:** Tap on a movie to view its details, including synopsis, cast, and release date.

## API Integration

The app uses the Movie DB API to fetch movie data. Endpoints used:

- **Popular Movies:** `https://api.themoviedb.org/3/movie/popular`
- **Search Movies:** `https://api.themoviedb.org/3/search/movie`
- **Movie Details:** `https://api.themoviedb.org/3/movie/{movie_id}`

## Navigation

The app uses `react-navigation` to handle navigation between screens. 

## Styling

TailwindCSS is used for styling the app. Classes are used to ensure a responsive and modern design.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [React Native](https://reactnative.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/)
- [React Navigation](https://reactnavigation.org/)
- [Movie DB API](https://www.themoviedb.org/documentation/api)
