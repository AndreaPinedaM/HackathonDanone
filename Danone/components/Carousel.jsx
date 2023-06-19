import "react-responsive-carousel/lib/styles/carousel.min.css"

import { Carousel as ReactCarousel } from 'react-responsive-carousel'

import product1 from "../assets/celebrandoAmexico.png"
import product2 from "../assets/danone_bebibles_fruta.png"
import product3 from "../assets/danone_defensis.png"
import product4 from "../assets/danone_esencial.png"
import product5 from "../assets/danone_frutas_selectas.png"
import product6 from "../assets/danone_licuado.png"

const slides = [
    {
        title: "Celebrando a México",
        image: product1
    },
    {
        title: "Bebibles Fruta",
        image: product2
    },
    {
        title: "Defensis",
        image: product3
    },
    {
        title: "Esencial",
        image: product4
    },
    {
        title: "Frutas selectas",
        image: product5
    },
    {
        title: "Celebrando a México",
        image: product6
    }
]
const Carousel = () => (
    <div className="cardCarousel">
        <ReactCarousel
            showArrows={false}
            showStatus={false}
            showThumbs={false}
            swipeable={true}
            emulateTouch={true}
        >
            {slides.map((slide) => (
                <div key={slide.title}>
                    <div className="image-wrapper">
                        <img src={slide.image} alt="product" />
                    </div>
                </div>
            ))}
        </ReactCarousel>
    </div>
)
export default Carousel;