import { CollisionButton } from '../../components/componentsDependencies';
import './Article.css';

function Article({ id, title, path, text}) {
  return (
    <div className="card">
      <div className="content">
        <p className="para">
          <h3>{id}: {title}</h3>
          {text}
        </p>
        <CollisionButton path={path} text="Leggi di più"/>
      </div>
    </div>
  );
}

export default Article;