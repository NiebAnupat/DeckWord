import React, { Component } from 'react';
import {
  Box,
  Button,
  Divider,
  Icon,
  ScrollView,
  Text,
  View,
} from 'native-base';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import WordResult from '../components/Result/WordResult';

class Result extends Component {
  constructor() {
    super();
    this.state = {
      words: [],
    };
  }

  componentDidMount() {
    this.setState({
      words: [...this.props.route.params.words],
    });
  }

  playAgain = () => {
    this.props.navigation.navigate('Main');
  };

  render() {
    return (
      <View w={'100%'} h={'100%'} bg={'warmGray.100'}>
        <Text
          mx={'auto'}
          mt={'5%'}
          fontSize={'45px'}
          color={'#FFA500'}
          fontWeight={800}>
          Result
        </Text>
        <Divider
          orientation="horizontal"
          bg={'#FFA500'}
          w={'90%'}
          h={'2px'}
          alignSelf={'center'}
        />
        <ScrollView m={2} mb={4} p={2} rounded={10}>
          {this.state.words.map((word, index) => (
            <WordResult
              key={index}
              word={word.front}
              isCorrect={word.isCorrect}
            />
          ))}

          {/*<WordResult word={'Good'} isCorrect={true} />*/}
          {/*<WordResult word={'Bad'} isCorrect={false} />*/}
        </ScrollView>

        <Box w={'100%'} flexDir={'row'}>
          <Text ml={'5%'} fontSize={'2xl'} fontWeight={700}>
            Score
          </Text>
          <Text ml={'auto'} mr={'5%'} fontSize={'2xl'} fontWeight={500}>
            {this.state.words.filter((word) => word.isCorrect).length} /{' '}
            {this.state.words.length}
          </Text>
        </Box>
        <Divider
          orientation="horizontal"
          bg={'#FFA500'}
          w={'90%'}
          h={'2px'}
          alignSelf={'center'}
        />
        <Button
          bg={'indigo.500'}
          rounded={10}
          w={'30%'}
          alignSelf={'center'}
          mt={3}
          mb={5}
          leftIcon={<Icon as={FontAwesome5} name={'arrow-left'} size={4} />}
          _pressed={{ bg: 'indigo.600' }}
          _text={{ fontWeight: 600 }}
          onPress={this.playAgain}>
          Back
        </Button>
      </View>
    );
  }
}

export default Result;
