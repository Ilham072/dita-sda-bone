import './App.css';
import PariwisataCategory from './components/PariwisataCategory.js';
import PertanianCategory from './components/PertanianCategory.js';
import KomoditiCategory from './components/KomoditiCategory.js';
import Komoditi from './components/Komoditi.js';
import komoditiPertanian from './components/komoditi_pertanian.json';
import News from './components/News.js';
import KomoditiPariwisata from './components/KomoditiPariwisata.js';


function App() {
  return (
    <div className="mainpage">
      {/* <div className="sidenav">
        <img src={Dita} alt="dita-logo" className="logo"/>
        <h5>Menu</h5>
        <a href="#">Beranda</a>
        <a href="#">Data</a>
        <a href="#">Admin</a>
        <a href="#">Konten</a>
        <a href="#">Saran</a>
        <a href="#">Keluar</a>
      </div> */}

      <header>

      </header>

      <div className="mainContent">
          <Komoditi komoditi={komoditiPertanian}/>
          <News/>
          <PertanianCategory/>
          <PariwisataCategory/>
          <KomoditiCategory/>
          <KomoditiPariwisata/>
      </div>
    </div>
  );
}

export default App;
