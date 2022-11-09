"use strict";

window.document.getElementById("dictionary").getElementsByTagName("input")[0].addEventListener("keyup", function (_) {
    const word = window.document.getElementById("dictionary").getElementsByTagName("input")[0].value;
    if (word !== "") {
        dictionary(word).then((value) => {
            if (value.status === true && value.words.length !== 0) {
                const dictionary = window.document.getElementById("dictionary").getElementsByTagName("div")[0];
                toast(`Showing "${word}".`, 5000);
                dictionary.innerHTML = "";
                value.words.forEach(element => {
                    const word = window.document.createElement("div");
                    const wordName = window.document.createElement("h1");
                    const wordNameText = window.document.createTextNode(element.word);
                    wordName.appendChild(wordNameText);
                    word.appendChild(wordName);
                    if (typeof element.phonetic === "string" && element.phonetic !== "") {
                        const wordPhonetic = window.document.createElement("i");
                        wordPhonetic.classList.add("phonetic");
                        const wordPhoneticText = window.document.createTextNode(element.phonetic);
                        wordPhonetic.appendChild(wordPhoneticText);
                        wordName.appendChild(wordPhonetic);
                    }
                    if (element.phonetics.length !== 0) {
                        const phonetics = window.document.createElement("div");
                        phonetics.classList.add("phonetics");
                        element.phonetics.forEach(element => {
                            const phonetic = window.document.createElement("span");
                            const phoneticButton = window.document.createElement("button");
                            const phoneticButtonText = window.document.createTextNode(element.text ? element.text : "PLAY");
                            phoneticButton.appendChild(phoneticButtonText);
                            phoneticButton.onclick = function () {
                                if(typeof element.audio === "string" && element.audio !== "") {
                                    new Audio(element.audio).play();
                                } else {
                                    toast("No Audio", 5000)
                                }
                            }
                            phonetic.appendChild(phoneticButton);
                            phonetics.appendChild(phonetic);
                        });
                        word.appendChild(phonetics);
                    }
                    element.meanings.forEach(element => {
                        const meaning = window.document.createElement("div");
                        const meaningPartOfSpeech = window.document.createElement("div");
                        meaningPartOfSpeech.classList.add("partOfSpeech");
                        const meaningPartOfSpeechText = window.document.createTextNode(element.partOfSpeech);
                        meaningPartOfSpeech.appendChild(meaningPartOfSpeechText);
                        meaning.appendChild(meaningPartOfSpeech);
                        element.definitions.forEach(element => {
                            const definition = window.document.createElement("div");
                            definition.classList.add("definition");
                            const definitionText = window.document.createTextNode(element.definition);
                            definition.appendChild(definitionText);
                            if (typeof element.example === "string" && element.example !== "") {
                                const example = window.document.createElement("div");
                                example.classList.add("example");
                                const exampleText = window.document.createTextNode("Example: " + element.example);
                                example.appendChild(exampleText);
                                definition.appendChild(example)
                            }
                            if (element.synonyms.length !== 0) {
                                const synonyms = window.document.createElement("div");
                                synonyms.classList.add("synonyms");
                                const synonymsText = window.document.createTextNode("Synonyms: ");
                                synonyms.appendChild(synonymsText);
                                element.synonyms.forEach(element => {
                                    const synonym = window.document.createElement("span");
                                    const synonymText = window.document.createTextNode(element);
                                    synonym.appendChild(synonymText);
                                    synonyms.appendChild(synonym);
                                });
                                definition.appendChild(synonyms);
                            }
                            if (element.antonyms.length !== 0) {
                                const antonyms = window.document.createElement("div");
                                antonyms.classList.add("antonyms");
                                const antonymsText = window.document.createTextNode("Antonyms: ");
                                antonyms.appendChild(antonymsText);
                                element.antonyms.forEach(element => {
                                    const antonym = window.document.createElement("span");
                                    const antonymText = window.document.createTextNode(element);
                                    antonym.appendChild(antonymText);
                                    antonyms.appendChild(antonym);
                                });
                                definition.appendChild(antonyms);
                            }
                            meaning.appendChild(definition);
                        });
                        if (element.synonyms.length !== 0) {
                            const synonyms = window.document.createElement("div");
                            synonyms.classList.add("synonyms");
                            const synonymsText = window.document.createTextNode("Synonyms: ");
                            synonyms.appendChild(synonymsText);
                            element.synonyms.forEach(element => {
                                const synonym = window.document.createElement("span");
                                const synonymText = window.document.createTextNode(element);
                                synonym.appendChild(synonymText);
                                synonyms.appendChild(synonym);
                            });
                            meaning.appendChild(synonyms);
                        }
                        if (element.antonyms.length !== 0) {
                            const antonyms = window.document.createElement("div");
                            antonyms.classList.add("antonyms");
                            const antonymsText = window.document.createTextNode("Antonyms: ");
                            antonyms.appendChild(antonymsText);
                            element.antonyms.forEach(element => {
                                const antonym = window.document.createElement("span");
                                const antonymText = window.document.createTextNode(element);
                                antonym.appendChild(antonymText);
                                antonyms.appendChild(antonym);
                            });
                            meaning.appendChild(antonyms);
                        }
                        word.appendChild(meaning);
                    });
                    dictionary.appendChild(word);
                });
            } else if (value.status === true && value.words.length === 0) {
                toast(`Word "${word}" Not Found.`, 5000);
            } else if (value.status === false && value.words.length === 0) {
                toast("ERROR: NETWORK ISSUE", 5000);
            } else {
                toast("ERROR: SOMETHING WENT WRONG.", 5000);
            }
        });
    }
})