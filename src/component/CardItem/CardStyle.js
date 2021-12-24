import { Dimensions, StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#dcdcdc",
        padding: 13,
        margin: 5,
        borderRadius: 10,
        marginTop :5,
        marginHorizontal:6,
    },
    image: {
        height: Dimensions.get('window').height / 4,
        width: '100%',
        borderRadius: 10,
        resizeMode: 'contain',
    },
    innerContainer: {
        padding: 10,
    },
    title: {
        fontWeight: '700',
        fontSize: 15,
    },
    price: {
        marginTop: 5,
        color: '#333333',
        fontWeight: 'bold',
        fontSize: 17,
    },
    inStock: {
        color: 'red',
        marginTop: 5,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 17,
    }
})