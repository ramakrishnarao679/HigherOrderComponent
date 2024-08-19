import React from 'react';
import HigherOrderComponents from '../HigherOrderComponent';

const Posts = ({data})=>{
    return (
        <div>
            <h2>Data from the Posts</h2>
            {data.slice(0,10).map((post)=>{
                return <p>{post.title}</p>
            })}
        </div>
    )
}
const PostsComp = HigherOrderComponents('Posts', Posts, 'posts');
export default PostsComp;