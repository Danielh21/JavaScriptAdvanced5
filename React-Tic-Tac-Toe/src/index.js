import React from 'react'
import { render } from 'react-dom'
import Game from './componets/Game'
import NameForm from './componets/NameForm'
import GameEnigne from './componets/GameEnigne'


window.React = React

render(
<div>
    <Game gameEngine = {new GameEnigne} />
</div>
    ,

      document.getElementById('reactor-container')
)