import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Form1 from './Form1';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Addplans from './Addplans';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Fcomp from './Fcom';
import Newapi from './Newapi'
import Postapi from './Postapi';
import Redux from './Redux';
import store from './storeredx';
import {Provider} from 'react-redux';

ReactDOM.render(
   <>
     {/* <Fcomp></Fcomp>  */}
  {/* <Form1></Form1> */}
  <BrowserRouter>
    <Routes>
   <Route path='/' element={<Addplans></Addplans>}></Route>
   <Route path='/Form1' element={<Form1></Form1>}></Route>
   </Routes>
   </BrowserRouter>
   {/* <Addplans></Addplans> */}
  {/* <Newapi></Newapi> */}
  {/* <Postapi></Postapi> */}
{/* <Provider store={store} >  <Redux></Redux> </Provider> */}
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
