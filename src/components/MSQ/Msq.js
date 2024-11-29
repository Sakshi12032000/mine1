import React from 'react';
import '../MSQ/Msq.css';

function Msq() {
    const dataArray =[
        {
            question:'The world’s nation 5G mobile network was launched by which country?',
            Options:[
                {
                    ans:'Japan',
                    isCorrect:false,
                },
                {
                    ans:'Asia',
                    isCorrect:false,
                },
                {
                    ans:'South Korea',
                    isCorrect:true,
                },
                {
                    ans:'Malaysia',
                    isCorrect:false,
                },
            ]
        }
    ]
  return (
    <div className='Content-Box'>
        <div className='Container'>
            <div className='Question-section'>
            The world’s nation 5G mobile network was launched by which country?
            </div>
            <div className='Answer-section'>
                <div className='Answer-contentBox'>
                    <label className='Checkbox-section'>
                        <input 
                        type='checkbox'
                         />
                         asia
                        </label>
                        <label className='Checkbox-section'>
                        <input 
                        type='checkbox'
                         />
                         Japan
                        </label>
                        <label className='Checkbox-section'>
                        <input 
                        type='checkbox'
                         />
                         South Korea
                        </label>
                        <label className='Checkbox-section'>
                        <input 
                        type='checkbox'
                         />
                         Malaysia

                        </label>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Msq
