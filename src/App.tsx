import React from 'react';
import {Card} from './components/Card';
import doria from './img/doria.jpg';
import beef from './img/beef.jpg';
import ramen from './img/noodle.jpg';
import './style/style.css';
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <Card img={doria}
      title='チーズドリア'
      description='1か月に1度は食べているチーズドリアです。熱いので気をつけましょう。'
      />

      <Card
        img={beef}
        title="ホルモン焼き"
        description="大好きなホルモン焼きです。よくかんで食べましょう。"
      />

      <Card
        img={ramen}
        title="しょうゆラーメン"
        description="日本の国民食ラーメン。しょうゆ派です。"
      />
    </div>
  );
}

export default App;
