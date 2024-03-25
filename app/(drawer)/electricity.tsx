import React from 'react';
import { electricity } from '@/src/data/electricity';
import List from '@/components/List';

const Electricity = () => {
	return <List scientists={electricity} title='electricity' />;
};

export default Electricity;
