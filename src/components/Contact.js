import React from 'react';
import {Link} from 'react-router-dom';
import QuestionAnswerRoundedIcon from '@mui/icons-material/QuestionAnswerRounded';

const Contact = () => {
  return (
    <div>
        <Link to='/contact'>
            <QuestionAnswerRoundedIcon/>
        </Link>
      
    </div>
  )
}

export default Contact;
