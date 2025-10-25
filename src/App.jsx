// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import HomePage from './pages/Home';
// import TeamMemberPage from './pages/TeamMember';

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/:slug" element={<TeamMemberPage />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import TeamMemberPage from './pages/TeamMember';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect root to default member */}
        {/* <Route path="/" element={<Navigate to="/:slug" replace />} /> */}
        <Route path="/:slug" element={<TeamMemberPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
