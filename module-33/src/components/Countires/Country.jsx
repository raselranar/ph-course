import React, { useState } from "react";

export default function Country({
  country: { name, flags, area, population },
  handleVisitedCountries,
}) {
  const [visitStatus, setVisitStatus] = useState(false);

  // click handler
  function handleClick() {
    setVisitStatus(!visitStatus);
    handleVisitedCountries(name, visitStatus);
  }

  return (
    <div
      className={`card card-border ${visitStatus && "bg-primary text-primary-content"} bg-base-100  shadow-sm`}
    >
      <figure>
        <img
          className="w-full object-cover"
          src={flags?.flags?.png}
          alt={flags?.flags?.alt}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Name: {name?.common}</h2>
        <p>Populations: {population.population}</p>
        <p>
          Area: {area?.area} (
          {area?.area > 300000 ? "Big Country" : "Small Country"})
        </p>
        <div className="card-actions justify-end">
          <button
            onClick={handleClick}
            className={`btn ${visitStatus ? "btn-active" : "btn-primary"}`}
          >
            {visitStatus ? "Visited" : "Not Visited"}
          </button>
        </div>
      </div>
    </div>
  );
}
