import './Article.css';
import '../../styles/global.css'
import CollisionButton from '../generalComponents/button/CollisionButton';


function Article({ id, title, path, imageURL }) {
  return (
    <div className="article-container">
      <img src={imageURL} alt={title} className="article-image" />
      <p className="article-title primary-color">
        {id}: {title}
      </p>
      <CollisionButton path={path} text="Leggi di più"/>
    </div>
  );
}

export default Article;
