import "./index.scss"


const Cliente = () =>{

    return(
        <>
            <div className="container-clientes">
                

                <div className="sobre" name="sobre">
                    
                    <div className="sobre-text">
                    <h1>Sobre nós</h1>
                    <a name="sobre-text"></a>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti ad voluptatum quasi labore placeat reiciendis, aut nisi, aliquid ab officiis vero quam dolorem eos corporis optio cupiditate ratione accusamus dolores?
                    </div>
                </div>
                <div className="clientes" >
                    <h1>Clientes<a name="clientes" /></h1>
                    <img src="logo-ufca.jpg" alt="Logo UFCA" />
                </div>
            </div>
        
        </>
    )
}

export default Cliente