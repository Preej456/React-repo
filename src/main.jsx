import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Route, BrowserRouter as Router, Routes, useParams } from 'react-router-dom';
import Home from './Home.jsx';
import './index.css';
import DemoPage from './pages/demoPage.jsx';
import Example from './pages/example.jsx';
import OneBraincell from './pages/oneBraincell.jsx';
import SiyaJariwala from './pages/siyaJariwala.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/example' element={<Example />} />
        <Route path='/demo' element={<DemoPage />} />
        <Route path='/profile/:name' element={<ProfileRouter />} />
      </Routes>
    </Router>
  </StrictMode>,
)

function ProfileRouter() {
  const { name } = useParams();

  switch (name) {
    // Change <DemoPage /> to your custom profile page, and change the case to your name
    case "Person1":
      return <DemoPage />;
    case "Person2":
      return <DemoPage />;
    case "Person3":
      return <DemoPage />;
    case "Person4":
      return <DemoPage />;
    case "Person5":
      return <DemoPage />;
    case "Person6":
      return <DemoPage />;
    case "Person7":
      return <DemoPage />;
    case "OneOrangeBraincell":
        return <OneBraincell />;
    case "SiyaJariwala":
      return <SiyaJariwala />;
    case "Person10":
      return <DemoPage />;
    default:
      return <div>Profile not found</div>;
  }
}