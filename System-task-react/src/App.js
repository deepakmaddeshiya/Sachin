import React from 'react';
import './App.css';
import Example from './component/Table1';
import Sideform from './component/Sideform';
import {Row, Col, FormGroup,  Input,  Pagination, PaginationItem, PaginationLink } from 'reactstrap';

 
function App() {
 
  return (
    <div style={ {padding:30, background:"#fff"} }>

 
 <Row>
<Col md={8}>

 
  <FormGroup className="search">        
        <Input
          type="Search"
          name="search"
          id="exampleSearch"
          placeholder="Search"
        />
</FormGroup>


<Example/>

<FormGroup className="option">
        
        <Input type="select" name="select" id="exampleSelect">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
         
        </Input>
      </FormGroup>

      <Pagination size="md" aria-label="Page navigation example" className="next">
      
      <PaginationItem>
        <PaginationLink previous href="#" />
      </PaginationItem>
      
      <PaginationItem>
        <PaginationLink href="#">
          3
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink next href="#" />
      </PaginationItem>
      
    </Pagination>

    
</Col>

<Col md={4}>
  <Sideform/>
</Col>

  </Row>




   </div>
  );
}

export default App;
