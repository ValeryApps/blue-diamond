import { Route } from "react-router";
import "./App.css";
import NavMenu from "./components/NavBar";
import CoursesList from "./features/courses/CoursesList";
import MemberForm from "./features/members/MemberForm";
import MemberList from "./features/members/MemberList";
import Home from "./Home";

function App() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route
        path={"/(.+)"}
        render={() => {
          return (
            <>
              <NavMenu />
              <Route exact path="/courses" component={CoursesList} />
              <Route exact path="/memberForm" component={MemberForm} />
              <Route exact path="/members" component={MemberList} />
            </>
          );
        }}
      />
    </>
  );
}

export default App;
