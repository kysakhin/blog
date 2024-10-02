import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AllBlogs from "./allBlogs";
import HandleItems from "./handleItems";

const blogPage = () => {
    return( 
        <Router>
            <Switch>
                <Route path="/" exact Component={AllBlogs} />
                <Route path="allBlogs/items/:category" Component={HandleItems} />
            </Switch>
        </Router>
    )
}