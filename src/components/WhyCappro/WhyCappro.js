import illustrationImage from "../../img/Illustration.png";
import NumbersRow from "../../components/NumbersRow/NumbersRow";

function WhyCappro() {
  return (
    <section className="Why-CRAPPO">
      <NumbersRow />
      <div className="Content">
        <div className="content-illustration">
          <img src={illustrationImage} alt="" />
        </div>
        <div className="content-info">
          <h2>Why you should choose CRAPPO</h2>
          <p className="content-info__decription">
            Experience the next generation cryptocurrency platform. No financial
            borders, extra fees, and fake reviews.
          </p>
          <button className="content-info__btn">Learn More</button>
        </div>
      </div>
    </section>
  );
}

export default WhyCappro;
