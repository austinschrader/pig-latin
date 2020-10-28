### Describe: 

| Test | Input | Output |
| :----------- | :----------------------| :----------- |
| It will add 'way' to the end of words that begin with a vowel |a|away|
| If a word begins with a consonant, it moves the first consonant to the end and adds "ay" | cat | atcay |
| If a word begins with 2 or more consonants, it moves all the first consecutive consonants to the end and adds "ay" | craft | aftcay |
| "Move 'qu' to the end together if it starts the word" | quest | estquay |
| If first consonants include "qu", move the consecutive consonants to the end | squeal | ealsquay |
| If y is the first character, treat y as a consonant | yes | esyay


Describe: `pigLatin()`
Test: "It will add 'way' to the end of words that begin with a vowel"
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


<!-- If a word begins with a vowel, add "way" to the end -->

<!-- If words begin with 1+ consonant, move all of the first consecutive consonants to the end and add "ay" -->

<!-- If the first consonants include "qu", move the "u" along with the "q". Don't forget about words like "squeal" where "qu" doesn't come first! -->

<!-- For words beginning with "y", treat "y" as a consonant. -->