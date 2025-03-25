import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-botao',
  imports: [],
  templateUrl: './botao.component.html',
  styleUrl: './botao.component.css'
})
export class BotaoComponent {
  @Input() texto: string = '';
  @Input() tipo: 'primario' | 'secundario' | undefined;
  @Input() habilitado: boolean = true;

}
