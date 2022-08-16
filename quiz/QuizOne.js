import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Button,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { useRoute } from '@react-navigation/native';

const QuizOne = ({ navigation }) => {

    



  const [checkboxes, setCheckboxes] = useState([
    {
      id: 1,
      title: 'one',
      checked: false,
    },
    {
      id: 2,
      title: 'two',
      checked: false,
    },
    {
      id: 3,
      title: 'three',
      checked: false,
    },
    {
      id: 4,
      title: 'four',
      checked: false,
    },
  ]);

  const onButtonPress = () => {
    const route = useRoute();
   
    navigation.navigate('QuizTow',{answerTow :{checkboxes}});
   

  };

  const toggleCheckbox = (id, index) => {
    const checkboxData = [...checkboxes];
    checkboxData[index].checked = !checkboxData[index].checked;
    setCheckboxes(checkboxData);
    
  };

  return (
    <View style={[styles.container]}>
      <View
        style={[
          {
            flexDirection: 'column',
          },
        ]}
      >
        <View style={styles.sectionOne}>
          <View>
            <View style={styles.sectionimage}>
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: 'https://img.icons8.com/ios-glyphs/344/user--v1.png',
                }}
                resizeMode="contain"
              />
            </View>

            <View style={styles.sectionTitle}>
              <Text style={styles.title}>Lorem ipsum dolor sit amet</Text>
              <Text style={styles.titleContenu}>
                Lorem ipsum dolor sit amet, consectetur adipiscing
              </Text>
            </View>
          </View>
        </View>

        <View style={[styles.sectionTow]}>
          <View
            style={[
              styles.box,
              {
                flexDirection: 'row',
              },
            ]}
          >
            <View style={styles.boxQuestion}>
              <Text style={styles.boxQuestionTitle}>Question</Text>
              <Text style={styles.boxQuestionNumber}>1/20</Text>
            </View>

            <View style={styles.boxQuestiontow}>
              <Text style={styles.boxQuestionTitle}>Temps échoué </Text>
              <Text style={styles.boxQuestionNumberTow}>5:59</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.sectionBottm}>
        <Text style={styles.titleQestion}>Lorem ipsum dolor sit amet</Text>
        <Text style={styles.descQestion}>
          Lorem ipsum dolor sit amet, consectetur adipiscingt
        </Text>

        {checkboxes.map((cb, index) => {
          return (
            <View
              key={index}
              style={{
                flexDirection: 'row',
              }}
            >
              <CheckBox
                checked={cb.checked}
                onChange={() => toggleCheckbox(cb.id, index)}
              />

              <Text>{cb.title}</Text>
            </View>
          );
        })}

        <View style={styles.Viewbotton}>
          <Button
            onPress={onButtonPress}
            title="Suivent"
            style={styles.botton}
            color="#61dafb"
          />
        </View>
      </View>

      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  botton: {
    shadowOpacity: 0,
  },
  Viewbotton: {
    width: '80%',
    margin: 20,
    borderRadius: 20,
    borderWidth: 5,
    borderColor: '#61dafb',
  },
  descQestion: {
    marginBottom: 20,
  },
  titleQestion: {
    color: '#000',
    fontSize: 17,
    fontWeight: 'bold',
  },
  sectionBottm: {
    flex: 1,
    marginLeft: 25,
  },
  boxQuestionNumberTow: {
    textAlign: 'center',
    fontSize: 15,
    color: 'white',
    backgroundColor: '#61dafb',
    width: 70,
    height: 50,
    paddingTop: 13,
    marginLeft: 15,
  },
  boxQuestionNumber: {
    textAlign: 'center',
    fontSize: 15,
    color: 'white',
    backgroundColor: '#61dafb',
    width: 70,
    height: 50,
    paddingTop: 13,
  },
  boxQuestionTitle: {
    textAlign: 'center',
    fontSize: 15,
    color: '#000',
  },
  boxQuestion: {
    width: 70,
    height: 50,
    margin: 20,
    marginTop: 10,
    marginBottom: 40,
  },
  boxQuestiontow: {
    width: 100,
    height: 50,
    margin: 20,
    marginTop: 10,
    marginBottom: 40,
    marginLeft: 90,
  },
  box: {
    flex: 1,
    backgroundColor: 'white',
    position: 'absolute',
    width: '80%',
    marginTop: -50,
    marginLeft: '10%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    borderRadius: 10,
  },
  titleContenu: {
    fontSize: 15,
  },
  tinyLogo: {
    width: 40,
    height: 50,
    position: 'absolute',
    marginLeft: '70%',
    marginTop: '10%',
    backgroundColor: 'gray',
    margin: 50,
    padding: 10,
    borderRadius: 10,
  },
  sectionimage: {
    backgroundColor: 'red',
  },
  container: {
    flex: 1,
  },
  sectionOne: {
    backgroundColor: '#36b2f6',
    height: '55%',
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
  },
  sectionTow: {
    flex: 2,
    height: '70%',
  },
  sectionTitle: {
    margin: 20,
    top: '110%',
    marginTop: 20,
  },
  title: {
    fontSize: 25,
    color: 'white',
  },
});

export default QuizOne;
