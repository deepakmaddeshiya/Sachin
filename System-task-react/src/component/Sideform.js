import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Sideform = (props) => {
  return (
    <Form>
      <FormGroup>
        <Label for="fullname" className="font-weight-bold">NAME:</Label>
        <Input type="Text" name="fullname" id="fullname" placeholder="Foysal Ahmad" />
      </FormGroup>
      <FormGroup>
        <Label for="shopname" className="font-weight-bold">SHOP NAME:</Label>
        <Input type="Text" name="shopname" id="shopname" placeholder="Gift Gallary" />
      </FormGroup>


      <FormGroup>
        <Label for="exampleText" className="font-weight-bold">STATUS</Label>
        <Input type="textarea" name="text" id="exampleText" placeholder="xxxxxxxxx" />
      </FormGroup>
      

      <Button color="success" size="lg" className="font-weight-bold">Submit</Button>
    </Form>
  );
}

export default Sideform;