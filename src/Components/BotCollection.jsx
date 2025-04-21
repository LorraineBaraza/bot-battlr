import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, onBotClick }) {
  return (
    <section className="bot-collection">
      <h2 className="section-title">Bot Collection</h2>
      <div className="bot-grid">
        {bots.map((bot) => (
          <BotCard key={bot.id} bot={bot} handleClick={() => onBotClick(bot)} />
        ))}
      </div>
    </section>
  );
}

export default BotCollection;
