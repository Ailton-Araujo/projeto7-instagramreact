import { useState } from "react";
import PostType from "./PostType";



export default function Post(props) {
  let [Saveicon, setIcon] = useState(<ion-icon name="bookmark-outline"></ion-icon>);
  let [saveStatus, setStatus] = useState("unSaved");

  let [likeNumbers, setLikes] = useState(props.dataPost.postTotalLikes);
  let [likeStatus, setLikeStatus] = useState("unLiked");
  let [likeIcon, setLikeIcon] = useState(<ion-icon name="heart-outline"></ion-icon>);

  let [statusAnimation, setAnimation] = useState("preLike hidden");

  function savePost() {
    if (saveStatus === "unSaved") {
      setStatus("saved");
      setIcon(<ion-icon name="bookmark"></ion-icon>);
    } else {
      setStatus("unSaved");
      setIcon(<ion-icon name="bookmark-outline"></ion-icon>);
    }
  }

  function likePost() {
    if (likeStatus === "unLiked") {
      setLikes(likeNumbers + 1);
      setLikeStatus("liked");
      setLikeIcon(<ion-icon name="heart"></ion-icon>);
    } else {
      setLikes(likeNumbers - 1);
      setLikeStatus("unLiked");
      setLikeIcon(<ion-icon name="heart-outline"></ion-icon>);
    }
  }

  function likePostImage() {
    if (likeStatus === "unLiked") {
      setLikes(likeNumbers + 1);
      setLikeStatus("liked");
      setLikeIcon(<ion-icon name="heart"></ion-icon>);
      setAnimation("preLike");
      setTimeout(()=>{
        setAnimation("posLike")
      },50);
      setTimeout(()=>{
        setAnimation("preLike hidden")
      },550);
    }
  }

  return (
    <div data-test="post" className="post">
      <div className="post-topo">
        <div className="post-usuario">
          <img src={props.dataPost.userImage} alt="" />
          <p>{props.dataPost.userName}</p>
        </div>
        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div>
      <div className="postagem" onDoubleClick={likePostImage} >
          <div className={statusAnimation}>
          <ion-icon name="heart"></ion-icon>
          </div>
          <PostType info={props.dataPost} />
      </div>
      <div className="post-inferior">
        <div className="interacao">
          <button data-test="like-post" className={likeStatus} onClick={likePost} >{likeIcon}</button>
          <ion-icon name="chatbubble-outline"></ion-icon>
          <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
        <div className="salvar">
          <button data-test="save-post" onClick={savePost} className={saveStatus} >{Saveicon}</button>
        </div>
      </div>
      <div className="curtidas">
        <img src={props.dataPost.postLastLikeImage} alt="" />
        <p>Curtido por <strong>{props.dataPost.postLastLikeUser}</strong> e <strong>outras <span data-test="likes-number">{likeNumbers.toLocaleString('pt-BR')}</span> pessoas</strong></p>
      </div>
      <div className="comentarios">
        <div className="texto">
          {props.dataPost.comments.map(i => {
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
  );
}

