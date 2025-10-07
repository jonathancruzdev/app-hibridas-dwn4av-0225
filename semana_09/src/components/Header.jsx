import Title from "./Title"

function Header( { titulo} ){
    return ( 
        <header> 
            <Title titulo={titulo} /> 
        </header>
    )
}

export default Header