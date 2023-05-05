export default function Story(props) {
    return (
        <div className="profile">
            <div className="profile-image">
                <img
                    src={props.dataStorie.image}
                    alt={props.dataStorie.title}
                />
            </div>
            <p>{props.dataStorie.title}</p>
        </div>
    );
}