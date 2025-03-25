import { Component, Input } from '@angular/core';
import { ImagemComponent } from '../imagem/imagem.component';

@Component({
  selector: 'app-frases',
  imports: [],
  templateUrl: './frases.component.html',
  styleUrl: './frases.component.css'
})
export class FrasesComponent {
  @Input() mostrarFrase: boolean = true;
  @Input() fraseAtual: string = '';

  frases: string[] = [
    "A vida é o que acontece enquanto fazemos outros planos.",
    "O segredo do sucesso é a constância no propósito.",
    "A persistência é o caminho do êxito.",
    "O que você faz hoje pode melhorar todos os seus amanhãs.",
    "O único modo de fazer um excelente trabalho é amar o que você faz.",
    "A felicidade não é algo pronto. Ela vem das suas próprias ações.",
    "Tudo que você pode imaginar é real.",
    "Não espere por uma crise para descobrir o que é importante em sua vida.",
    "A maior glória em viver não está em nunca cair, mas em nos levantarmos a cada queda.",
    "O único lugar onde o sucesso vem antes do trabalho é no dicionário."
  ];

  SortearFrase(): string {
    const indiceAleatorio = Math.floor(Math.random() * this.frases.length);
    return this.frases[indiceAleatorio];
  }
}