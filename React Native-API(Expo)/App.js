import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, SafeAreaView, Text,  ActivityIndicator, FlatList, ToastAndroid, ScrollView } from 'react-native';
import {Card, Button, TextInput} from 'react-native-paper';
import React ,{ useState, useEffect} from "react";

const d="https://satyamalpha001.000webhostapp.com/all.php"

function HomeScreen({ navigation }) {

const [isLoading, setLoading] = useState(true);
const [data, setData] = useState([]);

useEffect(() => {
  fetch(d)
    .then(response => response.json())
    .then(json => setData(json))
    .catch((error)=>alert(error))
    .finally(()=>setLoading(false));
},[]);

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? <ActivityIndicator/> : <FlatList
      
      data={data}
      keyExtractor={(data) => data.user_id}
      renderItem={({item}) => (
        <Card style={styles.card} onPress={() => navigation.navigate('Detail',{item})}>
          <Card.Content>
            <Text>User ID: {item.user_id}</Text>
            <Text>User Name: {item.user_name}</Text>
          </Card.Content>
        </Card>
        )}
      />}
      <Button mode="contained" icon="plus" onPress={() => navigation.navigate('AddData')}>ADD</Button>
    </SafeAreaView>
  );
}

function DetailsScreen({route, navigation }) {

  const {item} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Card style={styles.card} onPress={() => navigation.navigate('Home')}>
            <Card.Content>
              <Text>Details Screen</Text>
              <Text>User ID: {JSON.stringify(item.user_id)}</Text>
              <Text>User Name: {JSON.stringify(item.user_name)}</Text>
              <Text>DOB: {JSON.stringify(item.user_dob)}</Text>
              <Text>Phone Number: {item.user_phone_number}</Text>
              <Text>E-Mail: {item.user_email}</Text>
              <Text>Address: {item.user_address}</Text>
              <Text>City: {item.user_city}</Text>
              <Text>State: {item.user_state}</Text>
              <Text>Country: {item.user_country}</Text>
              <Text>Pin Code: {item.user_pin_code}</Text>
              <Text>Password: {item.user_password}</Text>
              <Text>Gender: {item.user_gender}</Text>
              </Card.Content>
          </Card>
          <Button mode="elevated" onPress={() => navigation.navigate('UpdateData')}>Update</Button>
        </SafeAreaView>
  );
}

function AddData({ navigation }){

  const [user_name, setname] = React.useState("hritik");
  const [user_dob, setdob] = React.useState("04");
  const [user_phone_number, setphone] = React.useState("ssj");
  const [user_email, setemail] = React.useState("smsk");
  const [user_address, setaddress] = React.useState("sks");
  const [user_city, setcity] = React.useState("sks");
  const [user_state, setstate] = React.useState("skks");
  const [user_country, setcountry] = React.useState("sms");
  const [user_pin_code, setpin] = React.useState("sksk");
  const [user_password, setpassword] = React.useState("ssk");
  const [user_gender, setgender] = React.useState("ssj");

  return(
    <ScrollView>
    <TextInput
      label="User Name"
      value={user_name}
      onChangeText={user_name => setname(user_name)}
    />  
    <TextInput
      label="DOB"
      value={user_dob}
      onChangeText={user_dob => setdob(user_dob)}
    />
    <TextInput
      label="Phone Number"
      value={user_phone_number}
      onChangeText={user_phone_number => setphone(user_phone_number)}
    />
    <TextInput
      label="E-Mail"
      value={user_email}
      onChangeText={user_email => setemail(user_email)}
    />
    <TextInput
      label="Address"
      value={user_address}
      onChangeText={user_address => setaddress(user_address)}
    />
    <TextInput
      label="City"
      value={user_city}
      onChangeText={ user_city=> setcity(user_city)}
    />
    <TextInput
      label="State"
      value={user_state}
      onChangeText={user_state => setstate(user_state)}
    />
    <TextInput
      label="Country"
      value={user_country}
      onChangeText={user_country => setcountry(user_country)}
    />
    <TextInput
      label="Pin Code"
      value={user_pin_code}
      onChangeText={user_pin_code => setpin(user_pin_code)}
    />
    <TextInput
      label="Password"
      value={user_password}
      onChangeText={user_password => setpassword(user_password)}
    />
    <TextInput
      label="Gender"
      value={user_gender}
      onChangeText={user_gender => setgender(user_gender)}
    />
    <Button mode="outlined"  onPress={() => {

const requestOption ={
  method: 'POST',
  headers: {
   Accept: 'application/json',
  'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    // user_id: '{user_id}',
    // user_name:"abhi",
    // user_dob:"shhs",
    // user_phone_number:"{user_phone_number}",
    // user_email:"{user_email}",
    // user_address:"{user_address}",
    // user_city:"{user_city}",
    // user_state:"{user_state}",
    // user_country:"{user_country}",
    // user_pin_code:"{user_pin_code}",
    // user_password:"{user_password}",
    // user_gender:"{user_gender}"
    // appdata_sms_device_id:"fghhj",
    // appdata_sms_form:"fghhj",
    // appdata_sms_device_id:"fghhj",
    // appdata_sms_time:"fghhj",
    // appdata_sms_date:"fghhj"
    // email:'hello',
    // name:'an',
    // gender:'m',
    // status:'a'
    title: 'foo',
    body: 'bar',
    userId: 1,
  })
};

//http://gorest.co.in/public/v1/users
//http://myvisuals.in/spy/appdatasms.php
//https://satyamalpha001.000webhostapp.com/insert.php
//https://jsonplaceholder.typicode.com/posts
fetch('https://jsonplaceholder.typicode.com/posts', requestOption )
.then((response) => response.text())
.then((json) => {console.log(json)})
.catch((error) => {
  console.error(error);});
ToastAndroid.show('Data Added', ToastAndroid.SHORT);
}}>Press to Add Data</Button>
    </ScrollView>

  );
}

function UpdateData({ navigation }){

  const [user_phone_number, setphone] = React.useState("");
  const [user_email, setemail] = React.useState("");
  const [user_id, setid] = React.useState("1");
  
  return(
    <ScrollView>
    
    <TextInput
      label="User ID"
      value={user_id}
      onChangeText={user_id => setid(user_id)}
    />
    <TextInput
      label="Phone Number"
      value={user_phone_number}
      onChangeText={user_phone_number => setphone(user_phone_number)}
    />
    <TextInput
      label="E-Mail"
      value={user_email}
      onChangeText={user_email => setemail(user_email)}
    />
    <Button mode="outlined" icon="plus" onPress={() => {

      const requestOption ={
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id:'{user_id}',
          user_phone_number:'{user_phone_number}',
          user_email:'{user_email}' 
        }),
      };

  fetch('https://satyamalpha001.000webhostapp.com/update.php', requestOption)
  .then(response => response.json())
  .then(json => {console.log(json)})
  .catch((error) => {
  // Handle any errors that occur
    console.error(error);});
  ToastAndroid.show('Data Updated', ToastAndroid.SHORT);
}}>Press to Update Data</Button>
    </ScrollView>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#777',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    height:100,
    width:300
  },
});


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailsScreen} />
        <Stack.Screen name="AddData" component={AddData} />
        <Stack.Screen name="UpdateData" component={UpdateData} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;