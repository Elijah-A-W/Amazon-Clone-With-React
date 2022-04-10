import React, { useEffect } from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import payment from "./payment";
import Login from './Login';
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import { auth } from './firebase';
import { useStateValue } from "./StateProvider";


function App() {
  const [{}, dispatch] = useStateValue();

  // will only run once when the app component loads
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser);

      if (authUser) {
        // the user logged in / the user was logged in 
        dispatch({
          type: 'SET_USER',
          user: 'authUser'
        })
      }else{
        // the user is logged out  
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }

    })

  }, [])



  return (
    // BEM
    
    <Router>
        <div className="app">
              <Routes>
                      <Route path="/login" element=
                              {<>
                                  <Login/>
                              </>}
                      />

                      <Route path="/payment" element=
                              {<>
                                  <Header/>
                                  <payment/>
                              </>}
                      />

                            <Route path="/" element=
                                    {<>
                                      <Header/>
                                      <Home/>
                                    </>}
                            />
                            
                      <Route path="/checkout" element=
                              {<>
                                <Header/>
                                <Checkout/>                  
                              </>}
                      />
            </Routes>   
        </div>
    </Router>
  );
}
 
export default App;
