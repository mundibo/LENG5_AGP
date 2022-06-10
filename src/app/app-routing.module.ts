import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'reestablecer',
    loadChildren: () => import('./reestablecer/reestablecer.module').then( m => m.ReestablecerPageModule)
  },
  {
    path: 'registrarusuario/:id',
    loadChildren: () => import('./registrarusuario/registrarusuario.module').then( m => m.RegistrarusuarioPageModule)
  },
  {
    path: 'registrarusuario',
    loadChildren: () => import('./registrarusuario/registrarusuario.module').then( m => m.RegistrarusuarioPageModule)
  },
  {
    path: 'registrarcolaborador/:id',
    loadChildren: () => import('./registrarcolaborador/registrarcolaborador.module').then( m => m.RegistrarcolaboradorPageModule)
  },
  {
    path: 'registrarreunion',
    loadChildren: () => import('./registrarreunion/registrarreunion.module').then( m => m.RegistrarreunionPageModule)
  },
  {
    path: 'registrarreunion/:id',
    loadChildren: () => import('./registrarreunion/registrarreunion.module').then( m => m.RegistrarreunionPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'reconocimiento/:id',
    loadChildren: () => import('./reconocimiento/reconocimiento.module').then( m => m.ReconocimientoPageModule)
  },
  {
    path: 'reconocimiento',
    loadChildren: () => import('./reconocimiento/reconocimiento.module').then( m => m.ReconocimientoPageModule)
  },
  {
    path: 'colaboradores',
    loadChildren: () => import('./colaboradores/colaboradores.module').then( m => m.ColaboradoresPageModule)
  },
  {
    path: 'valores',
    loadChildren: () => import('./valores/valores.module').then( m => m.ValoresPageModule)
  },
  {
    path: 'registrarvalor/:id',
    loadChildren: () => import('./registrarvalor/registrarvalor.module').then( m => m.RegistrarvalorPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'reuniones/:id',
    loadChildren: () => import('./reunion/reunion.module').then( m => m.ReunionPageModule)
  },
  {
    path: 'reuniones',
    loadChildren: () => import('./reunion/reunion.module').then( m => m.ReunionPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
