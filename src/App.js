import { Fragment } from "react";
import { useSelector } from "react-redux";
import Header from "./components/Header";
import Counter from "./components/Counter";
import UserProfile from "./components/UserProfile";
import Auth from "./components/Auth";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  // console.log(isAuthenticated);
  return (
    <Fragment>
      <Header />
      {!isAuthenticated && <Auth />}
      {isAuthenticated && <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;
