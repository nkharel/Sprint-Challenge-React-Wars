import React from 'react';
import {
  Card, CardBody,
  CardTitle, CardSubtitle} from 'reactstrap';

const Cards = (props) => {
    const {charArr} = props;
    if (!charArr) {
        return <h1>Loading...</h1>
    } else {
  return (
     <div style={{display: "flex", justifyContent: "center", flexWrap: "wrap"}}>

         {charArr.map(obj => {
             return(
                <Card style={{width: "20%", height: "250px", margin: "4%"}}>
          <CardBody style = {{display: "flex", flexDirection: "column", justifyContent: "center"}}>
          <CardTitle>{obj.name}</CardTitle>
          <CardSubtitle>Birth Year: {obj.birth_year}</CardSubtitle>
          <CardSubtitle>Height: {obj.height}</CardSubtitle>
          <CardSubtitle>Mass: {obj.mass}kg</CardSubtitle>
        </CardBody>
      </Card>
             )
         })}
     </div>
    

  );}
};

export default Cards