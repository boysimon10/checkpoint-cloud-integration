import 'bootstrap/dist/css/bootstrap.min.css';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import Contact from './components/Contact';
import Header from './components/Header';

// Style du conteneur de la carte
const containerStyle = {
  width: '600px',
  height: '500px',
};

// Emplacement de GOMYCODE POINT E avec la latitude et la longitude
const center = {
  lat: 14.696906, // Latitude de GOMYCODE POINT E
  lng: -17.456929, // Longitude de GOMYCODE POINT E
};

function App() {
  return (
    <>
    <Header/>
    <div className="container mt-5">
      <div className="row">
        <Contact />
        {/* Colonne pour la carte Google Maps */}
        <div className="col-md-6">
          {/* Composant LoadScript pour charger l'API Google Maps avec la clé d'API */}
          <LoadScript googleMapsApiKey="UN_API_KEY">
            {/* Composant GoogleMap qui affiche la carte */}
            <GoogleMap
              mapContainerStyle={containerStyle} // Style du conteneur de la carte
              center={center} // Centre de la carte, à GOMYCODE POINT E
              zoom={10} // Niveau de zoom initial de la carte
            ></GoogleMap>
          </LoadScript>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
