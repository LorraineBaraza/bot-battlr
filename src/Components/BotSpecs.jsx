import React from 'react';

function BotSpecs({bot, onBack, onEnlist, fromArmy = false, onRemoveFromArmy, onDeleteBot}) {
  
  const { name, bot_class, catchphrase, avatar_url, health, damage, armor} = bot;

  return (
    <div className="bot-specs-container">
      <div className="bot-specs-card">
        <img
          src={avatar_url}
          alt={`${name} avatar`}
          className="bot-specs-avatar"
        />

        <div className="bot-specs-details">
          <h2>{name}</h2>
          <h3 className="bot-class">{bot_class}</h3>
          <p className="catchphrase">"{catchphrase}"</p>

          <div className="bot-specs-stats">
            <p>❤️ <strong>Health:</strong> {health}</p>
            <p>💥 <strong>Damage:</strong> {damage}</p>
            <p>🛡️ <strong>Armor:</strong> {armor}</p>
          </div>

          <div className="bot-specs-actions">
            <button
              className="back-button"
              onClick={onBack}
              aria-label="Back to list view"
            >
              ⬅️ Back to List
            </button>

            {fromArmy ? (
              <>
                <button
                  className="remove-button"
                  onClick={() => onRemoveFromArmy(bot.id)}
                  aria-label="Remove bot from your army"
                >
                  ❌ Remove from Army
                </button>
                <button
                  className="delete-button"
                  onClick={() => onDeleteBot(bot.id)}
                  aria-label="Delete bot permanently"
                >
                  🪓 Terminate with Extreme Prejudice
                </button>
              </>
            ) : (
              <button
                className="enlist-button"
                onClick={() => onEnlist(bot)}
                aria-label="Enlist bot to your army"
              >
                🛡️ Enlist Bot
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BotSpecs;
