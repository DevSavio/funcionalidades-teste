import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomHttpClient } from './customHttpClient';
import { HttpClientModule } from '@angular/common/http';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbCardModule,
  NbContextMenuModule,
  NbIconModule,
  NbLayoutModule,
  NbMenuModule,
  NbSidebarModule,
  NbThemeModule,
  NbListModule,
  NbWindowService,
  NbWindowModule,
  NbButtonModule,
} from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
declare module '@angular/core' {
  interface ModuleWithProviders<T = any> {
    ngModule: Type<T>;
    providers?: (Provider | EnvironmentProviders)[] | undefined;
  }
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    FormsModule,
    NbEvaIconsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NbIconModule,
    NbThemeModule.forRoot(),
    NbLayoutModule,
    NbSidebarModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbCardModule,
    NbContextMenuModule,
    NbListModule,
    BrowserAnimationsModule,
    NbWindowModule.forChild(),
    NbButtonModule,
    Ng2SmartTableModule,
  ],
  providers: [CustomHttpClient, NbWindowService],
  bootstrap: [AppComponent],
})
export class AppModule {}
