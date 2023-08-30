import { Formik } from 'formik';
import { StyledForm, FieldInfo, ButtonAdd, ErrorMsg } from "./Form.styled";
import * as Yup from 'yup';


const NewPhoneFormSchema = Yup.object().shape({
    name: Yup.string()
        .min(4, 'Too Short!')
        .required('Required'),
    phone: Yup.number()
        .min(3, 'At least 3')
        .positive('Must be positive!')
        .required("Required"),
});

export const NewPhoneForm = ({onAddContact}) => {
    return (
        <div>
            <h2>Phonebook!</h2>
            <Formik
                initialValues={{
                    name: '',
                    phone: '',
                }}
                validationSchema={NewPhoneFormSchema}
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

