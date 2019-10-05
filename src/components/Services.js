import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info:
          "Enjoy World's best cocktails in wonderful atmosphere served by great bartenders."
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info:
          "Spell-bound and searching for a genuine experience of the beautiful landscapes and natural world."
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
        info:
          "We provide pre-booked free shuttle bus services for all our customers from the train station and the airport."
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info:
          "We are delighted to serve the World's strongest beer."
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map(item => {
            return (
              <article key={`item-${item.title}`} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
