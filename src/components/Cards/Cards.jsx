import style from "./Cards.module.css"

function Cards(props) {


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
            </div>
        </div>
    );
}

export default Cards;

