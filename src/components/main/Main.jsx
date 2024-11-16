import "./Main.css";

function Main() {
    const classCont = "main-container";
    return(
        <div className="main-container">
            <img src="./imgs/olegback.jpg" className={classCont + "--img"}/>
            <div className={classCont + "--content"}>
                <img src="./imgs/logo(lsp).png" className={classCont + "--img-lsp"}/>
                <h1 className={classCont + "--h1"}>29 НОЯБРЯ</h1>
                <h2 className={classCont + "--h2"}>НОЧНОЕ ВЫСТУПЛЕНИЕ | НАЧАЛО: 23:00</h2>
                <div className={classCont + "--dop-cont"}>
                    <img src="./imgs/18.png" className={classCont + "--dop-cont" + "--img"}/>
                    <img src="./imgs/local.png" className={classCont + "--dop-cont" + "--img"}/>
                    <img src="./imgs/sagrado.png" className={classCont + "--dop-cont" + "--img"}/>
                </div>
            </div>
        </div>
    )
}

export default Main;