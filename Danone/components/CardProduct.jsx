import Details from '../components/Details'

export default function ImgMediaCard({ title, id, img }) {

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
                    <Details id={id}>
                    </Details>
                </p>
            </div>
        </div>

    );
}