import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Conta } from 'src/app/shared/models/Conta';
import { SaqueDeposito } from 'src/app/shared/models/SaqueDeposito';
import { ClienteService } from 'src/app/shared/services/cliente.service';
import { ContaService } from 'src/app/shared/services/conta.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-saque-conta',
  templateUrl: './saque-conta.component.html',
  styleUrls: ['./saque-conta.component.scss']
})
export class SaqueContaComponent {
  formGroup: FormGroup;
  contas: Conta[]

  constructor(private contaService: ContaService, private router: Router, private clienteService: ClienteService) {

    this.formGroup = new FormGroup({
      valor: new FormControl('', Validators.required),
      conta: new FormControl('', Validators.required)
    });
    this.contas = []
  }
  ngOnInit(): void {
    this.listarContas()
  }

  listarContas(): void {
    this.contaService.listar().subscribe(contas => {
      this.clienteService.listar().subscribe(clientes => {
        const contasComNomesDeClientes = contas.map(conta => {
          const cliente = clientes.find(cliente => cliente.id === conta.cliente);
          if (cliente) {
            conta.nomeCliente = cliente.nome;
          }
          return conta;
        });
        this.contas = contasComNomesDeClientes;
      });
    })
  }

  cadastrar() {
    const saque: SaqueDeposito = this.formGroup.value;
    // Modo de criação
    this.contaService.saque(saque).subscribe({
      next: () => {
        Swal.fire({
          icon: 'success',
          title: 'Sucesso',
          text: 'Saque registrado com sucesso!',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigate(['/conta']);
      },
      error: (error) => {
        console.error(error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Erro ao registrar saque!',
        });
      }
    });
  }
}
