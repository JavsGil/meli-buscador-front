import './App.css';

import { Routes, Route } from "react-router-dom";
import HomePage from './ui/module/pages/Home/Home';
import ItemPage from './ui/module/pages/Item/Item';
import Items from './ui/module/pages/Items/Items';
import NotFound from './ui/module/pages/NotFound/NotFound';

import { Navbar } from './ui/components';

function App() {
    return (
        <div className="App h-screen">
            <Navbar/>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/items" element={<Items/>}/>
                <Route path="/item/:id" element={<ItemPage/>}/>
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </div>
    );
}

export default App;

