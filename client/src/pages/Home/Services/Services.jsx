import { FaTruck, FaGlobe, FaWarehouse, FaMoneyBillWave, FaBuilding, FaUndoAlt } from "react-icons/fa";

const servicesData = [
  {
    title: "Express & Standard Delivery",
    description:
      "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
    icon: <FaTruck className="text-4xl text-blue-600" />,
  },
  {
    title: "Nationwide Delivery",
    description:
      "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
    icon: <FaGlobe className="text-4xl text-green-600" />,
  },
  {
    title: "Fulfillment Solution",
    description:
      "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
    icon: <FaWarehouse className="text-4xl text-purple-600" />,
  },
  {
    title: "Cash on Home Delivery",
    description:
      "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
    icon: <FaMoneyBillWave className="text-4xl text-yellow-600" />,
  },
  {
    title: "Corporate Service / Contract In Logistics",
    description:
      "Customized corporate services which includes warehouse and inventory management support.",
    icon: <FaBuilding className="text-4xl text-orange-600" />,
  },
  {
    title: "Parcel Return",
    description:
      "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
    icon: <FaUndoAlt className="text-4xl text-red-600" />,
  },
];

const Services = () => {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-black">Our Services</h2>
        <p className="mt-4 text-black max-w-2xl mx-auto">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
          From personal packages to business shipments — we deliver on time, every time.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md hover:bg-primary hover:shadow-xl transition-all duration-300 ease-in-out flex flex-col items-center text-center"
          >
            {service.icon}
            <h3 className="text-xl font-semibold mt-4 text-black">{service.title}</h3>
            <p className="mt-2 text-black">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
