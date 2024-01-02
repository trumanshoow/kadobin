import React from 'react';
import store from "./redux/store";
import {Provider} from "react-redux";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Products from "./pages/Products/index"
import UserDreams from './pages/userdreams';
import Mobile from './pages/login/mobile';
import UserDream from "./pages/userdream";
import LayoutLogin from "./layout/login";
import DreamAdd from "./pages/dreamAdd";
import Code from "./pages/login/code";
import Profile from './pages/profile';
import Wallet from "./pages/wallet";
import Dreams from "./pages/dreams";
import Terms from "./pages/terms";
import Home from "./pages/home";
import Shop from "./pages/shop";
import Gift from "./pages/gift";
import Menu from "./pages/menu";
import Cart from "./pages/cart";
import './styles/variable.css';
import './styles/global.css';
import './styles/fonts.css';

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
                    <Route path="/gift/user" element={<UserDream/>}/>
                    <Route path="/wallet" element={<Wallet/>}/>
                    <Route path="/dreams" element={<Dreams/>}/>
                    <Route path="/dreams/addwish" element={<DreamAdd/>}/>
                    <Route path="/Menu" element={<Menu/>}/>
                    <Route path="/Products" element={<Products/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/userDreams" element={<UserDreams/>}/>
                    <Route path="/Cart" element={<Cart/>}/>
                </Routes>
            </Router>
        </Provider>
    );
};

export default App;