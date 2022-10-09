import React, { Component } from 'react';
import { Box, Icon, Text } from 'native-base';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

class WordResult extends Component {
  render() {
    const { isCorrect, word } = this.props;
    return (
      <Box w={'90%'} mt={3} mx={'auto'} flexDir={'row'}>
        <Text
          color={'warmGray.900'}
          fontSize={'2xl'}
          fontWeight={500}
          w={'85%'}>
          {word}
        </Text>
        <Icon
          as={FontAwesome5}
          name={isCorrect ? 'check' : 'times'}
          ml={isCorrect ? 'auto' : 6}
          size={isCorrect ? 7 : 8}
          color={isCorrect ? 'green.500' : 'red.500'}
        />
      </Box>
    );
  }
}

export default WordResult;
