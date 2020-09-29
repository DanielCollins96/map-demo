import GoogleMapReact from 'google-map-react';
import {useState} from 'react';

const AnyReactComponent = ({text}) => <div>{text}</div>;

export default function Map() {
  const [location, setLocation] = useState({lat: 11.0168, lng: 76.9558 })
  const [zoom, setZoom] = useState(11);
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
            lat={11.0168}
            lng={76.9558}
            text="My Marker"
            />
        </GoogleMapReact>
        </div>
      </div>
    )
}