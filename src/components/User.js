import { dataUser } from "./Data"

export default function User() {
  return (
    <div className="usuario">
      <div className="perfil-usuario">
        <img data-test="profile-image" src={dataUser.image} alt={dataUser.alt} />
        <div className="info">
          <a href={dataUser.link}><span data-test="edit-name">{dataUser.title}</span></a>
          <p data-test="name">{dataUser.title}</p>
          <button data-test="edit-name"><ion-icon name="pencil-sharp"></ion-icon></button>
        </div>
      </div>
    </div>
  )
}



