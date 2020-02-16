import React from 'react';

import bg from '../../assets/images/bg-01.jpg';

const bgImage = {
    backgroundImage: "url(" + bg + ")",
    backgroundRepeat: "no-repeat",
};

class SignUp extends React.Component {
	
 constructor() {
        super();

        this.state = {
            email: '',
            username: '',
            password: '',
            passwordComfirm: '',
			name: '',
			
        }
		
		this.onEmailChange = this.onEmailChange.bind(this);
      	this.onSubmit = this.onSubmit.bind(this);
		this.onUsernameChange = this.onUsernameChange.bind(this);
		this.onpasswordChange = this.onpasswordChange.bind(this);
		this.onpasswordComfirmChange = this.onpasswordComfirmChange.bind(this);
		this.onNameChange = this.onNameChange.bind(this);

    }
	
	onEmailChange(e){
		this.setState({email:e.target.value});
	}
	
	onUsernameChange(e){
		this.setState({username:e.target.value});
	}
	
	onpasswordChange(e){
		this.setState({password:e.target.value});
	}
	
	onpasswordComfirmChange(e){
		this.setState({passwordComfirm:e.target.value});
	}
	
	onNameChange(e){
		this.setState({name:e.target.value});
	}
	
	onSubmit(){
		let strEmail = this.state.email;
		let strUsername = this.state.username;
		let srtPassword = this.state.password;
		let srtPasswordComfirm = this.state.passwordComfirm;
		let strName = this.state.name;
		
		if(strEmail =='' || strUsername =='' || srtPassword ==''){
			alert('กรุณากรอกข้อมูลให้ครบ')
		}
		else if(srtPassword!=srtPasswordComfirm){
			alert('รหัสผ่านทั้งสองช่องไม่ตรงกัน')
		}else{
			let url ='http://localhost/CI_APITRAINING/Authen/register?email='+strEmail+'&name='+strName+'&username='+strUsername+'&password='+srtPasswordComfirm;
			
			fetch(url)
			.then(res => res.json())
			.then(result => {
				alert(result[0].message);
				//console.log(result)
			},(error) => {
				alert('Error');
			});
		}
		
		
	}
	
    render() {
        return (
            <div className="container-login" style={bgImage}>
                <div>
                    <div className="container">
                        <div className="col-md-3"></div>
                        <div className="col-md-6" style={{ marginTop: "60px" }}>
                            <div className="panel panel-primary">
                                <div className="panel-heading">ลงทะเบียน</div>
                                <form style={{ padding: "30px" }} onSubmit={this.onSubmit}>
                                    <div className="form-group input-group">
                                        <span className="input-group-addon">@</span>
                                        <input type="text" className="form-control" 
										placeholder="อีเมล" 
										aria-describedby="sizing-addon1" 
										onChange={this.onEmailChange} />
                                    </div>

                                    <div className="form-group input-group ">
                                        <div className="input-group-addon">
                                            <span className="input-group-text"> <i className="glyphicon glyphicon-user"></i> </span>
                                        </div>
                                        <input name="" className="form-control" 
										placeholder="ชื่อผู้ใช้งาน" type="text" 
										onChange={this.onUsernameChange}/>
                                    </div>
									
									 <div className="form-group input-group ">
                                        <div className="input-group-addon">
                                            <span className="input-group-text"> <i className="glyphicon glyphicon-list"></i> </span>
                                        </div>
                                        <input name="" className="form-control" 
										placeholder="ชื่อ-นามสกุล" type="text" 
										onChange={this.onNameChange}/>
                                    </div>

                                    <div className="form-group input-group ">
                                        <div className="input-group-addon">
                                            <span className="input-group-text"> <i className="glyphicon glyphicon-lock"></i> </span>
                                        </div>
                                        <input name="" className="form-control" 
										placeholder="รหัสผ่าน" type="text" 
										onChange={this.onpasswordChange}/>
                                    </div>
                                    <div className="form-group input-group ">
                                        <div className="input-group-addon">
                                            <span className="input-group-text"> <i className="glyphicon glyphicon-lock"></i> </span>
                                        </div>
                                        <input name="" className="form-control" 
										placeholder="ยืนยันรหัสผ่าน" type="text" 
										onChange={this.onpasswordComfirmChange}/>
                                    </div>

                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary btn-block"> บันทึก </button>
                                    </div>

                                    <p className="text-center">เป็นสมาชิกแล้ว? <a href="#signin">เข้าสู่ระบบ</a> </p>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </div>
            </div >
        )
    }
}

export default SignUp;
