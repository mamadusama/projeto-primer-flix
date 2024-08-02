import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from '../../services/api' ;
import "./style.css"




//// https://api.themoviedb.org/3/movie/popular
const Banner = () => {

    const [popularFilmes, setpopularFilmes] = useState([]);

    useEffect(() => {
      async function loadFilmesPopular() {
        const response = await api.get("movie/popular", {
          params: {
            api_key: "57abefa7c3e745419b9561f5a0fef102",
            language: "pt-PT",
            page: 1,
          },
        });
        console.log(response.data);
        setpopularFilmes(response.data.results);
      }
      loadFilmesPopular();
    }, []);


    return (
        <div className="banner">
            <div className="banner--content">
                <div className="slideshow">

                  {popularFilmes.map((item) =>{
                    return (
                      <article key={item.id}>
                        <Link to={`https://www.themoviedb.org/${item.id}`}>
                      
                          <img
                            src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                            alt={item.title}
                          />
                        </Link>
                        <Link to={`https://www.themoviedb.org/${item.id}`}>
                          <img
                            src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                            alt={item.title}
                          />
                        </Link>

                        <Link to={`https://www.themoviedb.org/${item.id}`}>
                          <img
                            src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                            alt={item.title}
                          />
                        </Link>
                      </article>
                    );
                  })}
                   {/*  <a href="seu-link1">
                        <img src="imagem1.jpg" alt="Imagem 1">
                    </a>
                    <a href="seu-link2">
                        <img src="imagem2.jpg" alt="Imagem 2">
                    </a>

                    <a href="seu-link3">
                        <img src="imagem3.jpg" alt="Imagem 3">
                    </a> */}
                </div>
            </div>
        </div>
    );
}
 
export default Banner;