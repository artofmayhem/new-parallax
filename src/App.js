import "./App.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import {
  Nav,
  Header,
  HeroOne,
  CardSpace,
  CardSpaceTwo,
  CardSpaceThree,
  CardSpaceFour,
  LouisVuitton,
  Dynamic,
  Apple,
  MoswaSection,
  BottomSection
} from "./components/index";



function App() {
  return (
    <Router>
      <div className="container">
        <Nav />
        <Header />
        <CardSpace />
        <HeroOne />
        <LouisVuitton />
        <CardSpaceTwo />
        <CardSpaceThree />
        <MoswaSection />
        <Apple />
        <Dynamic />
        <CardSpaceFour />
        <BottomSection />
      </div>
      <Switch>
        {/* <Route exact path={"/"} component={AppHome} />
        <Route path={"/about"} component={AppAbout} />
        <Route path={"/chef"} component={AppChef} />
        <Route exact path={"/recipes"} component={AppRecipes} />
        <Route exact path={"/nutrition"} component={AppNutrition} />
        <Route exact path={"/cocktails"} component={AppCocktail} /> */}
      </Switch>
    </Router>
  );
}

export default App;
