import React from 'react';
import InstrumentCard from './InstrumentCard';
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

const InstrumentList: React.FC = () => {
  const { data: instrumentos, error } = useSWR<Instrument[]>('http://localhost:8080/instrumentos/all', fetcher);

  if (error) return <div>Error al cargar los instrumentos: {error}</div>;
  if (!instrumentos) return <div>Cargando instrumentos...</div>;

  return (
    <div className="instrument-list">
      {instrumentos.map((instrumento: Instrument) => (
        <InstrumentCard key={instrumento.id} instrument={instrumento} />
      ))}
    </div>
  );
};

export default InstrumentList;
