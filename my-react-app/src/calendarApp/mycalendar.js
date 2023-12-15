import moment from 'moment';
import React, { useEffect, useState } from 'react'
import './calendar.css';


export function WeekCalendar (){
const [Current,setCurrent] = useState(moment());
console.log(Current)

const handleChangepre = () =>{
  setCurrent(Current.clone().subtract(1, "week"));
}

const handleChangenext = () =>{
  setCurrent(Current.clone().add(1,'week'));
}
  return(
<>
<div style={{border:'3px solid black',paddingBottom:'20%', marginTop:'30px', marginBottom:'50px'}}>
<p className='text-center' style={{fontSize:'2rem'}}>Calendar</p>
<h2>{moment().format("LLL")}</h2>
      <button onClick={handleChangepre} style={{marginRight:'90%',borderRadius:'5px' , border:'none'}} >&lt;</button>
      <button onClick={handleChangenext} style={{mraginLeft:'90%',borderRadius:'5px', border:'none'}} >&gt;</button>
  <table style={{border:'1px solid black',borderRadius:'10px',marginTop:'10px', width:'100%'}}>
    <thead>
    <tr>
    {Current.localeData()._weekdaysShort.map((item, index) => (
            <th key={index} style={{backgroundColor:'lightblue', border:'1px solid black'}} >
              {item}
            </th>
          ))}
    </tr>
    <tr className='tr-class'>
   { Array.from({ length: 7 }, (_, index) => {
                const currentDate = Current.clone().startOf("week").add(index, "day");
                const isCurrentDay = currentDate.isSame(moment(), 'day');
                return (
                  <td
                    className={`td-class ${isCurrentDay ? 'current-day' : ''}`}
                    style={{ backgroundColor: isCurrentDay ? 'lightpink' : '', borderRadius:'50px'}}
                    key={index}
                  >
                    {currentDate.format("DD")}
                  </td>
                );
              }) }
 </tr>
  </thead>  
</table>
  </div>
</>
  )
}
