import { useEffect, useRef } from 'react'
import L from 'leaflet'
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'

const DEFAULT_ICON = L.icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
})

const USER_ICON = L.divIcon({
  className: 'location-map__user-marker',
  html: '<span></span>',
  iconSize: [18, 18],
  iconAnchor: [9, 9],
})

const VN_CENTER = [16.0, 106.0]
const VN_ZOOM = 5

// Reusable Leaflet (OpenStreetMap) map, in two modes:
// - picker mode (onPick provided): click or drag the single marker to choose a lat/lng
// - browse mode (onPick omitted): shows a "markers" list (e.g. tutors) plus an
//   optional distinct "userLocation" marker, auto-fitting the view to all points
export default function LocationMap({ lat = null, lng = null, onPick = null, markers = null, userLocation = null, height = 220, zoom = 14 }) {
  const containerRef = useRef(null)
  const mapRef = useRef(null)
  const pickMarkerRef = useRef(null)
  const layerGroupRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return
    const map = L.map(containerRef.current, { scrollWheelZoom: false }).setView(VN_CENTER, VN_ZOOM)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 19,
    }).addTo(map)
    layerGroupRef.current = L.layerGroup().addTo(map)
    mapRef.current = map

    return () => {
      map.remove()
      mapRef.current = null
    }
  }, [])

  useEffect(() => {
    const map = mapRef.current
    if (!map || !onPick) return
    function handleClick(e) {
      onPick(Number(e.latlng.lat.toFixed(6)), Number(e.latlng.lng.toFixed(6)))
    }
    map.on('click', handleClick)
    return () => map.off('click', handleClick)
  }, [onPick])

  useEffect(() => {
    const map = mapRef.current
    if (!map || !onPick) return
    if (lat == null || lng == null) {
      pickMarkerRef.current?.remove()
      pickMarkerRef.current = null
      return
    }
    if (pickMarkerRef.current) {
      pickMarkerRef.current.setLatLng([lat, lng])
    } else {
      const marker = L.marker([lat, lng], { draggable: true, icon: DEFAULT_ICON }).addTo(map)
      marker.on('dragend', () => {
        const pos = marker.getLatLng()
        onPick(Number(pos.lat.toFixed(6)), Number(pos.lng.toFixed(6)))
      })
      pickMarkerRef.current = marker
    }
    map.setView([lat, lng], Math.max(map.getZoom(), zoom))
  }, [lat, lng, onPick, zoom])

  useEffect(() => {
    const map = mapRef.current
    const layerGroup = layerGroupRef.current
    if (!map || !layerGroup || onPick) return
    layerGroup.clearLayers()

    const points = []
    if (userLocation) {
      L.marker([userLocation.lat, userLocation.lng], { icon: USER_ICON }).addTo(layerGroup).bindPopup('Vị trí của bạn')
      points.push([userLocation.lat, userLocation.lng])
    }
    for (const m of markers || []) {
      L.marker([m.lat, m.lng], { icon: DEFAULT_ICON })
        .addTo(layerGroup)
        .bindPopup(m.label || '')
      points.push([m.lat, m.lng])
    }

    if (points.length > 0) {
      map.fitBounds(points, { padding: [30, 30], maxZoom: 14 })
    } else {
      map.setView(VN_CENTER, VN_ZOOM)
    }
  }, [markers, userLocation, onPick])

  return <div ref={containerRef} className="location-map" style={{ height }} />
}
