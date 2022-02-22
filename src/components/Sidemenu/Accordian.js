
import React, { useState } from 'react';

import "./Accordian.css";


function Accordion({ title, data, setMainState, tag,clearFilter}) {
    const [isOpen, setIsOpen] = useState(false);
    const showUpArrow = () => <span className='arrow'>&#94;</span>;
    const showDownArrow = () => <span className='arrow'>&#x2228;</span>
    
    
    
    
    const [checkedState, setCheckedState] = useState([]);

    const addValue = (inputVal, filterName) => {
        if (inputVal) {
            setMainState((prev) => {

                const currentValues = { ...prev };

                const filters = [...currentValues[filterName]];


                filters.push(inputVal);
                currentValues[filterName] = filters;



                return currentValues;
            })
        }
    };
    const removeValue = (inputVal, filterName) => {
        if (inputVal) {
            setMainState((prev) => {
                const currentValues = { ...prev };
                currentValues[filterName] = currentValues[filterName].filter((val) => val !== inputVal)
                return currentValues;
            })
        }
    };
    const onclickHandler = (e, name, tag) => {
        const isChecked = e.target.checked;
        // console.log(isChecked)
        if (isChecked) {
            addValue(name, tag)
            //Add value to check state
            const newState = [...checkedState, name];
            setCheckedState(newState)
        }
        else {
            removeValue(name, tag)
            //Remove value from check state
            const newState = [...checkedState];
            setCheckedState(newState.filter(value => value !== name));
        }

    }

    const func = () => {
        return (data.map((name) => {
            return (<div className='filtersList' key={Math.random()}>
                <input type="checkbox" name='inputbox'   onChange={(e) => onclickHandler(e, name, tag)} checked={checkedState.includes(name)}></input>

                <label htmlFor="inputbox" >{name}</label>
            </div>)
        }))
    }
    
    
    
    
    
    
    
   
    
    return (
        <div>
            {title &&
                <div onClick={()=>setIsOpen(!isOpen)} className='title-container'>
                    <div className='title' >{title}</div>
                    {<div>{isOpen ? showUpArrow() : showDownArrow()}</div>}
                </div> 
            }
            
            
            {data && isOpen && <div className="content">{func()}</div>}
        </div>);
}

export default Accordion;
