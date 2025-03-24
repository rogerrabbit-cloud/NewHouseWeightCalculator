/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  Button,
  View,
} from 'react-native';

type HouseType = 'brick' | 'wood';

const App = (): React.JSX.Element => {
  const [bedrooms, setBedrooms] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [livingRooms, setLivingRooms] = useState('');
  const [floors, setFloors] = useState('');
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [houseType, setHouseType] = useState<HouseType>('brick');
  const [roofWeight] = useState(1000); // Example constant
  const [result, setResult] = useState<number | null>(null);

  const calculateHouseWeight = () => {
    const totalFloorArea = parseFloat(length) * parseFloat(width);
    const baseWeightPerSqMeter = houseType === 'brick' ? 500 : 300;
    const houseWeight =
      totalFloorArea * baseWeightPerSqMeter * parseInt(floors) + roofWeight;

    setResult(houseWeight);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.title}>House Weight Calculator</Text>

      <Text>Number of Bedrooms:</Text>
      <TextInput
        style={styles.input}
        value={bedrooms}
        onChangeText={setBedrooms}
        keyboardType="numeric"
      />

      <Text>Number of Bathrooms:</Text>
      <TextInput
        style={styles.input}
        value={bathrooms}
        onChangeText={setBathrooms}
        keyboardType="numeric"
      />

      <Text>Number of Living Rooms:</Text>
      <TextInput
        style={styles.input}
        value={livingRooms}
        onChangeText={setLivingRooms}
        keyboardType="numeric"
      />

      <Text>Number of Floors:</Text>
      <TextInput
        style={styles.input}
        value={floors}
        onChangeText={setFloors}
        keyboardType="numeric"
      />

      <Text>Room Length (meters):</Text>
      <TextInput
        style={styles.input}
        value={length}
        onChangeText={setLength}
        keyboardType="numeric"
      />

      <Text>Room Width (meters):</Text>
      <TextInput
        style={styles.input}
        value={width}
        onChangeText={setWidth}
        keyboardType="numeric"
      />

      <Text>House Type:</Text>
      <View style={styles.buttonGroup}>
        <Button
          title="Brick"
          onPress={() => setHouseType('brick')}
          color={houseType === 'brick' ? 'blue' : 'gray'}
        />
        <Button
          title="Wood"
          onPress={() => setHouseType('wood')}
          color={houseType === 'wood' ? 'blue' : 'gray'}
        />
      </View>

      <Text>Roof Weight (constant): {roofWeight} kg</Text>

      <Button title="Calculate Weight" onPress={calculateHouseWeight} />

      {result !== null && <Text style={styles.result}>House Weight: {result} kg</Text>}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;

