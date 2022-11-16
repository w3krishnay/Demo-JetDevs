import React,{useState,useEffect} from 'react'
import {LeaderView, Title, Avatar, Points, Text,Box,Badge} from './common/styled/index'

const LeaderItem = ({name,id,point,i,order}) =>{
    const [fpoint, setFpoint] = useState(point)
    const imgUrl = 'https://picsum.photos/100'+ "?random=" + id

    useEffect(() => {
      if(fpoint === point)return
        var npoint = fpoint
        var duration = Math.floor(300/(point - fpoint))
        let update = setInterval(() => {
          npoint += 1;
          setFpoint(npoint)
          if (npoint > point) clearInterval(update)       
        }, duration);
        return ()=>{
          clearInterval(update)
        }
    }, [point])
    

    
  return (
    <LeaderView style={{top:order*96*window.innerHeight/1000,background:order?order%2===0?"#f0f3fc":"#f9fafe":"#4a69dd"}}>
    <Box>
    <Avatar src={imgUrl}/>
    <Badge className={`${order?order===1?"second":order===2?"third":"":"first"}`}>{order+1}</Badge>
    </Box>
    <Title className={`${order?'':'leader'}`}>{name}</Title>
    <div style={{flex:1}} />
    <Box className="points">
    <Points className={`${order?'':'leader'}`}>{fpoint}</Points>
    </Box>
    <Text className={`${order?'':'leader'}`}>points</Text>
    </LeaderView>
  )
}

export default LeaderItem;
