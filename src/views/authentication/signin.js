import React from 'react';

import logo from '../../assets/images/kru.png';
import bg from '../../assets/images/bg-01.jpg';

const bgImage = {
    backgroundImage: "url(" + bg + ")",
    backgroundRepeat: "no-repeat",
};

class SignIn extends React.Component {
	
		
 constructor() {
        super();

        this.state = {
            username: '',
            password: '',
        }
		
		this.onUsernameChange = this.onUsernameChange.bind(this);
		this.onPasswordChange = this.onPasswordChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

    }
	
	onUsernameChange(e){
		this.setState({username:e.target.value});
	}
	onPasswordChange(e){
		this.setState({password:e.target.value});
	}
	
	onSubmit(){
		let strUsername = this.state.username;
		let srtPassword = this.state.password;
		
		let url ='http://localhost/CI_APITRAINING/Authen/login?username='+strUsername+'&password='+srtPassword;
			
			fetch(url)
			.then(res => res.json())
			.then(result => {
					alert(result[0].message);
				
			},(error) => {
				alert('Error');
			});
	}
	
	
    render() {

        return (
            <div className="container-login" style={bgImage}>
                <div className="col-md-12">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <div className="account-wall">
                            <h4 className="text-center">เข้าสู่ระบบ</h4>
                            <img className="logo-img" src={logo} alt="" />
                            <form className="form-signin" onSubmit={this.onSubmit}>
                                <div className="txtInput">
                                    <input type="text" className="form-control" placeholder="ชือผู้ใช้งาน" required autofocus
                                    onChange={this.onUsernameChange}/>
                                </div>
                                <div className="txtInput">
                                    <input type="password" className="form-control" placeholder="รหัสผ่าน" required autofocus
                                    onChange={this.onPasswordChange} />
                                </div>
                                <div className="txtInput">
                                    <button className="btn btn-sm btn-primary btn-block" type="submit">เข้าสู่ระบบ</button>
                                </div>
                                <br />
                                <label className=" pull-left">
                                    <input type="checkbox" value="remember-me" />
                                    จำฉันไว้</label>
                                <a href="#signup" className="pull-right">ยังไม่ได้เป็นสมาชิก? ลงทะเบียน </a>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div >
        );
    }
}

export default SignIn;