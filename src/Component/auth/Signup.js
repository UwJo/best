import React, { Component } from 'react'

class Signup extends Component {

  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      isAdmin: true,
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const newUser =
    {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    console.log(newUser);
  }
  render() {
    return (
      <div>
        <div className="Signup">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <h1 className="display-4 text-center">Sign Up</h1>
                <p className="lead text-center">On Safe Bus</p>
                <form on Submit={this.onSubmit}></form>
                <form action="create-profile.html">
                  <div className="form-group">
                    <input type="text" className="form-control form-control-lg" placeholder="Name of Transportation Company" name="name" value={this.state.name} onChange={this.onChange} />
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control form-control-lg" placeholder="Email Address" name="email" value={this.state.email} onChange={this.onChange} />

                  </div>
                  <div className="form-group">
                    <input type="password" className="form-control form-control-lg" placeholder="Password" name="password" value={this.state.password} onChange={this.onChange} />
                  </div>
                  <div className="form-group">
                    <input type="password" className="form-control form-control-lg" placeholder="Confirm Password" name="password2" value={this.state.password2} onChange={this.onChange} />
                  </div>
                  {this.state.isAdmin ? <input type="submit" className="btn btn-info btn-block mt-4" /> : null}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}



export default Signup;