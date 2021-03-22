import GoogleMapReact from 'google-map-react';
import React, { Component } from 'react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
class SimpleMap extends Component {
    static defaultProps = {
      center: {
        lat: 59.95,
        lng: 30.33
      },
      zoom: 11
    };

    render() {
        return (
         
          <div  style={{ height: '70vh', width: '100%' }} >
            <GoogleMapReact
              bootstrapURLKeys={{ key: 'AIzaSyCRwFDU2rpraz0yKNxQ_dpwziL4fvgn8Q8'}}
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
            >
              <AnyReactComponent
                lat={22.940878}
                lng={91.406662}
              />
            </GoogleMapReact>
          </div>
        );
      }
    }

    export default SimpleMap;

