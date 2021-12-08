import { Post } from "src/app/models/posts.models";

export interface PostsState {
    posts: Post[];
}

export const initialState: PostsState = {
    posts: [
        {id:"1", title:"Sample data 1", description: "Sample data description 1"},
        {id:"2", title:"Sample data 2", description: "Sample data description 2"}
    ]
}