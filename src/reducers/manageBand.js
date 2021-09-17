import uuid from "uuid"

export default function manageBand(state = {
  bands: [],
}, action) {
  switch(action.type) {
    case "ADD_BAND":
      const band = {
        id: uuid(),
        name: action.name
      }
      return {...state, bands: state.bands.concat(band)}
    default:
      return state
  
  }
};



// Currently, bands are stored in state as an array of strings representing the name of each
//  band. In the manageBand reducer, change the structure of the state such that each band is
//   an object with id and name properties; be sure to assign each band its own unique ID on 
//   creation. The array of objects will be available to BandsContainer through mapStateToProps 
//   and will need to be passed as props through Bands to each rendered Band component.


