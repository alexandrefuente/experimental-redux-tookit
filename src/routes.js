import React from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Counter from "./components/counter";
import Movies from "./components/movies";
import Todos from "./components/todo";

export default function AppRoutes() {
  return (
    <>
      <Router>
        <div>
          <nav className="navbar">
            <ul>
              <li>
                <Link to="/">Todos</Link>
              </li>
              <li>
                <Link to="/counter">Counter</Link>
              </li>
              <li>
                <Link to="/movies">Movies</Link>
              </li>
            </ul>
          </nav>
        </div>

        <Routes>
          <Route path="/" element={<Todos />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/movies" element={<Movies />} />
        </Routes>
      </Router>
    </>
  );
}
