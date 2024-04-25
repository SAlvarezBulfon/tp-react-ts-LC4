import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Box, IconButton } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import useSWR from 'swr';

interface Instrument {
    id: string;
    nombre: string;
    marca: string;
    modelo: string;
    imgURL: string;
    precio: string;
    costoEnvio: string;
    cantidadVendida: string;
    descripcion: string;
}

const fetcher = (url: string) => fetch(url).then(res => res.json());

const InstrumentDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>(); // Obtener el ID de la URL
    const { data: instrument, error } = useSWR<Instrument>(`http://localhost:8080/instrumento/${id}`, fetcher);

    if (error) return <div>Error al cargar el instrumento.</div>;
    if (!instrument) return <div>Cargando...</div>;

    const { nombre, imgURL, precio, costoEnvio, cantidadVendida, descripcion } = instrument;

    return (
        <div style={{ maxWidth: 800, margin: '20px auto', padding: 20 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <img src={imgURL} alt={nombre} style={{ width: '200px', marginRight: '20px' }} />
                <div>
                    <Typography gutterBottom variant="h4">{nombre}</Typography>
                    <Typography variant="h6">{`$${precio}`}</Typography>
                    {costoEnvio === 'G' ? (
                        <Box sx={{ display: 'flex', alignItems: 'center', margin: '10px 0' }}>
                            <IconButton size="small" sx={{ p: 0, marginRight: 1 }}>
                                <LocalShippingIcon sx={{ color: 'green' }} />
                            </IconButton>
                            <Typography variant="body1" sx={{ color: 'green' }}>Envío gratis a todo el país</Typography>
                        </Box>
                    ) : (
                        <Typography variant="body1">{`Costo de envío: $${costoEnvio}`}</Typography>
                    )}
                    <Typography variant="body1">{`${cantidadVendida} vendidos`}</Typography>
                </div>
            </Box>
            <Typography variant="body1">{descripcion}</Typography>
        </div>
    );
};

export default InstrumentDetails;
