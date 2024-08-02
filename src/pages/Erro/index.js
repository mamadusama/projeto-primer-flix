import { Link } from "react-router-dom";
import './erro.css';

const Erro = () => {
    return (
      <div className="erro">
        <h1 className="ero-404">404</h1>
        <h1>Ops! Página não encontrada</h1>
        <div className="links-to-home">
          <Link to="/">Veja filmes aqui..</Link>
        </div>
      </div>
    );
     
}
 
export default Erro;