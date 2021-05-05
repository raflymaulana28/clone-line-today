import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import BookmarkPage from "./pages/bookmark-page";
import DetailNews from "./pages/detail-news";
import Home from "./pages/home";
import Loading from "./pages/loading";
import SearchPage from "./pages/search";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 700);
  }, []);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/news/:id" component={DetailNews} />
          <Route path="/search" component={SearchPage} />
          <Route path="/bookmark" component={BookmarkPage} />
        </Switch>
      )}
    </>
  );
}

export default App;
