import React from "react";
import {View, TextInput} from 'react-native';
import styles from './searchBar.style'
const SearcBar = () => {
    return (
        <View>
            <TextInput style={styles.input} 
            placeholder='Ara...'
            />
        </View>
    );
}

export default SearcBar;