
const TextButton = (props) =>{
    return <button className={`${props.colour} text-white px-4 py-2 rounded hover:bg-blue-700 transition rounded disabled:opacity-50 disabled:cursor-not-allowed`}
    onClick={props.onClick}
    disabled={props.disabled}>
    {props.name}
  </button>
}
export default TextButton