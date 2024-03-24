import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

const Map = () => {
  const [searchParam, setSearchParam] = useSearchParams();

  const navigate = useNavigate();
  const lat = searchParam.get("lat");
  const lng = searchParam.get("lng");
  return (
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
      <h1>Map</h1>
      <h1>
        position : {lat}, {lng}
      </h1>
      <button onClick={() => setSearchParam({ lat: 23, lng: 45 })}>
        Change pos
      </button>
    </div>
  );
};

export default Map;
