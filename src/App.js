import 'bootstrap/dist/css/bootstrap.min.css';
// Import des composants GoogleMap et LoadScript depuis '@react-google-maps/api'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

// Style du conteneur de la carte
const containerStyle = {
  width: '800px',
  height: '600px',
};

// Emplacement de GOMYCODE POINT E avec La latitude et La longitude
const center = {
  lat: 14.696906, // Latitude de GOMYCODE POINT E
  lng: -17.456929, // Longitude de GOMYCODE POINT E
};

function App() {
  return (
    // Conteneur principal avec une marge en haut
    <div className="container mt-5">
      {/* Titre centré */}
      <h1 className="text-center mb-4">GOMYCODE POINT E</h1>
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
  );
}
export default App;
