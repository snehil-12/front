import React,{Component} from 'react'
import {addUser} from '../redux/AsyncAction'
import {editUser} from '../redux/AsyncAction'
import { singleUser } from '../redux/AsyncAction';
import { changeData } from '../redux/AsyncAction';
import { noOfEmp } from '../redux/AsyncAction';
import {connect} from 'react-redux'


class EditUser extends Component{
    constructor(props){
        super(props)
        this.state={
            id:'',
            title:'',
            body:'',
            // alertType:"",
            // alertMessage:"",
            // showAlert:false
        }
    }
    handleChange = ( event)=> {
        this.setState({ [event.target.name]: event.target.value });
      }

     componentDidMount(){
      //  console.log("component did mount")
      if(this.props.location?.state?.mode==="edit"||this.props.location?.state?.mode==="view"){
       const{id}=this.props.match.params
             this.props.singleUser(id)    
        }
        if(this.props.location?.state?.mode==="create"){
          this.props.noOfEmp()
          this.setState({
            id:this.props.noofemp
          })
        } 
       }

      static getDerivedStateFromProps(nextProps, prevState) {
        // console.log("static" ,nextProps)
        const newState={...prevState}
        if(nextProps.noofemp!==prevState.id){
            newState.id=nextProps.noofemp
        }
        return newState; // No change to state
    }
      
      componentDidUpdate(prevProps,prevState){
        // console.log("38",prevState)
        // console.log("43","edit",this.props.data !== prevProps.data,"current",this.props.data,"previous", prevProps.data);
        // if ((this.props.data !== prevProps.data)&&this.props.data.length>0) {
        //     this.setState({
        //       id:this.props.data[0]?.id,
        //       title:this.props.data[0]?.title,
        //       body:this.props.data[0]?.body
        //     })
        //   }
          // console.log("49@@@",this.props.data.length)
          if(this.props.location?.state?.mode==="create"&&this.props.data.length>0){
                // console.log("data changed 37")
                this.props.changeData()
                this.props.noOfEmp()
                this.setState({
                  id:this.props.noofemp,    
                  title:'',
                  body:''
              })
            }
          
          // if (prevProps.match.params.type !== this.props.match.params.type) {
          //   this.props.changeData()
          // }
       
     }
   
       
    handleSubmit = (event) =>  {
      event.preventDefault();
        const user = {
            id: this.state.id,
            title: this.state.title,
            body: this.state.body
          };
        if(this.props.location?.state?.mode==="edit"){      
             this.props.editUser(user)
        }
        else if(this.props.location?.state?.mode==="create"){
            this.props.addUser(user)
            // this.setState({
            //   alertType:"success",
            //   alertMessage:"data added succesfully",
            //   showAlert:true
            // })
        }
         
      }
  render(){
    
      let temp=this.props.location?.state?.mode
      let isSel= this.state.title.length > 0 && this.state.body.length > 0
      
      return(
             <div>
{/*                
                 {
                  this.state.showAlert===true?
                  <Alert variant="primary" onClose={()=>{this.setState({ showAlert:false})}} dismissible>
                  <Alert.Heading>{this.state.alertMessage}</Alert.Heading>
                  </Alert>
                  :null
                 } */}
               
                { temp==="edit"?<label>Edit user</label>:<label></label> }
                { temp==="view"?<label>View</label>:<label></label> }
                { temp==="create"?<label>Add User</label>:<label></label>}
                 <form  onSubmit={this.handleSubmit}>
                 <div className="mb-3">
                   <label htmlFor='id' className="form-label">ID</label>
                   <input  type="number" className="form-control" disabled={temp==="create"||temp==="view"||temp==="edit"?true:false}  name='id'    value={this.state.id} onChange={this.handleChange} />
                 </div>
                 <div className="mb-3">
                   <label htmlFor='title' className="form-label">title</label>
                   <input type="text" className="form-control" disabled={temp==="view"?true:false} name='title' value={this.state.title} onChange={this.handleChange}/>
                 </div>
                 <div className="mb-3">
                   <label htmlFor='body' className="form-label">Body</label>
                   <input type="text" className="form-control" disabled={temp==="view"?true:false} name='body' value={this.state.body} onChange={this.handleChange}/>
                 </div >
                 
                 <div className="temp">
                   
                   {["create", 'edit'].includes(temp)&&<button type="submit"  disabled={!isSel} className="btn btn-primary me-2">{temp==="edit"?"Modify":"Add User"}</button>}
                   {/* {console.log("4234",isSel)} */}
                   {/* {temp==="create"&&<button type="submit"  type="submit"  className="btn btn-primary me-2" >Create User</button>} */}
                   <button className="btn btn-primary me-2"   onClick={()=>this.props.history.push("/home")}>Back</button>
                </div>
                 </form>
             </div>
        )
    }
}
//visibility={this.props.location.state.mode==="view"?"hidden":""}
const mapStateToProps = state =>({
  data:state.data,
  noofemp:state.noofemp,
  reduxstate:state
})

const mapDispatchToProps ={   
  addUser,
  editUser,
  singleUser,
  changeData,
  noOfEmp
}

export default connect(mapStateToProps,mapDispatchToProps) (EditUser)