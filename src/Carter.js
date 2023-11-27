import React, { useState } from 'react';
import './Carter.css';
const Carter = ({ quantities, amounts, foodImages,onTotalChange }) => {
  let total=0;
  return (
    <div style={{marginTop:'-1.5%'}}>
      {quantities.map((quantity, index) => {
        const amount = amounts[index];
        const totalAmount = quantity * amount;
        total+=totalAmount;
        return (
          <div key={index} className='outer'>
            <div className='inner'>

              <div>
            <img src={foodImages[index]} alt={`Food ${index + 1}`}  className='food'/>
            </div>

            {/* <div>
            <p>{index+1}</p>
            </div> */}

            <div>
            <p>Quantity: <span className='comp'>{quantity}</span></p>
            </div>

            <div>
            <p>Amount: <span className='comp'>${amount}</span></p>
            </div>

            <div>
            <p>Total Amount: <span className='comp'>${totalAmount}</span></p>
            </div>

            </div>
          </div>
        );
      })}
      {onTotalChange && onTotalChange(total)}
    </div>

  );
};

export default Carter