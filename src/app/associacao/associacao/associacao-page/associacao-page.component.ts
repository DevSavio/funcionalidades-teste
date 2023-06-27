import { Component, ViewChild } from '@angular/core';
import { ListAssociacaoComponent } from '../list-associacao/list-associacao.component';
import { NbWindowService } from '@nebular/theme';
import { Router } from '@angular/router';

@Component({
  selector: 'app-associacao-page',
  templateUrl: './associacao-page.component.html',
  styleUrls: ['./associacao-page.component.css'],
})
export class AssociacaoPageComponent {
  @ViewChild(ListAssociacaoComponent, { static: true })
  listAssociacaoComponent!: ListAssociacaoComponent;

  constructor(private router: Router) {}

  // openNewItem() {
  //   this.windowService
  //     .open(ListAssociacaoComponent, { title: `Novo registro` })
  //     .onClose.subscribe((ret) => {
  //       this.listAssociacaoComponent.obterAssociacao();
  //     });
  // }

  navigateToList() {
    this.router.navigate(['associacao/list']);
  }
}
