import { useState } from 'react'
import './App.css';

import gameOfThrones from './gameOfThrones'
import Houses from './components/Houses'
import House from './components/House'
import Members from './components/Members'
import Member from './components/Member'
import Home from './components/Home'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

export default function App() {
  const [gameData] = useState(gameOfThrones)
  return (
    <div className="App">
      <h1>In the game of thrones, you win or you die.</h1>
      <Router>
        <Route exact path="/" component={Home} />
        
        <Route exact path="/houses" 
          render={() => <Houses gameData={gameData} /> } />
        
        <Route path="/houses/:id" 
          render={props => {
            console.log(props.match.params.id)
            const house = gameData.find(house => house.id.toString() === props.match.params.id)
            props = {...props, ...house}
            return <House {...props} />
          }} />
        
        <Route path="/houses/:houseId/members"
          render={props => {
            console.log(props.match.params.houseId)
            return <Members {...props} />
          }} />
        
        <Route path="/houses/:houseId/members/:memberId"
        render={props => {
          const house = gameData.find(house => house.id.toString() === props.match.params.houseId)
          const member = house.find(member => member.id.toString() === props.match.params.memberId)
          props = {...props, ...member}
          return <Member {...props} />
        }}/>
        
        <Link to="/members">Members</Link>
      </Router>
    </div>
  )
}
// const member = gameData
//   .find(house => house.id.toString() === props.match.params.houseId)
//     .people
//       .find(member => member.id.toString() === props.match.params.memberId)