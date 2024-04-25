import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InstrumentList from './components/InstrumentList';
import InstrumentDetails from './components/InstrumentDetails';

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<InstrumentList />} />
          <Route path="/instrumentos/:id" element={<InstrumentDetails />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
