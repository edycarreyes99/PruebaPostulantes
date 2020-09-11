import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EstudiantesComponent} from './views/estudiantes/estudiantes.component';
import {AgregarEstudianteComponent} from './views/agregar-estudiante/agregar-estudiante.component';

const routes: Routes = [
  {path: '', component: EstudiantesComponent},
  {path: 'agregar-estudiante', component: AgregarEstudianteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
