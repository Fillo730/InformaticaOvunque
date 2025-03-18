import './List.css'

function List({listElements}) {
  return (
    <ul className='content-list'>
        {listElements.map((element, index) => (
            <li key={index}><strong>{element.header}</strong>:{element.text}</li>
        ))}
    </ul>
  )
}

export default List;