import Layout from "./components/Layout/Layout";
import PizzaBuilder from "./components/PizzaBuilder/PizzaBuilder";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Layout>
        <PizzaBuilder />
      </Layout>
    </div>
  );
};

export default App;
