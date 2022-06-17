import Link from 'next/link';

function UserPost({ props, link }) {
  return (
    <div className="userPost">
      <h4>{props.title}</h4>
      <p>{props.body}</p>
      {link && (
        <Link href={`/posts/${props.userId}`}>
          <a className="userPostsContainer__link">See all User{props.userId} posts</a>
        </Link>
      )}
    </div>
  );
}

export default UserPost;
