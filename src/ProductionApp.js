import './App.css';
import Production from './components/Production';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function ProductionApp() {
  return (
    <div className="ProductionApp">
        <Production/>
    </div>
  );
}

export default ProductionApp;