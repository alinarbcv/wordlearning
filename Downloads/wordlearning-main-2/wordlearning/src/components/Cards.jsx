function Cards(props) {
    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text">{props.description}</p>
                <p className="card-translate">{props.translate}</p>
            </div>
            <div className="card-footer">
                <button className="card-add">Next word</button>
                <button className="card-add">Repeat this word</button>
            </div>
        </div>
    );
}

export default Cards;