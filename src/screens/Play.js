import React, { Component } from 'react';
import {
  Box,
  Button,
  Icon,
  Text,
  View,
  VStack,
  Toast,
  Pressable,
} from 'native-base';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { BackHandler } from 'react-native';

class Play extends Component {
  constructor() {
    super();
    this.state = {
      randomToastIsVisible: false,
      countWord: 1,
      words: [],
      currentWord: null,
      amountWords: 0,
      isFlipped: false,
    };

    this.playedWords = [];
    this.originalWords = [];
  }

  backAction = () => {
    this.props.navigation.navigate('Main');
    return true;
  };

  async componentDidMount() {
    this.backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      this.backAction,
    );

    await this.setState({ words: [...this.props.route.params.words] });
    await this.setState({ amountWords: this.state.words.length });
    await this.setState({
      currentWord: { ...this.state.words[0] },
    });
    this.originalWords = [...this.props.route.params.words];
  }

  componentDidUpdate() {}

  componentWillUnmount() {
    // Clear State
    this.setState({
      randomToastIsVisible: false,
      countWord: 1,
      words: [],
      currentWord: null,
      amountWords: 0,
      isFlipped: false,
    });
    this.backHandler.remove();
  }

  //<editor-fold desc="Toast">
  RandomToast = () => {
    return (
      <Box
        shadow={2}
        w={'120px'}
        h={'40px'}
        mx={'auto'}
        bg="indigo.500"
        mb={10}
        rounded={'3'}>
        <Text
          fontSize="sm"
          fontWeight={500}
          textAlign={'center'}
          my={'auto'}
          color="white">
          Random Mode
        </Text>
      </Box>
    );
  };

  ascendingToast = () => {
    return (
      <Box
        shadow={2}
        w={'150px'}
        h={'40px'}
        mx={'auto'}
        bg="success.500"
        mb={10}
        rounded={'3'}>
        <Text
          fontSize="sm"
          fontWeight={500}
          textAlign={'center'}
          my={'auto'}
          color="white">
          Ascending Mode
        </Text>
      </Box>
    );
  };

  showRandomToast = () => {
    Toast.show({
      render: () => this.RandomToast(),
      duration: 800,
    });
  };

  showAscendingToast = () => {
    Toast.show({
      render: () => this.ascendingToast(),
      duration: 800,
    });
  };
  //</editor-fold>

  randomCardColor = () => {
    const colors = [
      'red.500',
      'orange.500',
      'yellow.500',
      'green.500',
      'teal.500',
      'blue.500',
      'cyan.500',
      'purple.500',
      'pink.500',
      'emerald.500',
      'lime.500',
      'amber.500',
      'indigo.500',
      'violet.500',
      'fuchsia.500',
      'rose.500',
    ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    return randomColor;
  };

  correct = async () => {
    console.log('correct');
    const newDeck = [...this.state.words];
    await console.log('newDeck : \n', newDeck);
    this.playedWords.push(newDeck.shift());
    this.playedWords[this.playedWords.length - 1].isCorrect = true;
    const newCurrentWord = newDeck[0];
    await this.setState({
      words: [...newDeck],
      currentWord: newCurrentWord,
    });
    await this.setState({ countWord: this.state.countWord + 1 });
    console.log('count : ', this.state.countWord);
    console.log('amount : ', this.state.amountWords);
    if (this.state.countWord == this.state.amountWords) {
      this.props.navigation.navigate('Result', {
        words: this.originalWords,
      });
    }
  };

  incorrect = async () => {
    console.log('incorrect');
    const newDeck = [...this.state.words];
    this.playedWords.push(newDeck.shift());
    this.playedWords[this.playedWords.length - 1].isCorrect = false;
    const newCurrentWord = newDeck[0];
    await this.setState({
      words: [...newDeck],
      currentWord: newCurrentWord,
    });
    await this.setState({ countWord: this.state.countWord + 1 });
    console.log('count : ', this.state.countWord);
    console.log('amount : ', this.state.amountWords);
    if (this.state.countWord == this.state.amountWords) {
      this.props.navigation.navigate('Result', {
        words: this.originalWords,
      });
    }
  };

  flipCard = () => {
    this.setState({ isFlipped: !this.state.isFlipped });
  };

  // Make Card Ascending
  makeCardAscending = async () => {
    console.log('makeCardAscending');
    console.log(this.originalWords);
    await this.setState({
      words: [...this.originalWords],
      currentWord: this.originalWords[0],
      countWord: 1,
    });
    this.playedWords = [];
  };

  // Make Card Random
  makeCardRandom = async () => {
    const randomWords = [...this.originalWords];
    const randomDeck = randomWords.sort(() => Math.random() - 0.5);
    await this.setState({
      words: [...randomDeck],
      currentWord: randomDeck[0],
      countWord: 1,
    });
    this.playedWords = [];
  };

  render() {
    const randomColor = this.randomCardColor();
    return (
      <View w={'100%'} h={'100%'} bg={'warmGray.50'}>
        <Box w={'90%'} mt={3} mx={'auto'} flexDir={'row'}>
          <Text mx={'auto'} mt={'5%'} fontSize={'45px'} fontWeight={600}>
            Word{' '}
            {this.state.countWord <= this.state.amountWords
              ? this.state.countWord
              : this.state.amountWords}
            /{this.state.amountWords}
          </Text>
        </Box>

        <Pressable
          onPress={this.flipCard}
          bg={randomColor}
          w={'80%'}
          h={'58%'}
          mx={'auto'}
          rounded={'10'}
          shadow={6}
          _pressed={{ opacity: 0.5 }}>
          <Text
            mx={'auto'}
            my={'auto'}
            textAlign={'center'}
            fontSize={'40px'}
            w={'95%'}
            color={'white'}
            fontWeight={600}>
            {this.state.currentWord
              ? this.state.isFlipped
                ? this.state.currentWord.back
                : this.state.currentWord.front
              : null}
          </Text>
        </Pressable>

        <Box w={'250px'} h={'50px'} mt={'auto'} mx={'auto'} flexDir={'row'}>
          <Button
            bg={'red.500'}
            _pressed={{ bg: 'red.600' }}
            mx={'auto'}
            w={'20%'}
            rounded={'full'}
            rightIcon={
              <Icon as={FontAwesome5} name={'times'} size={'xl'} ml={'2'} />
            }
            onPress={this.incorrect}
          />
          <Button
            bg={'green.500'}
            _pressed={{ bg: 'green.600' }}
            mx={'auto'}
            w={'20%'}
            rounded={'full'}
            rightIcon={<Icon as={FontAwesome5} name={'check'} size={'xl'} />}
            onPress={this.correct}
          />
        </Box>
        <Box w={'100%'} h={'50px'} mt={'auto'} flexDir={'row'}>
          <Button
            mx={'auto'}
            w={'50%'}
            rounded={'0'}
            bg={'success.500'}
            _pressed={{ bg: 'success.600' }}
            onPress={() => {
              this.showAscendingToast();
              this.makeCardAscending();
            }}
            rightIcon={
              <Icon as={FontAwesome5} name={'level-down-alt'} size={'md'} />
            }>
            <VStack>
              <Text color={'white'} fontWeight={700}>
                1
              </Text>
              <Text color={'white'} fontWeight={700}>
                2
              </Text>
            </VStack>
          </Button>
          <Button
            mx={'auto'}
            w={'50%'}
            bg={'indigo.500'}
            _pressed={{ bg: 'indigo.600' }}
            rounded={'0'}
            onPress={() => {
              this.showRandomToast();
              this.makeCardRandom();
            }}>
            <Icon
              as={FontAwesome5}
              name={'random'}
              color={'white'}
              size={'md'}
            />
          </Button>
        </Box>
      </View>
    );
  }
}

export default Play;
