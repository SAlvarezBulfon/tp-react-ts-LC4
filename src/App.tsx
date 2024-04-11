import InstrumentList from './components/InstrumentList';
import instrumentsData from './../instrumentos.json';

const App: React.FC = () => {
  return (
    <div>
      <InstrumentList instruments={instrumentsData.instrumentos} />
    </div>
  );
};

export default App;
