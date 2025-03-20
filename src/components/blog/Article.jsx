import './Article.css';
import '../../styles/global.css'
import CollisionButton from '../generalComponents/button/CollisionButton';

function Article({ id, title, path, text}) {
  return (
    <div className="card">
      <div className="content">
        <p class="para">
          <h3>{id}: {title}</h3>
          {text}
        </p>
        <CollisionButton path={path} text="Leggi di più"/>
      </div>
    </div>
  );
}

export default Article;
