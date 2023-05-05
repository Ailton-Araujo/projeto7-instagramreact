export default function Suggestion(props) {
    return (
        <div className="recomendacoes">
            <div className="perfil">
                <img src={props.dataSuggestion.image} alt={props.dataSuggestion.title} />
                <div className="info">
                    <a href={props.dataSuggestion.link}>{props.dataSuggestion.title}</a>
                    <p>Segue você</p>
                </div>
            </div>
            <button>Seguir</button>
        </div>
    )
};