import { useEffect, useState } from 'react';
import client from '../config/contentful';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    color: '#10249f',
    p: 4,
};

export default function BasicModal({ id }) {
    const [data, setData] = useState(null);
    const [open, setOpen] = useState(false);

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
    }, [id]);

    const dataById = data ? data.filter((e) => e.sys.id === id) : [];
    // console.log(dataById)

    if (!data) {
        return <p>Loading...</p>;
    }

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <button onClick={handleOpen} className='seeMore'>See more</button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <img className="ModalIMG" src={dataById[0].fields.imagenProducto.fields.file.url} alt="" />
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {dataById[0].fields.imagenProducto.fields.title}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <p>Valor Energético: {dataById[0].fields.valorEnergetico}</p>
                        <p>Grasa: {dataById[0].fields.grasas}</p>
                        <p>Hidratos de Carbono: {dataById[0].fields.hidratosDeCarbono}</p>
                        <p>Este producto procede de Agricultura ecológica.</p>
                        <p>Ingredientes: {dataById[0].fields.ingredientes}</p>
                        <div id="divBtn">
                            <button className="closeBtn" onClick={handleClose}>Close</button>
                        </div>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}