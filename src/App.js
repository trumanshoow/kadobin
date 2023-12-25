import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React from 'react';
import Mobile from './pages/login/mobile'
import Code from "./pages/login/code";
import Home from "./pages/home";
import Shop from "./pages/shop";
import Gift from "./pages/gift";
import Wallet from "./pages/wallet";
import Dreams from "./pages/dreams";
import LayoutLogin from "./layout/login";
import MainLayout from "./layout/main";
import Terms from "./pages/terms";
import './styles/variable.css';
import './styles/fonts.css';
import './styles/global.css';
import DreamApp from "./pages/dreamAdd";
import Menu from "./pages/menu";
import {Provider} from "react-redux"
import store from "./redux/store"

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

                    <Route path="/" element={<MainLayout/>}>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/shop" element={<Shop/>}/>
                        <Route path="/gift" element={<Gift/>}/>
                        <Route path="/wallet" element={<Wallet/>}/>
                        <Route path="/dreams" element={<Dreams/>}/>
                        <Route path="/dreams/addwish" element={<DreamApp/>}/>
                    </Route>
                </Routes>
                <Routes>
                    <Route path="/Menu" element={<Menu/>}/>
                </Routes>
            </Router>
        </Provider>
    );
};

export default App;