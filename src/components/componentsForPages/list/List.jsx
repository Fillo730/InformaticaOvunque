import './List.css'

function List({listElements}) {
  return (
    <ul className="content-list">
        {listElements.map((listElement) => (
            <li><strong>{listElement.header}</strong>: {listElement.text}</li>
        ))}
    </ul>
  )
}

export default List;