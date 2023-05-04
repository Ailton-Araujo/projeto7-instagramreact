export default function Story({props}) {
    return (
        <div className="profile">
            <div className="profile-image">
                <img
                    src={props.image}
                    alt={props.alt}
                />
            </div>
            <p>{props.title}</p>
        </div>
    )
}
