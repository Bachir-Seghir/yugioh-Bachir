import React from 'react';
import classnames from 'classnames';

export default function Card({ details, classN, detectCard }) {
  const { name, atk, def, level } = details;
  const handleCardClick = (event) => {
    switch (event.target.parentNode.className) {
      case 'hand':
        detectCard(event);
        break;

      default:
        break;
    }
  };
  return (
    <div
      className={classnames(
        'card',
        { handCard: classN === 'handCard' },
        { fieldCard: classN === 'fieldCard' },
        { deckCard: classN === 'deckCard' }
      )}
      onClick={handleCardClick}>
      <div className='card-name'>{name}</div>
      <h5 className='card-level'>Level : {level} </h5>

      <div className='card-point'>
        <h5>Atk : {atk}</h5>
        <h5>Def : {def}</h5>
      </div>
    </div>
  );
}
