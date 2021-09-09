import React from 'react'

function PostList (props) {

    return (
        <div>
            {props.list?.map(post => (
                <div className='post' key={post.id}> 
                    <h4>{post.title}</h4>
                    <p>{post.body}</p>
                </div>)
            )}
        </div>
    )

}

export default PostList