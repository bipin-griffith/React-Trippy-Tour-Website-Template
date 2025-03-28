import "./TravelPlans.css";

function TravelPlans() {
  return (
    <div className="travel-plans">
      <h1>International Jashn-e-Babul Hawaij</h1>
      <div className="plans-table">
        <div className="plans-header">
          <div className="plan-column highlight">Only Iraq</div>
          <div className="plan-column highlight">Iran Iraq Full Flight</div>
          <div className="plan-column highlight">Iran Iraq Syria</div>
          <div className="plan-column highlight">Only Iran</div>
        </div>
        <div className="plans-row">
          <div className="plan-column">12 Days</div>
          <div className="plan-column">22 Days</div>
          <div className="plan-column">28 Days</div>
          <div className="plan-column">11 Days</div>
        </div>
        <div className="plans-row">
          <div className="plan-column">Rs 95,111/-</div>
          <div className="plan-column">Rs 1,22,110/-</div>
          <div className="plan-column">Rs 1,70,110/-</div>
          <div className="plan-column">Rs 70,110/-</div>
        </div>
        <div className="plans-row">
          <div className="plan-column">28 Jan 2025</div>
          <div className="plan-column">28 Jan 2025</div>
          <div className="plan-column">28 Jan 2025</div>
          <div className="plan-column">14 Feb 2025</div>
        </div>
      </div>
    </div>
  );
}

export default TravelPlans;
