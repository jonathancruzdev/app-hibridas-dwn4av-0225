export default function Footer({ descripcion, redes}) {
    const year = new Date().getFullYear();
    return (
        <footer> 
            <p>DV | { descripcion} | {year}</p>
            <ul>
                {
                    redes.map(  red => <li key={red.id}>
                                            <a href={red.url} target="_blank">{red.nombre} </a>
                                        </li> )
                }
            </ul>
        </footer>
    )
}
