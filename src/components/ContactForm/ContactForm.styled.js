import styled from 'styled-components';


export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width:500px;
  padding:20px;

  &>label{
    display: flex;
    flex-direction: column;
    font-weight:bold;
  }

  &>button {
   border-radius: 5px;
    padding: 3px;
    width: 90px;
    background-color: #fff;
    font-weight:bold;
    justify-content:center;

    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    
    &:active{
      background-color:blue;
      color: #ffffff;
    }
  }
`

export const ListSpan = styled.span`
  margin-bottom: 5px;
`;