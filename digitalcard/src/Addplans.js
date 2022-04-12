import React from 'react';
import Table from 'react-bootstrap/Table'
import {Button,Card,Form,FormControl} from 'react-bootstrap'
import styles from './Add.module.css'
import  {Routes,Route,Link} from 'react-router-dom';
import Form1 from "./Form1"

export default function Addplans() {
  
  return <div>
   <div className='mx-5 mt-5'>
    <p className={`${styles.overview} ${styles.header}`}>OVERVIEW</p>
    <h1 className= {styles.heading}>Plans</h1>
    </div>
    <Card class="container p-4 m-20 bg-#f4f6fa shadow">
    <Card.Body>     
      <div className='container'> 
      <div className='row'>
        <div className='col-3' >
<h6>Show 10 entries</h6>
        </div>
        <div className='col-6'>
        </div>
        <div className='col-3'>
    <Form className="d-flex mb-2">
    <h6 className="me-2 text-center font-italic my-2">Search:</h6>
        <FormControl
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </Form>
      </div>
      </div>
      </div>
<Table>
  <thead>
    <tr className={styles.tablehead}>
      <th className={styles.text}>S. No</th>
      <th className={styles.text}>Plan Name</th>
      <th className={styles.text}>Plan Price</th>
      <th className={styles.text}>Plan Validity</th>
      <th className={styles.text}>Stauts</th>
      <th className={styles.text}>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Beginner</td>
<td>Free</td>
<td>Monthly</td>
<td><Button variant="success" type="submit">ACTIVE</Button></td>
<td> <a href='/Form1'> <Button variant="primary" className='mx-2'>Edit</Button><Button variant="primary">Deactivate</Button></a></td>
    </tr>
    <tr>
      <td>2</td>
      <td>Intermediate</td>
      <td>24</td>
      <td>Monthly</td>
      <td><Button variant="success" type="submit">ACTIVE</Button></td>
<td><Button variant="primary" className='mx-2'>Edit</Button><Button variant="primary">Deactivate</Button></td>
    </tr>
    <tr>
      <td>3</td>
      <td>Professional</td>
      <td>48</td>
      <td>Monthly</td>
      <td><Button variant="success" type="submit">ACTIVE</Button></td>
<td><Button variant="primary" className='mx-2'>Edit</Button><Button variant="primary">Deactivate</Button></td>
    </tr>
  </tbody>
</Table>
</Card.Body>
</Card>
</div>;
}
