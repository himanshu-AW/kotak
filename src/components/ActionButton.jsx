import React from 'react';

function ActionButton ({ label, onClick }){
  return (
    <button 
      onClick={onClick}
      className="bg-white text-[#000000DE] text-[12px] font-semibold px-4 py-2 rounded-[20px]
        transition-all duration-300 hover:bg-gray-100 hover:shadow-md"
    >
      {label}
    </button>
  );
};

export default ActionButton;