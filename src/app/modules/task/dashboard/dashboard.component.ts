import { Component, OnInit } from '@angular/core';
import { faUser,faProjectDiagram,faTasks}  from '@fortawesome/free-solid-svg-icons';
@Component({
	selector: 'app-dashboard',
	//template:`<app-usuario></app-usuario>`,
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

	//iconos
	faUser = faUser;
	faProjectDiagram= faProjectDiagram;
	faTasks =faTasks;
	
	constructor() { }

	ngOnInit() {
	}

}
