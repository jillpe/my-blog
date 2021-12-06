import { Link } from 'react-router-dom';

export default function Post({ post }) {
    return (
        <>
            <div>
                <Link
                    to={{
                        pathname: '/post',
                        state: { post },
                    }}>
                        <h2>{post.title}</h2>
                </Link>
                <div>
                    <h2>{post.date}</h2>
                </div>
            </div>
        </>
    );
  }