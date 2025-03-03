// // pages/_app.js
import "@/styles/globals.css";
import { Provider } from "react-redux";
// import the Redux store
import { store } from "../redux/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      {" "}
      {/* This provides Redux store to your components */}
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
