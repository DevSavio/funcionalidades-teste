import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormAssociacaoComponent } from './associacao/form-associacao/form-associacao.component';
import { ListAssociacaoComponent } from './associacao/list-associacao/list-associacao.component';
import { AssociacaoPageComponent } from './associacao/associacao-page/associacao-page.component';

const routes: Routes = [
  { path: 'form', component: FormAssociacaoComponent },
  { path: 'list', component: ListAssociacaoComponent },
  { path: 'page', component: AssociacaoPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssociacaoRoutingModule {}
