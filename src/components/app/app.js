import {Component} from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeersList from "../employeers-list/employeers-list";
import EmployeersAddForm from "../employeers-add-form/employeers-add-form";

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Jonh M.', salary: 800, increase: true, nameStar: true, id: 1},
                {name: 'Alex B.', salary: 1500, increase: false, nameStar: false, id: 2},
                {name: 'Misha R.', salary: 3800, increase: false, nameStar: false, id: 3},
            ],
            term: ''
        }
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            // const index = data.findIndex(elem => elem.id === id);

            // const before = data.slice(0, index);
            // const after = data.slice(index + 1);
            // const newArr = [... before, ...after];
            // return {data: data}

            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            nameStar: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });

    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }
        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    render() {
        const {data, term} = this.state;
        const employeers = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        const visibleDate = this.searchEmp(data, term);

        return (
            <div className="app">
                <AppInfo employeers={employeers} increased={increased} />

                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter/>
                </div>

                <EmployeersList data={visibleDate}
                                onDelete={this.deleteItem}
                                onToggleProp={this.onToggleProp}/>

                <EmployeersAddForm  onAdd={this.addItem}/>
            </div>
        );
    }
}

export default App;