import { Routes, Route } from 'react-router-dom';

// Importar os componentes das páginas
import Personagens from '../pages/Personagens';
import Filmes from '../pages/Filmes';
import HQs from '../pages/HQs';
import Entrar from '../pages/Entrar';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Entrar />} />
      <Route path="/personagens" element={<Personagens />} />
      <Route path="/filmes" element={<Filmes />} />
      <Route path="/hqs" element={<HQs />} />
    </Routes>
  );
};

export default AppRoutes;
