import { useState } from "react";
import { dataUser } from "./Data";

export default function User() {

  let [UserName, setUser] = useState(dataUser.title);
  let [UserImage, setImage] = useState(dataUser.image);

  function changeUserName(){
    const name = prompt("Digite o seu nome");
    if(!name){
      alert("Nome Invalido");
    }else{
      setUser(name);
    }
  };
  function changeUserImage(){
    const image = prompt("Digite o link da sua nova Imagem");
    if(!image){
      alert("Link Invalido");
    }else{
      setImage(image);
    }
  };
  
  return (
    <div className="usuario">
      <div className="perfil-usuario">
        <img data-test="profile-image" onClick={changeUserImage} src={UserImage} alt={UserName} />
        <div className="info">
          <div>
          <a data-test="name" href={dataUser.link}><span>{UserName}</span></a>
          <p data-test="name" >{UserName}</p>
          </div>
          <button data-test="edit-name" onClick={changeUserName}><ion-icon name="pencil-sharp"></ion-icon></button>
        </div>
      </div>
    </div>
  )
};


