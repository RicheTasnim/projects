import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic Plan",
      price: 1500,
      currency: "BDT",
      features: [
        "Access to all gym equipment",
        "Locker room access",
        "1 guest pass per month",
        "Free Wi-Fi",
        "Access during off-peak hours",
        "Fitness assessment once every 6 months",
      ],
    },
    {
      id: 2,
      name: "Standard Plan",
      price: 2500,
      currency: "BDT",
      features: [
        "Access to all gym equipment",
        "Locker room & shower access",
        "2 guest passes per month",
        "Free Wi-Fi",
        "Access during all working hours",
        "Weekly group fitness classes",
        "2 personal training sessions per month",
        "Free bottled water",
      ],
    },
    {
      id: 3,
      name: "Premium Plan",
      price: 4000,
      currency: "BDT",
      features: [
        "Unlimited 24/7 access",
        "All Standard features",
        "Unlimited guest access",
        "Private locker & towel service",
        "Sauna and steam room access",
        "Dedicated fitness advisor",
        "Monthly nutrition consultation",
        "Access to exclusive premium classes",
        "Free branded merchandise (T-shirt, bottle)",
      ],
    },
    {
      id: 4,
      name: "Student Plan",
      price: 1200,
      currency: "BDT",
      features: [
        "Access to gym equipment during student hours",
        "Group fitness classes on weekdays",
        "Locker room access",
        "Student ID required",
        "Free Wi-Fi",
        "No guest pass included",
        "Quarterly progress check",
        "Discounts on campus partner food shops",
      ],
    },
    {
      id: 5,
      name: "Family Plan",
      price: 6000,
      currency: "BDT",
      features: [
        "Access for up to 4 family members",
        "All Premium features",
        "Weekend family workout sessions",
        "Kids zone with supervision",
        "Couples yoga and group sessions",
        "2 personal training sessions/month per adult",
        "Birthday discount perks",
        "Family locker access",
      ],
    },
  ];

  return (
    <div className="m-12">
      <h2 className="text-5xl">Best Price in Town</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {priceOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
