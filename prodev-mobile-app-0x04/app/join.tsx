import { View, Text, Image } from 'react-native'
import { styles } from '@/styles/_joinstyle'
import { HEROLOGOGREEN, GOOGLELOGO, FACEBOOKLOGO } from '@/constants'

export default function Join() {
  return (
    <View style={styles.container}>
      <View style={styles.iconsection}>
        <Image source={HEROLOGOGREEN} />
      </View>
      
      <View style={styles.titleTextGroup}>
        <Text style={styles.titleText}>Join Now</Text>
        <Text style={styles.subText}>Please fill in the details to get started</Text>
      </View>
      
      <View style={styles.formGroup}>
      </View>
    </View>
  )
}