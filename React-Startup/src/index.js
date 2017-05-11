import React from 'react'
import { render } from 'react-dom'
import ClassComponent from './componets/ClassComponent'
import {Stateless} from './componets/Stateless'



window.React = React

render(
<div>
    <ClassComponent/>
    <Stateless message="This Can hold data not state" />
</div>
    ,

      document.getElementById('reactor-container')
)