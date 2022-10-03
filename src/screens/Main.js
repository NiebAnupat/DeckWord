// @collapse
import React, { Component } from 'react';
import {
  Actionsheet,
  Box,
  Button,
  Divider,
  Fab,
  HStack,
  Icon,
  IconButton,
  Input,
  Modal,
  ScrollView,
  Text,
  View,
} from 'native-base';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Document from '../components/MainPage/Document';
import { TouchableWithoutFeedback } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Word from '../components/AddWordPage/Word';
import uuid from 'react-native-uuid';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      nameModalVisible: false,
      menuModalVisible: false,
      renameModalVisible: false,
      addWordModalVisible: false,
      actionSheetVisible: false,
      editWordModalVisible: false,
      deckName: '',
      selectedDeckId: null,
      decks: [],
      front: '',
      back: '',
      editFront: '',
      editBack: '',
      wordId: null,
    };
    AsyncStorage.getItem('@decks').then((decks) => {
      if (decks) {
        this.setState({ decks: JSON.parse(decks) });
      }
    });
  }

  async componentDidUpdate() {
    try {
      console.log(this.state.selectedDeckId);
      await AsyncStorage.setItem('@decks', JSON.stringify(this.state.decks));
    } catch (e) {
      console.log(e);
    }
  }

  //<editor-fold desc="Visible Part">
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

  visibleAddWordModal = () => {
    this.hideMenuModal();
    this.hideActionSheet();
    this.setState({
      addWordModalVisible: true,
    });
  };

  visibleEditWordModal = () => {
    this.hideMenuModal();
    this.hideActionSheet();
    this.setState({
      editWordModalVisible: true,
    });
  };

  visibleActionSheet = () => {
    this.hideMenuModal();
    this.setState({ actionSheetVisible: true });
  };
  //</editor-fold>

  //<editor-fold desc="Hide Part">
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

  hideAddWordModal = () => {
    this.setState({
      addWordModalVisible: false,
    });
  };

  hideEditWordModal = () => {
    this.setState({
      editWordModalVisible: false,
    });
  };

  hideActionSheet = () => {
    this.setState({ actionSheetVisible: false });
  };
  //</editor-fold>

  //<editor-fold desc="Handle Part">
  handleDeckName = (text) => {
    this.setState({ deckName: text });
  };

  handleSelectedDeckId = (id) => {
    this.setState({ selectedDeckId: id });
  };

  handleFront = (text) => {
    this.setState({ front: text });
  };

  handleBack = (text) => {
    this.setState({ back: text });
  };

  handleEditFront = (text) => {
    this.setState({ editFront: text });
  };

  handleEditBack = (text) => {
    this.setState({ editBack: text });
  };

  handleWordId = (id) => {
    this.setState({ wordId: id });
  };
  //</editor-fold>

  //<editor-fold desc="Function Part">
  addDeck = () => {
    const { deckName, decks } = this.state;
    try {
      if (deckName === '') {
        alert('Please enter a name');
      } else {
        decks.push({
          uuid: uuid.v4(),
          name: deckName,
          words: [],
        });
        this.setState({ decks: decks });
        this.hideNameModal();
      }
    } catch (error) {
      console.log(error);
    }
  };

  removeDeck = () => {
    console.log('Remove Deck Function');
    const { decks } = this.state;
    const { selectedDeckId } = this.state;
    try {
      const newDecks = decks.filter((deck) => deck.uuid !== selectedDeckId);
      this.setState({ decks: newDecks, selectedDeckId: null });
      this.hideMenuModal();
    } catch (error) {
      console.log(error);
    }
  };

  renameDeck = () => {
    console.log('Rename Deck Function');
    const { decks, deckName } = this.state;
    const { selectedDeckId } = this.state;
    try {
      const newDecks = decks.map((deck) => {
        if (deck.uuid === selectedDeckId) {
          deck.name = deckName;
        }
        return deck;
      });
      this.setState({ decks: newDecks });
      this.hideRenameModal();
    } catch (error) {
      console.log(error);
    }
  };

  addWord = async () => {
    const { front, back, decks } = this.state;
    const { selectedDeckId } = this.state;
    try {
      const newDecks = decks.map((deck) => {
        if (deck.uuid === selectedDeckId) {
          deck.words.push({
            uuid: uuid.v4(),
            front: front,
            back: back,
          });
        }
        return deck;
      });
      this.setState({ decks: newDecks });
      this.hideAddWordModal();
      this.visibleActionSheet();
    } catch (error) {
      console.log(error);
    }
  };

  removeWord = (id) => {
    console.log('Remove Word : ', id);
    const { decks } = this.state;
    const { selectedDeckId } = this.state;
    try {
      const newDecks = decks.map((deck) => {
        if (deck.uuid === selectedDeckId) {
          deck.words = deck.words.filter((word) => word.uuid !== id);
        }
        return deck;
      });
      this.setState({ decks: newDecks });
    } catch (error) {
      console.log(error);
    }
  };

  editWord = () => {
    console.log('Edit Word : ', this.state.wordId);
    const { decks, editFront, editBack, wordId } = this.state;
    const { selectedDeckId } = this.state;
    try {
      const newDecks = decks.map((deck) => {
        if (deck.uuid === selectedDeckId) {
          deck.words.map((word) => {
            if (word.uuid === wordId) {
              word.front = editFront;
              word.back = editBack;
            }
            return word;
          });
        }
        return deck;
      });
      this.setState({ decks: newDecks });
      this.hideEditWordModal();
      this.visibleActionSheet();
    } catch (error) {
      console.log(error);
    }
  };
  //</editor-fold>

  //<editor-fold desc="Modal Part">
  nameModal = () => {
    return (
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
                fontWeight: '700',
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
                fontWeight: '700',
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
    );
  };

  menuModal = () => {
    console.log(this.state.decks);
    return (
      <Modal isOpen={this.state.menuModalVisible}>
        <TouchableWithoutFeedback onPress={this.hideMenuModal}>
          <View position={'absolute'} top={0} left={0} right={0} bottom={0} />
        </TouchableWithoutFeedback>
        <View>
          <Box bg={'white'} p={3} w={250} rounded={10}>
            <Text mx={'auto'} my={1} fontSize={'xl'} fontWeight={700}>
              {!this.state.selectedDeckId
                ? 'Select A Deck'
                : this.state.decks.find(
                    (deck) => deck.uuid === this.state.selectedDeckId,
                  ).name}
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
              onPress={this.visibleActionSheet}>
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
    );
  };

  renameModal = () => {
    return (
      <Modal isOpen={this.state.renameModalVisible}>
        <TouchableWithoutFeedback onPress={this.hideRenameModal}>
          <View position={'absolute'} top={0} left={0} right={0} bottom={0} />
        </TouchableWithoutFeedback>
        <View bg={'white'} h={220} w={350} rounded={10} pt={7}>
          <Text mx={'auto'} fontSize={'xl'} bold>
            Rename The Deck
          </Text>
          <Text mx={'auto'} fontSize={'xl'} bold>
            "
            {!this.state.selectedDeckId
              ? 'No Deck Selected'
              : this.state.decks.find(
                  (deck) => deck.uuid === this.state.selectedDeckId,
                ).name}
            "
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
    );
  };

  addWordModal = () => {
    return (
      <Modal
        isOpen={this.state.addWordModalVisible}
        // isOpen={true}
      >
        <TouchableWithoutFeedback onPress={this.hideAddWordModal}>
          <View position={'absolute'} top={0} left={0} right={0} bottom={0} />
        </TouchableWithoutFeedback>
        <Box bg={'warmGray.100'} w={'80%'} h={'2/4'} rounded={25}>
          <Input
            w={'80%'}
            fontSize={'2xl'}
            fontWeight={500}
            mx={'auto'}
            mt={'15%'}
            placeholder={'Front'}
            textAlign={'center'}
            h={'30%'}
            onChangeText={(e) => this.handleFront(e)}
          />
          <Input
            w={'80%'}
            fontSize={'2xl'}
            fontWeight={500}
            mx={'auto'}
            mt={5}
            placeholder={'Back'}
            textAlign={'center'}
            h={'30%'}
            onChangeText={(e) => this.handleBack(e)}
            onSubmitEditing={this.addWord}
          />
          <HStack justifyContent="center" space={5}>
            <Button
              w={100}
              mt={'5%'}
              bg={'danger.600'}
              onPress={() => {
                this.hideAddWordModal();
                this.visibleActionSheet();
              }}
              _text={{
                color: 'white',
                fontWeight: '900',
              }}
              _pressed={{
                bg: 'danger.400',
              }}>
              Cancel
            </Button>
            <Button
              w={100}
              mt={'5%'}
              bg={'#3A5BA0'}
              onPress={this.addWord}
              _text={{
                color: 'white',
                fontWeight: '900',
              }}
              _pressed={{
                bg: '#6487ce',
              }}>
              Add
            </Button>
          </HStack>
        </Box>
      </Modal>
    );
  };

  editWordModal = () => {
    return (
      <Modal
        isOpen={this.state.editWordModalVisible}
        // isOpen={true}
      >
        <TouchableWithoutFeedback onPress={this.hideEditWordModal}>
          <View position={'absolute'} top={0} left={0} right={0} bottom={0} />
        </TouchableWithoutFeedback>
        <Box bg={'warmGray.100'} w={'80%'} h={'2/4'} rounded={25}>
          <Input
            value={this.state.editFront}
            w={'80%'}
            fontSize={'2xl'}
            fontWeight={500}
            mx={'auto'}
            mt={'15%'}
            placeholder={'Front'}
            textAlign={'center'}
            h={'30%'}
            onChangeText={(e) => this.handleEditFront(e)}
            onSubmitEditing={this.editWord}
          />
          <Input
            value={this.state.editBack}
            w={'80%'}
            fontSize={'2xl'}
            fontWeight={500}
            mx={'auto'}
            mt={5}
            placeholder={'Back'}
            textAlign={'center'}
            h={'30%'}
            onChangeText={(e) => this.handleEditBack(e)}
            onSubmitEditing={this.editWord}
          />
          <HStack justifyContent="center" space={5}>
            <Button
              w={100}
              mt={'5%'}
              bg={'danger.600'}
              onPress={() => {
                this.hideEditWordModal();
                this.visibleActionSheet();
              }}
              _text={{
                color: 'white',
                fontWeight: '900',
              }}
              _pressed={{
                bg: 'danger.400',
              }}>
              Cancel
            </Button>
            <Button
              w={100}
              mt={'5%'}
              bg={'#3A5BA0'}
              onPress={this.editWord}
              _text={{
                color: 'white',
                fontWeight: '900',
              }}
              _pressed={{
                bg: '#6487ce',
              }}>
              Apply
            </Button>
          </HStack>
        </Box>
      </Modal>
    );
  };
  //</editor-fold>

  render() {
    return (
      <View h={'100%'}>
        {/*Name Modal*/}
        {this.nameModal()}

        {/*Menu Modal*/}
        {this.menuModal()}

        {/*Rename Modal*/}
        {this.renameModal()}

        {/*Add Word Modal*/}
        {this.addWordModal()}

        {/*Edit Word Modal*/}
        {this.editWordModal()}

        <View h={'100%'}>
          {
            /*Deck List*/
            !!this.state.decks.length ? (
              <ScrollView>
                <HStack flexWrap={'wrap'} pb={5}>
                  {this.state.decks.map((deck, index) => (
                    <Document
                      key={index}
                      name={deck.name}
                      uuid={deck.uuid}
                      visibleMenuModal={this.visibleMenuModal}
                      handleSelectedDeckId={this.handleSelectedDeckId}
                      visibleActionSheet={this.visibleActionSheet}
                    />
                  ))}
                </HStack>
              </ScrollView>
            ) : (
              <Text fontSize={'2xl'} m={'auto'} fontWeight={500}>
                No Decks
              </Text>
            )
          }

          <Actionsheet
            isOpen={this.state.actionSheetVisible}
            onClose={this.hideActionSheet}>
            <Actionsheet.Content bgColor={'#F0F0F0'}>
              <Box w="100%" h={60} px={4} flexDirection={'row'}>
                <Text fontSize="2xl" color="black" fontWeight="600" my={'auto'}>
                  {!this.state.selectedDeckId
                    ? 'No Deck Selected'
                    : this.state.decks.find(
                        (deck) => deck.uuid === this.state.selectedDeckId,
                      ).name}
                </Text>
                <IconButton
                  ml={'auto'}
                  variant="unstyled"
                  onPress={this.visibleAddWordModal}
                  icon={
                    <Icon
                      color={'gray.600'}
                      as={FontAwesome5}
                      name={'plus'}
                      size={'xl'}
                    />
                  }
                />
              </Box>

              <Divider mb={3} w={'90%'} mr={'auto'} ml={4} />

              <ScrollView w={'100%'} h={'100%'}>
                {!!this.state.selectedDeckId ? (
                  this.state.decks.find(
                    (deck) => deck.uuid === this.state.selectedDeckId,
                  ).words.length <= 0 ? (
                    <Text
                      fontSize={'2xl'}
                      m={'auto'}
                      mt={'60%'}
                      fontWeight={900}>
                      No Words
                    </Text>
                  ) : (
                    this.state.decks
                      .find((deck) => deck.uuid === this.state.selectedDeckId)
                      .words.map((word, index) => (
                        <Word
                          key={index}
                          front={word.front}
                          back={word.back}
                          uuid={word.uuid}
                          visibleEditWordModal={this.visibleEditWordModal}
                          handleWordId={this.handleWordId}
                          handleEditFront={this.handleEditFront}
                          handleEditBack={this.handleEditBack}
                          removeWord={this.removeWord}
                        />
                      ))
                  )
                ) : null}
              </ScrollView>
            </Actionsheet.Content>
          </Actionsheet>
        </View>

        <Fab
          renderInPortal={false}
          shadow={3}
          variant="unstyled"
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
