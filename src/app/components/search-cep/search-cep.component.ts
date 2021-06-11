import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CepService } from 'src/app/api/service/cep.service';
import { CepProps } from 'src/app/api/service/models/cep.model';

@Component({
  selector: 'app-search-cep',
  templateUrl: './search-cep.component.html',
  styleUrls: ['./search-cep.component.css']
})
export class SearchCepComponent implements OnInit {
  
  @Output() addAddress = new EventEmitter<CepProps>()
  
  constructor(private cepService: CepService) { }
  
  public data: CepProps | undefined
  public erro!: boolean

  ngOnInit() {
  }
  
  getService(address: string) {
    this.cepService.getCep(address)
    .subscribe((cep: CepProps) => {
      if(!cep.erro) {
        this.data = cep;
        this.addAddress.emit(this.data)
        this.erro = false
      } else {
        this.erro = true
      }
    })
  }

}
