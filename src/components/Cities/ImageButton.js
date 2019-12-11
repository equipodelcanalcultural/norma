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
              height: 200, width: 200}}
              /* onClick={() => accion()} */>
            <Text>{this.props.ciudad/* .replace(/[_]/, ' ') */}</Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    );
  }
}

/* const ReduxImageButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageButton);

export default ReduxImageButton; */

export default ImageButton;