


import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import TeamMemberPage from './pages/TeamMember';
import HomePage from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:slug" element={<TeamMemberPage />} />
        {/* <Route path="/" element={<HomePage/>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
