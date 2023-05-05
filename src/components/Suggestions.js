import Suggestion from "./Suggestion";
import { dataSuggestions } from "./Data";

export default function Suggestions() {
    return (
        <div className="recomendados">
            <div className="cabecalho">
                <p>Sugestões para você</p>
                <button>Ver tudo</button>
            </div>
            {dataSuggestions.map(dataSuggestion => {
                return <Suggestion dataSuggestion = {dataSuggestion} />
            })}
        </div>
    )
};