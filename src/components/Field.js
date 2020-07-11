import React from 'react';
import { Link } from 'react-router-dom';
export default function Field() {
  return (
    <div className='field'>
      <Link to='/'>Home</Link>
      <h1>Field</h1>
    </div>
  );
}
