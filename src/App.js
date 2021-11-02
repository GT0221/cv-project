// eslint-disable-next-line
import React, { Component } from 'react';
import Form from './components/Form';
import DisplayCvApp from './components/DisplayCvApp';

class App extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
              inputValue: {
                name: '',
                DOB: '',
                email: '',
                phone: '',
                school: '',
                major: '',
                schoolStart: '',
                schoolEnd: '',
                company: '',
                position: '',
                description: '',
                workStart: '',
                workEnd: '',
              },
              displayForm: true,
              displayCV: false,
            }
        this.displayForm = true;
        this.displayCV = true;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }
    handleChange(e) {
        this.setState({
            inputValue: {...this.state.inputValue,
              [e.target.name]: e.target.value,
            }
        });
    };

    handleSubmit(e) {
        e.preventDefault();
        this.setState({
          displayForm: !this.state.displayForm,
          displayCV: !this.state.displayCV,
        });
    };
  
    handleEdit() {
        this.setState({
          displayForm: !this.state.displayForm,
          displayCV: !this.state.displayCV,
        }); 
    };

    render() {
        return (
            <div className='container'>
                <div className='project-title'><h1>CV Application</h1></div>
                <Form info={this.state.inputValue} display={this.state.displayForm} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
            <DisplayCvApp info={this.state.inputValue} display={this.state.displayCV} handleEdit={this.handleEdit}/>
            </div>
        )
    }
}

export default App;
