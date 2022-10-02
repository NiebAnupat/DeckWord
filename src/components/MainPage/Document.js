import React, { Component } from 'react';
import { Box, Image, Text, View } from 'native-base';
import { TouchableOpacity } from 'react-native';

class Document extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <View mx={'auto'} mt={'6'}>
        <TouchableOpacity
          onPress={() => {
            this.props.visibleMenuModal();
            this.props.handleSelectedDeckId(this.props.uuid);
          }}>
          <Box w={160} h={160} bg={'#3A5BA0'} rounded={10} p={3}>
            <Image
              mx={'auto'}
              my={'auto'}
              source={require('../../assets/images/card_doc.png')}
              alt="Card Doc"
              w={90}
              h={90}
              rounded={10}
            />
            <Text
              color={'white'}
              fontSize={'md'}
              fontWeight={600}
              mx={'auto'}
              textAlign={'center'}>
              {this.props.name}
            </Text>
          </Box>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Document;
