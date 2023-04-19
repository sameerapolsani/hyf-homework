const movies = [
  { title: "'71", year: 2014, rating: 7.2, votes: 41702, running_times: 5940 },
  {
    title: "'A' gai wak",
    year: 1983,
    rating: 7.4,
    votes: 11942,
    running_times: 6300,
  },
  {
    title: "'Breaker' Morant",
    year: 1980,
    rating: 7.9,
    votes: 10702,
    running_times: 6420,
  },
  {
    title: "'Crocodile' Dundee II",
    year: 1988,
    rating: 5.5,
    votes: 47180,
    running_times: 6480,
  },
  {
    title: "(500) Days of Summer",
    year: 2009,
    rating: 7.7,
    votes: 412368,
    running_times: 5700,
  },
  {
    title: "*batteries not included",
    year: 1987,
    rating: 6.6,
    votes: 25636,
    running_times: 6360,
  },
  {
    title: "...E tu vivrai nel terrore! L'aldilà",
    year: 1981,
    rating: 6.9,
    votes: 16484,
    running_times: 5220,
  },
  {
    title: "...and justice for all.",
    year: 1979,
    rating: 7.4,
    votes: 25408,
    running_times: 7140,
  },
  { title: "10", year: 1979, rating: 6, votes: 13152, running_times: 7320 },
  {
    title: "10 Cloverfield Lane",
    year: 2016,
    rating: 7.2,
    votes: 216151,
    running_times: 6240,
  },
  {
    title: "10 Items or Less",
    year: 2006,
    rating: 6.7,
    votes: 13342,
    running_times: 4920,
  },
  {
    title: "10 Things I Hate About You",
    year: 1999,
    rating: 7.2,
    votes: 247070,
    running_times: 5820,
  },
  {
    title: "10 Years",
    year: 2011,
    rating: 6.1,
    votes: 20790,
    running_times: 6000,
  },
  {
    title: "10,000 BC",
    year: 2008,
    rating: 5.1,
    votes: 114750,
    running_times: 6540,
  },
  {
    title: "100 Feet",
    year: 2008,
    rating: 5.5,
    votes: 10979,
    running_times: 6240,
  },
  {
    title: "100 Girls",
    year: 2000,
    rating: 5.9,
    votes: 19232,
    running_times: 5640,
  },
  {
    title: "101 Dalmatians",
    year: 1996,
    rating: 5.7,
    votes: 83245,
    running_times: 6180,
  },
  {
    title: "102 Dalmatians",
    year: 2000,
    rating: 4.9,
    votes: 28927,
    running_times: 6000,
  },
  {
    title: "11-11-11",
    year: 2011,
    rating: 4,
    votes: 11425,
    running_times: 5400,
  },
  {
    title: "11:14",
    year: 2003,
    rating: 7.2,
    votes: 40149,
    running_times: 5700,
  },
  {
    title: "12 Angry Men",
    year: 1957,
    rating: 8.9,
    votes: 518449,
    running_times: 5760,
  },
  {
    title: "12 Rounds",
    year: 2009,
    rating: 5.6,
    votes: 24457,
    running_times: 6480,
  },
  {
    title: "12 Years a Slave",
    year: 2013,
    rating: 8.1,
    votes: 513047,
    running_times: 8040,
  },
  {
    title: "127 Hours",
    year: 2010,
    rating: 7.6,
    votes: 302809,
    running_times: 5640,
  },
  { title: "13", year: 2010, rating: 6.1, votes: 36623, running_times: 5460 },
  {
    title: "13 Going on 30",
    year: 2004,
    rating: 6.1,
    votes: 134434,
    running_times: 5880,
  },
  {
    title: "13 Hours",
    year: 2016,
    rating: 7.3,
    votes: 85771,
    running_times: 8640,
  },
  {
    title: "13 Sins",
    year: 2014,
    rating: 6.3,
    votes: 26738,
    running_times: 5580,
  },
  { title: "13th", year: 2016, rating: 8.2, votes: 15188, running_times: 6000 },
  {
    title: "1408",
    year: 2007,
    rating: 6.8,
    votes: 228738,
    running_times: 6840,
  },
  {
    title: "1492: Conquest of Paradise",
    year: 1992,
    rating: 6.5,
    votes: 24439,
    running_times: 9240,
  },
  {
    title: "15 Minutes",
    year: 2001,
    rating: 6.1,
    votes: 44647,
    running_times: 7200,
  },
  {
    title: "16 Blocks",
    year: 2006,
    rating: 6.6,
    votes: 117443,
    running_times: 6600,
  },
  {
    title: "17 Again",
    year: 2009,
    rating: 6.4,
    votes: 156663,
    running_times: 6120,
  },
  { title: "1922", year: 2017, rating: 6.4, votes: 15416, running_times: 6120 },
  { title: "1941", year: 1979, rating: 5.9, votes: 27172, running_times: 8760 },
  {
    title: "2 Days in New York",
    year: 2012,
    rating: 6,
    votes: 12766,
    running_times: 5760,
  },
  {
    title: "2 Days in Paris",
    year: 2007,
    rating: 6.8,
    votes: 28106,
    running_times: 5760,
  },
  {
    title: "2 Days in the Valley",
    year: 1996,
    rating: 6.5,
    votes: 16528,
    running_times: 6240,
  },
  {
    title: "2 Fast 2 Furious",
    year: 2003,
    rating: 5.9,
    votes: 213674,
    running_times: 6420,
  },
  {
    title: "2 Guns",
    year: 2013,
    rating: 6.7,
    votes: 170412,
    running_times: 6540,
  },
  {
    title: "20,000 Leagues Under the Sea",
    year: 1954,
    rating: 7.2,
    votes: 24094,
    running_times: 7620,
  },
  {
    title: "200 Cigarettes",
    year: 1999,
    rating: 5.9,
    votes: 13532,
    running_times: 6060,
  },
  {
    title: "2001 Maniacs",
    year: 2005,
    rating: 5.4,
    votes: 10889,
    running_times: 5220,
  },
  {
    title: "2001: A Space Odyssey",
    year: 1968,
    rating: 8.3,
    votes: 481800,
    running_times: 9660,
  },
  {
    title: "2001: A Space Travesty",
    year: 2000,
    rating: 3.4,
    votes: 10094,
    running_times: 5940,
  },
  { title: "2010", year: 1984, rating: 6.8, votes: 44155, running_times: 6960 },
  {
    title: "2012",
    year: 2009,
    rating: 5.8,
    votes: 306797,
    running_times: 9480,
  },
  {
    title: "20th Century Women",
    year: 2016,
    rating: 7.4,
    votes: 22965,
    running_times: 7140,
  },
  {
    title: "21 & Over",
    year: 2013,
    rating: 5.9,
    votes: 65298,
    running_times: 5580,
  },
  { title: "21", year: 2008, rating: 6.8, votes: 203251, running_times: 7380 },
  {
    title: "21 Grams",
    year: 2003,
    rating: 7.7,
    votes: 202129,
    running_times: 7440,
  },
  {
    title: "21 Jump Street",
    year: 2012,
    rating: 7.2,
    votes: 446476,
    running_times: 6540,
  },
];
// creating an array with short title by using filter
const shortTitle = movies.filter((movie) => movie.title.length <= 10);
console.log(shortTitle);
//Create an array of movie titles with long movie titles
const longTitle = movies.filter((movie) => movie.title.length >= 10);
console.log(longTitle);
//Count the number of movies made between 1980-1989 (including both the years)
const moviesIn1980_1989 = movies.filter(
  (movie) => movie.year >= 1980 && movie.year <= 1989
);
console.log(moviesIn1980_1989);

