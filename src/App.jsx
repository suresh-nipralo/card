import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import TeamMemberPage from './pages/TeamMember';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:slug" element={<TeamMemberPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
