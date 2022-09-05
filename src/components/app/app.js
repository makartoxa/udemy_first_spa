import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeersList from "../employeers-list/employeers-list";
import EmployeersAddForm from "../employeers-add-form/employeers-add-form";

import './app.css';

function App() {

    const data = [
        {name: 'Jonh M.', salary: 800, increase: true, id: 1},
        {name: 'Alex B.', salary: 1500, increase: false, id: 2},
        {name: 'Misha R.', salary: 3800, increase: false, id: 3},
    ];

    return (
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployeersList data={data}/>

            <EmployeersAddForm/>
        </div>
    );
}

export default App;