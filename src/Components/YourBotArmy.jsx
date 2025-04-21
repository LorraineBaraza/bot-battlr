import React from 'react';
import BotCard from './BotCard';

function YourBotArmy({ armyBots, onBotClick,}) {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      {armyBots.length === 0 ? (
        <p className="empty-message">
          Your army is currently empty. Enlist some bots to begin your conquest!
        </p>
      ) : (
        <div className="bot-grid">
          {armyBots.map(bot => (
            <BotCard
              key={bot.id}
              bot={bot}
              handleClick={() => onBotClick(bot)} // Click to view specs, not remove
              isInArmy={true} //Using it to style differently when needed
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default YourBotArmy;
