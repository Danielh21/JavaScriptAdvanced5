import React from 'react'
import { render } from 'react-dom'
import ClassComponent from './componets/ClassComponent'
import {Stateless} from './componets/Stateless'
import MusiciansTable from './componets/MusiciansTable'



window.React = React


let students = [
      {id: 1 , name: "James Hetfield" , stars: 8 },
      {id: 2 , name: "Tina Turner" , stars: 6 },
      {id: 3 , name: "Chris Martin" , stars: 8 },
      {id: 4 , name: "Madonna" , stars: 5 },
    {id: 5 , name: "Emmelie de Forest" , stars: 1 }
    ]


render(
<div>
    <MusiciansTable data={students}/>    
    {/*<ClassComponent message= "This is a property"/>
    <Stateless message="This Can hold data not state" />*/}
</div>
    ,

      document.getElementById('reactor-container')
)