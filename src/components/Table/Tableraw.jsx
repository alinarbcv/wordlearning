import style from "./Table.module.css"

function Tableraw(props){
    return(
        <tr>
        <td>{props.word}</td>
        <td>{props.translate}</td>
        <td>{props.transcription}</td>
        <td>{props.repeat}</td>

    </tr>
    );
}
export default Tableraw;