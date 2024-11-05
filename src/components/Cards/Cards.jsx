import style from "./Cards.module.css"

function Cards(props) {
function onShowClick(){
    props.setTableVisible(true);
}
function onHideClick(){
    props.setTableVisible(false);
}

    return (
        <div className={style.card}>
            <div className={style.cardBody}>
            {!props.checked ? (
          <h4 className={style.cardTitle}>{props.title}</h4>
        ) : (
          
          <>
          <p className={style.cardTranslate}>{props.translate}</p>
          <p className={style.cardText}>{props.description}</p>
            
          </>
        )}

            </div>
            <div className={style.button}>
            <button onClick={props.onCheckClick}>
                    {props.checked ? "Show word again" : "Check"}
                </button>
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