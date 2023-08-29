import { Form, Field} from 'formik';
import styled from "styled-components";



export const StyledForm = styled(Form)`
display: flex;
flex-direction: column;
padding:20px;
gap: 20px;
border: 4px solid black;
border-radius: 8px;
width: 600px;
`;

export const FieldInfo = styled(Field)`
border: 4px solid blue;
font-size: 24px;
margin-top: 20px;
margin-bottom: 40px;
border-radius: 8px;
`;

/*
export const ButtonAdd = styled(Button)`
align-self: flex-start;
font-size: 24px;
border: 4px solid black;
border-radius: 8px;
`;


export const Input = styled.input`
border: 4px solid blue;
font-size: 40px;
margin-top: 20px;
margin-bottom: 40px;
border-radius: 8px;
`

export const FrameForm = styled.form`
display: flex;
flex-direction: column;

`

export const ButtonA = styled.button`
align-self: flex-start;
font-size: 24px;
border: 4px solid black;
border-radius: 8px;
`

export const FormWrapper = styled.div`
padding:20px;
border: 4px solid black;
border-radius: 8px;
width: 600px;
`
*/
