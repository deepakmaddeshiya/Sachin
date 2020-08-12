import React from 'react';
import { Table } from 'reactstrap';

const Example = (props) => {
  return (
    <Table striped>
      <thead>
        <tr>
         
          <th>Name</th>
          <th>Status</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          
          <td>foysal Ahmad</td>
          <td>aaaaa</td>
          <td>12/08/2020</td>
        </tr>
        <tr>
          
          <td>foysal Ahmad</td>
          <td>bbbbbb</td>
          <td>12/08/2020</td>
        </tr>
          
        <tr>          
          <td>foysal Ahmad</td>
          <td>ccccc</td>
          <td>12/08/2020</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Example;