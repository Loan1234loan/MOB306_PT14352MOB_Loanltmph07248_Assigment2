// import React, {useState} from 'react';
// import { Text, View, Modal, Button, StyleSheet, TextInput, ImageBackground, TouchableOpacity } from 'react-native';


// export default function Main(){
//     const [nameLogin, setNameLogin] = useState("");
//   const [age, setYearOld] = useState();
//   const [showModal, setShowModal] = useState(true);

//   function validateFrom() {
//     if (nameLogin == '') {
//         alert('Bạn chưa nhập tên');
//     } else if (age == '') {
//         alert('Vui lòng nhập tuổi');
//     }
//     else if (isNaN(age)) {
//         alert("Tuổi phải là một số");
//     }
//     else if (age < 18) {
//         alert('Bạn có chắc minh đã trên 18+');
//     } else {
        
//         setShowModal(false);
//     }
//   }
//   return(
//     <View>
//       <View>
//       <ListStory Username={nameLogin} /> 
//       </View>

//     <View style={styles.container}>
    

     
//      <Modal visible={showModal} >
//     <ImageBackground>
//       style ={{width : '30%', height:'50%'}}
//       source ={{uri}}> 


//       <View style={styles.modal}>
//         <Text style={styles.text} >Nhập thông tin</Text>
//         <Text style={styles.textModal} >Tên :</Text>
//         <TextInput 
        
//         placeholder="Nhập tên"
//         style={styles.input} onChangeText={(valueName) => setNameLogin(valueName)} />

//         <Text style={styles.textModal} >Tuổi :</Text>
//         <TextInput 
        
//         placeholder="Nhập tuổi"
//         style={styles.input} onChangeText={(age) => setYearOld(age)} />

//         < Button 
//           title="Đăng nhập"
//           onPress={() =>validateFrom()}
//         />
//       </View>
    
//       </ImageBackground>
//   </Modal>
//   </View>
//   </View>
//   );
    
// }
//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#fff',
//       marginTop: 30,
//           alignItems:'stretch',
//           justifyContent:'center',
//           backgroundColor: '#fff',
//           paddingLeft:16,
//           paddingRight:16
//     },
//     textNameLogin: {
//       fontSize: 23,
//       fontStyle: 'italic'
//     },
//     textModal: {
//       padding: 8,
//       margin: 10,
//     },
//     modal: {
//       flex: 1,
//     },
//     text: {
//       fontSize: 30,
//           color: 'red',
//           textAlign: 'center',
//           marginTop: 1
//     },
//     input: {
//       borderWidth: 1,
//       borderColor: '#777',
//       padding: 8,
//       margin: 10,
  
//     },
  
//   });
  

