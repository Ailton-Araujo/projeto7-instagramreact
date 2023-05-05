import {dataStories} from "./Data";
import Story from "./Story";

export default function Stories() {
    return (
        <div className="stories">
            <button className="b-scroll">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </button>
            {dataStories.map(dataStorie => {
                return <Story dataStorie = {dataStorie}/>
            })}
        </div>
    )
};