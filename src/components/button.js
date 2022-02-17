import React from 'react';

const Button = ({text, link}) => {

    if (link) {
        return (
            <a href={link} className='font-bold border-2 rounded border-solid px-8 py-4 max-w-xs text-center'>
                {text}
            </a>
        )
    } else {
        return ( 
            <button className='font-bold border-2 rounded-lg border-solid px-8 py-2 max-w-xs text-center'>
                {text}
            </button>
         )
        }
}
 
export default Button;