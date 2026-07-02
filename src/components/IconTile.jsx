// IconTile.jsx

import React from 'react';

const IconTile = ({ className = '' }) => (
    <div className={`h-9 w-9 rounded-lg bg-gradient-to-br from-brand-500 to-ember-500 ${className}`} />
);

export default IconTile;
