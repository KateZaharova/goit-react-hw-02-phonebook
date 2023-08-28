import { Layout } from "./Layout";
import { GlobalStyle } from "./GlobalStyle";
import { Component } from "react";
import { Form } from "./Form";
import { ContactList } from "./ContactList";

import { nanoid } from 'nanoid';


export class App extends Component {
  state = {
    contacts: [{ id: "cat", name:"test1" }],
    filter: "",
  };


  addContact = name => {
    console.log(name);

    if (-1 !== this.state.contacts.findIndex(option => option.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    }
    this.setState(prevState => ({
      contacts: [
          ...prevState.contacts,
          { id: nanoid(), name: name },
        ],
    }))
    console.log(this.state.contacts);
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
    <Form onAddContact={this.addContact} />
    <ContactList contacts={this.state.contacts} />
    <GlobalStyle/>
    </Layout>
  );
  };

  
    
};
