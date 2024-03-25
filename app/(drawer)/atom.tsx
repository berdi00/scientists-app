import React from 'react';
import { atom } from '@/src/data/atom';
import List from '@/components/List';

const Atom = () => {
	return <List scientists={atom} title='atom' />;
};

export default Atom;
