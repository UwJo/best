import React, { Component } from 'react'

class Destination extends Component {
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


                                </form>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        )
    }
}

export default Destination;