import { AppRoute } from "./router/router";
import Header from './components/Header';
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
    return (
        <div className="App">
			<Header />
            <AppRoute />
			<Footer />
        </div>
    );
};

export default App;
