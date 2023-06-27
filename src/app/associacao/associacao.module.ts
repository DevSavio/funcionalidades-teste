import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListAssociacaoComponent } from './associacao/list-associacao/list-associacao.component';
import { FormAssociacaoComponent } from './associacao/form-associacao/form-associacao.component';
import { AssociacaoRoutingModule } from './associacao-routing.module';
import { AssociacaoPageComponent } from './associacao/associacao-page/associacao-page.component';
import {
  NbButtonModule,
  NbCardModule,
  NbWindowModule,
  NbWindowService,
} from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  declarations: [
    ListAssociacaoComponent,
    FormAssociacaoComponent,
    AssociacaoPageComponent,
  ],
  imports: [
    CommonModule,
    AssociacaoRoutingModule,
    NbCardModule,
    NbWindowModule.forRoot(),
    NbButtonModule,
    Ng2SmartTableModule,
  ],
  providers: [NbWindowService],
})
export class AssociacaoModule {
  static forRoot(
    config: ListAssociacaoComponent
  ): ModuleWithProviders<AssociacaoModule> {
    return {
      ngModule: AssociacaoModule,
      providers: [{ provide: ListAssociacaoComponent, useValue: config }],
    };
  }
}
