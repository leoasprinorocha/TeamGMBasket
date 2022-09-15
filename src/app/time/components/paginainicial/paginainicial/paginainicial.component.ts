import { DetalhesComponent } from './../../detalhes/detalhes/detalhes.component';
import { TimeService } from './../../../services/time.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-paginainicial',
  templateUrl: './paginainicial.component.html',
  styleUrls: ['./paginainicial.component.css']
})
export class PaginainicialComponent implements OnInit {
  displayedColumns: string[] = [
    'Nome',
    'Cidade',
    'Detalhes'
  ];

  dataSource!: MatTableDataSource<any>;

  constructor(private timeService: TimeService, private detalhesComponent: DetalhesComponent) { }

  ngOnInit(): void {
    debugger
    this.timeService.recuperaTodosTimes().subscribe(
      (data) => {
        this.dataSource = new MatTableDataSource(data);
      },
      (error) => console.log('Error : ', error)
    );
  }

  carregarDetalhesTime(event: any){
    this.timeService.idTime = Number(event.target.dataset.idtime);
    this.detalhesComponent.abreModalDetalhesTime();
  }

  applyFilter(event: Event) {
    debugger;
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
