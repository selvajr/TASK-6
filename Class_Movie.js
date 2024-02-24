class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    static getPG(movies) {
        return movies.filter(movie => movie.rating === "PG");
    }
}

const movie1 = new Movie("Casino Royale", "Eon Productions", "PG-13");
const movie2 = new Movie("Finding Nemo", "Pixar"); 

const allMovies = [movie1, movie2];
const pgMovies = Movie.getPG(allMovies);

console.log("All movies:", allMovies);
console.log("PG-rated movies:", pgMovies);
