import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, Alert } from 'reactstrap';
import moment from 'moment';
import PortInput from '../form/PortInput';
import PortDate from '../form/PortDate';

const validateInputs = (values) => {
  let errors = {};
  Object.entries(values).forEach(([key, value]) => {
    if (!values[key] && key !== 'endDate') {
      errors[key] = `${key.replace(/^\w/, c => c.toUpperCase())} is required.`;
    }
  });

  const startDate = moment(values.startDate);
  const endDate = moment(values.endDate);

  if (startDate && endDate && endDate.isBefore(startDate)) {
    errors.endDate = 'End Date can not be before Start Date.';
  }

  return errors;
}

const PortfolioCreateForm = ({ initialValues, onSubmit, error }) => (  
  <div>
    <Formik
      initialValues={ initialValues }
      validate={ validateInputs }
      onSubmit={ onSubmit }
    >
      {({ isSubmitting }) => (
        <Form>
          <Field 
            type='text' 
            label='Title' 
            name='title' 
            autoComplete='off' 
            component={ PortInput } />
          <Field 
            type='text' 
            label='Languages' 
            name='languages' 
            autoComplete='off' 
            component={ PortInput } />  
          <Field 
            type='title' 
            label='Company' 
            name='company' 
            autoComplete='off' 
            component={ PortInput } />
          <Field 
            type='title' 
            label='Location' 
            name='location' 
            autoComplete='off' 
            component={ PortInput } /> 
          <Field 
            type='title' 
            label='Position' 
            name='position' 
            autoComplete='off' 
            component={ PortInput } />
          <Field  
            type='textarea' 
            label='Description' 
            name='description' 
            autoComplete='off' 
            component={ PortInput } />
          <Field 
            label='Start Date'
            name='startDate' 
            initialDate={ initialValues.startDate }           
            component={ PortDate } />  
          <Field 
            label='End Date' 
            name='endDate'
            initialDate={ initialValues.endDate } 
            canBeDisabled={true}
            component={ PortDate } />

          { error && 
            <Alert color="danger">
              { error }
            </Alert>
          }

          <Button 
            type='submit' 
            disabled={ isSubmitting }
            color="success"
            size="lg"
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  </div>
);

export default PortfolioCreateForm;





// import React, { Component } from 'react';

// class PortfolioCreateForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {title: '', description: '', language: ''};
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({[event.target.name]: event.target.value});
//   }

//   handleSubmit(event) {
//     alert('Your project has been submitted: ' + this.state.title + ' ' + this.state.description + ' ' + this.state.language);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//          <label>
//           Project Name:
//           <input name='title' type='text' value={this.state.value} onChange={this.handleChange} />
//         </label>
//         <label>
//           Description
//           <textarea name='description' value={this.state.description} onChange={this.handleChange} />
//         </label>    
//         <label>
//           Language:
//           <select name='language' value={this.state.language} onChange={this.handleChange}>
//             <option value='ruby'>Ruby</option>
//             <option value='javascript'>JavaScript</option>
//             <option value='react'>React</option>
//             <option value="anguluar">Angular</option>
//             <option value='vue-js'>Vue.JS</option>
//             <option value='python'>Python</option>
//             <option value='java'>Java</option>
//             <option value='c#'>C#</option>
//             <option value='c++'>C++</option>
//             <option value='other'>Other</option>
//           </select>
//         </label>
//         <input type='submit' value='Submit' />
//       </form>
//     );
//   }
// }

// export default PortfolioCreateForm;