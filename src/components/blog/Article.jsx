import './Article.css';
import '../../styles/global.css'


function Article({ id, title, path, imageURL }) {
  return (
    <div className="article-container">
      <img src={imageURL} alt={title} className="article-image" />
      <p className="article-title secondary-color">
        {id}: {title}
      </p>
      <div>
        <a className="article-link secondary-color" href={path}>Leggi di più</a>
      </div>
    </div>
  );
}

export default Article;
