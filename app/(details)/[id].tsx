import React, { useEffect, useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { Text, View, Image, StyleSheet, useColorScheme } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { TParagraph } from '@/src/types/dataTypes';
import i18n from '@/src/plugins/i18n';
import { details, atom } from '@/src/data/atom';
import { electricity, detailsElec } from '@/src/data/electricity';
import { thermo, detailsThermo } from '@/src/data/thermo';
import { mechanics, detailsMecha } from '@/src/data/mechanics';
import { optics, detailsOptics } from '@/src/data/optics';

const Details = () => {
	const { id, title, name, surname, birthYear, deathYear } = useLocalSearchParams();
	const [detail, setDetails] = useState<TParagraph>();
	const [image, setImage] = useState<any>();
	const colorScheme = useColorScheme();
	useEffect(() => {
		if (title === 'atom') {
			const content = details.find(i => i.id === Number(id));
			setDetails(content);
			const data = atom.find(i => i.id === Number(id));
			setImage(data?.image);
		}
		if (title === 'thermo') {
			const content = detailsThermo.find(i => i.id === Number(id));
			setDetails(content as TParagraph);
			const data = thermo.find(i => i.id === Number(id));
			setImage(data?.image);
		}
		if (title === 'mechanics') {
			const content = detailsMecha.find(i => i.id === Number(id));
			setDetails(content as TParagraph);
			const data = mechanics.find(i => i.id === Number(id));
			setImage(data?.image);
		}
		if (title === 'optics') {
			const content = detailsOptics.find(i => i.id === Number(id));
			setDetails(content as TParagraph);
			const data = optics.find(i => i.id === Number(id));
			setImage(data?.image);
		}
		if (title === 'electricity') {
			const content = detailsElec.find(i => i.id === Number(id));
			setDetails(content as TParagraph);
			const data = electricity.find(i => i.id === Number(id));
			setImage(data?.image);
		}
	}, [id, title]);

	const styles = StyleSheet.create({
		container: {
			flex: 1,
			padding: 7,
		},
		image: {
			width: '100%',
			height: 400,
			resizeMode: 'cover',
			marginBottom: 20,
		},
		details: {
			flex: 1,
			paddingBottom: 10,
			padding: 12,
			letterSpacing: 12,
		},
		name: {
			fontSize: 22,
			fontWeight: 'bold',
			marginBottom: 10,
			color: colorScheme === 'dark' ? '#fff' : '#000',
		},
		life: {
			fontSize: 20,
			marginBottom: 10,
			fontWeight: 'bold',
			color: colorScheme === 'dark' ? '#fff' : '#000',
		},
		paragraph: {
			fontSize: 16,
			marginBottom: 10,
			textAlign: 'left',
			lineHeight: 37,
			color: colorScheme === 'dark' ? '#fff' : '#000',
		},
	});

	return (
		<ScrollView style={styles.container}>
			<Image source={image} style={styles.image} />
			<View style={styles.details}>
				<Text style={styles.name}>
					{name} {surname}
				</Text>
				<Text style={styles.life}>
					{birthYear} - {deathYear}
				</Text>
				<Text style={styles.paragraph}>
					{detail ? detail[i18n.language as 'tk'].paragraph1 : ''}
				</Text>
				<Text style={styles.paragraph}>
					{detail ? detail[i18n.language as 'tk'].paragraph2 : ''}
				</Text>
				<Text style={styles.paragraph}>
					{detail ? detail[i18n.language as 'tk']?.paragraph3 : ''}
				</Text>
			</View>
		</ScrollView>
	);
};

export default Details;
