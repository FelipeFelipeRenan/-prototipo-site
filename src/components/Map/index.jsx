import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "./index.scss";
import { useState } from "react";

/*
function LocationMarker() {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You!</Popup>
    </Marker>
  );
}*/

const Map = () => {
  return (
    <div className="leaflet-container">
      <MapContainer
        center={{ lat:-7.2574966, lng: -39.3043456}}
        zoom={13}
        scrollWheelZoom={false}
        dragging={false}

      >
          <div className="container-mapa">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        </div>
      </MapContainer>
    </div>
  );
};

export default Map;
