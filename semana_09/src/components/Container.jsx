export default function Container({children}) {

  function getCursos() {
      console.info('Fetch a la API');
  }

  return (
    <div>
        
        <input type="search" />
        <select>
            <option value="1">FrontEnd</option>
            <option value="2">BackEnd</option>
            <option value="3">Diseño</option>
        </select>
        <button onClick={ () => getCursos() } type="button">Buscar</button>
        <hr />
        <div className="container">
            { children }
        <h2>Padre de las Cards</h2>

        </div>
    </div>
  )
}
