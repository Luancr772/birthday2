/* eslint-disable no-unreachable */
import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Love from "./Pages/Love";
import Main from "./Pages/Main";
import Progress from "./Pages/Progress";
import Wish from "./Pages/Wish";
import Important from "./Pages/Important";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route element={<Main></Main>}>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/love" element={<Love></Love>}></Route>
          <Route path="/progress" element={<Progress></Progress>}></Route>
          <Route path="/wish" element={<Wish></Wish>}></Route>
          <Route path="/important" element={<Important></Important>}></Route>
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
