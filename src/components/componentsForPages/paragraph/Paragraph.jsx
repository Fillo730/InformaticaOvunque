import './Paragraph.css';

function Paragraph({ title, text, children=null }) {
  return (
    <div className="container">
      <h2 className="section-title primary-color text-central">{title}</h2>
      <p className="content-paragraph" dangerouslySetInnerHTML={{ __html: text }} />
      {children}
    </div>
  );
}

export default Paragraph;
