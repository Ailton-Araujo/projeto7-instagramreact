export default function Suggestion({props}) {
    return (
        <div className="recomendacoes">
            <div className="perfil">
                <img src={props.image} alt={props.alt} />
                <div className="info">
                    <a href={props.link}>{props.title}</a>
                    <p>Segue você</p>
                </div>
            </div>
            <button>Seguir</button>
        </div>
    )
}