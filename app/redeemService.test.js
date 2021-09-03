import rewardsService from './redeemService';

test('Portfolio with SPORT and MUSIC', () => {
    const mockEligibilityService = jest.fn(x => "CUSTOMER_ELIGIBLE");
    var output = rewardsService("123", ["SPORT", "MUSIC"], mockEligibilityService)

    expect(output).toStrictEqual({ data: ["CHAMPIONS_LEAGUE_FINAL_TICKET", "KARAOKE_PRO_MICROPHONE"]});
  });

  test('Portfolio with MOVIES and KIDS', () => {
    const mockEligibilityService = jest.fn(x => "CUSTOMER_ELIGIBLE");
    var output = rewardsService("123", ["MOVIES", "KIDS"], mockEligibilityService)

    expect(output).toStrictEqual({ data: ["PIRATES_OF_THE_CARIBBEAN_COLLECTION"]});
  });

  test('Portfolio with NEWS', () => {
    const mockEligibilityService = jest.fn(x => "CUSTOMER_ELIGIBLE");
    var output = rewardsService("123", ["NEWS"], mockEligibilityService)

    expect(output).toStrictEqual({ data: []});
  });

  test('Portfolio with NEWS', () => {
    const mockEligibilityService = jest.fn(x => "CUSTOMER_INELIGIBLE");
    var output = rewardsService("456", ["SPORT"], mockEligibilityService)

    expect(output).toStrictEqual({ data: []});
  });

  test('Customer Not Eligible', () => {
    const mockEligibilityService = jest.fn(x => "Customer_not_eligible");
    var output = rewardsService("456", ["SPORT"], mockEligibilityService)

    expect(output).toStrictEqual({ data: [], msg: "Unknown Error",});
  });

  test('Technical Failure Exception', () => {
    const mockEligibilityService = jest.fn(x => "Technical_failure_exception");
    var output = rewardsService("456", ["SPORT"], mockEligibilityService)

    expect(output).toStrictEqual({ data: [], msg: "Unknown Error",});
  });

  test('Invalid account number exception', () => {
    const mockEligibilityService = jest.fn(x => "Invalid Account Number");
    var output = rewardsService("789", ["SPORT"], mockEligibilityService)

    expect(output).toStrictEqual({ data: [], msg: "Unknown Error",});
  });

