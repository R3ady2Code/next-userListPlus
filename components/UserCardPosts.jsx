import { useEffect } from 'react';

import Link from 'next/link';

import UserPost from './UserPost';

function UserCardPosts({ ...userPosts }) {
  const postsByUser = Object.values(userPosts);

  return (
    <div className="userPostsContainer">
      <h2>User ID{postsByUser[0].userId}</h2>
      <div className="userPostsContainer__posts">
        {[...Array(postsByUser.length === 1 ? 1 : 2)].map((item, i) => (
          <UserPost key={i} props={postsByUser[i]} />
        ))}
      </div>
      <Link href={`/posts/${userPosts[0].userId}`}>
        <a className="userPostsContainer__link">See all user posts</a>
      </Link>
    </div>
  );
}

export default UserCardPosts;
