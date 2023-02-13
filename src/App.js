import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListDevice from './pages/ListDevice';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Header from './component/Header';

function App() {
  return (
    <BrowserRouter>
      <div className="container ">
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<ListDevice />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
