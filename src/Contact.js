import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

// Contact form for ButterBox. When form is submitted, the user is notified
// via an alert box.

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    alert("Thank you for contacting us! We'll respond as soon as possible.");
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <div className="contactHeader text-center">
          <h2 className="header-font">Contact us</h2>
          <p className="contact-text">Do you have questions, or feedback about our products? Let us know!</p>
        </div>
        <Form className="contactForm"onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label className="contact-text">Name:</Label>
            <Input type="text" />
          </FormGroup>
          <FormGroup>
            <Label className="contact-text" for="exampleEmail">Email:</Label>
            <Input type="email" name="email" id="exampleEmail" />
          </FormGroup>
          <FormGroup>
           <Label className="contact-text" for="exampleText">Enter your question or comment here:</Label>
           <Input type="textarea" name="text" id="exampleText" />
         </FormGroup>
         <Button className="contactSubmit" type="submit" value="Submit">Submit</Button>
        </Form>
      </div>
    );
  }
}

export default Contact;
