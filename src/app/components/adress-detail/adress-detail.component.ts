import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { JsonService } from 'src/app/api/service/json-server.service';
import { CepProps } from 'src/app/api/service/models/cep.model';

@Component({
  selector: 'app-adress-detail',
  templateUrl: './adress-detail.component.html',
  styleUrls: ['./adress-detail.component.css']
})
export class AdressDetailComponent implements OnInit {

  @Input() datafromParent!: CepProps

  public data!: CepProps[]
  constructor(private jsonService: JsonService) { }

  ngOnInit() {
    this.getService()
  }

  getService() {
    this.jsonService.getAddress()
    .subscribe((cep: CepProps[]) => {
      this.data = cep
    })
  }

  Add() {
    this.jsonService.addToServer(this.datafromParent)
      .subscribe(() => this.getService())
  }

  delete(id: number): void {
    this.jsonService.removeFromServer(id)
      .subscribe(() => this.getService())
  }
}
