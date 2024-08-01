import { useEffect, useState } from "react";
import api from '../../services/api' ;

//url de api   https://api.themoviedb.org/3/movie/now_playing?api_key=57abefa7c3e745419b9561f5a0fef102&language=pt-PT&page=1


const Home = () => {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        async function loadFilmes(){
            const response = await api.get("movie/now_playing", {
              params: {
                api_key: "57abefa7c3e745419b9561f5a0fef102",
                language: "pt-PT",
                page: 1,
              },
            });
            console.log(response.data);
           setFilmes(response.data.results);
        }
        loadFilmes();
       
    }, [])

    return ( 
        <div>
        <h>Bem vido a home</h>
        </div>
     );
}
 
export default Home;