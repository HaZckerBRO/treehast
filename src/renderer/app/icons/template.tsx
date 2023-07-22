import React, { FC } from 'react';

const Template: FC = () => {
  const iconId = 'IconTemplate';

  const css = `
    #${iconId} .st0{
      fill: none;
      stroke: currentColor;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke-miterlimit: 10;
    }
    #${iconId} .st1{
      fill: none;
      stroke: currentColor;
      stroke-width: 2;
      stroke-linejoin: round;
      stroke-miterlimit: 10;
      }
    #${iconId} .st2{
      fill: none;
      stroke: currentColor;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-miterlimit: 10;
    }
  `;

  return (
    <svg
      id={iconId}
      version="1.1"
      viewBox="0 0 32 32"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
    >
      <style type="text/css">{css}</style>
      <rect className="st0" height="6" width="10" x="11" y="13" />
      <rect className="st0" height="6" width="10" x="21" y="13" />
      <rect className="st0" height="6" width="10" x="1" y="13" />
      <rect className="st0" height="6" width="10" x="16" y="19" />
      <rect className="st0" height="6" width="10" x="6" y="19" />
      <rect className="st0" height="6" width="10" x="16" y="7" />
      <rect className="st0" height="6" width="10" x="6" y="7" />
    </svg>
  );
};

export default Template;
