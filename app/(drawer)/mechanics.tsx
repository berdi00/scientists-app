import List from '@/components/List';
import { mechanics } from '@/src/data/mechanics';

export default function TabTwoScreen() {
	return <List scientists={mechanics} title='mechanics' />;
}
