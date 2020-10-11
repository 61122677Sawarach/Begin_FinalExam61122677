/*import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default class StaffScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>View Staff!</Text>
      </View>
    );
  }
}*/

import React from 'react';
import { StyleSheet,View,Text,FlatList } from 'react-native';

export default class ViewAll extends React.Component {

  state={
    data:[]
  }

  fetchData= async()=>{
    const response = await fetch('http://172.18.132.107/FinalExam/StaffView.php'); 
    const testTable = await response.json();
    this.setState({data: testTable});
  }
  componentWillMount(){
    this.fetchData();
}

  render() {
    return (
      <View style={styles.container}>
        <Text>View Staff!</Text>  
      <FlatList
        data={this.state.data}
        keyExtractor= {(item,index) => index.toString()}
        renderItem={({item})=>

        <View style={{backgroundColor:'#EEB4B4',padding:10,margin:10,borderRadius:10}}>
          <Text style={{color:'#fff'}}>ชื่อ: {item.SName}</Text>
          <Text style={{color:'#fff'}}>เบอร์โทร: {item.STelephone}</Text>
          <Text style={{color:'#fff'}}>รูป: {item.SPhoto}</Text>
        </View>

        } 
      />
  </View>

    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#F5FCFF',
    
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },

});