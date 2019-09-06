import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import './App.css';
//import HomePage from './pages/homepage/homepage.component';

const HomePage = props => {
    console.log(props)
    return (
        <div>
            <Link to='/topics'>Topics</Link>
            <h1>HOME =D</h1>
        </div>
    );
}

const HatsPage = () => (
    <div>
        <h1>Hat Page</h1>
    </div>
)

const TopicsList = props => {
    console.log(props)
    return (
        <div>
            <Link to={`/`}>Home</Link>
            <Link to={`${props.match.url}/17`}>TO TOPIC 17</Link>
            <Link to={`${props.match.url}/25`}>TO TOPIC 25</Link>
            <Link to={`${props.match.url}/78`}>TO TOPIC 78</Link>
            <h1>Topics List Page</h1>
        </div>
    )
}


const TopicDetail = (props) => {
    console.log(props)
    return (
    <div>
        <Link to={`/`}>Home</Link>
        <h1>Topic Details Page: {props.match.params.topicId} </h1>
    </div>
    )
}


function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component= {HomePage}/>
        <Route path='/hats' component= {HatsPage}/>
        <Route exact path='/topics' component= {TopicsList}/>
        <Route path='/topics/:topicId' component= {TopicDetail}/>
      </Switch>
    </div>
  );
}

export default App;
