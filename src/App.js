import './App.css';
import Header from './components/Header';
import Education from './pages/Education';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Activities from './pages/Activities';
import Me from './pages/Me';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import educationList from './my-info/myeducation';
import activities from './my-info/myactivities';
import meObject from './my-info/myinfo';
import projectList from './my-info/myprojects';
import skillsList from './my-info/myskills';

function App() {
  
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/" exact component={() => <Me dataList={meObject} />} />
          <Route path="/education" exact component={() => <Education dataList={educationList} />} />
          <Route path="/skills" exact component={() => <Skills dataList={skillsList} />} />
          <Route path="/experience" exact component={() => <Projects dataList={projectList} />} />
          <Route path="/achievements" exact component={() => <Activities dataList={activities} />} />
        </Switch>
      </Router>
      <Footer dataList={meObject}/>

    </div>
  );
}

export default App;