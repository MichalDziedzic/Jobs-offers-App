import "./App.css";
import TechJobItem from "./component/FilterTechItem";
import JobItem from "./component/JobItem";

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
                    <div className="list-jobs">
                         <JobItem />
                         <JobItem />
                         <JobItem />
                         <JobItem />
                    </div>
               </section>
          </div>
     );
}

export default App;
