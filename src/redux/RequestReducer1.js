import {SET_DATATO_CARDS,RESET_CARDS_NOTIFICATION} from "./Types"

const initialState = {
    cardData:[],
    dataAddedToCardsNotification:false
  };

  const RequestReducer1 = (state = initialState, action) => {
    // console.log("request reducer ",action)
    switch (action.type) {
      
       case SET_DATATO_CARDS:
         return{
           ...state,
           cardData:action.payload,
           dataAddedToCardsNotification:true,
         }
        case RESET_CARDS_NOTIFICATION:
          return{
            ...state,
            dataAddedToCardsNotification:false
          }
      default:
        return state;
    }
  };
  export default RequestReducer1;
  