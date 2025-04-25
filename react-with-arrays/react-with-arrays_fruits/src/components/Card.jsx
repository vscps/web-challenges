import "./Card.css";

export default function Card({ name, color }) {
  const classString = "card--" + color;
  return <p className={classString}>{name}</p>;
}
