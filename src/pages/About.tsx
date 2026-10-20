import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Smartphone,
  SlidersHorizontal,
  Wallet,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CartFunctions } from "@/contexts/CartContext";
const About = ({ cart }: { cart: CartFunctions }) => (
  <>
    <Header cart={cart} />
    <main className="store-shell content-page">
      <span className="eyebrow">OUR STORY / THE PERSON BEHIND PHONEHAUS</span>
      <h1>
        Good tech.
        <br />
        Better connections<span className="logo-dot">.</span>
      </h1>
      <p className="content-lead">
        Your phone holds a little bit of your whole world. We’re making it
        easier to explore your next one, with Apple, Samsung, Xiaomi, and Redmi
        under one roof.
      </p>
      <Link className="store-button dark-button" to="/shop">
        Find your next phone <ArrowUpRight size={17} />
      </Link>
      <section
        className="founder-section"
        aria-labelledby="founder-story-title"
      >
        <figure className="founder-card">
          <div className="founder-photo">
            <span className="founder-label">MEET THE FOUNDER</span>
            <img
              src="/team/john-founder.jpg"
              alt="John, Founder and CEO of Phonehaus"
              width={1013}
              height={1024}
            />
          </div>
          <figcaption>
            <div>
              <strong>John</strong>
              <span>Founder &amp; CEO</span>
            </div>
            <span className="founder-signature">
              phonehaus<span className="logo-dot">.</span>
            </span>
          </figcaption>
        </figure>
        <div className="founder-story">
          <span className="eyebrow">A SIMPLE IDEA. A PERSONAL MISSION.</span>
          <h2 id="founder-story-title">
            A better way to find
            <br />
            your next connection<span className="logo-dot">.</span>
          </h2>
          <p>
            Phonehaus began with a simple question: why should finding the right
            phone feel so complicated? As someone who enjoys exploring
            technology, John imagined a place where people could discover their
            options, understand what fits their budget, and feel confident about
            their choice.
          </p>
          <p>
            That idea became Phonehaus. As its founder, owner, and CEO, John
            brings Apple, Samsung, Xiaomi, and Redmi together in one
            thoughtfully designed store. The vision is personal: help students,
            first-time buyers, and everyday phone users find a device that fits
            the way they live.
          </p>
          <p>
            Built as a student-led software engineering project, Phonehaus is
            the first step toward that bigger vision. Every page, product
            listing, and feature is a chance to learn, improve, and make
            choosing a phone a little more straightforward. For John, a great
            store starts with listening to people and building something useful
            for them.
          </p>
          <div className="founder-mission">
            <span className="eyebrow">THE IDEA THAT GUIDES US</span>
            <p>
              Make good technology easier to discover, and the next connection
              easier to make.
            </p>
          </div>
        </div>
      </section>
      <div className="about-grid">
        <div>
          <Smartphone />
          <h2>Pick your favorite.</h2>
          <p>
            Stay with the brand you love, or discover a different perspective.
            Browse all four brands in one simple catalogue.
          </p>
        </div>
        <div>
          <SlidersHorizontal />
          <h2>Make it personal.</h2>
          <p>
            Search by model, filter by brand and budget, and take a closer look
            at the finish and storage of each phone.
          </p>
        </div>
        <div>
          <Wallet />
          <h2>Find your balance.</h2>
          <p>
            From everyday essentials to flagship designs, explore a range of
            illustrative prices to find your starting point.
          </p>
        </div>
      </div>
      <p className="preview-notice">
        Phonehaus is a software engineering course project. The catalogue,
        prices, and product illustrations are for demonstration. We are an
        independent concept store, with no affiliation to the brands shown.
      </p>
    </main>
    <Footer />
  </>
);
export default About;
