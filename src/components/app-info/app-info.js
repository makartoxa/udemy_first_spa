import './app-info.css';

const AppInfo = ({employeers, increased}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании Netflix</h1>
            <h2>Общее число сотрудников: {employeers}</h2>
            <h2>Премию получат: {increased}</h2>
        </div>
    )
}

export default AppInfo;