import React from "react";
import s from "./ticket-list-item.module.css";

const TicketListItem = ({ ticket }) => {
  const { price, carrier, segments } = ticket;

  let transformedTicketPrice = String(price).split("");
  transformedTicketPrice.splice(2, 0, " ");
  transformedTicketPrice = transformedTicketPrice.join("");

  return (
    <div className={s.container}>
      <div className={s.header}>
        <p className={s.price}>{transformedTicketPrice} Р</p>
        <img
          className={s.logo}
          width="110"
          height="36"
          src={`//pics.avs.io/99/36/${carrier}.png`}
          alt="Company-logo"
        />
      </div>

      <ul className={s.list}>
        {segments.map(({ duration, stops, date, origin, destination }, idx) => {
          const ticketDurationInHours = Math.floor(duration / 60);
          const ticketDurationInMinutes = duration - ticketDurationInHours * 60;
          const ticketDuration = `${ticketDurationInHours}ч ${ticketDurationInMinutes}м`;
          const ticketStops =
            stops.length > 1
              ? `${stops.length} пересадки`
              : stops.length > 0
              ? `${stops.length} пересадка`
              : `${stops.length} пересадок`;
          const departureTime = new Date(date);
          const arrivalTime = new Date(date);
          arrivalTime.setSeconds(departureTime.getSeconds() + duration);

          return (
            <li key={idx}>
              <div className={s.content}>
                <div className={s.route}>
                  <p className={s.routeTitle}>
                    {origin} – {destination}
                  </p>
                  <p className={s.routeText}>
                    {`${("0" + departureTime.getHours()).slice(-2)}:${(
                      "0" + departureTime.getMinutes()
                    ).slice(-2)}`}{" "}
                    –{" "}
                    {`${("0" + arrivalTime.getHours()).slice(-2)}:${(
                      "0" + arrivalTime.getMinutes()
                    ).slice(-2)}`}
                  </p>
                </div>
                <div className={s.route}>
                  <p className={s.routeTitle}>В пути</p>
                  <p className={s.routeText}>{ticketDuration}</p>
                </div>
                <div className={s.route}>
                  <p className={s.routeTitle}>{ticketStops}</p>
                  <p className={s.routeText}>{stops.join(", ")}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TicketListItem;
