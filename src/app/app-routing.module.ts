import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuzzBuzzComponent } from './fuzz-buzz/fuzz-buzz.component';
import { InferiorComponent } from './inferior/inferior.component';

const routes: Routes = [{ path: 'fuzzBuzz', component: FuzzBuzzComponent},
                          {path: '', component: InferiorComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
