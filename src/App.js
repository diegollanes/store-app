import React from 'react';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import SignInAndSignUpPage from './pages/SignInAndSignUpPage/SignInAndSignUpPage';
import Header from './components/Header/Header';
import { Switch, Route } from 'react-router-dom';
import { auth, createUserProfilDoc } from  './firebase/firebase.utils';
 
class App extends React.Component {
  constructor(){
    super();
      this.state = {
        currentUser: null
      }  
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if(userAuth){
        const userRef = await createUserProfilDoc(userAuth);

        userRef.onSnapshot(snapshot => {

          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data
            }        
          },)
        })
      }
      else {
        this.setState({currentUser: userAuth});
      }
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/shop' component={ShopPage} />
            <Route exact path='/signin' component={SignInAndSignUpPage}/>
          </Switch>
      </div>
    );
  }
}

export default App;
