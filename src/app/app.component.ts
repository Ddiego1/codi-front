import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'codiMockSH';
  showPopup: boolean = false;

  // Método para mostrar el popup
  openPopup() {
    this.showPopup = true;
  }

  // Método para cerrar el popup
  closePopup(event: any) {
    // Solo cerrar si se hace clic fuera del contenido del popup
    if (event.target.id === 'popupDatosClienteContainer') {
      this.showPopup = false;
    }
  }
}