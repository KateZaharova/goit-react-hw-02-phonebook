import { Formik } from 'formik';
import { StyledForm, FieldInfo, ButtonAdd, ErrorMsg } from "./Form.styled";
import * as Yup from 'yup';


const ContactFormSchema = Yup.object().shape({
    name: Yup.string()
        .min(4, 'Too Short!')
        .required('Required'),
    phone: Yup.number()
        .min(3, 'At least 3')
        .positive('Must be positive!')
        .required("Required"),
});

export const ContactForm = ({onAddContact}) => {
    return (
        <div>
            
            <Formik
                initialValues={{
                    name: '',
                    phone: '',
                }}
                validationSchema={ContactFormSchema}
                onSubmit={(values, actions) => {
                    onAddContact(values);
                    actions.resetForm();
                }}
            >
                <StyledForm>
                    <label>
                        Name
                    </label>
                    <FieldInfo type="text" name="name" placeholder="Name ..." /> 
                    <ErrorMsg name="name" component="div" />
                    <label>
                        Number
                    </label>
                    <FieldInfo type="number" name="phone" placeholder="Number ..." /> 
                    <ErrorMsg name="phone" component="div" />
                    <ButtonAdd type="submit">Add contact</ButtonAdd>
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

  

