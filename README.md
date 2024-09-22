# Sistema Bancário - Angular Bootcamp

Este projeto faz parte da pós-graduação em **Fullstack Web Development**, na disciplina **Angular Bootcamp**. Trata-se de um sistema bancário desenvolvido com Angular, permitindo o gerenciamento de clientes e contas bancárias. As funcionalidades incluem cadastro, listagem e edição de clientes, além de operações bancárias como depósito, saque e transferência entre contas.

## Funcionalidades Principais

### Módulo Cliente
- **Cadastrar Cliente**: Adicionar um novo cliente ao sistema.
- **Listar Clientes**: Exibir todos os clientes cadastrados.
- **Editar Cliente**: Alterar os dados de um cliente existente.

### Módulo Conta
- **Cadastrar Conta**: Criar uma nova conta bancária para um cliente.
- **Depositar em Conta**: Adicionar saldo a uma conta existente.
- **Sacar de Conta**: Realizar saques de uma conta bancária.
- **Transferir Entre Contas**: Realizar transferências de saldo entre contas diferentes.
- **Listar Contas**: Visualizar todas as contas cadastradas no sistema.

## Tecnologias Utilizadas

Este projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) versão 16.1.0. As seguintes dependências foram utilizadas:

### Dependências Principais
- **Angular** (v16.1.0): Framework principal para desenvolvimento da aplicação.
- **Angular Material** (v16.2.14): Componentes visuais baseados no Material Design.
- **Bootstrap** (v5.3.3): Framework CSS para design responsivo.
- **jQuery** (v3.3.1): Biblioteca JavaScript para manipulação do DOM.
- **ngx-mask** (v18.0.0): Máscaras de entrada para campos de formulário.
- **SweetAlert2** (v11.14.0): Alertas e diálogos personalizados.
- **rxjs** (v7.8.0): Programação reativa com streams de dados.
- **zone.js** (v0.13.0): Contexto de execução para detecção de mudanças no Angular.

## Rotas Principais

As rotas da aplicação estão organizadas da seguinte forma:

### Módulo Cliente
- **`/cliente/novo`**: Cadastrar um novo cliente.
- **`/cliente/editar/:id`**: Editar um cliente existente.
- **`/cliente`**: Listar todos os clientes.

### Módulo Conta
- **`/conta/novo`**: Cadastrar uma nova conta bancária.
- **`/conta/editar/:id`**: Editar uma conta bancária existente.
- **`/conta/deposito`**: Realizar um depósito em uma conta.
- **`/conta/saque`**: Realizar um saque de uma conta.
- **`/conta/transferencia`**: Realizar uma transferência entre contas.
- **`/conta`**: Listar todas as contas.

## Executando o Projeto

### Servidor de Desenvolvimento
Para iniciar o servidor de desenvolvimento, execute o comando:
```bash
ng serve
```
A aplicação estará disponível em `http://localhost:4200/`.
