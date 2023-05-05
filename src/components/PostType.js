export default function PostType(props) {
    if (props.info.postType === "image") {
        return (
            <img data-test="post-image" src={props.info.postImage} alt="" />
        )
    } else if (props.info.postType === "video") {
        return (
            <video data-test="post-image" loop autoPlay muted>
                <source data-test="post-image" src={props.info.postMp4} type="video/mp4" />
                <source data-test="post-image" src={props.info.postOgg} type="video/ogg" />
                Seu navegador não suporta vídeos.
            </video>
        )
    }
}