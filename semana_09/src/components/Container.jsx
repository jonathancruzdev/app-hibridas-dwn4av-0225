export default function Container({children}) {
  return (
    <div>
        <input type="search" />
        <select>
            <option value="1">FrontEnd</option>
            <option value="2">BackEnd</option>
            <option value="3">Diseño</option>
        </select>
        <hr />
        <div className="container">
            { children }
        </div>
    </div>
  )
}
