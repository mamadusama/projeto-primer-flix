import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

import "./filmes.css"
import api from "../../services/api";



const Filme = () => {
    const { id } = useParams();
   const [filme, setFilme] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

  useEffect(()=>{
    async function loadFilme(){
        const response = await api.get(`/movie/${id}`, {
          params: {
            api_key: "57abefa7c3e745419b9561f5a0fef102",
            language: "pt-PT",
           
          },
        })
        .then((response)=>{
            console.log(response);
            setFilme(response.data);
            setLoading(false);
        })
        .catch((erro)=>{
            toast.warn("ops! parece que algo deu errado")
            navigate("/", {replace: true});
            return;
        })
    }
    loadFilme();

    return(()=>{
        console.log("Componente desmontado");
    })
  }, [navigate, id])

  function salvarFilme(){
        const minhaLista = localStorage.getItem("filmes");
        let filmesSalvos = JSON.parse(minhaLista) || [];
  
        const hasFilme = filmesSalvos.some((filmeSalvo)=> filmeSalvo.id === filme.id);
  
        if(hasFilme){
          toast.warn("Este filme já está na sua lista");
            
            return;
        }
  
        filmesSalvos.push(filme);
        localStorage.setItem("filmes", JSON.stringify(filmesSalvos));
        toast.success("Filme salvo com sucesso");
        
   }

    if(loading){
        return(
            <div className="loading">
                <h1>Carregando Detalhes...</h1>
            </div>
        )
    }

    return (
      <div className="detalhesFilme">
        <div className="titulo">
          <h1>{filme.title}</h1>
        </div>
        <img
          src={`https://image.tmdb.org/t/p/original${filme.backdrop_path}`}
          alt={filme.title}
        />
        <div className="sinopse">
          <h2>Sinopse</h2>
          <span>{filme.overview}</span>
        </div>
        <div>
          <strong>Avalhação: {filme.vote_average} /10</strong>
        </div>

        <div className="area-buttons">
          <button onClick={salvarFilme}>Salvar</button>
          <button>
            <a
              href={`https://www.youtube.com/results?search_query=${filme.title} Trailer `}
              target="blank"
              rel="external"
            >
              Trailer
            </a>
          </button>
        </div>
      </div>
    );
}
 
export default Filme;




// https://api.themoviedb.org/3/movie/now_playing?language=pt-PT

// 57abefa7c3e745419b9561f5a0fef102


// https://api.themoviedb.org/3/movie/now_playing?api_key=57abefa7c3e745419b9561f5a0fef102&language=pt-PT&page=1