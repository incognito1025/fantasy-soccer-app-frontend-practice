import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import About from "./Pages/About"
import Add from "./Pages/Add"
import Edit from "./Pages/Edit"
import Error from "./Pages/Error"
import Home from "./Pages/Home"
import Index from "./Pages/Index"
import Login from "./Pages/Login"
import New from "./Pages/New"
import Show from "./Pages/Show"

import NavBar from "./Components/NavBar"


function App() {
    <div>
        <Router>
            <NavBar />
            <main>
                <Routes>
                    <Route path='/' element={ <Login />} />
                    <Route path='/home' element={ <Home />} />
                    <Route path='/about' element={ <About />} />
                    <Route path='/players' element={ <Index />} />
                    <Route path='/players/new' element={ <New />} />
                    <Route path='/players/add' element={ <Add />} />
                    <Route path='/players/:id' element={ <Show />} />
                    <Route path='/players/:id/edit' element={ <Edit />} />
                    <Route path='*' element={<Error />} />
                </Routes>
            </main>
        </Router>
        {/* <h1>Welcome to Fantasy Soccer!</h1> */}
    </div>
}

export default App

/*

<Route path='/' element={ <Login />} /> 
<Route path='/home' element={ <Home />} />
<Route path='/about' element={ <About />} />
<Route path='/players' element={ <Index />} /> Players.jsx
<Route path='/players/new' element={ <New />} /> PlayerNewForm.jsx
<Route path='/players/add' elemet={ <Add />} /> 
<Route path='/players/:id' element={ <Show />} /> PlayerDetails.jsx & Player.jsx
<Route path='/players/:id/edit' element={ <Edit />} /> PlayerEditForm.jsx
<Route path='*' element={<Error />} />                

*/