import React, { Component, Fragment } from "react";
import DatePicker from "react-datepicker";
import moment from 'moment';
import { FormGroup, Label, Button } from 'reactstrap';

import "react-datepicker/dist/react-datepicker.css";

export default class PortDate extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dateValue: moment(),
      isHidden: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  setFieldValueAndTouched(date, touched) {
    const { setFieldValue, setFieldTouched } = this.props.form;
    const { name } = this.props.field;
    setFieldValue(name, date, true);
    setFieldTouched(name, touched, true);
  }

  handleChange (date) {
    this.setState({
      dateValue: date
    });
    this.setFieldValueAndTouched(date, true);
  };

  toggleDate(date) {
    this.setState({
      isHidden: !this.state.isHidden
    })
    this.setFieldValueAndTouched(date, true);
  }
 
  render() {
    const { canBeDisabled, label, field, form: { touched, errors } } = this.props;
    const { isHidden, dateValue } = this.state;

    return (
      <FormGroup>  
        <Label>{label}</Label>
        <div className='input-group'>
          { !isHidden &&
            <DatePicker
              selected={ dateValue }
              onChange={ this.handleChange }
              peekNextMonth
              showMonthDropdown
              showYearDropdown
              maxDate={ moment() }
              dropdrownMode='select'
            />
          }
        </div>
        { !isHidden && canBeDisabled && <Button onClick={ () => this.toggleDate() }>Still working here..</Button>}
        { isHidden && canBeDisabled &&
          <Fragment>
            <span>
              Currently Working Here
              <Button onClick={ () => this.toggleDate(dateValue) } > Set End Date </Button>

            </span>
          </Fragment>
        }
        
        { touched[field.name] &&
            errors[field.name] && <div className="error">{ errors[field.name] }</div> }
      </FormGroup>
    );
  }
}
