import GoogleMapReact from 'google-map-react';
import {useState, useEffect} from 'react';

const AnyReactComponent = ({text}) => <div>{text}</div>;

export default function Map() {
  const [location, setLocation] = useState({lat: 65.0168, lng: -114.2558 })
  const [zoom, setZoom] = useState(11);
  const [error, setError] = useState(null);

  const onChange = ({coords}) => {
    setLocation({
      lat: coords.latitude,
      lng: coords.longitude
    })
  }

  const onError = (error) => {
    setError(error.message)
  }


  useEffect(() => {
    const geo = navigator.geolocation
    if(!geo) {
      return
    }
    let watcher = geo.watchPosition(onChange, onError);
    return () => geo.clearWatch(watcher);
  },[])

  return (
      <div className="p-4 shadow rounded bg-white">
        {/* <h1 className="text-purple-500 leading-normal">Next.js</h1>
        <p className="text-gray-500">with Tailwind CSS</p> */}
        <div style={{ height: '80vh', width: '100%' }}>

        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.MAPS_API_KEY }}
          defaultCenter={location}
          defaultZoom={zoom}
          >
          <AnyReactComponent
            lat={location.lat}
            lng={location.lng}
            text="My Marker"
            />
        </GoogleMapReact>
        </div>
      </div>
    )
}