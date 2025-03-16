import './Article.css';

function Article({ id, title, path, imageURL }) {
  return (
    <div className="article-container">
      <img src={imageURL} alt={title} className="article-image" />
      <p className="article-title">
        {id}: {title}
      </p>
    </div>
  );
}

export default Article;
