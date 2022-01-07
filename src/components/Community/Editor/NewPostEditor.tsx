import React, { useState, useEffect } from "react";
import TestEditorForm from "./PostEditor";
import {
  StyledButton,
  StyledInput,
  StyledSection,
  StyledStack,
} from "../../../styles/styles.component";
import { useNavigate } from "react-router";
import { addDoc, collection } from "firebase/firestore";
import { dbService } from "../../../myFirebase";

function NewPostEditor(): JSX.Element {
  const navigate = useNavigate();
  const [editorValue, setEditorValue] = useState<string>("");
  const [value, setValue] = useState({
    title: "",
    nickname: "",
    password: "",
    time: "",
  });

  const SendTheData = async () => {
    if (editorValue === "" || editorValue === "<p></p>\n")
      return alert("빈 게시글을 작성할 수 없습니다.");
    if (value.nickname === "" || value.password === "" || value.title === "")
      return alert("빈 형식이 있습니다.");
    try {
      const docRef = await addDoc(collection(dbService, "community"), {
        title: value.title,
        userNickname: value.nickname,
        value: editorValue,
        password: value.password,
        time: Date.now(),
      });

      console.log("Document written with ID: ", docRef.id);
      navigate("/community/");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <StyledSection height="900px">
      <StyledStack justifyContent="center">
        <StyledInput
          onChange={handleChange}
          id="community-newPost-title"
          name="title"
          type="text"
          placeholder="제목"
        />
        <StyledInput
          onChange={handleChange}
          id="community-newPost-nickname"
          name="nickname"
          type="text"
          placeholder="닉네임"
        />
      </StyledStack>

      <TestEditorForm setEditorValue={setEditorValue} />
      <StyledInput
        onChange={handleChange}
        id="community-newPost-password"
        name="password"
        type="text"
        placeholder="비밀번호"
      />
      <StyledButton
        onClick={() => {
          SendTheData();
        }}
      >
        글 작성
      </StyledButton>
    </StyledSection>
  );
}

export default NewPostEditor;
