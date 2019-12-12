import React from "react";
import { Component } from "react";
/* import { connect } from "react-redux"; */
import myImages from "../../Assets/Resources/myImages";
import { TouchableOpacity } from "react-native";
import { View, Text, ImageBackground } from 'react-native';
/* import { sendNavData } from "../../store/actions/navActions"; */
/* import { Link } from "react-router-dom"; */

/* const mapStateToProps = state => {
  console.log(state.nav.navData);
  return {
    navData: state.nav.navData
  };
}; */

/* const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    accion: () => dispatch(sendNavData(ownProps.ciudad))
  };
}; */

class ImageButton extends Component {
  render() {
    /* const { accion } = this.props; */
    let altura = this.props.height
    let ancho = this.props.width
    console.log(this.props.ciudad)
    /* ${myImages.cities[this.props.ciudad]} */
    return (
      <View>
        <TouchableOpacity>
          <ImageBackground
            source={myImages.cities[this.props.ciudad]}
            style={{ /* backgroundImage: `url(${myImages.cities[this.props.ciudad]})`, */
              /*  backgroundSize: 'cover',
                backgroundPosition: 'center', */
              height: 250, width: 250,
              borderRadius: 25, display: 'flex', alignItems: 'center',
              margin: 10
            }}
            imageStyle={{ borderRadius: 25 }}
              /* onClick={() => accion()} */>
            <Text style={{
              fontFamily: 'sans-serif',
              fontWeight: 'bold',
              fontSize: 30,
              color: '#ffff',
              /* text-shadow: '0 1px 0 rgb(75, 69, 69)', */
              textShadowColor: 'rgba(75, 69, 69, 0.75)',
              textShadowOffset: { width: 0, height: 1 },
              textShadowRadius: 10
            }}>{this.props.ciudad.replace(/[_]/, ' ')}</Text>
          </ImageBackground>
        </TouchableOpacity>
      </View >
    );
  }
}

/* const ReduxImageButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageButton);

export default ReduxImageButton; */

export default ImageButton;