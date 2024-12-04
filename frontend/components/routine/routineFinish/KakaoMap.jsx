import Script from "next/script";
import React, { useState, useEffect } from "react";
import * as S from "../Styled";
import { Map, MapMarker, useMap } from "react-kakao-maps-sdk";

const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_JS_KEY}&libraries=services&autoload=false`;

const KakaoMap = ({ searchKeyword, onClose }) => {
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [places, setPlaces] = useState([]);
  const [userLocation, setUserLocation] = useState(null);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [selectedPlaceName, setSelectedPlaceName] = useState(null);
  const [selectedPlaceAddress, setSelectedPlaceAddress] = useState(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = KAKAO_SDK_URL;
    script.onload = () => setIsScriptLoaded(true);
    document.body.appendChild(script);

    return () => document.body.removeChild(script);
  }, []);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });
        },
        () => {
          console.error("현재 위치를 불러오지 못했습니다");
        }
      );
    } else {
      console.error("현재 위치를 불러오지 못했습니다");
    }
  }, []);

  const calculateDistance = (lat1, lng1, lat2, lng2) => {
    const toRad = (value) => (value * Math.PI) / 180;
    const R = 6371;
    const dLat = toRad(lat2 - lat1);
    const dLng = toRad(lng2 - lng1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) *
        Math.cos(toRad(lat2)) *
        Math.sin(dLng / 2) *
        Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  useEffect(() => {
    if (!map || !searchKeyword || !window.kakao || !isScriptLoaded) return;

    const ps = new kakao.maps.services.Places();
    ps.keywordSearch(searchKeyword, (data, status) => {
      if (status === kakao.maps.services.Status.OK && userLocation) {
        setPlaces(data);

        const placesWithDistances = data.map((place) => {
          const distance = calculateDistance(
            userLocation.lat,
            userLocation.lng,
            place.y,
            place.x
          );
          return { ...place, distance };
        });

        const sortedPlaces = placesWithDistances.sort(
          (a, b) => a.distance - b.distance
        );
        const closestPlaces = sortedPlaces.slice(0, 5);

        const newMarkers = closestPlaces.map((place) => ({
          position: {
            lat: place.y,
            lng: place.x,
          },
          content: place.place_name,
        }));

        setMarkers(newMarkers);

        const newBounds = new kakao.maps.LatLngBounds();
        newMarkers.forEach((marker) =>
          newBounds.extend(
            new kakao.maps.LatLng(marker.position.lat, marker.position.lng)
          )
        );
        map.setBounds(newBounds);
      }
    });
    // console.log(places);
  }, [map, searchKeyword, userLocation, isScriptLoaded]);

  const handleConfirmSelection = () => {
    if (selectedPlaceName) {
      localStorage.setItem("selectedPlaceName", selectedPlaceName);
      localStorage.setItem("selectedPlaceAddress", selectedPlaceAddress);
      onClose(); // 모달 닫기
    }
  };

  return (
    <S.MapContainer>
      {/* <Script src={KAKAO_SDK_URL} strategy="beforeInteractive" /> */}
      <Map
        center={userLocation || { lat: 33.450701, lng: 126.570667 }}
        style={{
          width: "100%",
          height: "300px",
          zIndex: 10000,
          background: "transparent",
        }}
        onCreate={setMap}
      >
        {markers.map((marker, i) => (
          <EventMarkerContainer
            key={`EventMarkerContainer-${marker.position.lat}-${marker.position.lng}`}
            map={map}
            position={marker.position}
            content={marker.content}
            i={i}
          />
        ))}
      </Map>
      {places.length > 0 && (
        <S.PlacesList>
          {places.slice(0, 5).map((item, i) => (
            <S.Item
              key={i}
              onClick={() => {
                map.panTo(
                  new kakao.maps.LatLng(
                    markers[i].position.lat,
                    markers[i].position.lng
                  )
                );
                setSelectedPlaceName(item.place_name);
                setSelectedPlaceAddress(item.road_address_name);
              }}
            >
              <S.MarkerBg $markerIndex={i} />
              <S.Info>
                <S.Title>{item.place_name}</S.Title>
                <S.RoadAddress>{item.road_address_name}</S.RoadAddress>
              </S.Info>
            </S.Item>
          ))}
        </S.PlacesList>
      )}
      <S.PlaceSubmitButton onClick={handleConfirmSelection}>
        확인
      </S.PlaceSubmitButton>
    </S.MapContainer>
  );
};
const EventMarkerContainer = ({ position, content, i }) => {
  const map = useMap();
  const [isVisible, setIsVisible] = useState(false);
  const markerImageSrc =
    "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png";
  const imageSize = { width: 36, height: 37 };
  const spriteSize = { width: 36, height: 691 };

  const handleMarkerClick = (marker) => {
    map.panTo(marker.getPosition());
    map.setLevel(3);
  };

  return (
    <MapMarker
      position={position}
      image={{
        src: markerImageSrc,
        size: imageSize,
        options: {
          spriteSize: spriteSize,
          spriteOrigin: new kakao.maps.Point(0, i * 46 + 10),
          offset: new kakao.maps.Point(13, 37),
        },
      }}
      onClick={(marker) => handleMarkerClick(marker)}
      onMouseOver={() => setIsVisible(true)}
      onMouseOut={() => setIsVisible(false)}
    >
      {isVisible && <div style={{ color: "#000" }}>{content}</div>}
    </MapMarker>
  );
};

export default KakaoMap;
