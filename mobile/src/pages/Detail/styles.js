import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },
    
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    incident: {
        marginTop: 48,
        marginBottom: 16,
        padding: 24,
        borderRadius: 8,
        backgroundColor: "#FFFFFF"
    },

    incidentProperty: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#42424d'
    },

    incidentValue: {
        marginTop: 8,
        marginBottom: 24,
        fontSize: 15,
        color: 737380,
    },

    detailsButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    detailsButtonText: {
        color: '#E02041',
        fontSize: 15,
        fontWeight: 'bold'
    },

    contactBox: {
        marginBottom: 16,
        padding: 24,
        borderRadius: 8,
        backgroundColor: "#FFFFFF"
    },

    heroTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#13131a',
        lineHeight: 30,
    },

    heroDescription: {
        fontSize: 15,
        color: '#737380',
        marginTop: 16,
    },

    actions: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    action: {
        backgroundColor: '#E02041',
        borderRadius: 8,
        width: '48%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },

    actionText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 15,
    },
})