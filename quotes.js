var quotes = [
{
    author: 'Bojan Markovii',
    message: 'Go is most fun I’ve had with a compiled programming language since I’ve discovered Turbo Pascal as a kid.'
}, {
    author: 'Fred Brooks',
    message: 'Nine people can’t make a baby in a month.'
}, {
    author: 'Martin Golding',
    message: 'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.'
}, {
    author: 'Richard Pattis',
    message: 'When debugging, novices insert corrective code; experts remove defective code.'
}, {
    author: 'Linus Torvald',
    message: 'Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.'
}, {
    author: 'Martin Fowler',
    message: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.'
}, {
    author: 'Michael Sinz',
    message: 'Programming is like sex. One mistake and you have to support it for the rest of your life.'
}, {
    author: 'Doug Linder',
    message: 'A good programmer is someone who always looks both ways before crossing a one-way street. '
}, {
    author: 'Viktor E Frankl',
    message: 'When we are no longer able to change a situation, we are challenged to change ourselves.'
}, {
    author: 'Eckhart Tolle',
    message: 'The primary cause of unhappiness is never the situation but your thoughts about it.'
}, {
    author: 'Lao Tzu',
    message: 'Knowing others is intelligence; knowing yourself is true wisdom. Mastering others is strength; mastering yourself is true power.'
}, {
    author: 'Samuel Tesla',
    message: 'Go is not meant to innovate programming theory. It’s meant to innovate programming practice.'
}, {
    author: 'Ikai Lan',
    message: 'Go is like a better C, from the guys that didn’t bring you C++.'
}, {
    author: 'Frank Mueller',
    message: 'Go is no Erlang, Smalltalk or Scheme, nothing pure. But it works great and is fun!'
}, {
    author: 'Mark Lutz',
    message: 'Freedom of expression is great for art, but lousy for engineering.'
}, {
    author: 'Douglas Crockford',
    message: 'Obsolete comments are worse than no comments.'
}, {
    author: 'Douglas Crockford',
    message: 'In Javascript, undefined and NaN are not constants. They are global variables, and you can change their values. That should not be possible, and yet it is. Don’t do it.'
}, {
    author: 'Nathan Myhrvold',
	message: 'Software sucks because users demand it to.'
}];

function getQuotes () {
    var index = Math.floor(Math.random() * quotes.length);
    var quote = quotes[index];
    $('#author').html(quote.author);
    $('#quote').html(quote.message);
}