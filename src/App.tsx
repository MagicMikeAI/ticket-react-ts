import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom'
import { DataProvider } from './DataProvider'
import Navbar from './Components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemsList from './Components/ItemsList';
import Login from './Components/Login';
import ItemDetails from './Components/ItemDetails';
import Cookies from 'js-cookie';





function App() {




  return (

    <DataProvider>
      <div className="App" >
        <Router>
          <Navbar />
          <section>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/ticket" element={<Login />} />
              <Route path="ticket/:location" element={<ItemsList />} />
              <Route path="ticket/:location/:asset_id" element={<ItemDetails />} />
              <Route path="admin" element={<Admin />} />
            </Routes>

          </section>



        </Router>

      </div>
    </DataProvider>

  );
}

export default App;




function MainPage() {
  let userLocation = "CT-001"
  useEffect(() => {
    function redirectToMainPage() {
      window.location.href = `http://localhost:3000/ticket/${userLocation}/`;
    }
    if (window.location.href === "http://localhost:3000/ticket/") {
      redirectToMainPage();
    }
  }, []);


  return (

    <div>Asset</div>


  )


}
function Asset() {
  return (
    <div>Asset</div>
  )
}
function Admin() {
  return (
    <div>Admin</div>
  )
}



