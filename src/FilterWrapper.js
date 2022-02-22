import React from 'react';
import { useState } from 'react';
// import './FilterWrapper.css';

function FilterWrapper() {
  const [category, setCategory] = useState(false);
  const [price, setPrice] = useState(false);
  const [color, setColor] = useState(false);
  const [size, setSize] = useState(false);
  const [neckType, setNeckType] = useState(false);
  const [sleeve, setSleeve] = useState(false);
  const [occasion, setOccasion] = useState(false);
  const [length, setLength] = useState(false);
  const [fasteningClosures, setFasteningClosures] = useState(false);
  const [pattern, setPattern] = useState(false);
  const [ornamentation, setOrnamentation] = useState(false);
  const [fabricFamily, setFabricFamily] = useState(false);



  return (<div className='box'>
    <div className="filter">FILTER</div>

    <div className="category" onClick={() => setCategory((prev) => !prev)}>
      Category

      <span>&#94;</span>

    </div>
    {category ? <><div>kurtas</div>
      <div>tops</div>
      <div>lips</div>
      </>: null}
    <div className='plus-size'><img src='https://wforwomanonline.com/images/plus_size_Horizontal.png' alt='logo' ></img> </div>
    <div className='price' onClick={() => setPrice((prev) => !prev)}>Price
      <span>&#94;</span>
    </div>
    {price ? <><div>Rs.0 to Rs.2000</div>
      <div><input type="checkbox" value="Rs.2000 to Rs.4000"></input>Rs.2000 to Rs.4000</div>
      <div> Rs.4000 to Rs.6000</div>
      <div> Rs.6000 to Rs.8000</div>
      <div> Rs.8000 to Rs.10000</div>
      <div> Rs.10000 to Rs.12000</div>
      <div>Rs.12000 to Rs.14000</div>
      <div> Rs.14000 to Rs.16000</div>
      <div> Rs.16000 to Rs.18000</div>
      <div>Rs.18000 to Rs.20000</div>
      <div>Rs.20000 to Rs.22000</div>
      <div> Rs.22000 to Rs.24000</div>
      ["]
    </> : null}
    <div className='color' onClick={() => setColor((prev) => !prev)}>
      Color
      <span>&#94;</span>

    </div>
    {color ? <><div>blue</div>
      <div>pink</div>
      <div>white</div>
      <div>green</div>
      <div>yellow</div>
      <div> black</div>
      <div>red</div>
      <div>off-white</div>  
      <div>beige</div>
      <div>Maroon</div>     
      <div >teal</div>
      <div >cream</div>
      <div >purple</div>
      <div>peach</div>
      <div >orange</div>
      <div>gold</div>
      <div >grey</div>  
      <div >wine</div>
      <div  >brown</div>
      <div >Ecru</div>
      <div >multicoloured</div> 
      <div>silver</div>
      <div >musterd</div>
      <div  >coral</div>
      <div >mauve</div>
      <div >dark yellow</div></> : null}
     
    <div className='sizewrapper'>
      <div className='size' onClick={() => setSize((prev) => !prev)}>
        Size
        <span>&#94;</span>

      </div>
      {size ? <div className='outer'>
        <div>18</div>
        <div>12</div>
        <div>16</div>
        <div>10</div>
        <div>14</div>
        <div>8</div>
        <div>6</div>
        <div>22</div>
        <div>20</div>
        <div>XXL</div>
        <div>XL</div>
        <div>L</div>
        <div>M</div>
        <div>S</div>
        <div>XS</div>
        <div>WL</div>
        <div>WM</div>
        <div>WS</div>
        <div>WFS</div>
        <div>OneSize</div>
      </div> : null}
    </div>
    <div className='necktype' onClick={() => setNeckType((prev) => !prev)}>
      NeckType
      <span>&#94;</span>

    </div>
    {neckType ?
      <>
        <div>Neck-Type</div>
        <div>  Round Neck</div>
        <div> Mandarian Collar</div>
        <div>  Boat Neck</div>
        <div>V-Neck</div>
        <div>Square Neck</div>
        <div>Shirt Collar</div>
        <div>  Keyhole Neck</div>
        <div>Open Neck</div>
        <div>Choker Neck</div></>
      : null}
    <div className='sleeve' onClick={()=>setSleeve((prev)=>!prev)}>
      Sleeve
      <span>&#94;</span>
    </div>
    {sleeve ?
      <>
     <div> 3/4 sleeve</div>
     <div>   Full Sleeve</div>
     <div>  Elbow Sleeve</div>
     <div>  Short Sleeve</div>
     <div>  Half Sleeve</div>
     <div>  Sleeveless</div>
     <div>  Kaftan Sleeve</div></>
      : null}
       <div className='occasion' onClick={()=>setOccasion((prev)=>!prev)}>
      Occasion
      <span>&#94;</span>
    </div>
    {occasion ?
      <>
    <div>Festive</div> 
    <div>Casual</div>  
      </>
      : null}
       <div className='length' onClick={()=>setLength((prev)=>!prev)}>
      Length
      <span>&#94;</span>
    </div>
    {length ?
      <>
     <div>Length</div>
    <div>calf length</div>
         <div>knee length</div>
         <div>ankle length</div>
         <div>above knee</div> 
      </>
      : null}
      <div className='fasteningClosures' onClick={()=>setFasteningClosures((prev)=>!prev)}>
      Fastening Closures
      <span>&#94;</span>
    </div>
    {fasteningClosures ?
      <>
   <div>print</div> 
    <div>  solid</div>   
      <div> Yd-Dobby</div>  
      </>
      : null}
      <div className='pattern' onClick={()=>setPattern((prev)=>!prev)}>
      Pattern
      <span>&#94;</span>
    </div>
    {pattern ?
      <>
      <div>Pattern</div> 
      <div>  solid</div>
      <div>   Embroidered</div>
      <div>Floral</div>
      <div>printed</div>
      <div>striped</div>
      <div>embellished</div>
      <div>paisley</div>
      <div>geometric</div>
      <div>ornamental</div>
      <div>ikkat</div>
      <div>tribal</div>
      <div>woven design</div>
      <div>block print</div>
      <div>polka dots</div>
      <div>animal</div>
      <div>stipes</div>
      <div>all over buti</div>
      <div>checkered</div>
      <div>all over jaal</div>
      <div>animal/birds</div>
      <div>bandhej</div>
   
      </>
      : null}
      <div className='ornamentation' onClick={() => setOrnamentation((prev) => !prev)}>
      ornamentation
      <span>&#94;</span>

    </div>
    {ornamentation ?
      <>
      <div>  thread work</div> 
       <div>thread embroidery</div>    
       <div>sequins</div>   
        <div> Dori Embroidery</div> 
        <div>metalic Embroidery</div>  
        <div> beads and stones</div> 
        <div> gotta patti</div> 
         <div>beads</div>  
         <div>metallic dori</div> 
         <div>Embroidery</div> 
        </>
      : null}
<div className='fabricfamily' onClick={() =>setFabricFamily((prev) => !prev)}>
Fabric Family
      <span>&#94;</span>

    </div>
    {fabricFamily ?
      <>
       <div>Cotton</div>
         <div>Cotten blend</div>
          <div>Viscose</div>
          <div>Rayon</div>
          <div>100% man made fiber</div>
          <div>cotton flax</div>
          <div>linen</div>
          <div>crepe</div>
          <div>denim </div>
          <div>polyester</div>
          <div>liva</div>
          <div>chanderi </div>
          <div>acrylic</div>
          <div>jacquard</div>
          <div>nylon </div>
          <div>flax</div>
      
        </>
      : null}




  </div>);
}

export default FilterWrapper;
