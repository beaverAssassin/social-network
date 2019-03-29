import styled from "styled-components";


export const LoginPage = styled.div`
 position: absolute;
    margin:auto;
    height:auto;
    display:flex;
    justify-content: center;
    align-items: center;
    left:50%; margin-left:-150px;
    top:50%;margin-top:-150px;
    border: 5px outset #1E90FF;
    padding: 14px;

`;

export const LoginForm = styled.form`
max-width: 300px;
min-width: 300px;

& input{
    padding: 5px;
    margin-top: 10px;
    margin-bottom: 10px;
    background-color:#e1e1e1;
  }

  `;

export const InputArea = styled.div`
display: flex;
    flex-direction:column;

  }
  `;