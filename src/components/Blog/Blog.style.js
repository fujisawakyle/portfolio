import styled from 'styled-components';
import media from '../../theme/media';

export const BlogContainer = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom, #22c5ff, #48f4e5);
  height: 100vh;
`;

export const BlogTitle = styled.div`
  font-size: 3rem;
  position: relative;
  margin-bottom: 0.5rem;
  color: #781ec5;

  &::before {
    content: url('../../assets/graphics/RedCloud.svg');
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;
    width: 50%;
  }
`;

export const PostContainer = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.5);
  width: 85%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0.5rem;
`;
export const PostImage = styled.img`
  width: 100%;
`;

export const PostTitle = styled.div`
  text-align: center;
  text-decoration: underline;
  font-size: 1.5rem;
  margin: 0.5rem;
`;

export const PostDate = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

export const PostBody = styled.div`
  position: relative;
  width: 90%;
  margin-bottom: 0.5rem;
`;
