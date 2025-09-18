import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaProduto } from "./features/lista-produto/lista-produto";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListaProduto],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('TesteVitalSis');
}
