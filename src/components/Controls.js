import React from 'react';

export default function Controls({ cycleP1, setcycleP1 }) {
  const handleAtk = () => {
    setcycleP1((cycle) => ({
      ...cycle,
      phase1: false,
      atkPhase: true,
    }));
  };
  const handleEnd = () => {
    setcycleP1((cycle) => ({
      ...cycle,
      atkPhase: false,
      endPhase: true,
    }));
  };
  return (
    <div className='controls'>
      <label>
        <input type='radio' name='cycle' value='draw' checked={cycleP1.draw} />
        Draw
      </label>
      <label>
        <input
          type='radio'
          name='cycle'
          value='phase1'
          checked={cycleP1.phase1}
        />
        Phase 01
      </label>
      <label>
        <input
          type='radio'
          name='cycle'
          value='atkPhase'
          checked={cycleP1.atkPhase}
        />
        Attack Phase
      </label>
      <label>
        <input
          type='radio'
          name='cycle'
          value='endPhase'
          checked={cycleP1.endPhase}
        />
        End Phase
      </label>
      <button onClick={handleAtk}>Attack</button>
      <button onClick={handleEnd}>End Turn</button>
    </div>
  );
}
