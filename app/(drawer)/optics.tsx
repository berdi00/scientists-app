import List from '@/components/List';
import { optics } from '@/src/data/optics';
import React from 'react';

const Optics = () => {
	return <List scientists={optics} title='optics' />;
};

export default Optics;
