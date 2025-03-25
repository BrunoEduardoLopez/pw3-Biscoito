import { Component } from '@angular/core';
import { ImagemComponent } from "../imagem/imagem.component";
import { FrasesComponent } from "../frases/frases.component";
import { BotaoComponent } from "../botao/botao.component";

@Component({
  selector: 'app-biscoito',
  imports: [ImagemComponent, FrasesComponent, BotaoComponent],
  templateUrl: './biscoito.component.html',
  styleUrl: './biscoito.component.css'
})
export class BiscoitoComponent {
  imagemBiscoito: string = 'biscoito.png';
  imagemBiscoitoAberto: string = 'biscoito-aberto.png';
  imagemAtual: string = this.imagemBiscoito;
  mostrarFrase: boolean = false;
  fraseAtual: string = '';
  botoesHabilitados: boolean = true;

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

  quebrarBiscoito() {
    this.imagemAtual = this.imagemBiscoitoAberto;
    const indiceAleatorio = Math.floor(Math.random() * this.frases.length);
    this.fraseAtual = this.frases[indiceAleatorio];
    this.mostrarFrase = true;
    this.botoesHabilitados = false;
  }

  reiniciarBiscoito() {
    this.imagemAtual = this.imagemBiscoito;
    this.mostrarFrase = false;
    this.fraseAtual = '';
    this.botoesHabilitados = true;
  }
}
