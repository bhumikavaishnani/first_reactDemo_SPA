import React,{Component} from "react"
import {
    Route,
    Routes,
    NavLink,
    HashRouter,
} from "react-router-dom"
import Home from "./Home";
import Student from "./Student";
import Teacher from "./Teacher";
import Contact from "./Contact";
import "./index.css";


class Main extends Component{
    render()
    {
        return (
            <HashRouter>
                <div>
                    <h1>Simple SPA</h1>
                    <ul className="header">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/Student">Student</NavLink></li>
                        <li><NavLink to="/Teacher">Teacher</NavLink></li>
                        <li><NavLink to="/Contact">Contact</NavLink></li>
                    </ul>
                    <div className="content">
                        <Routes>
                            <Route exact path="/" Component={Home}/>
                            <Route path="/student" Component={Student}/>
                            <Route path="/teacher" Component={Teacher}/>
                            <Route path="/contact" Component={Contact}/>
                        </Routes>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;