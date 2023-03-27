import pertanian_logo from './../images/logo/pertanian_logo2.svg';
import peternakan_logo from './../images/logo/peternakan_logo2.svg';
import perikanan_logo from './../images/logo/perikanan_logo2.svg';
import perindustrian_logo from './../images/logo/perindustrian_logo2.svg';
import pariwisata_logo from './../images/logo/pariwisata_logo2.svg';

const komoditi = {
    pertanian: {
        name: 'Pertanian',
        count: 23,
        image: pertanian_logo,
    },
    peternakan: {
        name: 'Peternakan',
        count: 12,
        image: peternakan_logo,
    },
    perikanan: {
        name: 'Perikanan',
        count: 20,
        image: perikanan_logo,
    },
    perindustrian: {
        name: 'Perindustrian',
        count: 32,
        image: perindustrian_logo,
    },
    pariwisata: {
        name: 'Pariwisata',
        count: 54,
        image: pariwisata_logo,
    }
};

export default komoditi;