import { Image, View, ScrollView } from 'react-native';
import { formulas } from '@/src/data/formulas';

const Formulas = () => {
	return (
		<ScrollView horizontal>
			<View style={{ width: '100%' }}>
				<Image style={{ width: '100%', height: '100%' }} source={formulas[1].image} />
			</View>
			<View style={{ width: '100%' }}>
				<Image style={{ width: '100%', height: '100%' }} source={formulas[3].image} />
			</View>
		</ScrollView>
	);
};
export default Formulas;
