const SectionHeading = ({ number, eyebrow, title, intro, id }) => {
  return (
    <header className="section-heading reveal">
      <p className="eyebrow">
        <span aria-hidden="true">{number} / </span>
        {eyebrow}
      </p>
      <h2 id={id}>{title}</h2>
      {intro ? <p className="section-intro">{intro}</p> : null}
    </header>
  )
}

export default SectionHeading
