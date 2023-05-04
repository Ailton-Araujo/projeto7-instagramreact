export default function NavBar() {
    return (
        <div>
            <div className="box desktop">
                <div className="menu-topo desktop">
                    <div className="menu-esquerda">
                        <ion-icon name="logo-instagram"></ion-icon>
                        <div className="barra"></div>
                        <img className="logo" src="/assets/images/logo.png" alt="" />
                    </div>

                    <div className="menu-centro">
                        <input className="pesquisa" type="text" placeholder="Pesquisar" />
                    </div>

                    <div className="menu-direita">
                        <ion-icon name="paper-plane-outline"></ion-icon>
                        <ion-icon name="compass-outline"></ion-icon>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="person-outline"></ion-icon>
                    </div>
                </div>
            </div>

            <div className="box mobile">
            <div className="menu-topo mobile">
                <ion-icon name="logo-instagram"></ion-icon>
                <img className="logo" src="assets/images/logo.png" alt="" />
                <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            </div>
        </div>
    )
}