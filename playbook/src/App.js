import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Comp from './components';
import Hero from './components/hero';
import Home from './Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/components' element={<Comp/>}>
          <Route
            index
            element={
              <main style={{ padding: "1rem" }}>
                <p>Select an component</p>
              </main>
            }
          />
          <Route path='hero' element={<Hero/>}/>
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
