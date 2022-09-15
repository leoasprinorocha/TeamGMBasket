import { TimeService } from './../../../services/time.service';
import { Component, Injectable, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Time } from 'src/app/time/models/time';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css'],
})
@Injectable({
  providedIn: 'root',
})
export class DetalhesComponent implements OnInit {
  public timeCarregado!: Time;
  public logoPath!: any;

  constructor(
    private dialogRef: MatDialog,
    private timeService: TimeService,
    private _sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.timeService
      .recuperaDetalhesTime(this.timeService.idTime)
      .subscribe((data) => {
        this.timeCarregado = data;
        this.logoPath = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,'
        + this.timeCarregado.logo);
      });
  }

  abreModalDetalhesTime() {
    this.dialogRef.open(DetalhesComponent, {
      height: '500px',
      width: '350px',
      hasBackdrop: true,
      backdropClass: 'menuModal',
    });
  }
}
