export default function postType({info}) {
        if (info.postType === "image") {
            return (
                <img data-test="post-image" src={info.postImage} alt="" />
            )
        } else if (info.postType === "video") {
            return (
                <video data-test="post-image" loop autoPlay muted>
                    <source data-test="post-image" src={info.postMp4} type="video/mp4" />
                    <source data-test="post-image" src={info.postOgg} type="video/ogg" />
                    Seu navegador não suporta vídeos.
                </video>
            )
        }
}