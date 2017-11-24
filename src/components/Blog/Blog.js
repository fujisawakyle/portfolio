import React, { Component } from 'react';
//import picture from '../../assets/images/adventure1.jpg';
import Data from '../../data/Data.json';

import {
  BlogContainer,
  BlogTitle,
  PostContainer,
  PostTitle,
  PostImage,
  PostBody
} from './Blog.style';

export default class Blog extends Component {
  blogs = () => {
    for (let i in Data.test.hi) {
      return i;
    }
  };
  render() {
    return (
      <BlogContainer>
        {this.blogs()}
        <BlogTitle>{Data.blog.title}</BlogTitle>
        <PostContainer>
          <PostImage src={Data.blog.second.image} />
          <PostTitle>{Data.blog.second.title}</PostTitle>
          <PostBody>{Data.blog.second.body}</PostBody>
        </PostContainer>
        <PostContainer>
          <PostImage src={Data.blog.first.image} />
          <PostTitle>{Data.blog.first.title}</PostTitle>
          <PostBody>{Data.blog.first.body}</PostBody>
        </PostContainer>
      </BlogContainer>
    );
  }
}
