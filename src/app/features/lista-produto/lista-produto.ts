import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup ,ReactiveFormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

interface Produto {
  cdBarras: string;
  quantidade: number;
}

@Component({
  selector: 'app-lista-produto',
  imports: [
    ReactiveFormsModule, 
    FloatLabelModule, 
    InputTextModule,
    ButtonModule,
    TableModule
  ],
  templateUrl: './lista-produto.html',
  styleUrl: './lista-produto.scss'
})
export class ListaProduto {
  formInput: FormGroup;
  listaProduto = signal<Produto[]>([]);

  private readonly fb = inject(FormBuilder);

  constructor() {
    this.formInput = this.fb.group({
      cdBarras: [''],
      quantidade: ['']
    })
  };

  inserir() {
    const produto = this.formInput.value as Produto;
    this.listaProduto.update(i => [...i, produto]);
    this.formInput.reset({ cdBarras: '', quantidade: '' })
  }
}
