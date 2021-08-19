import axios from "axios";
import {FETCH_USERS_DETAILS,FETCH_SINGLE_USER_DETAILS,DATA_DELETED,CHANGE_CONDUCTED_IN_DELETE,EDIT_CONDUCTED} from "./Types";
import {USER_ADDED,NO_OF_EMP,SET_ALERT_MESSAGE,CHANGE_DATA_CONDUCTED,RESET_ALERT_MESSAGE} from "./Types";
import "bootstrap/dist/css/bootstrap-grid.min.css";
// import Alert from 'react-bootstrap/Alert'


export const fetchUsersFailure = (error) => {
  return {
    type: SET_ALERT_MESSAGE,
    payload: error,
  };
}

export const fetchUsers = () => (dispatch) => {
  axios.get(`http://localhost:8080/getemp`)
  .then((response) => {
    dispatch({
      type:FETCH_USERS_DETAILS,
      payload:response.data.data
    }) 
  })
  .catch((error) => {
    dispatch(fetchUsersFailure(error.message));
  });
};

export const singleUser =(id)=>(dispatch)=>{
    axios
      .get(`http://localhost:8080/getemp/${id}`)
      .then((response) => {
        dispatch({
          type:FETCH_SINGLE_USER_DETAILS,
          payload:response.data.data
        }) 
      })
      .catch((error) => {
        dispatch(fetchUsersFailure(error.message));
      });
  };


export const removeUsers = (id) => (dispatch) => {
  axios.delete(`http://localhost:8080/deleteemp/${id}`)
    .then((response) => {
      dispatch({
        type:DATA_DELETED,
        payload:response.data.message
      })    
    })
    .catch((error) => {
      dispatch(fetchUsersFailure(error.message));
    });
};

export const resetDelete=()=>(dispatch)=>{
  dispatch({
    type:CHANGE_CONDUCTED_IN_DELETE,
  })
}

export const editUser = (user) => (dispatch) => {
    axios.put(`http://localhost:8080/putemp`,user)
      .then((response) => {
        dispatch({
          type:EDIT_CONDUCTED,
          payload:response.data.message
        })  
      })
      .catch((error) => {
        dispatch(fetchUsersFailure(error.message));
      });
  };

export const addUser = (user) => (dispatch) => {
    axios.post(`http://localhost:8080/apppost`,user)
      .then((response) => {
        console.log("78",response)
        dispatch({
          type:USER_ADDED,
          payload:response.message
        }) 
      })
      .catch((error) => {
        console.log("8555",error.message)
        dispatch(fetchUsersFailure(error.message));
      });
  };

export const changeData = () =>(dispatch)=>{
  dispatch({                                            //change the value of data into empty array
    type:CHANGE_DATA_CONDUCTED
  })
}
 
export const resetAlertMessage =()=>(dispatch)=>{
  dispatch({
     type:RESET_ALERT_MESSAGE
  })
}

//cal no of emp
export const noOfEmp =()=>(dispatch)=>{
  axios.get(`http://localhost:8080/getnoemp`)
  .then((response) => {
    let resp=response.data.data[0].no           //1111111111111111111111111111111111111
    resp+=1  
    dispatch({
        type:NO_OF_EMP,
        payload:resp
    })
}
  )}

  //sending the data to contact table
  export const dataAddedToContact = (user) =>(dispatch)=>{
    axios.post(`http://localhost:8080/contactpost`,user)
    .then((response) => {
      dispatch({
        type:SET_ALERT_MESSAGE,
        payload:response.data.message
      }) 
    })
    .catch((error) => {
      dispatch(fetchUsersFailure(error.message));
    });
  }

// export const setAlertVisibility =()=>(dispatch)=>{
//     dispatch({
//        type:SET_ALERT_VISIBILITY
//     })
//   }

  // export const resetAlertVisibility =()=>(dispatch)=>{
  //   dispatch({
  //      type:RESET_ALERT_VISIBILITY
  //   })
  // }