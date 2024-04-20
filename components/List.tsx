import { TScientist } from '@/src/types/dataTypes';
import { router } from 'expo-router';
import {
	SafeAreaView,
	FlatList,
	TouchableOpacity,
	View,
	Image,
	Text,
	StyleSheet,
	useColorScheme,
} from 'react-native';

const Item = ({ scientist, title }: { scientist: TScientist; title: string }) => {
	const colorScheme = useColorScheme();

	const styles = StyleSheet.create({
		itemContainer: {
			flexDirection: 'row',
			alignItems: 'center',
			padding: 10,
			borderBottomWidth: 1,
			borderColor: '#ccc',
		},
		itemImage: {
			width: 60,
			height: 60,
			borderRadius: 30,
			marginRight: 10,
		},
		itemDetails: {
			flex: 1,
		},
		itemName: {
			fontSize: 16,
			fontWeight: 'bold',
			color: colorScheme === 'dark' ? '#fff' : '#000',
		},
		years: {
			color: colorScheme === 'dark' ? '#fff' : '#000',
		},
	});
	return (
		<TouchableOpacity
			onPress={() =>
				router.push({
					pathname: '/(details)/[id]',
					params: {
						id: scientist.id,
						name: scientist.name,
						surname: scientist.surname,
						birthYear: scientist.birthYear,
						deathYear: scientist.deathYear,
						title: title,
					},
				})
			}
			style={styles.itemContainer}
		>
			<Image source={scientist?.image} style={styles.itemImage} />
			<View style={styles.itemDetails}>
				<Text style={styles.itemName}>{`${scientist.name} ${scientist.surname}`}</Text>
				<Text style={styles.years}>{`${scientist.birthYear} - ${scientist.deathYear}`}</Text>
			</View>
		</TouchableOpacity>
	);
};

const List = ({ scientists, title }: { scientists: TScientist[]; title: string }) => {
	return (
		<SafeAreaView>
			<FlatList
				data={scientists}
				renderItem={({ item }) => <Item scientist={item} title={title} />}
				keyExtractor={item => item.id.toString()}
			/>
		</SafeAreaView>
	);
};

export default List;
