import { useEffect, useState } from "react";
import api from '../../services/api' ;
import { Link } from "react-router-dom";
import './home.css';
import Banner from "../../Components/Banner"


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
      <>
        <Banner />
        <div className="container">
          <div className="lista-filmes">
            {filmes.map((filme) => {
              return (
                <article key={filme.id}>
                  <div className="filmes">
                    <strong>{filme.title}</strong>
                    <div className="images">
                      <img
                        src={`https://image.tmdb.org/t/p/original${filme.poster_path}`}
                        alt={filme.title}
                      />
                    </div>
                    <Link to={`/filme/${filme.id}`}>Acessar</Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </>
    );
}
 
export default Home;