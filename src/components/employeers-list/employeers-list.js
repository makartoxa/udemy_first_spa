import EmployeersListItem from "../employeers-list-item/employeers-list-item";

import "./employeers-list.css";

const EmployeersList = ({data}) => {

    const elements = data.map((item, index) => {
        return (
            <EmployeersListItem {...item} key={index} />
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
}

export default EmployeersList;