//Create a new array that has an extra key called tag.
//The tag is based on the rating: Good (>= 7), Average (>= 4 and < 7), Bad (< 4)
const goodRatedMovies = movies
  .filter((movie) => movie.rating >= 7)
  .map((movie) => Object.assign(movie, { tag: "good" }));
console.log(goodRatedMovies);
const averageRatedMovies = movies
  .filter((movie) => movie.rating < 7 && movie.rating >= 4)
  .map((movie) => Object.assign(movie, { tag: "average" }));
console.log(averageRatedMovies);
const badRatedMovies = movies
  .filter((movie) => movie.rating < 4)
  .map((movie) => Object.assign(movie, { tag: "bad" }));
console.log(badRatedMovies);
//Using chaining, first filter the movies array to only contain the movies rated higher than 6.
//Now map the movies array to only the rating of the movies.
const higher6RatingMovies = movies
  .filter((movie) => movie.rating > 6)
  .map((movie) => movie.title);
console.log("the movies tated higher than 6 are :", higher6RatingMovies);

//Count the total number of movies containing any of following keywords: Surfer, Alien or Benjamin.
//So if there were 3 movies that contained Surfer, 1 with Alien and 2 with Benjamin, you would return 6. Can you make sure the search is case insensitive?
const moviesKeywords = movies.filter(
  (movie) =>
    movie.title.toLocaleLowerCase().includes("surfer".toLocaleLowerCase()) ||
    movie.title.toLocaleLowerCase().includes("aline".toLocaleLowerCase()) ||
    movie.title.toLocaleLowerCase().includes("benjamin".toLocaleLowerCase())
);
console.log(
  "The number of the movies which contain the keywords [Surfer, Alien and Benjamin] are :",
  moviesKeywords
);
//Create an array of movies where a word in the title is duplicated. Fx "Star Wars: The Clone Wars" the word Wars is duplicated.
// Here are some madeup examples of movies with duplicated words in the title: "The three men and the pistol", "Chase three - The final chase"

const duplicatedWord = movies.filter((currentMovie) => {
  const currentTitle = currentMovie.title.toLowerCase().split(" ");
  const sameWords = currentTitle.filter(
    (word, index) => currentTitle.indexOf(word) !== index
  );
  if (sameWords.length > 0) {
    return currentMovie;
  }
});
console.log(" The number of the duplicated words are : ", duplicatedWord);
//Calculate the average rating of all the movies using reduce. Optional
const moviesRating = movies
  .filter((movie) => movie.rating)
  .map((movie) => movie.rating);
const averageRate = moviesRating.reduce((x, y) => {
  const totalRate = x + y / moviesRating.length;
  return totalRate;
}, 0);
console.log(`The average of the rating of all the movies is ${averageRate}`);
//Count the total number of Good, Average and Bad movies using reduce.
// A return could fx be {goodMovies: 33, averageMovies: 45, goodMovies: 123} Optional
let totalGood = 0;
let totalAverage = 0;
let totalBad = 0;
const countRating = goodRatedMovies.forEach((movie) => {
  if (movie.tag === "good") {
    totalGood++;
  } else if (movie.tag === "average") {
    totalAverage++;
  } else {
    totalBad++;
  }
});
const ratings = {
  goodMovies: totalGood,
  averageMovies: totalAverage,
  badMovies: totalBad,
};
console.log(ratings);
