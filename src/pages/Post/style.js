import styled from "styled-components";

const PostContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  margin: 50px auto;
  padding: 25px 10px;
`;

const Title = styled.h2`
  font-size: 1.4rem;
  font-weight: bold;
  text-transform: capitalize;
  text-align: justify;
  color: #333;
  margin: 10px;
`;

const Body = styled.p`
  font-size: 1rem;
  text-align: justify;
  color: #707070;
  margin: 0;
`;

const HorizontalLine = styled.hr`
  color: #333;
  width: 100%;
`;
const Text = styled.p`
  color: #333;
  font-size: 1em;
`;

export { PostContainer, Title, Body, HorizontalLine, Text };
