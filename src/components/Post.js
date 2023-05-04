import PostType from "./PostType";

export default function Post({ props }) {
  return (

    <div data-test="post" className="post">
      <div className="post-topo">
        <div className="post-usuario">
          <img src={props.userImage} alt="" />
          <p>{props.userName}</p>
        </div>
        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div>
      <div className="postagem">
        <PostType info={props} />
      </div>
      <div className="post-inferior">
        <div className="interacao">
          <button data-test="like-post" className="likePost" ><ion-icon name="heart-outline"></ion-icon></button>

          <ion-icon name="chatbubble-outline"></ion-icon>
          <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
        <div className="salvar">
          <button data-test="save-post" className="savePost"><ion-icon name="bookmark-outline"></ion-icon></button>
        </div>
      </div>
      <div className="curtidas">
        <img src={props.postLastLikeImage} alt="" />
        <p>Curtido por <strong>{props.postLastLikeUser}</strong> e <strong>outras <span data-test="likes-number">{props.postTotalLikes.toLocaleString('pt-BR')}</span> pessoas</strong></p>
      </div>
      <div className="comentarios">
        <div className="texto">
          {props.comments.map(i => {
            return (
              <p><strong>{i.userName}</strong> {i.text}</p>
            )
          })}
        </div>
        <button className="mostrar texto">... mais</button>
        <ion-icon name="heart-outline"></ion-icon>
      </div>
      <div className="add-comentario">
        <input type="text" className="comentario" placeholder="Adicione um comentário" />
        <button type="button" className="publicar">
          Publicar  <ion-icon name="happy-outline"></ion-icon>
        </button>
      </div>
    </div>
  )
}