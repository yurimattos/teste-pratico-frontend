import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaSuitcase } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import api from "../../server/api";
import NavigationBar from "../../components/Navigationbar";
import {
  MainContainer,
  InfoContainer,
  ProfilePicture,
  Title,
  Subtitle,
  HorizontalLine,
  Text,
} from "./style";

const User = () => {
  const [user, setUser] = useState();
  const { id } = useParams();

  async function getUser(id) {
    try {
      api.get(`users/${id}`).then(({ data }) => {
        setUser(data);
      });
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getUser(id);
  });

  return (
    <>
      <NavigationBar />
      <MainContainer>
        <InfoContainer>
          <ProfilePicture
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt="User"
          />
          <Title>{user?.name}</Title>
          <Subtitle>{user?.username}</Subtitle>
          <HorizontalLine />
          <FaSuitcase />
          <Text>{user?.company?.name}</Text>
          <IoLocationSharp />
          <Text>{user?.address?.city}</Text>
        </InfoContainer>
      </MainContainer>
    </>
  );
};

export default User;
