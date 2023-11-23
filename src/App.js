import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Mobile from './pages/login/mobile'
import Code from "./pages/login/code";
import Home from "./pages/home";
import Shop from "./pages/home/shop";
import Gift from "./pages/home/gift";
import Wallet from "./pages/home/wallet";
import Dreams from "./pages/home/dreams";
import LayoutLogin from "./leyout/login";
import MainLayout from "./leyout/main";
import './styles/variable.css'
import './styles/fonts.css'
import './styles/global.css'

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LayoutLogin/>}>
                    <Route path="/login/mobile" element={<Mobile/>}/>
                    <Route path="/login/code" element={<Code/>}/>
                </Route>

                <Route path="/" element={<MainLayout/>}>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/shop" element={<Shop/>}/>
                    <Route path="/gift" element={<Gift/>}/>
                    <Route path="/wallet" element={<Wallet/>}/>
                    <Route path="/dreams" element={<Dreams/>}/>
                </Route>
            </Routes>
        </Router>

    );
};

export default App;