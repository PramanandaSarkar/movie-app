import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { getPopularMovies, searchMovies } from "../services/api";

export default function Home(){
    const [searchQuery, setSearchQuery] = useState("")
    const [movies, setMovies] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(() =>{
        const loadPopulerMovies = async () =>{
            try{
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            }catch(err){
                console.log(err)
                setError("Failed to load Movies")
            }
            finally {
                setLoading(false)
            }
        }
        loadPopulerMovies()

    }, [])
    const handleSearch = async (e) => {
        e.preventDefault()
        if(!searchQuery.trim()) return
        if(loading) return 
        setLoading(true)
        try{
            const searchResults = await searchMovies(searchQuery)
            setMovies(searchResults)
            setError(null)
        } catch (err){
            console.log(err)
            setError("Failed to search movies....")
        }
        finally{
            setLoading(false)
        }

    }
    return <div className="home">
        <form onSubmit={handleSearch}>
            <input type="text" placeholder="Search for movies" className="search-input" value={searchQuery} onChange={(e) =>setSearchQuery(e.target.value)}/>
            <button className="search-button" type="submit">Search</button>
        </form>
        {error && <div className="error-message">{error}</div>}
        {loading ? (<div className="loading">Loading...</div>): (<div className="movies-grid">
            {movies.map(movie => movie.title.toLowerCase().startsWith(searchQuery) && (<MovieCard  movie={movie} key={movie.id}/>))}
        </div>)}
        
    </div>
}