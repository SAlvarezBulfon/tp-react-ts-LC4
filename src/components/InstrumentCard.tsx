import { Card, CardContent, CardMedia, Typography, Box, IconButton } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { Link } from 'react-router-dom'; 

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

interface InstrumentCardProps {
  instrument: Instrument;
}

const InstrumentCard: React.FC<InstrumentCardProps> = ({ instrument }) => {
  const { nombre, imgURL, precio, costoEnvio, cantidadVendida, id } = instrument;

  return (
    <Link to={`/instrumentos/${id}`} style={{ textDecoration: 'none' }}>
      <Card sx={{ display: 'flex', maxWidth: 800, margin: '10px auto 20px', my: 2 }}>
        <CardMedia
          component="img"
          sx={{ width: '33%', objectFit: 'cover' }}
          image={imgURL}
          alt={nombre}
        />
        <CardContent sx={{ width: '67%', padding: 2 }}>
          <Typography gutterBottom variant="h5" component="div">
            {nombre}
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
            {`$${precio}`}
          </Typography>
          {costoEnvio === "G" ? (
            <Box sx={{ display: 'flex', alignItems: 'center', margin: '1rem 0 0.2rem 0' }}>
              <IconButton size="small" sx={{ p: 0, marginRight: 1 }}>
                <LocalShippingIcon sx={{ color: 'green' }} />
              </IconButton>
              <Typography variant="body1" sx={{ color: 'green' }}>
                Envío gratis a todo el país
              </Typography>
            </Box>
          ) : (
            <Typography variant="body1" sx={{ color: 'red', margin: '1rem 0 0.2rem 0' }}>
              {`Costo de envío: $${costoEnvio}`}
            </Typography>
          )}
          <Typography variant="body1">{`${cantidadVendida} vendidos`}</Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default InstrumentCard;
