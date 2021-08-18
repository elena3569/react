import React from 'react'
import { Button } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { POSTS_REQUEST_STATUS } from '../../store/reducers/posts' 
import { getListPosts } from '../../store/actions/posts'
import { CircularProgress } from '@material-ui/core'

function Posts () {

    const { list, status } = useSelector(state => state.posts)
    const dispatch = useDispatch()

    function getPosts () { 
        dispatch(getListPosts())
    }

    if (status === POSTS_REQUEST_STATUS.LOADING) {
        return <>
            <h2>Posts</h2>
            <Button onClick={getPosts}>Load posts</Button> 
            <div>
                <CircularProgress />
            </div>
        </>
    }

    return (
        <div>
            <h2>Posts</h2>
            <Button onClick={getPosts}>Load posts</Button> 
            {status !== POSTS_REQUEST_STATUS.ERROR ? (
                <div>
                    {list?.map(post => (
                        <div key={post.id}> 
                            <h4>{post.title}</h4>
                            {post.body}
                        </div>
                    ))}
                </div>
            ) :  <h4>Error of Loading</h4>}

        </div>
    )

}

export default Posts