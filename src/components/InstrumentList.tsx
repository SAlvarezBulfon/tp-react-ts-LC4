
import InstrumentCard from './InstrumentCard';

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

interface InstrumentListProps {
  instruments: Instrument[];
}

const InstrumentList: React.FC<InstrumentListProps> = ({ instruments }) => {
  return (
    <div className="instrument-list">
      {instruments.map((instrument) => (
        <InstrumentCard key={instrument.id} instrument={instrument} />
      ))}
    </div>
  );
};

export default InstrumentList;
