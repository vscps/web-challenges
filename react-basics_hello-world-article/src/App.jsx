import "./styles.css";

export default function App() {
  return <HelloWorldArticle></HelloWorldArticle>;
}

function HelloWorldArticle() {
  return (
    <article>
      <h1>Überschrift</h1>
      <p>Mein Lorem-Ipsum-Absatz-Text</p>
    </article>
  );
}
