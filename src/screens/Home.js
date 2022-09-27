import React, { Component } from 'react';
import { Button, Center, Image, Text, View, Heading } from 'native-base';

class Home extends Component {
  constructor(props) {
    super();
  }

  nextScreen = () => {
    this.props.navigation.navigate('Main');
  };

  render() {
    return (
      <View bg={'#fff'}>
        <Center>
          <View h={'100%'}>
            <View mt={'25%'}>
              <Image
                source={require('../assets/images/Logo.png')}
                alt="Logo"
                width={320}
                height={320}
              />
              <Center>
                <Heading fontSize="5xl" fontWeight={'600'} mt={-5}>
                  WORD CARD
                </Heading>
                <Button
                  mt={'90'}
                  w={'95%'}
                  h={'20%'}
                  rounded={25}
                  bg={'#1F4690'}
                  _pressed={{
                    bg: '#3a5ba0',
                  }}
                  onPress={this.nextScreen}>
                  <Text color={'white'} fontSize={'22'}>
                    Start
                  </Text>
                </Button>
              </Center>
            </View>
          </View>
        </Center>
      </View>
    );
  }
}

export default Home;
