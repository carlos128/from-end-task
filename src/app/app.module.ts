import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MaterialComponentModule }  from './modules/material-component/material-component.module';
import { FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { HttpClientModule} from  '@angular/common/http';
import { HttpModule } from '@angular/http';
import { LoginModule } from '../app/modules/auth/login.module';
import { HTTP_INTERCEPTORS }  from '@angular/common/http';
import { AuthInterceptorService } from "../app/services/AuthInterceptorService";
//import { FilterUserPipe } from './filter/filter-user.pipe';


@NgModule({
	declarations: [
		AppComponent,
		
		

	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MaterialComponentModule,
		FontAwesomeModule,
		HttpClientModule,
		HttpModule,
		LoginModule,

	],
	providers: [
		{
			provide:HTTP_INTERCEPTORS,
			useClass:AuthInterceptorService,
			multi:true,
		}
	],
	bootstrap: [AppComponent],
	
})
export class AppModule { }
