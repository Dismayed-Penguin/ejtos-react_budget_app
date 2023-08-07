
// import React, { useContext } from 'react';
// import { AppContext } from '../context/AppContext';
// const Budget = () => {
//     const { budget, currency } = useContext(AppContext);
//     return (
//         <div className='alert alert-secondary'>
//             <span>Budget: {currency}{budget}</span>
//         </div>
//     );
// };
// export default Budget;


// import React, { useContext, useState } from 'react';
// import { AppContext } from '../context/AppContext';


// const Budget = () => {
//     const { budget, currency } = useContext(AppContext);
//     const [cost, setCost] = useState('');
//     return (
//         <div className='alert alert-secondary'>
//             {/* <span>Budget: {currency}{budget}</span> */}

//             <div>
//                 <span>Budget:</span>
//                 <input
//                     required='required'
//                     type='number'
//                     id='cost'
//                     value={cost}
//                     style={{size: 10}}
//                     onChange={(event) => setCost(event.target.value)}>
//                 </input>
//             </div>
//         </div>
//     );
// };
// export default Budget;

import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch, budget, currency, expenses } = useContext(AppContext);
    const [cost, setCost] = useState('');

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const changeBudget = (val)=>{
        dispatch({
            type: 'SET_BUDGET',
            payload: val,
        })
    }

    useEffect(() => {
        setCost(budget.toString()); 
    }, [budget]);

    const handleCostChange = (event) => {
        const newValue = event.target.value;
        console.log( newValue < totalExpenses)

        if(newValue > 20000) {
            alert(`The value cannot exceed ${currency}20,000`);
            return;
        } else if (newValue < totalExpenses) {
            alert(`You cannot reduce the buget value lower than the remaining spending`);
            return;
        }

        changeBudget(newValue)
        setCost(newValue);
    };

    return (
        <div className='alert alert-secondary'>
            <div>
                <span>Budget: {currency}</span>
                <input
                    required='required'
                    type='number'
                    id='cost'
                    value={cost}
                    style={{ width: '10ch' }} 
                    step={10}
                    onChange={handleCostChange}>
                </input>
            </div>
        </div>
    );
};

export default Budget;


// import React, { useContext, useState, useEffect } from 'react';
// import { AppContext } from '../context/AppContext';

// const Budget = () => {
//     const { dispatch, budget, currency, expenses } = useContext(AppContext);
//     const [cost, setCost] = useState('');
//     const totalExpenses = expenses.reduce((total, item) => total + item.amount, 0);

//     const changeBudget = (val) => {
//         dispatch({
//             type: 'SET_BUDGET',
//             payload: val,
//         });
//     };

//     useEffect(() => {
//         setCost(budget.toString());
//     }, [budget]);

//     const handleCostChange = (event) => {
//         const newValue = event.target.value;

//         if (newValue > 20000) {
//             alert(`The value cannot exceed ${currency}20,000`);
//             return;
//         } else if (newValue < totalExpenses) {
//             alert(`The value cannot be less than total expenses ${currency}${totalExpenses}`);
//             return;
//         }

//         changeBudget(newValue);
//         setCost(newValue);
//     };

//     return (
//         <div className='alert alert-secondary'>
//             <div>
//                 <span>Budget: {currency}</span>
//                 <input
//                     required='required'
//                     type='number'
//                     id='cost'
//                     value={cost}
//                     style={{ width: '10ch' }}
//                     step={10}
//                     onChange={handleCostChange}>
//                 </input>
//             </div>
//         </div>
//     );
// };

// export default Budget;
