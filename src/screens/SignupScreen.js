import React, { useContext, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Text, Input, Button } from 'react-native-elements';
import { Context as AuthContext } from '../context/AuthContext';
// import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignupScreen = ({ navigation }) => {
    //const { state, signup, clearErrorMessage } = useContext(AuthContext);
    const { state, signup } = useContext(AuthContext);  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
    <View style={styles.container}>
        <Text>Sign Up for TruthFairy</Text>
        <Input 
            label="Email" 
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            autoCorrect={false}
            />
        <Input 
            secureTextEntry
            label="Password"
            value={password}
            onChangeText={setPassword}
            autoCapitalize="none"
            autoCorrect={false}
             />
        { state.errorMessage ? <Text style={styles.errorMessage}>{state.errorMessage}</Text> : null }
        <Button 
            title="Sign Up"
            onPress={() => signup({ email, password })}/>
        {/* <NavigationEvents 
                onWillFocus={clearErrorMessage}
            />
        <AuthForm 
            headerText="Sign Up for TruthFairy"
            errorMessage={state.errorMessage}
            submitButtonText="Sign Up"
            onSubmit={signup}
        /> */}
        <NavLink
            routeName="Signin"
            text="Already have an account? Sign in instead!"
        />
    </View>
    );
};

SignupScreen.navigationOptions = () => {
    return {
        headerShown: false
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250
    },
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginLeft: 15,
        marginBottom: 15
    }
});

export default SignupScreen;