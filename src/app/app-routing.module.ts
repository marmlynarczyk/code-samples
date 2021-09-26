import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'local-reference',
    loadChildren: () =>
      import('./local-reference/local-reference.module').then(
        (m) => m.LocalReferenceModule
      ),
  },
  {
    path: 'content-projection',
    loadChildren: () =>
      import('./content-projection/content-projection.module').then(
        (m) => m.ContentProjectionModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
