export default function BusinessCard(props) {
  return (
    <div className="card">
      <h2 className="name">{props.name}</h2>
      <p className="description">{props.description}</p>
      <h3 className="interestsHeader">Interests</h3>
      <ul className="interestsList">
        {props.interests.map((interest) => (
          <li key={interest} className="interestItem">
            {interest}
          </li>
        ))}
      </ul>
      <div className="socialLinks">
        <a
          href={props.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          LinkedIn
        </a>
        <br />
        <a
          href={props.github}
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          Github
        </a>
      </div>
    </div>
  );
}
