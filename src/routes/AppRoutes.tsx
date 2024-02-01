import { Routes, Route } from 'react-router-dom';

// Importar os componentes das páginas
import Personagens from '../pages/CharactersPage';
import Filmes from '../pages/MoviesPage';
import HQs from '../pages/ComicsPage';
import Entrar from '../pages/Entrar/LoginPage';

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
