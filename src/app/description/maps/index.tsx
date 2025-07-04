'use client'

import { useEffect, useRef } from "react"
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

interface MapsProps {
    long: number,
    lat: number
}

export function Maps({long, lat}: MapsProps) {

    useEffect(() => {

    const map = new maplibregl.Map({
        container: 'map', // container id
        style: 'https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL', // style URL
        center: [long, lat], // starting position [lng, lat]
        zoom: 8 // starting zoom
    });

      const marker = new maplibregl.Marker()
        .setLngLat([long, lat])
        .addTo(map);

        return () => map.remove()

    }, [])
    return (
        <div
            style={{width: '300px', height: "200px",}}
            id="map"
        >
            
        </div>
    )
}