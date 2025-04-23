export default function Logo({ logo, alt }) {
  return (
    <a href="#">
      <img className="round-image" src={logo} alt={alt} />
    </a>
  );
}
