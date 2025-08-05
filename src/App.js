import { useEffect, useState } from "react";
import './style.css';

// https://sujeitoprogramador.com/rn-api/?api=posts

function App() {
  const [nutri, setNutri] = useState([]);

  useEffect(() => {
    function loadApi() {
      let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';
      fetch(url)
      .then((r) => r.json())
      .then((json) => {
        setNutri(json);
      })
    }
    loadApi();
  }, []);
  return (
    <div className="container">
      <header>
        <strong>React Nutri</strong>
      </header>
      {nutri.map((item) => {
        return(
          <article key={item.id} className="posts">
            <strong className="titulo">{item.titulo}</strong>
            <img src={item.capa} alt={item.titulo} className="capa" />
            <p className="subtitulo">{item.subtitulo}</p>
            <p className="categoria"><strong>Categoria: {item.categoria}</strong></p>
            <a className="btn" href="#">Acessar</a>
          </article>
        )
      })}
    </div>
  );
}

export default App;