const beyonceHash = {
  hits: [
    { title: 'Bootylicious', group: true, group_name: 'destinysChild', hair: ['straight', 'blonde', 'pink tips'], signature_look: 'fedora with yellow feather', video_theme: 'dressing room dance', best_line: 'Move your body up and down, make your booty touch the ground', fierceness: 7, formation: false, dancers: 20
    },
    { title: 'Single Ladies', group: false, group_name: 'none', hair: ['honey brown', 'half up, half down'], signature_look: 'black bodysuit and legs for days', video_theme: 'single ladies dance', best_line: 'if you like it then you should\'ve put a ring on it', fierceness: 10, formation: true, dancers: 2 
    },
    { title: 'Let Me Upgrade You', group: false, group_name: 'none', hair: ['beaded bun', 'wet hair', 'honey brown', 'waves'], signature_look: 'flapper dress and bodysuit', video_theme: 'decadence, water, gold beads and pearls', best_line: 'I could do for you what Martin did for the people', fierceness: 10, formation: true, dancers: 5 
    },
    { title: 'Sorry', group: false, group_name: 'none', hair: ['braids', 'bun', 'blonde', 'waves', 'bob'], signature_look: 'braided crown with gold bikini top', video_theme: 'party bus and Serena Williams in bodysuit', best_line: 'Boi bye', fierceness: 10, formation: false, dancers: 1 
    },
    { title: 'Say My Name', group: true, group_name: 'destinysChild', hair: ['blonde', 'curly', 'braid', 'pony tail'], signature_look: 'none', video_theme: 'color blocked scenes with group', best_line: 'say my name, say my name', fierceness: 7, formation: true, dancers: 6 
    },
    { title: 'Feeling Myself', group: true, group_name: 'Nicki Minaj featuring Beyonce', hair: ['blonde', 'waves'], signature_look: 'sporty bodysuit', video_theme: 'Coachella music festival', best_line: 'Im felling myself', fierceness: 9, formation: false, dancers: 0 
    }
  ],
  movies: [
    { title: 'Austin Power\'s Goldmember', year: 2002, rating: 5},
    { title: 'Dreamgirls', year: 2006, rating: 7},
    { title: 'Obsessed', year: 2009, rating: 6},
    { title: 'Cadillac Records', year: 2008, rating: 8},
    { title: 'Life is But a Dream', year: 2013, rating: 6},
    { title: 'The Pink Panther', year: 2006, rating: 4},
    { title: 'Epic', year: 2013, rating: 7},
    { title: 'The Fighting Temptations', year: 2003, rating: 5}
  ]
};
const YonceHitSongs = beyonceHash.hits
const YonceHitMovies = beyonceHash.movies

// 1. Print all the songs
function printAllSongs(songs) {
  return songs.forEach(song => console.log(song))
}


// 2. Print all the movies
function printAllMovies(movies) {
  return movies.forEach (movie => {console.log(movie)})
}


// 3. Return an array of all Beyonce's hit song titles
function hitSongTitles(songs) {
  return songs.map (song => song.title)
}


// 4. Return an array of all Beyonce's fierceness ratings
function allFiercenessRatings(songs) {
  return songs.map (song => song.fierceness)
}


// 5. Return all the songs where Beyonce is wearing a bodysuit or a bodysuit is part of the video theme
function songsWithBodySuits(songs) {
  return songs.filter(song => 
    song.signature_look.includes("bodysuit") || song.video_theme.includes("bodysuit")
  )
}


// 6. Return an array with all of the songs where Beyonce's fierceness is greater than or equal to a given number
function getSongsByFiercenessGTE(songs, fierceNumber) {
  return songs.filter(song => (song.fierceness >= fierceNumber))
}

// 7. Return an array with all of the movies Beyonce made after or during a given year
function getMoviesByDateGTE(movies, targetYear) {
  return movies.filter(movie => (movie.year >= targetYear))
}

// 8. Return all hit songs where Beyonce was in a group
function groupHits(songs) {
  return songs.filter(song => {
    if (song.group == true) {
      return song
    }
  })
}

// 9. Return a hit song where Beyonce's hair is blonde
function findBlondeHit(songs) {
  return songs.find(song => song.hair.includes("blonde"))
}

// 10. Return the hit song "Sorry"
function sorry(songs) {
  return songs.find(song => song.title == "Sorry")
}

// 11. Return a given song
function getSong(songs, songName) {
  return songs.find(song => {
    if (song.title == songName) {
      return song
    }
  })
}

// 12. Return all hit songs where Beyonce's fierceness rating is 10
function fiercestHits(songs) {
  return songs.filter(song => {
    if (song.fierceness == 10) {
      return song
    }
  })
}

