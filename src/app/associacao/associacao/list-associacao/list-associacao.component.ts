import { Component, OnInit } from '@angular/core';
import { NbWindowService } from '@nebular/theme';
import { AssociacaoService } from 'src/app/service/associacao.service';
import { Associacao } from '../../associacao';
import { FormAssociacaoComponent } from '../form-associacao/form-associacao.component';

@Component({
  selector: 'app-list-associacao',
  templateUrl: './list-associacao.component.html',
  styleUrls: ['./list-associacao.component.css'],
})
export class ListAssociacaoComponent implements OnInit {
  constructor(
    private associacaoService: AssociacaoService,
    private windowService: NbWindowService
  ) {}

  list: Associacao[] = [];

  settings = {
    hideSubHeader: true,

    columns: {
      id: {
        title: 'ID',
      },
      produto1: {
        title: 'Produto 1',
      },
      produto2: {
        title: 'Produto 2',
      },
      produto3: {
        title: 'Produto 3',
      },
      produto4: {
        title: 'Produto 4',
      },
    },
    actions: {
      custom: [
        {
          name: 'edit',
          title: '<i class="nb-edit"></i>',
        },
        {
          name: 'delete',
          title: '<i class="nb-trash"></i>',
        },
      ],
      add: false,
      edit: false,
      delete: false,
    },
  };

  onCustom(event: any) {
    if (event.action == 'edit') {
      this.onEdit(event);
    }
    if (event.action == 'delete') {
      alert('Está certo da sua DECISÂO??');
      this.onDelete(event.data.id);
    } else {
      this.obterAssociacao();
    }
  }

  ngOnInit(): void {
    this.obterAssociacao();
  }

  obterAssociacao() {
    this.associacaoService.obterAssociacao().subscribe((ret) => {
      this.list = ret;
    });
  }

  onEdit(event: any) {
    this.windowService
      .open(FormAssociacaoComponent, {
        title: `Novo registro`,
        context: event.data,
      })
      .onClose.subscribe((ret) => {
        this.obterAssociacao();
      });
  }

  onDelete(id: number) {
    this.associacaoService.apagarAssociacao(id).subscribe((ret) => {
      this.obterAssociacao();
    });
  }
}
