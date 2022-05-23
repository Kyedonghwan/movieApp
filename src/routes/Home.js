import {useState, useEffect} from 'react';
import Movie from '../components/Movies.js';

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async() => {
        const response = await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year");
        const json = await response.json();
        setLoading(false);
        setMovies(json.data.movies);
    }
    useEffect(()=> {
        getMovies();
    }, [])
    return (<div>
        {loading? <h1>Loading...</h1> : <div>{movies.map((item) => (
            <Movie key={item.id} medium_cover_image={item.medium_cover_image} id={item.id} title={item.title} summary={item.summary} genres={item.genres}/>
        ))}</div>}
    </div>)
}

export default Home;