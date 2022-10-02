import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  TextInput,
  ScrollView
} from 'react-native';
import {PlainRoute} from '../types/CommonTypes';

interface HomeState {
  firstName: string, 
  lastName: string,
}

const HomeInitialState = {
  firstName: "", lastName: ""
}

const Home = ({navigation}: PlainRoute) => {
  const pages: Array<string>  = [
    "PageOne", "PageTwo", "PageThree"
  ]
  const [state, setState] = useState<HomeState>(HomeInitialState);
  const handleChange = (e:string, x:string) => {
    setState(prevState => ({
        ...prevState,
        [x]: e
    }));
  };

  return (
      <View style={styles.vtest}>
          <ScrollView>
            <View style={styles.scrollBump}/>
            {pages.map(p => {
              return(
                <View style={styles.underBox} key={p}>
                  <Pressable onPress={() => navigation.navigate(p)}>
                    <Text style={styles.tex}>{p}</Text>
                  </Pressable>
                </View>
              )
            })}
          <TextInput 
            value={state.firstName} 
            onChangeText={e => handleChange(e, "firstName")} 
            placeholderTextColor={'#666'} 
            placeholder={"John"}
            style={{width:"100%", color:"black", backgroundColor: "#a1bbe6", height: 70, paddingLeft:10, paddingRight:10, marginTop:10}}  />
          <TextInput
            value={state.lastName}
            onChangeText={e => handleChange(e, "lastName")}
            placeholderTextColor={'#666'}
            placeholder={"Doe"}
            style={{width:"100%", color:"black",  backgroundColor: "#a1e0e6", height: 70, paddingLeft:10, paddingRight:10, marginTop:10}} />
          </ScrollView>
      </View>
  );
};

const styles = StyleSheet.create({
  scrollBump: {
    marginTop: 23,
  },
  underBox: {
    borderBottomColor: "#919191",
    borderBottomWidth: 1,
  },
  tex: {
    fontSize: 19,
    marginLeft: 10,
    paddingTop:10,
    paddingBottom:10,
    textAlign: "left",
    justifyContent: "center",
  },
  vtest: {
    backgroundColor: '#e6e3dc',
    justifyContent: "center",
    fontSize: 100,
    flex:1,
  },
});

export default Home;
