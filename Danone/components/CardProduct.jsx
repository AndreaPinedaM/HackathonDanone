

export default function ImgMediaCard({ title, valorEnergetico, grasas, hidratos, ingredientes, img }) {
    return (
        <div className="card">
            <div id="imgContainer">
                <img src={img} alt className="card-img" />
            </div>
            <div className="card-text">
                <h3>
                    {title}
                </h3>
                <p>
                    <button><a>See more</a></button>
                </p>
            </div>
        </div>

    );
}