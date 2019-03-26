import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators} from '@angular/forms';
import { AuthService }  from '../../../services/auth.service';
import { GetToken } from '../login/get.token.auth'
import { Router } from '@angular/router'

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	forms:FormGroup;
	getToken= new GetToken;
	constructor( 	private formBuilder: FormBuilder,
					private authServices: AuthService ,
					private router:Router ) { }

	ngOnInit() {
		this.form();
		
	}

	form(){
		this.forms=this.formBuilder.group({
			email:['', [Validators.required]],
			password:['',[Validators.required]]
		})
	}

	login(formValue:any){
	
		this.authServices.login(formValue.value).subscribe( 
			res=>{
				if(res.status = 200){
					this.getToken.saveToken(res);
					this.router.navigate(['/dashboard/usuario']);
				}
				
			},
			error=>{
				console.error("asasaksa"+error)
			})
	}
	 setToke( token:any){

	 }

}
