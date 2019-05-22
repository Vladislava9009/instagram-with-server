import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  cursor: pointer;
`;

interface IPostProps {
  userName: string;
  url: string;
  likes: number;
  text: string;
}

export const Post = ({ userName, url, likes, text }: IPostProps) => {
  return (
    <Wrapper>
      <h5>{userName}</h5>
      <img src={url} alt="" />
      <p>Likes-{likes}</p>
      <p>{text}</p>
      <hr />
    </Wrapper>
  );
};
