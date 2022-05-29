import Link from 'next/link';

import UserPost from './UserPost';

function UserCardPosts({ ...userPosts }) {
  return (
    <div className="userPostsContainer">
      <h2>User ID{userPosts[0].userId}</h2>
      <div className="userPostsContainer__posts">
        {[...Array(2)].map((post, i) => (
          <UserPost key={i} props={userPosts[i]} />
        ))}
      </div>
      <Link href={`/posts/${userPosts[0].userId}`}>
        <a className="userPostsContainer__link">See all user posts</a>
      </Link>
    </div>
  );
}

export default UserCardPosts;
