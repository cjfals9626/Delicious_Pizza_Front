import { useRoutes } from "react-router-dom";
import {routes} from "./routes";
import Layout from './components/layout/Layout';

function App() {

  const content = useRoutes(routes);

  return (
    
     <Layout>
      <div className="App">
        {content}        
      </div>
    </Layout> 
    
  );
}

export default App;
