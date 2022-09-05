import {Component} from "react";

import "./employeers-list-item.css"



class EmployeersListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            increase: false,
            nameStar: false
        }


    }

    onIncrease = () => {
          this.setState(({increase}) => ({
              increase: !increase
          }))
    }

    onNameStar = () => {
        this.setState(({nameStar}) => ({
            nameStar: !nameStar
        }))
    }


    render () {
        const {name, salary} = this.props;
        const {nameStar, increase} = this.state
        let classNames = 'list-group-item d-flex justify-content-between';
            if (increase) {
                classNames += ' increase';
            }
            if (nameStar) {
                classNames += ' like'
            }


        return (
            <li className={classNames}>
                <span className="list-group-item-label"
                      onClick={this.onNameStar}>{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + ' $'}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                            className="btn-cookie btn-sm"
                            onClick={this.onIncrease}>
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"
                            className="btn-trash btn-sm ">
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
                )
            }
    }

export default EmployeersListItem;