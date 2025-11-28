import { useEffect, useRef } from "react";
import {
  Building2,
  Heart,
  Plane,
  Home,
  Fuel,
  UtensilsCrossed,
  Hammer,
  Truck,
  ShoppingBag,
  Pill,
  Wheat,
  Hospital,
  GraduationCap,
  Ship,
  ShieldCheck,
  Droplet,
  FileText,
  ArrowRight,
  MapPin,
  Mail,
  FileCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../Styles/CompainesSection.css";

gsap.registerPlugin(ScrollTrigger);

interface Company {
  name: string;
  icon: LucideIcon;
  sector: string;
  year: string;
  description: string;
  location?: string;
  href?: string;
  email?: string;
  regNo?: string;
}

const CompaniesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (gridRef.current) {
      const cards = gridRef.current.querySelectorAll(".company-card");

      gsap.fromTo(
        cards,
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  const companies: Company[] = [
    {
      name: "Remigella Interlink & Associate Nigeria Limited",
      icon: Building2,
      sector: "Trading & Commerce",
      year: "1993",
      description:
        "Pioneer company specializing in imports, exports and general trading",
      location: "Lagos, Nigeria",
      email: "remigella@remigellagroup.com",
      regNo: "RC/NO: 216708",
    },
    {
      name: "Ohamadike International Foundation",
      icon: Heart,
      sector: "Non-Profit",
      year: "2010",
      description:
        "Humanitarian organization supporting education, healthcare and community development",
      location: "Nigeria",
      href: "https://www.ohamadikefoundation.org",
      email: "info@ohamadikefoundation.org",
      regNo: "CAC/IT/NO: 38276",
    },
    {
      name: "Villa Franca Global Travels and Tours Limited",
      icon: Plane,
      sector: "Tourism & Travel",
      year: "2017",
      description:
        "Full-service travel agency offering global tourism and corporate travel solutions",
      location: "Lagos, Nigeria",
      email: "villafranca@remigellagroup.com",
      regNo: "RC 1437811",
    },
    {
      name: "Bella Vita Properties UK Limited",
      icon: Home,
      sector: "Real Estate",
      year: "2018",
      description:
        "Premier real estate development and property management services",
      location: "Nigeria & UK",
      email: "bellavita@remigellagroup.com",
    },
    {
      name: "Valpantena Global Oil and Gas UK Limited",
      icon: Fuel,
      sector: "Energy",
      year: "2018",
      description:
        "Oil and gas exploration, marketing and petroleum products distribution",
      location: "Multi-National",
      email: "valpantena@remigellagroup.com",
    },
    {
      name: "Grand Afrique Global Foods Limited",
      icon: UtensilsCrossed,
      sector: "Food Service",
      year: "2019",
      description:
        "Comprehensive foodservice distribution and hospitality solutions",
      location: "Nigeria",
      email: "grandafrique@remigellagroup.com",
    },
    {
      name: "Dansantoria Global Construction Company Nig. Limited",
      icon: Hammer,
      sector: "Construction",
      year: "2018",
      description:
        "Building and road construction with experienced architects and engineers",
      location: "Nigeria",
      email: "dansantoria@remigellagroup.com",
      regNo: "RC 1496527",
    },
    {
      name: "Bellastrada Transport Company Nig. Limited",
      icon: Truck,
      sector: "Logistics",
      year: "2018",
      description: "Road transport and logistics services across West Africa",
      location: "Nigeria",
      email: "bellastrada@remigellagroup.com",
      regNo: "RC 1495951",
    },
    {
      name: "Remigus General Trading LLC",
      icon: Building2,
      sector: "Trading",
      year: "1993",
      description: "Specialize in general trading",
      location: "Lagos, Nigeria",
      email: "gentrade@remigellagroup.com",
    },
    {
      name: "Texas Kitchens Limited",
      icon: ShoppingBag,
      sector: "Quick Service Restaurants",
      year: "2019",
      description: "Restaurant chain serving quality meals to millions daily",
      location: "Nigeria",
      email: "texas@remigellagroup.com",
    },
    {
      name: "Propensity Pharmaceuticals Limited",
      icon: Pill,
      sector: "Pharmaceuticals",
      year: "2019",
      description:
        "Quality pharmaceutical ingredients and products distribution",
      location: "USA & Nigeria",
      email: "propensity@remigellagroup.com",
      regNo: "RC 1561389",
    },
    {
      name: "Primavera Global Farms Limited",
      icon: Wheat,
      sector: "Agriculture",
      year: "2019",
      description: "Large-scale cassava farming and agricultural production",
      location: "Ogun State",
      email: "primavera@remigellagroup.com",
    },
    {
      name: "Verona Int. Hospital Limited",
      icon: Hospital,
      sector: "Healthcare",
      year: "2019",
      description:
        "State-of-the-art medical facility with international standards",
      location: "Nigeria",
      email: "verona@remigellagroup.com",
      regNo: "RC 1561474",
    },
    {
      name: "Prima Grado Int. Schools Limited",
      icon: GraduationCap,
      sector: "Education",
      year: "2019",
      description: "International school providing world-class education",
      location: "Nigeria",
      email: "primagado@remigellagroup.com",
    },
    {
      name: "Verona Int. Forex Nig Limited",
      icon: FileText,
      sector: "Financial Services",
      year: "2018",
      description: "Foreign exchange and money transfer services",
      location: "USA & Nigeria",
      email: "veronaforex@remigellagroup.com",
    },
    {
      name: "Akuma Global Shipping Company UK Limited",
      icon: Ship,
      sector: "Maritime",
      year: "2020",
      description: "Global shipping and maritime transport solutions",
      location: "UK",
      email: "akuma@remigellagroup.com",
    },
    {
      name: "Remigella Int. SARL",
      icon: Droplet,
      sector: "Manufacturing",
      year: "2021",
      description: "Remigella international",
      location: "Nigeria",
      email: "international@remigellagroup.com",
    },
    {
      name: "Sicurezza Global Security Company Limited",
      icon: ShieldCheck,
      sector: "Security Services",
      year: "2019",
      description: "Professional security and protection services",
      location: "Nigeria",
      email: "sicurezza@remigellagroup.com",
    },
    {
      name: "Rengo Foods Limited",
      icon: Droplet,
      sector: "Manufacturing",
      year: "2021",
      description: "Premium table water production and distribution",
      location: "Nigeria",
      email: "rengo@remigellagroup.com",
    },
    {
      name: "Ohamadike Int. Football Club",
      icon: Building2,
      sector: "Sports",
      year: "2017",
      description: "Professional football club developing African talent",
      location: "Nigeria",
      href: "https://www.ohamadikefcc.org",
      email: "info@ohamadikefcc.org",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="companies-section" id="companies" ref={sectionRef}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">Our Portfolio</span>
          <h2 className="section-title">22 Companies. Infinite Impact.</h2>
          <p className="section-subtitle">
            Diverse businesses united by excellence and innovation across
            multiple continents
          </p>
        </motion.div>

        <motion.div
          className="companies-grid"
          ref={gridRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {companies.map((company, idx) => {
            const IconComponent = company.icon;
            return (
              <motion.div
                key={idx}
                className="company-card"
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 },
                }}
              >
                <div className="company-icon-wrapper">
                  <div className="company-icon">
                    <IconComponent size={40} />
                  </div>
                </div>
                <h3 className="company-name">{company.name}</h3>
                <p className="company-sector">{company.sector}</p>
                <p className="company-section-description">
                  {company.description}
                </p>

                <div className="company-meta">
                  <span className="company-year">Est. {company.year}</span>
                  {company.location && (
                    <span className="company-location">
                      <MapPin size={14} />
                      {company.location}
                    </span>
                  )}
                </div>

                {company.email && (
                  <div className="company-contact">
                    <Mail size={16} />
                    <a
                      href={`mailto:${company.email}`}
                      className="company-email"
                    >
                      {company.email}
                    </a>
                  </div>
                )}

                {company.regNo && (
                  <div className="company-reg">
                    <FileCheck size={16} />
                    <span>{company.regNo}</span>
                  </div>
                )}

                {company.href ? (
                  <Link to={company.href} target="_blank" rel="noreferrer">
                    <button type="button" className="company-link">
                      Learn More
                      <ArrowRight size={18} />
                    </button>
                  </Link>
                ) : (
                  <Link to="/about">
                    <button type="button" className="company-link">
                      Learn More
                      <ArrowRight size={18} />
                    </button>
                  </Link>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default CompaniesSection;
