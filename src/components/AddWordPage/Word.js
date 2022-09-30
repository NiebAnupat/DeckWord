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
  render() {
    return (
      <Box
        w={'100%'}
        h={20}
        px={5}
        rounded={20}
        bg={'white'}
        flexDirection={'row'}
        p={2}>
        <VStack>
          <Text my={'1'} fontSize="2xl" color="black" fontWeight="500">
            English
          </Text>
          <Text mt={'-1'} ml={'5'} fontSize="md" color="black" fontWeight="500">
            แตงโม
          </Text>
        </VStack>

        <Menu
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
          <Menu.Item>Option 1</Menu.Item>
          <Menu.Item>Option 2</Menu.Item>
          <Menu.Item>Option 3</Menu.Item>
        </Menu>
      </Box>
    );
  }
}

export default Word;
