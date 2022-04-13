import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginHyeongJun from './pages/hyeongjunjeon/Login/Login';
import MainHyeongJun from './pages/hyeongjunjeon/Main/Main';

import LoginByoungGyu from './pages/byounggyukim/Login/Login';
import MainByoungGyu from './pages/byounggyukim/Main/Main';

import LoginJongHyeok from './pages/jonghyeoklim/Login/Login';
import MainJongHyeok from './pages/jonghyeoklim/Main/Main';

import LoginJaeWon from './pages/jaewonyang/Login/Login';
import MainJaeWon from './pages/jaewonyang/Main/Main';

import LoginSungYong from './pages/sungyongseo/Login/Login';
import MainSungYong from './pages/sungyongseo/Main/Main';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login-hyeongjun" element={<LoginHyeongJun />} />
        <Route path="/main-hyeongjun" element={<MainHyeongJun />} />

        <Route path="/login-byounggyu" element={<LoginByoungGyu />} />
        <Route path="/main-byounggyu" element={<MainByoungGyu />} />

        <Route path="/login-jonghyeok" element={<LoginJongHyeok />} />
        <Route path="/main-jonghyeok" element={<MainJongHyeok />} />

        <Route path="/login-jaewon" element={<LoginJaeWon />} />
        <Route path="/main-jaewon" element={<MainJaeWon />} />

        <Route path="/login-sungyong" element={<LoginSungYong />} />
        <Route path="/main-sungyong" element={<MainSungYong />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;