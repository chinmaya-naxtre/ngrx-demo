import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { AddPostComponent } from "./add-post/add-post.component";
import { EditPostComponent } from "./edit-post/edit-post.component";
import { PostsListComponent } from "./posts-list/posts-list.component";
import { postsReducer } from "./state/posts.reducer";



const routes: Routes =[
    { path: '', component: PostsListComponent, children:[
        { path: 'add-post', component: AddPostComponent},
        { path: 'edit/:id', component: EditPostComponent},
    ]},
]
@NgModule({
    declarations:[],
    imports:[CommonModule, ReactiveFormsModule, RouterModule.forChild(routes), StoreModule.forFeature('posts', postsReducer)]
})
export class PostsModule {
     
}