import Dropdown from "@/components/common/dropdown";

import React from 'react';


const MyPage: React.FC = () => {
  const options = ['Option 1', 'Option 2', 'Option 3'];

  return (
    <div>
      <h1>Dropdown Menu Example</h1>
      <Dropdown options={options} />
    </div>
  );
};

export default MyPage;
