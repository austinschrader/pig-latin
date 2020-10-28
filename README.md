### Describe: 

| Test | Input | Output |
| :----------- | :----------------------| :----------- |
| It will add 'way' to the end of words that begin with a vowel |a|away|
| If a word begins with a consonant, it moves the first consonant to the end and adds "ay" | cat | atcay |
| If a word begins with 2 or more consonants, it moves all the first consecutive consonants to the end and adds "ay" | craft | aftcay |
| "Move 'qu' to the end together if it starts the word" | quest | estquay |
| If first consonants include "qu", move the consecutive consonants to the end | squeal | ealsquay |
| If y is the first character, treat y as a consonant | yes | esyay |
| It will apply these rules to each word in a string of multiple words | What is your question? | atwhay isway ouryay estionquay?


Describe: `pigLatin()`
Test: "It will add 'way' to the end of a word that begin with a vowel"
Expect(pigLatin("a")).toEqual("away");

Test: "If a word begins with a consonant, it moves the first consonant to the end and adds "ay"
Expect(pigLatin("cat)).toEqual("atcay")

Test: "If a word begins with 2 or more consonants, it moves all the first consecutive consonants to the end and adds "ay"
Expect(pigLatin("craft)).toEqual("aftcray")

Test: "Move 'qu' to the end together if it starts the word"
Expect(pigLatin("quest").toEqual("estquay"))

Test: "If first consonants include "qu", move the consecutive consonants to the end"
Expect(pigLatin("squeal").toEqual("ealsquayh"))

Test: "If y is the first character, treat y as a consonant"
Expect(pigLatin("yes").toEqual("esyay")

Test: "It will apply these rules to each word in a string of multiple words"
Expect(pigLatin("What is your question?)).toEqual("atwhay isway ouryay estionquay?)