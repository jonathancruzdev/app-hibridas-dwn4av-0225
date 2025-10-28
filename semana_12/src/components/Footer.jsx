
const Footer = ({ descripcion}) => {
    const year = new Date().getFullYear();
    return (
        <footer>
            <p>{ descripcion } | { year}</p>
        </footer>
    )
}

export default Footer