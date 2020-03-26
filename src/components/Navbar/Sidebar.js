import React, {Component} from 'react';
import './Sidebar.css';
import { Link } from "react-router-dom";

class Sidebar extends Component{
    constructor(props){
        super(props)
        this.mySidebar = React.createRef();
    }
    openNav = () => {
        if(
            document.getElementById("sidebarMobile")
        ){
            document.getElementById("sidebarMobile").style.width = "250px";
        }
    };
    closeNav = () => {
        if(
            document.getElementById("sidebarMobile")
        ){
            document.getElementById("sidebarMobile").style.width = "0";
        }
    };
    render(){
        return(
            <div>
            <div ref={this.mySidebar} class="sidenav" id="sidebarWeb">
                <h3 className="head"><Link className="head" to="/">Admin Panel</Link></h3>
                <Link className="link" to="/users">Users</Link>
                <Link className="link" to="/posts">Posts</Link>
            </div>
            <div id="sidebarMobile" class="sidenavMobile">
            <a href="javascript:void(0)" class="closebtn" onClick={this.closeNav}>&times;</a>
                <Link className="link" to="/users">Users</Link>
                <Link className="link" to="/posts">Posts</Link>
            </div>
            <div className="mobile">
                <button onClick={this.openNav} aria-controls="basic-navbar-nav" type="button" aria-label="Toggle navigation" class="navbar-toggler collapsed"><span class="navbar-toggler-icon"></span></button>
            </div>
            </div>
        )
}
}

export default Sidebar