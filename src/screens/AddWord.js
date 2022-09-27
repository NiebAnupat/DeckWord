import React, { Component } from 'react';
import {
  Box,
  HStack,
  Icon,
  IconButton,
  ScrollView,
  Text,
  View,
} from 'native-base';
import Word from '../components/AddWordPage/Word';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

class AddWord extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <View>
        <Box bg={'tertiary.400'} w={'100%'} h={60}>
          <HStack my={'auto'}>
            <Text
              ml={5}
              my={'auto'}
              color={'white'}
              fontSize={25}
              fontWeight={600}>
              {this.props.route.params.deckName || 'Add Word'}
            </Text>
            <Box ml={'auto'} flexDirection={'row'}>
              <IconButton
                icon={<Icon as={FontAwesome5} name={'check-circle'} size={6} />}
                ml={'auto'}
                my={'auto'}
                mr={1}
                _icon={{ color: 'white' }}
                rounded={50}
              />
              <IconButton
                icon={<Icon as={FontAwesome5} name={'minus-circle'} size={6} />}
                ml={'auto'}
                my={'auto'}
                mr={2}
                _icon={{ color: 'white' }}
                rounded={50}
              />
            </Box>
          </HStack>
        </Box>

        <ScrollView>
          {Array.apply(0, Array(20)).map(function (x, i) {
            return <Word key={i} />;
          })}
        </ScrollView>
      </View>
    );
  }
}

export default AddWord;
