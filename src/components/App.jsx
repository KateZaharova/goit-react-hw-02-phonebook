import { Layout } from "./Layout";
import { GlobalStyle } from "./GlobalStyle";
import { Component } from "react";
import { NewPhoneForm } from "./Form";
import { ContactList } from "./ContactList";
import { nanoid } from 'nanoid';


export class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };


  addContact = contact => {
    
    if (-1 !== this.state.contacts.findIndex(option => option.name === contact.name)) {
      alert(`${contact.name} is already in contacts.`);
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), ...contact}],
    }))
    
  } 

  render() {

return (
    <Layout
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}>
    <h1>React homework template</h1>
    <NewPhoneForm onAddContact={this.addContact}/>
    <ContactList contacts={this.state.contacts} />
    <GlobalStyle/>
    </Layout>
  );
  };
};
