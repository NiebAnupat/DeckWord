import React, { Component } from 'react';
import { Box, Checkbox, Text } from 'native-base';

class Word extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCheckVisible: true,
      checked: false,
    };
  }

  componentDidMount() {
    this.MyContext = React.createContext(this.toggleCheckVisible);
  }

  toggleCheckVisible = () => {
    this.setState({ isCheckVisible: !this.state.isCheckVisible });
  };

  render() {
    return (
      <Box
        mx={2}
        my={2}
        bg={'red.500'}
        h={50}
        rounded={50}
        justifyContent={'center'}>
        {this.state.isCheckVisible ? (
          <Box
            visibility={false}
            bg={'white'}
            h={55}
            w={55}
            rounded={50}
            position={'absolute'}
            top={-2.5}
            left={0}
            right={1}
            bottom={0}
            zIndex={1}
            justifyContent={'center'}
            alignItems={'center'}>
            <Checkbox
              size="sm"
              colorScheme="green"
              defaultIsChecked
              accessibilityLabel="Checkbox"
              rounded={50}
            />
          </Box>
        ) : null}

        <Text
          ml={this.state.isCheckVisible ? 16 : 6}
          color={'white'}
          fontSize={'xl'}
          fontWeight={700}>
          Word
        </Text>
      </Box>
    );
  }
}

export default Word;
