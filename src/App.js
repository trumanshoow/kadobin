import React from 'react';
import './styles/fonts.css';
import './styles/global.css';
import './styles/variable.css';
import Home from "./pages/home";
import Shop from "./pages/shop";
import Gift from "./pages/gift";
import Menu from "./pages/menu";
import store from "./redux/store";
import Terms from "./pages/terms";
import Wallet from "./pages/wallet";
import Dreams from "./pages/dreams";
import Products from "./pages/Products/index"
import {Provider} from "react-redux";
import Code from "./pages/login/code";
import DreamAdd from "./pages/dreamAdd";
import LayoutLogin from "./layout/login";
import Mobile from './pages/login/mobile';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path="/terms" element={<Terms/>}/>
                    <Route path="/login" element={<LayoutLogin/>}>
                        <Route path="/login/mobile" element={<Mobile/>}/>
                        <Route path="/login/code" element={<Code/>}/>
                    </Route>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/shop" element={<Shop/>}/>
                    <Route path="/gift" element={<Gift/>}/>
                    <Route path="/wallet" element={<Wallet/>}/>
                    <Route path="/dreams" element={<Dreams/>}/>
                    <Route path="/dreams/addwish" element={<DreamAdd/>}/>
                    <Route path="/Menu" element={<Menu/>}/>
                    <Route path="/Products" element={<Products/>}/>
                </Routes>
            </Router>
        </Provider>
    );
};

export default App;