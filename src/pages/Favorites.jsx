
import MovieCard from "../components/MovieCard";
import { useMovieContext } from "../contexts/MovieContext"


export default function Favorite() {
    const {favorites} = useMovieContext();

    if(favorites){
        return <div className="favorites">
            <h2>Your favorite Movies</h2>
            <div>
                {favorites.map((movie) => (
                    <MovieCard movie={movie} key={movie.id}/>
                ))}
            </div>
        </div>
    }
    return <div className="favorites-empty">
        <h2>No favourite Movies Yet</h2>
        <p>Start adding movies to your favourites and they will appear here</p>
    </div>
}