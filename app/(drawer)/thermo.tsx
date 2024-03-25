import React from 'react';
import List from '@/components/List';
import { thermo } from '@/src/data/thermo';

const Thermo = () => {
	return <List scientists={thermo} title='thermo' />;
};

export default Thermo;
