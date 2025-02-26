import { Component } from '@angular/core';
import { FrasesComponent } from '../frases/frases.component';

@Component({
  selector: 'app-imagem',
  imports: [],
  templateUrl: './imagem.component.html',
  styleUrl: './imagem.component.css'
})
export class ImagemComponent {
  imagemBiscoito: string="biscoito.png"

  public AbrirBiscoito(): void {
    const images = {
      opened: "/biscoito-aberto.png",
      closed: "/biscoito.png"
    };
  
    this.imagemBiscoito = this.imagemBiscoito === images.opened ? images.closed : images.opened;
  }
}
