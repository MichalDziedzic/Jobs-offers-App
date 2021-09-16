import "./App.css";
import TechJobItem from "./component/FilterTechItem";

function App() {
     return (
          <div className="app">
               <header className="app-header">
                    <div className="filter-bar">
                         <TechJobItem />
                         <TechJobItem />
                         <TechJobItem />
                    </div>
               </header>
               <section className="app-section">
                    <div className="list-job">
                         <div className="job-item" />
                    </div>
               </section>
          </div>
     );
}

export default App;
