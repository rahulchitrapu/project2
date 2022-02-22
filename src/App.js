import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Sidemenu from './components/Sidemenu/Sidemenu';
import Homepage from './components/Homepage/Homepage';

import { useState,useEffect } from 'react';
import Nodata from './components/Homepage/Nodata';


function App() {
  const [searchedValue,setSearchvalue]=useState('');
  const [data,setData]=useState([]);
  const [filter,setFilter]=useState('')
  const [appliedFilters,setAppliedFilters]=useState([]);
  
  const [mainState, setMainState] = useState({
    priceFilter: [],
    occasionFilter: [],
    sizeFilter:[],
    colorFilter:[]
  });
  const clearFilter=()=>{
    const obj={
      priceFilter: [],
      occasionFilter: [],
      sizeFilter:[],
      colorFilter:[]
    }
    setMainState(obj)
    setFilter('')
  }
  const filterString=(obj)=>{
    const array=Object.keys(obj);
    let string="";
    let array1=[];
    array.map((e)=>{
      obj[e].map((ele)=>{
        if(e==="colorFilter"){
          string+=`color-${ele},`
          array1.push(`Color:${ele}`)
        }
        if(e==="priceFilter"){
          string+=`selling_price-${ele},`
          array1.push(`Price:${ele}`)
        }
        if(e==="sizeFilter"){
          string+=`size-${ele},`
          array1.push(`Size:${ele}`)
        }
        if(e==="occasionFilter"){
          string+=`occasion-${ele},`
          array1.push(`Occasion:${ele}`)

        }
        
      })
    })
    setAppliedFilters(array1)
    return(string.slice(0,string.length-1))
  }
    useEffect(()=>{
        const dataFetching=async()=>{
          const api= await fetch(`https://pim.wforwoman.com/pim/pimresponse.php/?service=category&store=1&url_key=top-wear-kurtas&page=1&count=20&sort_by=&sort_dir=desc&filter=${filter}`)
          const fetchedData=await api.json()
          setData(fetchedData.result.products);
          
        }
        
        dataFetching();
        let filteredString=filterString(mainState)
        
        setFilter(filteredString)
        

        
    },[mainState,filter])
  const searchvaluefunc=(value)=>{
      setSearchvalue(value)
  }
  return (
    <div >
     
      <Navbar searchvaluefunc={searchvaluefunc} /> 
      
      {data?<Homepage searchedValue={searchedValue} data={data}/>:<Nodata/>}
     
      <Sidemenu setMainState={setMainState} clearFilter={clearFilter} appliedFilters={appliedFilters} />
      
     
       
    </div>
  );
}

export default App;
