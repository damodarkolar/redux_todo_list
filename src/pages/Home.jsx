import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import HomeTodos from "../components/HomeTodos"
import "./pages.css"

const Home=()=>{


    return(
        <>
        <div id="container">
            <div >
                <Sidebar/>
            </div>
            <div id="navbarBody">
                <div>
                    <Navbar/>
                </div>
                <div>
                    <HomeTodos/>
                </div>
            </div>
            
        </div>        
        </>
    )
}



export default Home
