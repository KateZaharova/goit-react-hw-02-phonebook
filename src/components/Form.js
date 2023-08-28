import { Input, FrameForm, Button, FormWrapper } from "./Form.styled";
import { Component } from "react";

export class Form extends Component{
    state = {
        contactName:"",
    }

    render() {
        const { onAddContact } = this.props;

        return(
        <div>
        <h2>Phonebook</h2>
            <FrameForm>
                <label >Name</label>
            <Input
                type="text"
                value={this.state.contactName}
                name="name"
                        onChange={evt => {
                            this.setState(() => ({ contactName: evt.target.value }))
                        }
                }
                pattern="^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                />
                <Button type="button" onClick={()=>onAddContact(this.state.contactName)}>Add contact</Button>
       </FrameForm>
        </div>
   ) 
    }
}