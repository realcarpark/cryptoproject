import arrowRightIcon from "../../icons/ArrowRight.png";
import cryptocurrenciesIcon1 from "../../icons/cryptocurrencies-icon1.png";
import cryptocurrenciesIcon2 from "../../icons/cryptocurrencies-icon2.png";
import cryptocurrenciesIcon3 from "../../icons/cryptocurrencies-icon3.png";

function CryptoCards() {
  return (
    <div className="cryptocurrencies-cards">
      <div className="cryptocurrencies-card cryptocurrencies-card-color">
        <img
          src={cryptocurrenciesIcon1}
          alt=""
          className="cryptocurrencies-card-icon"
        />
        <div className="cryptocurrencies-name">
          <p className="cryptocurrencies-name__man-inner">Bitcoin</p>
          <p className="cryptocurrencies-name_second-inner">BTC</p>
        </div>
        <p className="cryptocurrencies-decription">
          Digital currency in which a record of transactions is maintained.
        </p>
        <button className="cryptocurrencies-card-btn">
          Start mining
          <img src="/icon/Arrow Right.png" alt="" />
        </button>
      </div>
      <div className="cryptocurrencies-card">
        <img
          src={cryptocurrenciesIcon3}
          alt=""
          className="cryptocurrencies-card-icon"
        />
        <div className="cryptocurrencies-name">
          <p className="cryptocurrencies-name__man-inner">Ethereum</p>
          <p className="cryptocurrencies-name_second-inner">ETH</p>
        </div>
        <p className="cryptocurrencies-decription">
          Blockchain technology to create and run decentralized digital
          applications.
        </p>
        <button className="cryptocurrencies-card-btn">
          Start mining
          <img src="/icon/Arrow Right.png" alt="" />
        </button>
      </div>
      <div className="cryptocurrencies-card">
        <img
          src={cryptocurrenciesIcon2}
          alt=""
          className="cryptocurrencies-card-icon"
        />
        <div className="cryptocurrencies-name">
          <p className="cryptocurrencies-name__man-inner">Litecoin</p>
          <p className="cryptocurrencies-name_second-inner">LTC</p>
        </div>
        <p className="cryptocurrencies-decription">
          Cryptocurrency that enables instant payments to anyone in the world.
        </p>
        <button className="cryptocurrencies-card-btn">
          Start mining
          <img src={arrowRightIcon} alt="" />
        </button>
      </div>
    </div>
  );
}

export default CryptoCards;
