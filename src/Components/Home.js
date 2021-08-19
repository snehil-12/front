import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { connect } from "react-redux";
import { fetchUsers } from "../redux/AsyncAction";
import { removeUsers } from "../redux/AsyncAction";
import { resetDelete } from "../redux/AsyncAction";
import { dataAddedToContact  } from "../redux/AsyncAction";
import validator from "validator";
import Alert from 'react-bootstrap/Alert'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      show: false,
      firstName: "",
      lastName: "",
      mobNo: "",
      feedBack: "",
      email: "",
      emailError:"",
      mobNoError:"",
      
    };
  }
  
  componentDidMount() {
    this.props.fetchUsers();
  }

  deleteUser(id) {
    this.props.removeUsers(id);
    
  }
  componentDidUpdate(prevProps, prevState) {
    // console.log("53",this.props.data !== prevProps.data,"current",this.props.data,"previous",prevProps.data);
    if (this.props.dataDeleted === true) {
      this.props.fetchUsers();
    }
    if (this.props.dataDeleted === true ) {
      this.props.resetDelete();
    }
  }

  //starting of modal implementation
  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  handleFirstName = (e) => {
    this.setState({
      firstName: e.target.value,
    });
  };

  handleLastName = (e) => {
    this.setState({
      lastName: e.target.value,
    });
  };

  handleMobileNo = (e) => {
    var tempMobNo = e.target.value;
    this.setState({
      mobNo: e.target.value,
    });
    if(tempMobNo.toString().length==10){
      this.setState({
      mobNoError:""
    })
    }
    else{
      this.setState({
        mobNoError:"Pl Enter A Valid No"
      })
    }
  };

  handleEmail = (e) => {
    var tempEmail = e.target.value;
    this.setState({
      email:e.target.value,
    })
    if (validator.isEmail(tempEmail)) {
      this.setState({
        emailError: "",
      });
    } else {
      this.setState({
        emailError: "Pl eneter a valid email",
      });
    }
  };

  handleFeedback = (e) => {
    this.setState({
      feedBack: e.target.value,
    });
  };

  handleSubmitModal = (e) => {
    e.preventDefault();

    const user = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      mobNo: this.state.mobNo,
      email: this.state.email,
      feedBack: this.state.feedBack,
    };
    let temp1=user.mobNo
    let temp2=user.email
    // console.log("151 ",temp1.toString.length==='10')
    // console.log("152 ",validator.isEmail(temp2))
    if(temp1.toString().length=='10'&&validator.isEmail(temp2))
        this.props.dataAddedToContact(user);
    else
        alert("pl check phone no and mail id again")
  };
  handleReset = () => {
    this.setState({
      firstName: "",
      lastName: "",
      mobNo: "",
      email: "",
      feedBack: "",
      emailError: "",
      mobNoError:""
    });
  };

  //    checkAll = ()=>{
  //        if(this.state.firstName.length>0&&this.state.lastName.length>0&&this.state.mobNo.length===10&&this.state.email.length>0&&this.state.feedBack.length>0)
  //           return false;
  //        else
  //           return true;
  //     }
  modalclose =()=>{
    this.setState({
      showAlert:false
    })
  }
  render() {
  
    return (
      <div>
        {
          this.state.dataDeleted===true?
          <Alert variant="primary" onClose={false} dismissible>
          <Alert.Heading>{this.props.alertMessage}</Alert.Heading>
          </Alert>
          :null
        }
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">S.NO.</th>
              <th scope="col">Id</th>
              <th scope="col">Title</th>
              <th scope="col">Body</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {this.props.data.map((user, index) => {
              return (
                <tr key={index}>
                  <td key={index + 1}>{index + 1}</td>
                  <td key={index + 2}>{user.id}</td>
                  <td key={index + 3}>{user.title}</td>
                  <td key={index + 4}>{user.body}</td>
                  <td key={index + 5}>
                    <Link
                      className="btn btn-primary me-2"
                      to={{
                        pathname: `/edituser/${user.id}`,
                        state: { mode: "view" },
                      }}
                    >
                      View
                    </Link>
                    <Link
                      className="btn btn-secondary me-2"
                      to={{
                        pathname: `/edituser/${user.id}`,
                        state: { mode: "edit" },
                      }}
                    >
                      Edit
                    </Link>
                    <button
                      className="btn btn-danger me-2"
                      onClick={() => this.deleteUser(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* modal box */}

        <button variant="primary" onClick={this.showModal}>
          click here
        </button>
        <Modal show={this.state.show} onHide={this.hideModal}>
          <Modal.Dialog>
            <Modal.Header closeButton>
              <Modal.Title>Fill Up The Form</Modal.Title>
              {/* <button
                type="button"
                className="btn btn-danger"
                onClick={() => this.hideModal()}
              ></button> */}
            </Modal.Header>

            <Modal.Body>
              <form onSubmit={this.handleSubmitModal}>
                <div className="mb-3">
                  <label htmlFor="id" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="firstName"
                    value={this.state.firstName}
                    onChange={this.handleFirstName}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="lastName"
                    value={this.state.lastName}
                    onChange={this.handleLastName}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="body" className="form-label">
                    Mobile No
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    name="mobNo"
                    value={this.state.mobNo}
                    onChange={this.handleMobileNo}
                  />
                </div>
                <span
                  style={{
                    fontWeight: "bold",
                    color: "red",
                  }}
                >
                  {this.state.mobNoError}
                </span>
                <div className="mb-3">
                  <label htmlFor="body" className="form-label">
                    Email Id
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleEmail}
                  />
                </div>
                <span
                  style={{
                    fontWeight: "bold",
                    color: "red",
                  }}
                >
                  {this.state.emailError}
                </span>
                <div className="mb-3">
                  <label htmlFor="body" className="form-label">
                    feedBack
                  </label>
                  <input
                    type="textarea"
                    className="form-control"
                    name="feedBack"
                    value={this.state.feedBack}
                    onChange={this.handleFeedback}
                  />
                </div>
              </form>
            </Modal.Body>

            <Modal.Footer>
              <button
                className="btn btn-primary me-2"
                onClick={this.handleReset}
              >
                Clear
              </button>
              <button
                className="btn btn-primary me-2"
                type="submit"
                onClick={this.handleSubmitModal}
              >
                Save It
              </button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.data,
  dataDeleted: state.dataDeleted,
  alertMessage:state.alertMessage
});

const mapDispatchToProps = {
  fetchUsers,
  removeUsers,
  resetDelete,
  dataAddedToContact 
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
