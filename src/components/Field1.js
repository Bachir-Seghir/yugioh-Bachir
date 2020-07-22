import React from 'react';
import Card from './Card.js';

export default function Field1({ field1 }) {
  return (
    <div className='field'>
      {Object.keys(field1).map((key) => (
        <Card key={key} details={field1[key]} classN='fieldCard' />
      ))}
    </div>
  );
}
