import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header/header";

import Home from "./pages/home/home";
import Shop from "./pages/shop/shop";
import Sign from "./pages/sign/sign";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import urls from "./urls";
import "./App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);

    window.urls = urls;

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);
				userRef.onSnapshot(snapShot => {
					this.setState({
						currentUser: {
							id: snapShot.id,
							...snapShot.data()
						}
					})
				});
			}else{
				this.setState({currentUser: userAuth})
			}
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path={urls.HomeLocation.path} component={Home} />
          <Route path={urls.ShopLocation.path} component={Shop} />
          <Route path={urls.SignLocation.path} component={Sign} />
        </Switch>
      </div>
    );
  }
}

export default App;
