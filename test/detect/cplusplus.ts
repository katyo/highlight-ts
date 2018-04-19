export default `#include <iostream>

int main(int argc, char *argv[]) {

  /* An annoying "Hello World" example */
  for (auto i = 0; i < 0xFFFF; i++)
    cout << "Hello, World!" << endl;

  char c = '\\n';
  unordered_map <string, vector<string> > m;
  m["key"] = "\\\\"; // this is an error

  return -2e3 + 12l;
}`;

export const comment = `/*
To use this program, compile it -- if you can -- and then type something like:

chan -n 5000 -d 2 < input.txt

In this case, it will produce 5000 words of output, checking two-word groups.
(The explanation above describes two-word generation. If you type "-d 3",
the program will find three-word groups, and so on. Greater depths make more
sense, but they require more input text and take more time to process.)

http://www.eblong.com/zarf/markov/
*/


/* make cpp win deterministically over others with C block comments */
cout << endl;`;
