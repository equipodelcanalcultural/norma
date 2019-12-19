import React from 'react';
import {Fragment} from 'react'
import {Text} from 'react-native';
import {connect} from 'react-redux';


const mapStateToProps = state => {
    return {
      currentUser: state.user.currentUser,
    };
  };

const Greeting = ({currentUser}) => {

return (
<Fragment>
<Text style={styles.greeting}>{currentUser !=null ? `Hi ${currentUser}!`: ``
}</Text>
</Fragment>
)

}


export default connect(mapStateToProps)(Greeting);