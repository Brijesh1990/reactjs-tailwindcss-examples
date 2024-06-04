import React from 'react';
import feed from '../assets/images/feedback.gif'
// npm i fontawesome-4.7
import 'fontawesome-4.7/css/font-awesome.min.css';


export default function FeedbackApp() {
  return (
    <div>
    <>
        <section id='feedback-app'>
            <div className='feedback-img'>
                <img src={feed} alt='feedback' />
            </div>
            <div className='feedback-frm'>
                <h2>Feedback Forms <span className='fa fa-comment'></span></h2>
                <hr align="left" />
                <form>
                    <input type='text' placeholder='Name *' />
                    <br /> <br />
                    
                    <input type='text' placeholder='Name *' />
                    <br /> <br />
                    
                    <input type='text' placeholder='Name *' />
                    <br /> <br />
                    
                    <input type='text' placeholder='Name *' />
                    <br /> <br />
                    
                    <input type='submit' placeholder='Name *' value="Send" />
                
                </form>
            </div>
        </section>
    </>
      
    </div>
  )
}
