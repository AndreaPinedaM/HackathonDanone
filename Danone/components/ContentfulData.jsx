import { useEffect, useState } from 'react';
import client from '../config/contentful';
import CardProduct from './CardProduct'

const ContentfulData = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await client.getEntries();
                setData(response.items);
            } catch (error) {
                console.log('Error retrieving content from Contentful:', error);
            }
        };

        fetchData();
    }, []);

    if (!data) {
        return <p>Loading...</p>;
    }

    return (
        <div className="container">
            {data.map((item) => (
                <CardProduct
                    key={item.sys.id}
                    id={item.sys.id}
                    title={item.fields.imagenProducto.fields.title}
                    valorEnergetico={item.fields.valorEnergetico}
                    grasas={item.fields.grasas}
                    hidratos={item.fields.hidratosDeCarbono}
                    ingredientes={item.fields.ingredientes}
                    img={item.fields.imagenProducto.fields.file.url}>
                </CardProduct>
            ))}
        </div>
    );
};

export default ContentfulData;