// 13. Return the sum of Beyonce's fierceness value for all of her hit songs
function hitFiercenessSum(songs) {
  const fierceValues = songs.map(song => {
    return song.fierceness
  })
  let sum = 0;
  fierceValues.forEach(value => {return sum += value;})
  return sum
}

// 14. Return the average fierceness value for all Beyonce's hit songs
function hitFiercenessAverage(songs) {
  return (hitFiercenessSum(songs) / songs.length).toFixed(2);
}

// 15. Return the sum of Beyonce's rating value for all of her movies
function ratingSum(movies) {
  const ratingValues = movies.map(movie => {
    return movie.rating
  })
  let sum = 0;
  ratingValues.forEach(value => {return sum += value;})
  return sum
}

// 16. Return the average rating value for all of her movies
function ratingAverage(movies) {
  return (ratingSum(movies) / movies.length).toFixed(2);
}

// 17. Return the sum of the total number of dancers in all of the hit song videos
function hitDancerSum(songs) {
  const numberOfDancers = songs.map(song => {
    return song.dancers
  })
  let sum = 0;
  numberOfDancers.forEach(number => {return sum += number})
  return sum
}

// 18. Return an array of Beyonce's hairstyles without repeats
function getHairstyles(songs) {
  return allHairstyles = songs.map(song => song.hair)
}

function uniqueHairstyles(songs) {
  let hairstyleList = getHairstyles(songs).flat();
  return [...new Set(hairstyleList)];
}

// 19. Return an object where the properties are song names and the value is an object which contains that song's fierceness and the average fierceness for all songs
function songFiercenessByName(songs) {
  let someArray = songs.map(song => {
    return {
      title: song.title,
      fierceness: song.fierceness,
      averageFierceness: hitFiercenessAverage(songs)
    }
  })
  const someObject = someArray.reduce((songsObject, song) => {
    const newArrayWhoDis = {
      ...songsObject,
      [song.title]: song,
    }
      delete song.title
      return newArrayWhoDis
  }, {}) 
  return someObject
}



// 20. Return an object where the properties are movie names and the value is an object which contains that movie's rating and the average rating for all movies
function movieRatingsByName(movies) {
  let movieArray = movies.map(movie => {
    return {
    title: movie.title,
    rating: movie.rating,
    averageRating: ratingAverage(movies)
    }
  })
  const someOtherObject = movieArray.reduce((moviesObject, movie) => {
      const newMovieArray = {
    ...moviesObject,
    [movie.title]: movie,
    }
    delete movie.title
    return newMovieArray
  }, {})
  return someOtherObject
}

// 21. Return an object with Beyonce's hairstyles as the keys and a tally of each hairstyle, eg. `{ "blonde": 3, ... }`
function hairStyleFrequency(songs) {
  const hairArray = getHairstyles(YonceHitSongs);
  const mergedHairArray = [].concat.apply([], hairArray);
  const hairFrequencyArray = mergedHairArray.reduce(function (allHairstyles, hair) {
    if (hair in allHairstyles) {
      allHairstyles[hair]++
    } else {
      allHairstyles[hair] = 1
    }
    return allHairstyles
  }, {})
  return hairFrequencyArray
}

//1 console.log(printAllSongs(YonceHitSongs))
//2 console.log(printAllMovies(YonceHitMovies))
//3 console.log(hitSongTitles(YonceHitSongs))
//4 console.log(allFiercenessRatings(YonceHitSongs))
//5 console.log(songsWithBodySuits(YonceHitSongs))
//6 console.log(getSongsByFiercenessGTE(YonceHitSongs, 9))
//7 console.log(getMoviesByDateGTE(YonceHitMovies, 2008))
//8 console.log(groupHits(YonceHitSongs))
//9 console.log(findBlondeHit(YonceHitSongs))
//10 console.log(sorry(YonceHitSongs))
//11 console.log(getSong(YonceHitSongs, "Bootylicious"))
//12 console.log(fiercestHits(YonceHitSongs))
//13 console.log(hitFiercenessSum(YonceHitSongs))
//14 console.log(hitFiercenessAverage(YonceHitSongs))
//15 console.log(ratingSum(YonceHitMovies))
//16 console.log(ratingAverage(YonceHitMovies))
//17 console.log(hitDancerSum(YonceHitSongs))
//18 console.log(uniqueHairstyles(YonceHitSongs))
//19 console.log(songFiercenessByName(YonceHitSongs))
//20 console.log(movieRatingsByName(YonceHitMovies))
//21 console.log(hairStyleFrequency(YonceHitSongs))
