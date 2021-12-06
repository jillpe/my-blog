import Post from '../../components/Post/Post'

export default function AllPostsPage(props) {
  
    return (
      <>
        <h1>Posts</h1>
        <div>
          {props.posts.map(post =>(
            <Post
              post={post}
              key={post._id}
            />
          ))}
        </div>
      </>
    );
  }