import { Link } from "react-router-dom";
import { servicesData } from "../data/servicesData";
import Button from "../components/UI/Button";
import { FaCheck } from "react-icons/fa";

export default function Services() {
  return (
    <div className="min-h-screen pt-20 pb-16 px-4">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-orbitron text-white mb-6">
            Freelance & <span className="text-neonBlue">Development</span>
          </h1>
          <p className="text-lg text-gray-300">
            Need a website or a custom application? I offer professional
            development services using the latest tech stack. Let's build
            something amazing together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className={`
                relative bg-white/5 border rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300
                flex flex-col
                ${service.borderColor} hover:shadow-[0_0_20px_rgba(0,0,0,0.3)]
              `}
            >
              <div className={`text-4xl mb-6 ${service.color}`}>
                <service.icon />
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 font-orbitron">
                {service.title}
              </h3>
              <p className="text-3xl font-bold text-white mb-6">
                {service.price}
              </p>

              <p className="text-gray-400 mb-8 flex-grow">
                {service.description}
              </p>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-sm text-gray-300"
                  >
                    <div
                      className={`p-1 rounded-full bg-white/10 ${service.color}`}
                    >
                      <FaCheck size={10} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={`mailto:mariebukh@gmail.com?subject=Order: ${service.title}`}
                className="mt-auto"
              >
                <Button variant="primary" className="w-full">
                  Order Now
                </Button>
              </a>

              <div
                className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full pointer-events-none`}
              ></div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center bg-white/5 border border-white/10 rounded-2xl p-10 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-4">
            Have a custom project?
          </h2>
          <p className="text-gray-400 mb-6">
            If you need something specific that isn't listed above, feel free to
            contact me directly.
          </p>
          <Link to="/#contacts">
            <Button variant="glass">Contact Me</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
