import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import ToasterContainer from './components/ToastContainer';

function App() {
  return (
    <>
    <ToasterContainer/>
    <Router>
      <Routes>
        <Route path="/" element={<ProductList />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;