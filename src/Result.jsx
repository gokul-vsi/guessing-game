import React from 'react'

const Result = ({secretNum,game}) => {
 let result;


    if(game)
    {
        if(game > secretNum)
            {
               result = 'Higher';
            }
            else if(game < secretNum)
            {
               result = 'Lower';
            }
            else if(game == secretNum)
            {
               result = 'Great! You got a Number'
            }
            else
            {
               result = 'Enter a valid number'
            }
    }

  return (
    <div>
        <h3 className='d-flex text-md-start text-center mb-3'>You Guessed:{result}</h3>
    </div>
  )
}

export default Result