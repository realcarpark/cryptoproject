function StartMining() {
  return (
    <sectiom className="Start-mining">
      <div className="container">
        <div className="start-mining-inner">
          <div className="start-mining-left">
            <h3>Start mining now</h3>
            <p className="start-mining-description">
              Join now with CRAPPO to get the latest news and start mining now
            </p>
          </div>
          <div className="start-mining-right">
            <input
              placeholder="Enter your email"
              type="text"
              className="email-input"
            />
            <button className="start-mining__btn">Subscribe</button>
          </div>
        </div>
      </div>
    </sectiom>
  );
}

export default StartMining;
