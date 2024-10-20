import style from "./Cards.module.css"

function Cards(props) {
function onShowClick(){
    props.setTableVisible(true);
}
function onHideClick(){
    props.setTableVisible(false);
}

    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">{props.title} </h4>
                <p className="card-text">{props.description}</p>
                <p className="card-translate">{props.translate}</p>
            </div>
            <div className={style.button}>
                <button onClick={props.onNextClick} className="card-add">Next word</button>
               {!props.tableVisible && 
                <button onClick={onShowClick} className="card-add">Show words that I have learned</button> }
                {props.tableVisible && 
                    <button onClick={onHideClick} className="card-add">Should I hide the table?</button>}
            </div>
        </div>
    );
}

export default Cards;