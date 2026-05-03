// 02 - JSON ( JavaScript Object Notation)

// JSON is a universal TEXT format for sharing data
// it looks almost exact;y like a JavaScript object, but its purely a STRING

// Why do we need it?
// Because you cannot send a live JavaScript objhect across a the internet,
// nor can you save it directly to a text file. you must convert it to plain text first

// We use JSON to:
// - Send and recieve data from web servers (APIs)
// - Saves configuration settings to a file
// - Share data between completely different programming languages (Python, Jva, C#, etc.

// Two built-in JavaScript functions do all the heavy lifting:
// JSON.stringify(value) -> Converts a live JavaScript object into a JSON text string
// JSON.parse(text) -> converts a JSON text string into a live JavaScript object

console.log('=== 2. JSON ===\n');

// 1) Object --> JSON
const student = {
    id: 101,
    name: 'Layla',
    age: 19,
    courses: ['Math', 'Programming', 'English'],
};

const text = JSON.stringify(student);
console.log('1) student as JSON (one line):');
console.log(`   ${text}`);

// 2) Pretty-printing with indentation
// The third argument is the number of spaces to indent.
// Use it for Logs and files that humans will read
const pretty = JSON.stringify(student, null, 2);
console.log('\n2) pretty-printed (easier to read):');
console.log(pretty);