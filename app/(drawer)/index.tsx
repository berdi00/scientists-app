import { router } from 'expo-router';
import { useTranslation } from 'react-i18next';
import {
	SafeAreaView,
	StyleSheet,
	TouchableOpacity,
	Text,
	View,
	Appearance,
	useColorScheme,
} from 'react-native';

export default function Home() {
	const { t } = useTranslation();
	const colorScheme = useColorScheme();

	const styles = StyleSheet.create({
		title: {
			fontSize: 18,
			color: colorScheme === 'dark' ? '#fff' : '#000',
		},
		icon: {
			fontSize: 64,
		},
		section: {
			display: 'flex',
			alignItems: 'center',
			flexDirection: 'column',
			justifyContent: 'center',
		},
		flexContainer: {
			display: 'flex',
			flexDirection: 'row',
			gap: 44,
		},
		touchable: {
			flex: 1,
		},
		container: {
			padding: 20,
			height: '100%',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'space-around',
		},
	});

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.flexContainer}>
				<TouchableOpacity
					onPress={() =>
						router.push({
							pathname: '/(drawer)/mechanics',
						})
					}
					style={styles.touchable}
				>
					<View style={styles.section}>
						<Text style={styles.icon}>✈️</Text>
						<Text style={styles.title}>{t('mechanics')}</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() =>
						router.push({
							pathname: '/(drawer)/optics',
						})
					}
					style={styles.touchable}
				>
					<View style={styles.section}>
						<Text style={styles.icon}>💡</Text>
						<Text style={styles.title}>{t('optics')}</Text>
					</View>
				</TouchableOpacity>
			</View>
			<View style={styles.flexContainer}>
				<TouchableOpacity
					onPress={() =>
						router.push({
							pathname: '/(drawer)/atom',
						})
					}
					style={styles.touchable}
				>
					<View style={styles.section}>
						<Text style={styles.icon}>🪐</Text>
						<Text style={styles.title}>{t('atom')}</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() =>
						router.push({
							pathname: '/(drawer)/electricity',
						})
					}
					style={styles.touchable}
				>
					<View style={styles.section}>
						<Text style={styles.icon}>⚡️</Text>
						<Text style={styles.title}>{t('electricity')}</Text>
					</View>
				</TouchableOpacity>
			</View>
			<View style={styles.flexContainer}>
				<TouchableOpacity
					onPress={() =>
						router.push({
							pathname: '/(drawer)/thermo',
						})
					}
					style={styles.touchable}
				>
					<View style={styles.section}>
						<Text style={styles.icon}>🌡️</Text>
						<Text style={styles.title}>{t('thermo')}</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() =>
						router.push({
							pathname: '/(drawer)/formulas',
						})
					}
					style={styles.touchable}
				>
					<View style={styles.section}>
						<Text style={styles.icon}>📚</Text>
						<Text style={styles.title}>{t('formulas')}</Text>
					</View>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
}
