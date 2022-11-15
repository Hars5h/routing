import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from './components/album/album.component';
import { PostComponent } from './components/post/post.component';
import { TodoComponent } from './components/todo/todo.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {path:'user',component:UsersComponent},
  {path:'todo',component:TodoComponent},
  {path:'album',component:AlbumComponent},
  {path:'post',component:PostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
