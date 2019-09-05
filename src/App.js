import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => (
    <div>
        <h1>Hat Page</h1>
    </div>
)
const TopicsList = props => {
    console.log(props)
    return (
        <div>
            <h1>Topics List Page</h1>
        </div>
    )
}


const TopicDetail = () => (
    <div>
        <h1>Topic Details Page</h1>
    </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component= {HomePage}/>
        <Route path='/hats' component= {HatsPage}/>
        <Route path='/topics' component= {TopicsList}/>
        <Route path='/topics/:topicId' component= {TopicDetail}/>
      </Switch>
    </div>
  );
}

export default App;
