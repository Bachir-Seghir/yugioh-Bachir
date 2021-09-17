import React, { useState, useEffect } from 'react';
import Card from './Card.js';
import { GetCard } from '../helpers';
import PositionPicker from './PositionPicker.js';

export default function Field1({
  field1,
  updateField,
  setAttackerPts,
  attackerPts,
  cycleP1,
}) {
  const [ShowPositionPicker, setShowPositionPicker] = useState(false);
  const [flag, setflag] = useState(false);
  const [selectedCard, setselectedCard] = useState({});

  const handleFieldCard = (event) => {
    setselectedCard(GetCard(event, field1));
    if (cycleP1.phase1) {
      setShowPositionPicker(true);
    }
    setAttackerPts((attackerPts) => ({
      ...attackerPts,
      attacker: selectedCard.atk,
    }));
  };
  useEffect(() => {
    if (flag) {
      updateField('field1', selectedCard);
      setflag(false);
    }
  });
  return (
    <div className='field'>
      <PositionPicker
        setselectedCard={setselectedCard}
        ShowPositionPicker={ShowPositionPicker}
        setShowPositionPicker={setShowPositionPicker}
        setflag={setflag}
      />
      {Object.keys(field1).map((key) => (
        <Card
          key={key}
          details={field1[key]}
          classN='fieldCard'
          handleFieldCard={handleFieldCard}
        />
      ))}
    </div>
  );
}
