import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router";
import store from "./store/configureStore";
import { routes } from "./constants";
import styledTheme from "./constants/globalTheme";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={styledTheme}>
          <BrowserRouter>
            <Switch>
              <Route exact path={routes.home} component={null} />
            </Switch>
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
