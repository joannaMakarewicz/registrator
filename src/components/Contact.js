import React from 'react';
import {Link} from 'react-router-dom';
import QuestionAnswerRoundedIcon from '@mui/icons-material/QuestionAnswerRounded';
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact'>
        <Link to='/contact'>
            <QuestionAnswerRoundedIcon className='contact__icon'/>
        </Link>
      
    </div>
  )
}

export default Contact;
