import { Component, OnInit,Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
import { UsuarioModelo} from '../../../../models/usuario-modelo';
import { Subscription } from 'rxjs';
import {  SharedDataService } from '../../../../shared/shared-data.service'

@Component({
	selector: 'app-usuario-detalle',
	templateUrl: './usuario-detalle.component.html',
	styleUrls: ['./usuario-detalle.component.scss']
})
export class UsuarioDetalleComponent implements OnInit {


	// Doughnut
	public doughnutChartLabels: Label[] = ['Tareas Terminadas', 'Tareas por Terminar'];
	public doughnutChartData: MultiDataSet = [
		[350, 450],
	];
	public doughnutChartType: ChartType = 'doughnut';

	dataSubscription: Subscription;
	data: UsuarioModelo[];
	constructor(	private  sharedServices: SharedDataService) {
	
	 }

	ngOnInit() {
		this.dataSubscription =this.sharedServices.dataSource$.subscribe(data=>{
			this.data= data
			console.log("usuario detalle--"+ JSON.stringify(this.data))
		})
	}

// events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}
