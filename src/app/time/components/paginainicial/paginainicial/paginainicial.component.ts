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

  constructor(private timeService: TimeService) { }

  ngOnInit(): void {
    debugger
    this.timeService.recuperaTodosTimes().subscribe(
      (data) => {
        this.dataSource = new MatTableDataSource(data);
      },
      (error) => console.log('Error : ', error)
    );
  }

  applyFilter(event: Event) {
    debugger;
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
