function Tableraw({ word, translate, onDelete }) {
    return (
      <tr>
        <td>{word}</td>
        <td>{translate}</td>
        <td>
          <button onClick={onDelete}>Delete</button>
        </td>
      </tr>
    );
  }
  
  export default Tableraw;
  