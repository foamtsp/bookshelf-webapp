import React , { useState, useEffect } from 'react';
import Utility from '../dbConnector/utility'
import { withRouter } from 'react-router-dom';



function Login(props) {
  const [username, setUsername] = useState(null);


  function login(username,history){
    Utility.login(username).then(res=>{
      if(res){
        history.push({
          pathname:'/shelf',
          state: {user: res}
        });
      }
      else{
        alert("Please enter your username!")
      }
    })
  }
 
  return (
    <div className = "row d-flex justify-content-center align-items-center mt-5">
        <div className = "col-md-4">
            <form>
                <h1 className="h3 mb-3 font-weight-normal">Please login to see your bookshelf</h1>
                <div className = "form-group">
                    <label htmlFor="inputID" className="sr-only">Username</label>
                    <input type="id" id="inputID" name = "id" className="form-control" placeholder="Username" required="" autoFocus="" onChange={event =>setUsername(event.target.value)} value={username}/>
                </div>
                <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={()=>login(username, props.history)}>Sign in</button>
            </form>
        </div>
    </div>
  );
}

export default withRouter(Login);
