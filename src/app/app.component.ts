import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipesApp';

  nombre: string = 'daniel';
  valor: number = 500;
  obj = {
    nombre: "Daniel Castillo"
  }


}
