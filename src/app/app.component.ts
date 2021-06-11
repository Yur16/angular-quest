import { Component } from '@angular/core';
import { CepProps } from './api/service/models/cep.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-project';

  public currentItem!: CepProps

  public save($event: CepProps) {
    this.currentItem = $event
  }
}
