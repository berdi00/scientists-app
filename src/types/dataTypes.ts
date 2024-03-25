import { ImageSourcePropType } from 'react-native';

export type TScientist = {
	id: number;
	name: string;
	surname: string;
	image: ImageSourcePropType;
	birthYear: number;
	deathYear: number;
};

export type TParagraph = {
	id: number;
	en: {
		paragraph1: string;
		paragraph2: string;
		paragraph3?: string;
	};
	tk: {
		paragraph1: string;
		paragraph2: string;
		paragraph3?: string;
	};
};
