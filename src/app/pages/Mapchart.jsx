import React, { useEffect, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { useEqData } from "../handlers/eqDataHandler";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const MapChart = ({setInfo}) => {
  const { eqData, loadEqData } = useEqData();
  const [features, SetFeatures] = useState([]);
  const [viewed, setViewed] = useState(null);

  useEffect(function () {
    loadEqData();
  }, []);

  useEffect(
    function () {
      formatEqData();
    },
    [eqData]
  );

  const formatEqData = function () {
    if (eqData.data && eqData.data.features) {
      const allFeatures = eqData.data.features;
      const formattedFeatures = allFeatures.map((feature) => ({
        title: feature.properties.title,
        coordinates: feature.geometry.coordinates.slice(0, 2),
        markerOffset: feature.geometry.coordinates[2],
        magnitude: feature.properties.mag,
        id: feature.id,
        place: feature.properties.place,
        time: feature.properties.time,
        url: feature.properties.url,
      }));
      SetFeatures(formattedFeatures);
    }
  };

  return (
    <ComposableMap>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#EAEAEC"
              stroke="#D6D6DA"
            />
          ))
        }
      </Geographies>
      {features.map(feature => (
        <Marker key={feature.id} coordinates={feature.coordinates}>
          <circle
            r={viewed === feature.id ? 10 : 5}
            fill={viewed === feature.id ? "#53F037" : "#F00"}
            stroke="#fff"
            strokeWidth={2}
            cursor={"pointer"}
            onMouseOver={() => {
              setViewed(feature.id);
              setInfo(feature);
            }}
            onMouseOut={() => {
              setViewed(null);
              setInfo({});
            }}
          />
          {/* <g
            fill="none"
            stroke="#FF5533"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="translate(-12, -24)"
            onMouseOver={() => {
              setViewed(feature.id);
              setInfo(feature);
            }}
          >
            <circle cx="12" cy="10" r="3" />
            <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
          </g> */}
          {viewed === feature.id && (
            <text
              key={"text" + feature.id}
              textAnchor="middle"
              y={feature.markerOffset + 10}
              style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
            >
              {feature.title}
            </text>
          )}
        </Marker>
      ))}
    </ComposableMap>
  );
};

export default MapChart;
