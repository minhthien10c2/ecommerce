import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import routes from "./routes";

const onShowRuote = route => {
  let result = null
  if(route !== null && route.length > 0){
    result = route.map((rt, i) => {
      return <Route key={i} exact={rt.exact} path={rt.path} element={<rt.main/>} />
    })
  }

  return <Routes>{result}</Routes>
}

const App = () => {
  return (
    <Router>
      {
        onShowRuote(routes)
      }
    </Router>
  );
}

export default App;
