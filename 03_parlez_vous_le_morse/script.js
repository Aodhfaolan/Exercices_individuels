const latinToMorse = {
	'A':'.-',
	'B':'-...',
	'C':'-.-.',
	'D':'-..',
	'E':'.',
	'F':'..-.',
	'G':'--.',
	'H':'....',
	'I':'..',
	'J':'.---',
	'K':'-.-',
	'L':'.-..',
	'M':'--',
	'N':'-.',
	'O':'---',
	'P':'.--.',
	'Q':'--.-',
	'R':'.-.',
	'S':'...',
	'T':'-',
	'U':'..-',
	'V':'...-',
	'W':'.--',
	'X':'-..-',
	'Y':'-.--',
	'Z':'--..'
};

const morseToLatin = {
	'-': "T",
  '--': "M",
  '---': "O",
  '--.': "G",
  '--.-': "Q",
  '--..': "Z",
  '-.': "N",
  '-.-': "K",
  '-.--': "Y",
  '-.-.': "C",
  '-..': "D",
  '-..-': "X",
  '-...': "B",
  '.': "E",
  '.-': "A",
  '.--': "W",
  '.---': "J",
  '.--.': "P",
  '.-.': "R",
  '.-..': "L",
  '..': "I",
  '..-': "U",
  '..-.': "F",
  '...': "S",
  '...-': "V",
  '....': "H"
}


function getLatinCharacterList() {
	let text = "Hello world"
	const textLetters = text.split("");

	return textLetters;
	//ENCORE ne pas oublier le RETURN
}

function translateLatinCharacter(textLetters) {
	let uppercaseText = textLetters.join('').toUpperCase().split('');
	//convertis le texte en majuscules
	let morseResult = uppercaseText.map(char => latinToMorse[char] || '/').join(' ');
	//map permet d'itérer dans un array en traduisant chaque lettre en morse
	// || "or" permet d'évaluer une condition, ici, si la lettre n'est pas trouvé dans le dictionnaire, cela sera remplacé par une string vide pour ne pas créer d'erreur


	// let morseResult = uppercaseText.replace(/A/g, match => latinToMorse[match]);
	// /A/ pour remplacer juste le lettre A dans le text
	// g est un global flag pour remplacer tous les A du text, pas juste le premier
	
	return morseResult;
}

function encode(){
	let Letters = getLatinCharacterList();
	//récupère la liste de lettres
	let translatedLatin = translateLatinCharacter(Letters);
	//traduis la liste de lettres

	return translatedLatin;
	//retourne le resultat
}

//RESULTAT = ".... . .-.. .-.. --- --..-- / .-- --- .-. .-.. -.."

function getMorseCharacterList(){
	let morseCode = ".... . .-.. .-.. --- --..-- / .-- --- .-. .-.. -.."
	const morseSymbols = morseCode.split(" ");
	//split(" ") permet de couper à chaque espace " " et donc de séparer tous les stacks de morse et non tous les symbols
	return morseSymbols;
	//un RETURN se fait DANS une fonction
}

function translateMorseCharacter(morseArray){
	let latinResult = morseArray.map(symb => morseToLatin[symb] || ' ').join('');
	//avec map on itère dans le tableau morseToLatin pour traduire les symboles en latin
	//si le symbol n'est pas trouvé dans le tableau, il sera remplacé par un espace (ici le / entre HELLO et WORLD)
	//puis les lettres trouvées sont jointent à la suite avec rien ('')
	return latinResult;
}

function decode(){
	let morseArray = getMorseCharacterList();
	//LE RESULTAT DE getMorseCharacterList() DANS LA VARIABLE morseArray UTILISEE DANS LA FONCTION translateMorseCharacter(morseArray)
	let translatedMorse = translateMorseCharacter(morseArray);
	return translatedMorse;
}

console.log(decode());