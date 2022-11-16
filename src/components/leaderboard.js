import React,{useState,useEffect} from 'react'
import Data from '../constants/data.json'
import { Container } from './common/styled';
import LeaderItem from './leaderItem';

function Leaderboard() {
    const [data, setData] = useState(Data)

    useEffect(() => {
      setTimeout(() => {
      var arr = data
        var farray = []
        arr.forEach(el=>{
          var upoint = Math.floor(Math.random() * 100)
          farray.push({
            ...el,
            point:el.point + upoint
          })
        })
        farray.sort((a,b) => b.point - a.point)
        farray.forEach((el,i)=>{
         farray[i].order=i
        })
        farray.sort((a,b)=>a.id-b.id)
        setData(farray)
      }, 1000);
    }, [data])
    

  return (
    <Container>
     {data.map((item,index)=>
     <LeaderItem 
     id={item.id}
     i={index}
     order={item.order}
     key={index}
     point={item.point}
     name={item.name} 
     />
     )}
    </Container>
  )
}

export default Leaderboard;