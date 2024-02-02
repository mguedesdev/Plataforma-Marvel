import { Routes, Route } from 'react-router-dom';

// Importar os componentes das páginas
import CharactersPage from '../pages/CharactersPage/CharactersPage';
import MoviesPage from '../pages/MoviesPage/MoviesPage';
import ComicsPage from '../pages/ComicsPage/ComicsPage';
import LoginPage from '../pages/LoginPage/LoginPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/personagens" element={<CharactersPage />} />
      <Route path="/filmes" element={<MoviesPage />} />
      <Route path="/hqs" element={<ComicsPage />} />
    </Routes>
  );
};

export default AppRoutes;
