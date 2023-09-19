import nIcon1 from "./../../icons/n-Icon1.png";
import nIcon2 from "./../../icons/n-Icon2.png";
import nIcon3 from "./../../icons/n-Icon3.png";

function NumbersRow() {
  return (
    <div className="numbers">
      <div className="numbers-item">
        <div className="numbers-icon">
          <img src={nIcon2} alt="" className="numbers-item__icon" />
        </div>
        <div className="nubers-item__text">
          <p className="numbes-item__text-Number">$30B</p>
          <p className="numbes-item__text-Description">
            Digital Currency Exchanged
          </p>
        </div>
      </div>
      <div className="numbers-item">
        <div className="numbers-icon">
          <img src={nIcon3} alt="" className="numbers-item__icon" />
        </div>
        <div className="nubers-item__text">
          <p className="numbes-item__text-Number">10M+</p>
          <p className="numbes-item__text-Description">
            Trusted Wallets Investor
          </p>
        </div>
      </div>
      <div className="numbers-item">
        <div className="numbers-icon">
          <img src={nIcon3} alt="" className="numbers-item__icon" />
        </div>
        <div className="nubers-item__text">
          <p className="numbes-item__text-Number">195</p>
          <p className="numbes-item__text-Description">Countries Supported</p>
        </div>
      </div>
    </div>
  );
}

export default NumbersRow;
