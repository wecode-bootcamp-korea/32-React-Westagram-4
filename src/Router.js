import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginHyeongJun from './pages/hyeongjunjeon/Login/LoginHyeongJun';
import MainHyeongJun from './pages/hyeongjunjeon/Main/MainHyeongJun';

import LoginByoungGyu from './pages/byounggyukim/Login/LoginByoungGyu';
import MainByoungGyu from './pages/byounggyukim/Main/MainByoungGyu';

import LoginJongHyeok from './pages/jonghyeoklim/Login/LoginJongHyeok';
import MainJongHyeok from './pages/jonghyeoklim/Main/MainJongHyeok';

import LoginJaeWon from './pages/jaewonyang/Login/LoginJaeWon';
import MainJaeWon from './pages/jaewonyang/Main/MainJaeWon';

import LoginSungYong from './pages/sungyongseo/Login/LoginSungYong';
import MainSungYong from './pages/sungyongseo/Main/MainSungYong';

import Nav from './components/Nav/Nav';

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
