
const Home = () => {
    return (
        <div className="container">
            <h1 className="homeTitle">La marca de yoghurt para toda la familia</h1>
            <section id="main">
                <div>
                </div>
                <div></div>
            </section>
            <section id="s1" className="sec">
                <img src="../assets/Danone Logo Vector 2.png" />
                <p className="homeText"> Queremos sigas disfrutando de lo que más te gusta mientras cuidas del planeta, cuidas de la salud de los tuyos y alimentas a tu cuerpo de manera saludable
                </p>
                <img id="planet" src="../assets/earth.png" alt="_" />
            </section>
            <section id="s2" className="sec">
                <div className="gallery">
                    <img src="../assets/img1.jpg" alt="_" />
                    <img src="../assets/img20.webp" alt="_" />
                    <img src="../assets/img3.jpg" alt="_" />
                </div>
                <p className="homeText">En 1919 Danone creó su primer yoghurt y ahora, casi 100 años después de su nacimiento, seguimos elaborando el mismo yogur con el
                    auténtico sabor de siempre.</p>
            </section>
            <section id="s3" className="sec">
            </section>
        </div>
    )
}

export default Home