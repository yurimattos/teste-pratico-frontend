import styled from "styled-components";

const MainContainer = styled.section`
  display: flex;
  justify-content: center;
  width: 60%;
  margin: 50px auto;
  padding: 25px 10px;
  -webkit-box-shadow: 4px 4px 9px -1px rgba(60, 60, 60, 0.5);
  -moz-box-shadow: 4px 4px 9px -1px rgba(60, 60, 60, 0.5);
  box-shadow: 4px 4px 9px -1px rgba(60, 60, 60, 0.5);
  border-radius: 10px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 50%;
`;

const ProfilePicture = styled.img`
  width: 180px;
  height: 180px;
  margin-bottom: 10px;
`;

const Title = styled.h2`
  font-size: 1.2rem;
  color: #333;
  margin: 0;
`;

const Subtitle = styled.h3`
  font-size: 1rem;
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

export {
  MainContainer,
  InfoContainer,
  ProfilePicture,
  Title,
  Subtitle,
  HorizontalLine,
  Text
};
