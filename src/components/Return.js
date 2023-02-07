import React from 'react';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import {Link} from 'react-router-dom';
import './Return.css'

const Return = () => {
  return (
    <div className='return'>
        <Link to='/'>
        <KeyboardReturnIcon className='return__icon'/>
        </Link>
    </div>
  )
}

export default Return;
