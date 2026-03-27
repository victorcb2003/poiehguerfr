import { Text, View } from 'react-native';
import { Link } from 'expo-router';
import { useLocalSearchParams } from 'expo-router/build/hooks';
 
 export default function User() {
    const { id } = useLocalSearchParams()
   return (
     <View>
       <Text>{id ?  `Bonjour user ${id}` : "Aucun user" }</Text>
       <Link href="/index">Page Accueil</Link>
     </View>
   );
 }