import React from 'react'

export default function Layout({mode}) {
  return (
    <div>
      <div className="container row" style={{ width:"50%"}}>
        <form >
          <h3>Zumba Login</h3>
          <div className="mb-3 column" >
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" style={{width:"100%",
            color:mode==="light"?"black":"white",
            backgroundColor:mode==="light"?"white":"#444a54"}} aria-describedby="emailHelp"/>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" style={{width:"100%",
            color:mode==="light"?"black":"white",
            backgroundColor:mode==="light"?"white":"#444a54"}}/>
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" style={{backgroundColor:mode==="light"?"white":"#444a54"}}/>
            <label className="form-check-label" htmlFor="exampleCheck1" style={{float:"left"}}>I agree to pay you having your terms and conditions...</label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  )
}
