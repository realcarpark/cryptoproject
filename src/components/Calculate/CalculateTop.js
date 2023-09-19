function CalculateTop() {
  return (
    <div className="calculate-top">
      <div className="hash-rate">
        <input
          placeholder="Enter your hash rate"
          type="text"
          className="hash-rate__input"
        />
        <input
          placeholder="Enter your TH/s"
          type="text"
          className="ths__input"
        />
        <button className="hash-rate__btn">Calculate</button>
      </div>
    </div>
  );
}

export default CalculateTop;
