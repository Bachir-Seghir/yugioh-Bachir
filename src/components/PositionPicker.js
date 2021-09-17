import React, { useEffect, useState } from 'react';
export default function PostionPicker({
  ShowPositionPicker,
  setShowPositionPicker,
  setselectedCard,
  setflag,
}) {
  const favDialog = document.getElementById('favDialog');
  const [selectedPos, setSelectedPos] = useState('');

  useEffect(() => {
    if (ShowPositionPicker) {
      favDialog.showModal();
    }
  }, [ShowPositionPicker, favDialog]);

  const handleDialog = () => {
    setShowPositionPicker(false);
    setselectedCard((card) => ({
      ...card,
      pos: selectedPos,
      changed: true,
    }));
    setflag(true);
  };
  const handlePosChange = (e) => {
    setSelectedPos(e.target.value);
  };

  return (
    <dialog id='favDialog' onClose={handleDialog}>
      <form method='dialog'>
        <label>
          <input
            type='radio'
            name='position'
            value='atk'
            checked={selectedPos === 'atk'}
            onChange={handlePosChange}
          />
          atk
        </label>
        <label>
          <input
            type='radio'
            name='position'
            value='def'
            checked={selectedPos === 'def'}
            onChange={handlePosChange}
          />
          def
        </label>
        <button id='confirmBtn' value='default'>
          Confirm
        </button>
      </form>
    </dialog>
  );
}
