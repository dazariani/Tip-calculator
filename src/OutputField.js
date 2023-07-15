function OutputField({ value, title }) {
  return (
    <section className="out-field-box flex-row">
      <div className="content-box">
        <h2>{title}</h2>
        <span>/ person</span>
      </div>
      <span>${value}</span>
    </section>
  );
}

export default OutputField;
