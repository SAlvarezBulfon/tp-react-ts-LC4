import { Card, CardContent, CardMedia, Typography, Box, IconButton } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

interface Instrument {
  id: string;
  instrumento: string;
  marca: string;
  modelo: string;
  imagen: string;
  precio: string;
  costoEnvio: string;
  cantidadVendida: string;
  descripcion: string;
}

interface InstrumentCardProps {
  instrument: Instrument;
}

const InstrumentCard: React.FC<InstrumentCardProps> = ({ instrument }) => {
  const { instrumento, imagen, precio, costoEnvio, cantidadVendida } = instrument;

  return (
    <Card sx={{ display: 'flex', maxWidth: 800, margin: '10px auto 20px' }}>
      <CardMedia
        component="img"
        sx={{ width: '33%', objectFit: 'cover' }}
        image={`/img/${imagen}`}
        alt={instrumento}
      />
      <CardContent sx={{ width: '67%', padding: 2 }}>
        <Typography gutterBottom variant="h5" component="div">
          {instrumento}
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
          {`$${precio}`}
        </Typography>
        {costoEnvio === 'G' ? (
          <Box sx={{ display: 'flex', alignItems: 'center',  margin: '1rem 0 0.2rem 0' }}>
            <IconButton size="small" sx={{ p: 0 }}>
              <LocalShippingIcon sx={{ color: 'green', marginRight: 1 }} />
            </IconButton>
            <Typography variant="body1" sx={{ color: 'green'}}>Envío gratis a todo el país</Typography>
          </Box>
        ) : (
          <Typography variant="body1" sx={{ color: 'red',  margin: '1rem 0 0.2rem 0' }}>{`Costo de envío: $${costoEnvio}`}</Typography>
        )}
        <Typography variant="body1">
          {`${cantidadVendida} vendidos`}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default InstrumentCard;