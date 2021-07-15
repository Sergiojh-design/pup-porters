/*global google */
import React, { useState, useEffect } from 'react';
import CaregiverMap from './caregiverMap/CaregiverMap.jsx';
import RemoverMap from './removerMap/RemoverMap.jsx';
import DropOffMap from './dropoffMap/DropOffMap.jsx';
import SearchBar from './SearchBar.jsx';
import config from '../../../../config.js';

const loadScript = (url, callback) => {
  let script = document.createElement("script");
  script.type = "text/javascript";

  if (script.readyState) {
    script.onreadystatechange = function() {
      if (script.readyState === "loaded" || script.readyState === "complete") {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    script.onload = () => callback();
  }

  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
};

const MainGoogleMap = () => {

  const [googleApiLoaded, setGoogleApiLoaded] = useState(false);

  useEffect(() => {
    loadScript(`https://maps.googleapis.com/maps/api/js?key=${config.token}&libraries=places`, () => {
      setGoogleApiLoaded(true);
    });
  }, []);

  return (
    <div className="App" style={{ width: '200%', marginLeft: 50}}>
      <br /><br />
      <SearchBar googleApiLoaded={googleApiLoaded} />
      <CaregiverMap googleApiLoaded={googleApiLoaded} />
      {/* <RemoverMap/> */}
      {/* <DropOffMap/> */}

    </div>
  );
};

export default MainGoogleMap;
