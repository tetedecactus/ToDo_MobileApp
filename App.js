import React, { useState, } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import Task from './componets/Task';

export default function App() {
  const [ task, setTask ] = useState();
  const [ taskItems, setTaskItems ] = useState([]);
  
  // Put each task into the array of taskItems
  // Set Task string to null (input)
  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems( [...taskItems, task] );
    setTask( null );
  }
  // Create new array, splice it and setTask as the new array ( deleted items )
  const completeTask = ( index ) => {
    let itemsCopy = [ ...taskItems ]
    itemsCopy.splice( index, 1 )
    setTaskItems( itemsCopy )
  }

  return (
    <View style={styles.container}>
      {/* Today Task */}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>
        <View style={styles.items}>
          {/* Map into taskItems to put element of array into a task component */}
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                  <Task text={item} />
                </TouchableOpacity>
              ) 
            })
          }
        </View>
      </View>
      {/* Add New Task */}
      <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.writeTaskWrapper}>
        <TextInput style={styles.input} placeholder={'Write A Task'} value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addTaskIcon}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}   

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  taskWrapper: {
    paddingTop : 80,
    paddingHorizontal: 20,

  },
  sectionTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    color: '#ededed',
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 3,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 3,
  },
  addTaskIcon: {

  }
});
