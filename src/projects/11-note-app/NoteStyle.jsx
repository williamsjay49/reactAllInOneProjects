import styled from "styled-components";

export const NoteStyle = styled.div`
  width: 300px;
  border: 1px solid black;
  border-radius: 15px;
  border: 2px solid #ccc;
  display: flex;
  flex-direction: column;
`;

export const Icons = styled.span`
  flex-basis: 30%;

  padding: 0.5rem 1rem;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-color: ${(props) => props.bgColor || "grey"};
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-size: 1.5rem;
`;

export const DeleteIcon = styled.span`
  &:hover {
    color: red;
  }

  transition: all 0.3s ease;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: none;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background-color: #f8f8f8;
  font-size: 16px;
  resize: none;
`;
