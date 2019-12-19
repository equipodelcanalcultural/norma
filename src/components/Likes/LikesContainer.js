import React, { useState, useEffect } from "react";
import {connect} from 'react-redux';
import {View, Text} from 'react-native';
import LikesButton from './LikesButton'
import { getData } from "../../store/actions/reduxFetch";
import serverurl from '../../../heroku';
import EmptyIcon from 'react-native-vector-icons/SimpleLineIcons';


/* const mapStateToProps = state => {
  return {
    logged: state.user.logged,
    user: state.user.currentUser.email,
    itinLiked: state.user.currentUser.itinerariesLiked,
    itineraries: state.itineraries.itineraries[0].likes
  };
}; */

const LikesContainer = ({ title, logged, user, itineraries } ) => {
  const [likes, setLikes] = useState();
  const [refresh, setRefresh] = useState(false);

  console.log("herede en LikesContainer estas props:")
  console.log(user, 'currentuser');
  console.log(itineraries, 'likelist');
  console.log(logged, 'logged?')
/*   console.log(itineraries.includes(user)); */

  useEffect(() => {
    getData(`${serverurl}/api/itineraries/byTitle/${title}`, null, data => {
      setLikes(data[0].rating);
    });
  });

  

  const request = polaridad =>
    getData(
      `${serverurl}/api/itineraries/byTitle/${title}/${polaridad}`,
      {
        method: "PUT",
        body: JSON.stringify({
          username: user
        }),
        headers: {
          "Content-Type": "application/json"
        }
      },
      data => {
        console.log('likes request', data);
        setRefresh(!refresh);
      }
    );
    
    let polaridades;
    if (! itineraries.includes(user)) {
      polaridades = { positivo: "likes", negativo: "dislikes" };
    } else polaridades = { positivo: "dislikes", negativo: "likes" };
    console.log(polaridades.positivo, "polaridades");
    
    let likeButton;
    if (logged) { 
      likeButton = ( <LikesButton callback={request} positivo={polaridades.positivo
      } negativo={polaridades.negativo} />)
    } else {likeButton = <EmptyIcon name="heart" size={22} color='grey'/>
  }

  return (
    <>
      <View style={{flexDirection:'row', marginTop:2}}>
        {likeButton}
        < Text style={{marginLeft:5}} h3>{likes}</Text>
      </View>
    </>
  );
};

export default LikesContainer;

/* export default connect(mapStateToProps)(LikesContainer); */
