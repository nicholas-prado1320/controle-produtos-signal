# 📦 Controle de Produtos com Angular Signals

Este é um projeto simples em **Angular + PrimeNG** que demonstra como utilizar **Signals** para gerenciar estado reativo de forma moderna, sem depender de `BehaviorSubject` ou `NgRx` em cenários simples.

---

## 🚀 Tecnologias utilizadas
- [Angular 20](https://angular.dev/)  
- [PrimeNG](https://primeng.org/) (UI Components)  
- Signals API (`signal`)  
- Reactive Forms (`FormBuilder`, `FormGroup`)  

---

## 🎯 Objetivo do projeto
Criar uma tela de **cadastro de produtos** onde o usuário pode:
- Inserir um **código de barras** e uma **quantidade**.  
- Clicar em **Inserir** para adicionar o item na lista.  
- Visualizar os produtos em uma **tabela reativa** (`p-table`) que se atualiza automaticamente ao inserir itens.

---

## 🧩 Estrutura
### Signals
```ts
listaProduto = signal<Produto[]>([]);
