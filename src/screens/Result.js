import React, { Component } from 'react';
import { Divider, ScrollView, Text, View } from 'native-base';

class Result extends Component {
  render() {
    return (
      <View w={'100%'} h={'100%'} bg={'warmGray.100'}>
        <Text
          mx={'auto'}
          mt={'10%'}
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
        <ScrollView bg={'red.500'} m={2} p={2} rounded={10}>
          <Text fontSize={'20px'} color={'#FFA500'} fontWeight={800}>
            No Result Found
          </Text>
        </ScrollView>
      </View>
    );
  }
}

export default Result;
