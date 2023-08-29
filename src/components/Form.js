import { Formik  } from 'formik';  //ErrorMessage
import { StyledForm, FieldInfo} from "./Form.styled";
import { Component } from "react";

/*import { Input, FrameForm, ButtonA, FormWrapper } from "./Form.styled";*/


export const NewPhoneForm = () => {
    return (
        <div>
            <h2>Phonebook!</h2>
            <Formik
                initialValues={{
                    name: '',
                }}
                onSubmit={values => {
                    console.log(values);
                }}
            >
                <StyledForm>
                    <label>
                        Name
                    </label>
                    <FieldInfo type="text" name="name" placeholder="Name ..."/> 
                    <button type="submit">Add contact</button>
                </StyledForm>
            </Formik>
        </div>
    );
};




/*export class PhoneForm extends Component{
    state = {
        contactName:"",
    }
    render() {
        const { onAddContact } = this.props;
        return (
                <FormWrapper>
        <h2>Phonebook</h2>
            <FrameForm>
                <label >Name</label>
            <Input
                type="text"
                value={this.state.contactName}
                name="name"
                        onChange={evt => {
                            this.setState(() => ({ contactName: evt.target.value }))
                        }  }
                pattern="^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                />
                <ButtonA type="button" onClick={()=>onAddContact(this.state.contactName)}>Add contact</ButtonA>
       </FrameForm>
        </FormWrapper>   
   ) } }*/

  

/*
initialValues={{
                    name: '',
                    email: '',
                    password: ''
                }}

<Field type="email" name="email" />
<ErrorMessage name="email" component="div" />
<Field type="password" name="password" />
<ErrorMessage name="password" component="div" />

<ErrorMessage name="name" component="div" />
*/