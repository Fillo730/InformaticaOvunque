import './Picture.css'

function Picture({path, altText}) {
  return (
    <img src={path} alt={altText} className="responsive-image"/>
  )
}

export default Picture;