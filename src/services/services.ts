import useSWR from 'swr';

const fetcher = async (url:string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Error al obtener los datos: ${response.statusText}`);
  }
  return response.json();
};

const getInstrumentos = () => {
  const { data, error } = useSWR('http://localhost:8080/instrumentos/all', fetcher);

  return {
    instrumentos: data,
    isLoading: !error && !data,
    isError: error,
  };
};

const getInstrumentoById = (id:number) => {
  const { data, error } = useSWR(`http://localhost:8080/instrumento/${id}`, fetcher);

  return {
    instrumento: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export { getInstrumentos, getInstrumentoById };
