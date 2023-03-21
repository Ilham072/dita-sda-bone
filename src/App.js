import './App.css';
import Card from './components/Card.js';
import CardNews from './components/CardNews.js';
import Dita from './images/dita-logo.jpg';

function App() {
  return (
    <div className="mainpage">
      <div className="sidenav">
        <img src={Dita} alt="dita-logo" className="logo"/>
        <h5>Menu</h5>
        <a href="#">Beranda</a>
        <a href="#">Data</a>
        <a href="#">Admin</a>
        <a href="#">Konten</a>
        <a href="#">Saran</a>
        <a href="#">Keluar</a>
      </div>

      <header>

      </header>

      <div className="mainContent">
          <Card/>
          <CardNews/>
      </div>
    </div>
  );
}

export default App;
