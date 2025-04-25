import "./styles.css";

export default function App() {
  return (
    <article className="article">
      <h2 className="article__title">Das ist meine Überschrift </h2>
      <label htmlFor="myInput">Mein Input</label>
      <input type="text" name="myInput" id="myInput" />
      <a href="https://www.google.de" className="article__link">
        Link zu Google
      </a>
    </article>
  );
}
