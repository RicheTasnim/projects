import './Posts.css'
export default function Post({post}){
    const {title, userId, id, bosy} = post;
    
    return(
        <div className='post'>
            <h5>Title: {post.title} </h5>
            <p><small>userId: {post.userId} </small></p>
            <p><small>postId: {post.id} </small></p>
            <p>Description: {post.body} </p>
        </div>
    )
}
