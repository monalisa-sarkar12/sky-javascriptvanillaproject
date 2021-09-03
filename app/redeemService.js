import rewardsMap from "./constants";
const rewardsService = (
  customerAccountNumber,
  portfolio,
  eligibilityService
) => {
  let eligibility = eligibilityService(customerAccountNumber);
switch (eligibility){
  case "CUSTOMER_ELIGIBLE": {
    let data = portfolio.map((p) => rewardsMap[p]).filter((x) => x !== "N/A");

    return { data: data };
  } case "CUSTOMER_INELIGIBLE": {
    return {
      data: [],
    };
  } case "Technical failure exception" : {
    return {
      data: [],
    };
  } case "Invalid account number exception" :{
    return {
      data: [],
      msg: "Invalid account number",
    };
  } default: {
    return {
      data: [],
      msg: "Unknown Error",
    };
  }
}

  return {
    data: [],
  };
};

module.exports = rewardsService;
