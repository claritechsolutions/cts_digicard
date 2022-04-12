import React, {setLog,log} from 'react';
import {Group,Label,Control,Text,Check,Button,Form,Card,section} from 'react-bootstrap';
import { useState } from 'react';
import styles from './Add.module.css'

export default function Form1() {
const[name,setName]=useState("");
const[desc,setDesc]=useState("");


const origin = (e)=>{
setName(e.target.value);
}

const origin1 = (e)=>{
  setDesc(e.target.value)

}

 const handlesubmit = (e)=>{
e.preventDefault();
if (name,desc)
  { console.log(name);
    console.log(desc);
   setName("");
  }
   else
   (
     alert("pleaes enter required field")
   )
 }

  return <div>
    <div className='mx-5 mt-3'>
    <p className={`${styles.overview} ${styles.header}`}>OVERVIEW</p>
    <h1 className= {styles.heading}>Add Plan</h1>
    </div>
    <Card class="container p-4 m-10 bg-white shadow">
    <Card.Body>
    <div class="container p-4 m-10 bg-white shadow">
      <Form class="container p-4 m-10 bg-white shadow">
      <h4>Plan Details</h4> <hr></hr>
      <div className='container'>
        <div className='row mb-5'>
          <div className='col-6'>
  <Form.Group className="mb-3" controlId="formBasic">
    <Form.Label >Plan Name <span className={styles.validity} >*</span></Form.Label>
    <Form.Control onChange={origin} type="text" autoComplete='off' placeholder="Plan Name..."/>
  </Form.Group>
  </div>
  <div className='col-6'>
  <Form.Group className="mb-3 rows=4 cols=50" controlId="formBasicTextarea">
    <Form.Label>Description<span className={styles.validity} > *</span></Form.Label>
    <Form.Control as="textarea" onChange={origin1} placeholder="Description" autoComplete='off' style={{ height: '100px'}}
    />
  </Form.Group>
  </div>
  </div>
  </div>
  <Form.Check className="mb-5"
   label="Recommended"
    type="switch"
    id="custom-switch"
  />
  <h4>Plan Prices</h4>
<div className='container'>
  <div className='row mb-5'>
<div className='col-6'>
<Form.Group className="mb-3" controlId="formBasic">
    <Form.Label>Price <span className={styles.validity} >(For free, enter 0) *</span></Form.Label>
    <Form.Control type="number" placeholder="Price..."/>
  </Form.Group>
</div>
<div className='col-6'>
<Form.Group className="mb-3" controlId="formBasic">
    <Form.Label>Validity <span className={styles.validity}>(Enter no. of days) (For forever, enter 9999) *</span></Form.Label>
    <Form.Control type="number" placeholder="31"/>
  </Form.Group>
</div>
  </div>
</div>
<h4>Plan Feature</h4>
<div className='container'>
  <div className='row'>
<div className='col-4'>
<Form.Group className="mb-3" controlId="formBasic">
    <Form.Label>No. Of vCards <span className={styles.validity}>(For unlimited, enter 999) *</span></Form.Label>
    <Form.Control type="number" placeholder="1"/>
  </Form.Group>
</div>
<div className='col-4'>
<Form.Group className="mb-3" controlId="formBasic">
    <Form.Label>No. Of Services/Products <span className={styles.validity}>(For unlimited, enter 999) *</span></Form.Label>
    <Form.Control type="number" placeholder="1"/>
  </Form.Group>
</div>
<div className='col-4'>
<Form.Group className="mb-3" controlId="formBasic">
    <Form.Label>No. Of Galleries <span className={styles.validity}>(For unlimited, enter 999) *</span></Form.Label>
    <Form.Control type="number" placeholder="1"/>
  </Form.Group>
</div>
  </div>
</div>
<div className='container'>
        <div className='row mb-5'>
          <div className='col-6'>
  <Form.Group className="mb-3" controlId="formBasic">
    <Form.Label>No. Of Card Features <span className={styles.validity}>(For unlimited, enter 999)*</span></Form.Label>
    <Form.Control type="number" placeholder="1"/>
  </Form.Group>
  </div>
  <div className='col-6'>
  <Form.Group className="mb-3" controlId="formBasic">
    <Form.Label>No. Of Payment Listed <span className={styles.validity}>(For unlimited, enter 999) *</span></Form.Label>
    <Form.Control type="number" placeholder="1"/>
  </Form.Group>
  </div>
  </div>
  </div>
  <div className='container'>
    <div className='row mb-3'>
      <div className='col-3'>
<Form.Check className="mb-3"
   label="Personalized Link"
    type="switch"
    id="custom-switch"
  /></div>
        <div className='col-3'>
  <Form.Check className="mb-3"
   label="Hide Branding"
    type="switch"
    id="custom-switch"
  />
  </div>
  <div className='col-3'>
  <Form.Check className="mb-3"
   label="Free Setup"
    type="switch"
    id="custom-switch"
  /></div>
          <div className='col-3'>
  <Form.Check className="mb-3"
   label="Free Support"
    type="switch"
    id="custom-switch"
  /></div>
  </div>
</div>
  <Button variant="primary" type="submit" onClick={handlesubmit} >+ ADD</Button>
</Form>
</div>
</Card.Body>
</Card>
  </div>;
}
