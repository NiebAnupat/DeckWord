import React, { Component } from 'react';
import {
  Box,
  Fab,
  Icon,
  IconButton,
  Menu,
  Popover,
  Text,
  VStack,
} from 'native-base';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

class Word extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    console.log('Word mounted');
  }

  render() {
    return (
      <Box
        w={'100%'}
        h={20}
        px={5}
        rounded={20}
        bg={'white'}
        flexDirection={'row'}
        p={2}
        mb={3}>
        <VStack>
          <Text my={'1'} fontSize="2xl" color="black" fontWeight="500">
            {this.props.front}
          </Text>
          <Text mt={'-1'} ml={'5'} fontSize="md" color="black" fontWeight="500">
            {this.props.back}
          </Text>
        </VStack>

        <Menu
          mr={3}
          mt={12}
          trigger={(triggerProps) => {
            return (
              <IconButton
                {...triggerProps}
                ml={'auto'}
                my={'auto'}
                variant="unstyled"
                rounded={'full'}
                icon={
                  <Icon
                    color={'gray.600'}
                    as={FontAwesome5}
                    name={'bars'}
                    size={'md'}
                  />
                }
              />
            );
          }}>
          <Menu.Item
            onPress={() => {
              this.props.handleEditFront(this.props.front);
              this.props.handleEditBack(this.props.back);
              this.props.handleEditIndex(this.props.index);
              this.props.visibleEditWordModal();
            }}>
            Edit
          </Menu.Item>
          <Menu.Item onPress={() => this.props.removeWord(this.props.index)}>
            Delete
          </Menu.Item>
        </Menu>
      </Box>
    );
  }
}

export default Word;
