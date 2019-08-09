  import React,{Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 

const mapStyle = {
  margin:'auto',
  width: "100%",
  heigth: "200px"
}


export class MapContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      
    } 

  }

  
  render() {
    return (
      <div id='showMap'>
          {/* <Map
          style={mapStyle}
          google={this.props.google} 
          zoom={20}
          initialCenter={{lat:-23.543343,lng:-46.543343}}>
    
            <Marker
            title={'you are here'}
            name={'Current location'} />

          </Map> */}
        </div>
    );
  }
}
 
// export default GoogleApiWrapper({
//   apiKey: "AIzaSyBtT28bXZXVBEIQjJoT7K0DMlhdrJJyaAc"
// })(MapContainer)
export default MapContainer;