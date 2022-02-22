import React from 'react';
import Accordion from './Accordian';
import "./Sidemenu.css";

function Sidemenu({setMainState,clearFilter,appliedFilters}) {
    
    const priceFilter=["Rs.0 to Rs.2000","Rs.2000 to Rs.4000","Rs.4000 to Rs.6000","Rs.6000 to Rs.8000","Rs.8000 to Rs.10000","Rs.10000 to Rs.12000"]
    // const categoryFilter=["Kurtas","sets & dresses","pallazzos & pants","chudidar & salwar","Tops","Skirts"]
    const ocationFilter=["Festive","Casual"]
    const sizeFilter=['6','8','10','12','14','16','18','20','22','35','36','37','38','39','40','41','42','onesize','WFS']
    const colorFilter=["blue","pink","white","green","yellow","black","red","off-white","beige","maroon","teal","cream","purple","peach","orange","gold","grey","wine","brown","Ecru","multicoloured","silver","musterd","coral","mauve","dark yellow"]
    
    return (
        <div className="sidemenu">
            <div>
                
                <Accordion title={"filter"} />
                {appliedFilters.length>0 && <div className='appliedFiltes'>{appliedFilters.map((ele)=>{
                    return(<div className='element-container'><span className='cancel'>X</span><span className='element'>{ele}</span></div>)
                })}<button className='clearall' onClick={()=>{clearFilter()}}>clear all</button></div>}
               
                <Accordion title={"price"} data={priceFilter}  tag='priceFilter' setMainState={setMainState}  />
                <Accordion title={"color"} data={colorFilter} tag='colorFilter' setMainState={setMainState} />
               
                <Accordion  title={"Occasion"} data={ocationFilter} tag='occasionFilter' setMainState={setMainState} />
                <Accordion title={"Size"} data={sizeFilter} tag='sizeFilter' setMainState={setMainState} />

               
           </div>
        </div>
    );
}

export default Sidemenu;