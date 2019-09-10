import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaseLayoutComponent } from './shared/layout/base-layout/base-layout.component';
import { PagesLayoutComponent } from './shared/layout/pages-layout/pages-layout.component';
import { AppsLayoutComponent } from './shared/layout/apps-layout/apps-layout.component';

import { PostulantesComponent } from './postulantes/postulantes.component';
import { PostulanteNuevoComponent } from './postulantes/edicion/postulante-nuevo/postulante-nuevo.component';

// Dashboards

// import { AnalyticsComponent } from './demo-pages/Dashboards/analytics/analytics.component';

const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [

      // Dashboads

      //{ path: '', component: AnalyticsComponent, data: { extraParameter: 'dashboardsMenu' } },
      { path: '', component: PostulantesComponent, data: { extraParameter: '' } },
      { path: 'personas/nuevo-postulante', component: PostulanteNuevoComponent, data: { extraParameter: '' } },
    ]

  },
  {
    path: '',
    component: PagesLayoutComponent,
    children: []
  },
  {
    path: '',
    component: AppsLayoutComponent,
    children: [
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
