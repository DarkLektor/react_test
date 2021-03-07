import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import {setItems, setCartMass, setWishMass} from '../redux/actions'

import NavBar from "./NavBar";
import Main from "./Main";
import Cart from "./Cart";

import '../main.css';


function App() {
  const dispatch = useDispatch();
  const itemsObj = useSelector(state => state.items);
  const currElem = useSelector(state => state.currentElement);
  const cartMass = useSelector(state => state.cart);
  const wishMass = useSelector(state => state.wish);
  const locale = useSelector(state => state.locale);

  const [fetchUrlLocale, setFetchUrlLocale] = React.useState({url: './clothes.json', locale: 'en'});


  function setStates(url) {
    fetch(url).then(response => response.json()).then(
      (res) => {
        dispatch(setCartMass(localStorage.getItem('cartLocalStorage') ?
          (JSON.parse(localStorage.getItem('cartLocalStorage'))) : []));
        dispatch(setWishMass(localStorage.getItem('wishLocalStorage') ?
          (JSON.parse(localStorage.getItem('wishLocalStorage'))) : []));
        dispatch(setItems(res));
      }
    )
  }

  React.useEffect(() => setStates(fetchUrlLocale.url), []);

  React.useEffect(() => setStates(fetchUrlLocale.url), [fetchUrlLocale]);
  React.useEffect(() => setFetchUrlLocale(locale), [locale]);

  React.useEffect(() => {
    currElem && localStorage.setItem('wishLocalStorage', JSON.stringify(wishMass));
  }, [wishMass]);

  React.useEffect(() => {
    currElem && localStorage.setItem('cartLocalStorage', JSON.stringify(cartMass));
  }, [cartMass]);
  

  return (
    itemsObj && 
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <h1>Main Page</h1>
        </Route>
        <Route exact path="/woman">
          <Main />
        </Route>
        <Route exact path="/man">
          <Main />
        </Route>
        <Route exact path="/designer">
          <h1>Designers page</h1>
        </Route>
        <Route exact path="/wish-list">
          <Cart page="wish" /> 
        </Route>
        <Route exact path="/cart">
          <Cart page="cart" /> 
        </Route>
      </Switch>
    </Router>
  );
}
export default App;