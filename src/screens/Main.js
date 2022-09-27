import React, { Component } from 'react';
import {
  Box,
  Button,
  Fab,
  HStack,
  Icon,
  Input,
  Modal,
  ScrollView,
  Text,
  View,
} from 'native-base';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Document from '../components/MainPage/Document';
import { TouchableWithoutFeedback } from 'react-native';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      nameModalVisible: false,
      menuModalVisible: false,
      renameModalVisible: false,
      deckName: '',
      selectedDeckName: '',
      decks: [
        'English',
        'Math',
        'Science',
        'History',
        'Spanish',
        'French',
        'German',
        'Latin',
        'Computer Science',
        'Art',
        'Music',
        'Physical Education',
        'Health',
        'Economics',
        'Philosophy',
        'Psychology',
        'Sociology',
        'Biology',
        'Chemistry',
        'Physics',
      ],
    };
  }

  componentDidUpdate() {
    // console.log(this.state);
  }

  visibleNameModal = () => {
    this.setState({ nameModalVisible: true });
  };

  visibleMenuModal = () => {
    this.setState({ menuModalVisible: true });
  };

  visibleRenameModal = () => {
    this.hideMenuModal();
    this.setState({
      renameModalVisible: true,
    });
  };

  hideNameModal = () => {
    this.setState({ nameModalVisible: false });
  };

  hideMenuModal = () => {
    this.setState({ menuModalVisible: false });
  };

  hideRenameModal = () => {
    this.setState({
      renameModalVisible: false,
    });
  };

  handleDeckName = (text) => {
    this.setState({ deckName: text });
  };

  handleSelectedDeckName = (text) => {
    this.setState({ selectedDeckName: text });
  };

  addDeck = () => {
    this.setState({
      decks: [...this.state.decks, this.state.deckName],
    });
    this.hideNameModal();
    this.props.navigation.navigate('AddWord', {
      deckName: this.state.deckName,
    });
  };

  removeDeck = () => {
    console.log('Remove Deck : ', this.state.selectedDeckName);
    this.setState({
      decks: this.state.decks.filter(
        (deck) => deck !== this.state.selectedDeckName,
      ),
    });
    this.hideMenuModal();
  };

  renameDeck = () => {
    console.log('Rename Deck : ', this.state.selectedDeckName);
    this.setState(
      {
        decks: this.state.decks.map((deck) => {
          if (deck === this.state.selectedDeckName) {
            return this.state.deckName;
          } else {
            return deck;
          }
        }),
      },
      () => {
        this.hideRenameModal();
      },
    );
  };

  editDeck = () => {
    this.props.navigation.navigate('AddWord', {
      deckName: this.state.selectedDeckName,
    });
  };

  render() {
    return (
      <View h={'100%'}>
        {/*Name Modal*/}
        <Modal isOpen={this.state.nameModalVisible}>
          <TouchableWithoutFeedback onPress={this.hideNameModal}>
            <View position={'absolute'} top={0} left={0} right={0} bottom={0} />
          </TouchableWithoutFeedback>
          <View bg={'white'} h={200} w={350} rounded={10} pt={7}>
            <Text mx={'auto'} fontSize={'xl'} bold>
              Name The Deck
            </Text>
            <Input
              w={200}
              mx={'auto'}
              mt={'5%'}
              pt={2}
              autoFocus={true}
              onChangeText={(e) => this.handleDeckName(e)}
              fontSize={'md'}
              fontWeight={500}
              onSubmitEditing={this.addDeck}
            />
            <HStack justifyContent="center" space={5}>
              <Button
                w={100}
                borderWidth={1}
                borderColor={'#b9b9b9'}
                h={9}
                mt={'5%'}
                bg={'danger.600'}
                _text={{
                  color: 'white',
                  fontWeight: '900',
                }}
                _pressed={{
                  bg: 'danger.400',
                }}
                onPress={this.hideNameModal}>
                Cancel
              </Button>
              <Button
                w={100}
                borderWidth={1}
                borderColor={'#b9b9b9'}
                h={9}
                mt={'5%'}
                bg={'#3A5BA0'}
                _text={{
                  color: 'white',
                  fontWeight: '900',
                }}
                _pressed={{
                  bg: '#6487ce',
                }}
                onPress={this.addDeck}>
                Enter
              </Button>
            </HStack>
          </View>
        </Modal>

        {/*Menu Modal*/}
        <Modal isOpen={this.state.menuModalVisible}>
          <TouchableWithoutFeedback onPress={this.hideMenuModal}>
            <View position={'absolute'} top={0} left={0} right={0} bottom={0} />
          </TouchableWithoutFeedback>
          <View>
            <Box bg={'white'} p={3} w={250} rounded={10}>
              <Text mx={'auto'} my={1} fontSize={'xl'} fontWeight={700}>
                {this.state.selectedDeckName}
              </Text>
              <Button
                h={50}
                bg={'#3A5BA0'}
                borderColor={'#b9b9b9'}
                borderWidth={1}
                mx={3}
                my={2}
                _text={{
                  color: 'white',
                  fontWeight: '900',
                }}
                _pressed={{
                  bg: '#6487ce',
                }}
                onPress={this.visibleMenuModal}>
                Play Deck
              </Button>
              <Button
                h={50}
                bg={'white'}
                borderColor={'#b9b9b9'}
                borderWidth={1}
                mx={3}
                my={2}
                _text={{
                  color: 'black',
                  fontWeight: '900',
                }}
                _pressed={{
                  bg: 'gray.200',
                }}
                onPress={this.editDeck}>
                Edit
              </Button>
              <Button
                h={50}
                bg={'white'}
                borderColor={'#b9b9b9'}
                borderWidth={1}
                mx={3}
                my={2}
                _text={{
                  color: 'black',
                  fontWeight: '900',
                }}
                _pressed={{
                  bg: 'gray.200',
                }}
                onPress={this.visibleRenameModal}>
                Rename
              </Button>
              <Button
                h={50}
                bg={'danger.600'}
                borderColor={'#b9b9b9'}
                borderWidth={1}
                mx={3}
                my={2}
                _text={{
                  color: 'white',
                  fontWeight: '900',
                }}
                _pressed={{
                  bg: 'danger.400',
                }}
                onPress={this.removeDeck}>
                Delete
              </Button>
            </Box>
          </View>
        </Modal>

        {/*Rename Modal*/}
        <Modal isOpen={this.state.renameModalVisible}>
          <TouchableWithoutFeedback onPress={this.hideRenameModal}>
            <View position={'absolute'} top={0} left={0} right={0} bottom={0} />
          </TouchableWithoutFeedback>
          <View bg={'white'} h={220} w={350} rounded={10} pt={7}>
            <Text mx={'auto'} fontSize={'xl'} bold>
              Rename The Deck
            </Text>
            <Text mx={'auto'} fontSize={'xl'} bold>
              "{this.state.selectedDeckName}"
            </Text>
            <Input
              w={200}
              mx={'auto'}
              mt={'2%'}
              pt={2}
              autoFocus={true}
              onChangeText={(e) => this.handleDeckName(e)}
              fontSize={'md'}
              fontWeight={500}
              onSubmitEditing={this.renameDeck}
            />
            <HStack justifyContent="center" space={5}>
              <Button
                w={100}
                borderWidth={1}
                borderColor={'#b9b9b9'}
                h={9}
                mt={'5%'}
                bg={'danger.600'}
                _text={{
                  color: 'white',
                  fontWeight: '900',
                }}
                _pressed={{
                  bg: 'danger.400',
                }}
                onPress={this.hideRenameModal}>
                Cancel
              </Button>
              <Button
                w={100}
                borderWidth={1}
                borderColor={'#b9b9b9'}
                h={9}
                mt={'5%'}
                bg={'#3A5BA0'}
                _text={{
                  color: 'white',
                  fontWeight: '900',
                }}
                _pressed={{
                  bg: '#6487ce',
                }}
                onPress={this.renameDeck}>
                Enter
              </Button>
            </HStack>
          </View>
        </Modal>

        <View h={'100%'}>
          {
            /*Deck List*/
            !!this.state.decks.length ? (
              <ScrollView>
                <HStack flexWrap={'wrap'} pb={5}>
                  {this.state.decks.map((deck, index) => (
                    <Document
                      key={index}
                      name={deck}
                      visibleMenuModal={this.visibleMenuModal}
                      handleSelectedDeckName={this.handleSelectedDeckName}
                    />
                  ))}
                </HStack>
              </ScrollView>
            ) : (
              <Text fontSize={'2xl'} m={'auto'} fontWeight={900}>
                No Decks
              </Text>
            )
          }
        </View>
        <Fab
          renderInPortal={false}
          shadow={3}
          size="16"
          bg={'indigo.700'}
          icon={<Icon color="white" as={FontAwesome5} name="plus" size="sm" />}
          onPress={this.visibleNameModal}
        />
      </View>
    );
  }
}

export default Main;
