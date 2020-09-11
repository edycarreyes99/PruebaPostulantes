import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {EstudiantesComponent} from './views/estudiantes/estudiantes.component';
import {AgregarEstudianteComponent} from './views/agregar-estudiante/agregar-estudiante.component';
import {MaterialDesignModule} from './modules/material-design/material-design.module';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    EstudiantesComponent,
    AgregarEstudianteComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialDesignModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
