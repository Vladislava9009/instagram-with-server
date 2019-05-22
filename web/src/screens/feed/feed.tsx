import React, { useState, useEffect } from 'react';

import { Post } from './post';
import { Button } from './button';
import styled from 'styled-components';

import { InstagramService } from '../../services/instagram-service';

const Wrapper = styled.div`
  width: 320px;
  margin: 0 auto;
`;

const FeedButton = styled(Button)`
  position: fixed;
  top: 30px;
  right: 250px;
`;

interface IPost {
  user: { username: string };
  images: { low_resolution: { url: string } };
  likes: { count: number };
  caption: { text: string; id: number };
  id: string;
}

export function Feed() {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await InstagramService.getPost();
      setPosts(posts);
    };
    fetchPosts();
  }, []);

  return (
    <Wrapper>
      <FeedButton onClick={InstagramService.logout}>Log out</FeedButton>
      {posts.map((post) => (
        <Post
          key={post.id}
          userName={post.user.username}
          url={post.images.low_resolution.url}
          likes={post.likes.count}
          text={post.caption === null ? '' : post.caption.text}
        />
      ))}
    </Wrapper>
  );
}
