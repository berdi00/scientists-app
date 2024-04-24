import { Image, View, ScrollView, StyleSheet, Dimensions, SafeAreaView, Text } from 'react-native';
import { formulas } from '@/src/data/formulas';

const Formulas = () => {
	return (
		<SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', height: 800 }}>
			<ScrollView showsVerticalScrollIndicator>
				{formulas.map(form => (
					<Image
						key={form.id}
						source={form.image}
						style={styles.image}
						resizeMode='contain' // or "cover" or "stretch", depending on your preference
					/>
				))}
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	image: {
		width: Dimensions.get('window').width, // or specify a fixed width
		height: 600, // or specify a fixed height
	},
});
export default Formulas;
