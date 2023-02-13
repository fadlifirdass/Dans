import React from 'react'
import { useState} from 'react'
import './login.css'
import { Link } from "react-router-dom";
import Button from '../components/Button/Button';
import styled from 'styled-components';

const Judul = styled.h2`
      margin-bottom: 20%;
`
const InputName = styled.input`
    width: 70%;
    padding: 10px 20px;
`
const InputPass = styled.input`
    width: 70%;
    padding: 10px 20px;
`

export default () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


return(
  <div className='content'>
  <div className='inputform'>
    <Judul>OJT FullStack Developer</Judul>
  <InputName type="text" placeholder="First Name" onChange={e => setUsername(e.target.value)} />
  <br />
  <br />
  <InputPass type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
  <br />
  <br />
  <Link to="/home/10115075" state={{data : {user: username, fullname: username, password:password}}}><Button/></Link>
  </div>
  </div>
  )
}



