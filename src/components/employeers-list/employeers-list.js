import EmployeersListItem from "../employeers-list-item/employeers-list-item";

import "./employeers-list.css";

const EmployeersList = ({data, onDelete, onToggleIncrease, onToggleNameStar}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <EmployeersListItem {...item}
                                key={id}
                                onDelete={() => onDelete(id)}
                                onToggleIncrease={() => onToggleIncrease(id)}
                                onToggleNameStar={() => onToggleNameStar(id)}
            />
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
}

export default EmployeersList;