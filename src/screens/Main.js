// @collapse
import React, { Component } from 'react';
import {
  Actionsheet,
  Box,
  Button,
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
import Word from '../components/AddWordPage/Word';

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
      selectedDeckName: '',
      decks: [
        'English',
        'Spanish',
        'French',
        'German',
        'Latin',
        'Japanese',
        'Chinese',
        'Korean',
        'Russian',
        'Italian',
        'Portuguese',
        'Swedish',
      ],
      front: '',
      back: '',
      editFront: '',
      editBack: '',
      editIndex: null,
      words: [
        {
          front: 'Hello',
          back: 'Bonjour',
        },
        {
          front: 'Goodbye',
          back: 'Au revoir',
        },
      ],
    };
  }

  componentDidUpdate() {
    console.log('State Changed');
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

  handleDeckName = (text) => {
    this.setState({ deckName: text });
  };

  handleSelectedDeckName = (text) => {
    this.setState({ selectedDeckName: text });
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

  handleEditIndex = (index) => {
    this.setState({ editIndex: index });
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
    console.log('Edit Deck : ', this.state.selectedDeckName);
  };

  addWord = async () => {
    this.setState({
      words: [
        ...this.state.words,
        {
          front: this.state.front,
          back: this.state.back,
        },
      ],
    });
    this.hideAddWordModal();
  };

  removeWord = (index) => {
    console.log('Remove Word : ', index);
    this.setState({
      words: this.state.words.filter((word, i) => i !== index),
    });
  };

  editWord = () => {
    console.log('Edit Word : ', this.state.editIndex);
    this.setState(
      {
        words: this.state.words.map((word, i) => {
          if (i === this.state.editIndex) {
            return {
              front: this.state.editFront,
              back: this.state.editBack,
            };
          } else {
            return word;
          }
        }),
      },
      () => {
        this.hideEditWordModal();
      },
    );
  };

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
    );
  };

  menuModal = () => {
    return (
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
          />
          <HStack justifyContent="center" space={5}>
            <Button
              w={100}
              mt={'5%'}
              bg={'danger.600'}
              onPress={this.hideAddWordModal}
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
          />
          <HStack justifyContent="center" space={5}>
            <Button
              w={100}
              mt={'5%'}
              bg={'danger.600'}
              onPress={this.hideEditWordModal}
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
                      name={deck}
                      visibleMenuModal={this.visibleMenuModal}
                      handleSelectedDeckName={this.handleSelectedDeckName}
                      visibleActionSheet={this.visibleActionSheet}
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

          <Actionsheet
            isOpen={this.state.actionSheetVisible}
            onClose={this.hideActionSheet}>
            <Actionsheet.Content bgColor={'#F0F0F0'}>
              <Box w="100%" h={60} px={4} flexDirection={'row'}>
                <Text fontSize="2xl" color="black" fontWeight="900" my={'auto'}>
                  {this.state.selectedDeckName}
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

              <ScrollView w={'100%'} h={'100%'}>
                {this.state.words.map((word, index) => {
                  return (
                    <Word
                      front={word.front}
                      back={word.back}
                      key={index}
                      index={index}
                      removeWord={this.removeWord}
                      visibleEditWordModal={this.visibleEditWordModal}
                      handleEditFront={this.handleEditFront}
                      handleEditBack={this.handleEditBack}
                      handleEditIndex={this.handleEditIndex}
                    />
                  );
                })}
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
