import { Pressable, Text, TextInput, View } from 'react-native';
import { Link } from 'expo-router';
import { useState } from 'react';
 
 export default function HomePage() {
  const [id,setId] = useState("")
   return (
     <View>
       <Text>Bienvenue sur l'Accueil !</Text>
       <Link href="about">Aller sur la page about</Link>
       <TextInput
       value={id}
       onChangeText={setId}
       style={{borderWidth:1, margin:30}}
       placeholder='id ...'
       />
       <Link href={`user/${id}`}>
        <Text>
          Aller sur la page user
        </Text>
       </Link>
     </View>
   );
 }