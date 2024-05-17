
import './registration.component.css';












export function RegistrationComponent(){
    return(
        <div>
             <form className='login-form' >
                <div className="container">
                    <h5 style={{ textAlign: 'center' }}>Login Form</h5>
                    <div className="form-group m-3">
                        <label className='name-card'>Email</label>
                        <input type="text" className="form-control" placeholder="Email" id="useName"></input>
                    </div>
                    <div className="form-group m-3">
                        <label className='pw-card'>Password</label>
                        <input type="text" className="form-control" placeholder="Password" id="pw"></input>
                    </div>
                    <div className='m-3'>
                        <button className="btn btn-primary"  >Register</button> &nbsp;
                        <button className="btn btn-secondary">Cancel</button>
                    </div>
                </div>
            </form>
        </div>
    )
}