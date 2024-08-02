import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./favorito.css"

const Favoritos = () => {
    const[filmes, setFilmes] = useState ([]);

    useEffect(() =>{
        const minhaLista = localStorage.getItem("filmes");
        setFilmes(JSON.parse(minhaLista) || []);
    }, [])
    function  excluirFilme(id){
        alert(` tem certeza ? quer excluir ${id}`)
        let minhaLista = localStorage.getItem("filmes");
        minhaLista = JSON.parse(minhaLista);

        minhaLista = minhaLista.filter((filmeSalvo)=>{
            return filmeSalvo.id !== id;
        })

        localStorage.setItem("filmes", JSON.stringify(minhaLista));
        setFilmes(minhaLista)
    }
    
    return ( 
        <div className="favoritos-container">
            <h1> Meus Favoritos</h1>
            {filmes.length === 0 && <span> Você não possui nenhum filme salvo</span>}

            <ul>
                {filmes.map((filme)=>{
                    return (
                      <li key={filme.id}>
                        <span>{filme.title}</span>
                        <div>
                          <Link to={`/filme/${filme.id}`}>Ver Detalhes</Link>
                          <button onClick={() => excluirFilme(filme.id)}>Remover</button>
                        </div>
                      </li>
                    );
                })}
            </ul>
        </div>
     );
}
 
export default Favoritos;