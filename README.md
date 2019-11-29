![ga_cog_large_red_rgb](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png)

# GA Project 2 - The Alternative Times

Design based on the British newspaper 'The Times' this project is a website that requests the top UK News stories from News API and then passes the headline through Words API to create an alternative headline from word associations. this was the second project I completed during the General Assembly Software Engineering Immersive (bootcamp) course.

## Resources

* The Times [Newspaper](https://www.thetimes.co.uk/)
* [Wikipedia](https://en.wikipedia.org/wiki/The_Times)
* [News API](https://newsapi.org/)
* [Words API](https://www.wordsapi.com/)

## Built With

* HTML5
* SCSS
* Javascript
* React
* Axios
* NewsAPI and WordsAPI
* Git / GitHub

## Timeframe

2 day pair Hackathon with [Paul Cooke](https://github.com/paulcooke)

## Deployment

This website is deployed on [Heroku](https://alternativenews.herokuapp.com/)

![readme-one](images/readme/overview.png)

---

## Getting Started

---

## Architecture

```js
getStory() {
    const newsKey = process.env.NEWSAPI_ACCESS_KEY
    axios.get(`https://newsapi.org//v2/top-headlines?country=gb&apiKey=${newsKey}`)
      .then(res => this.setState({ articles: res.data.articles, originalHeadline: res.data.articles[0].title.toLowerCase().split(/[. ,:;\-_']+/) })) // has [0] to match the shuffle index start
      .catch(err => this.setState({ error: err.message }))
  }
```

---

## Future Improvements

This project was fast paced due to the 48 hour time restriction 

Advancements that could be made in the future to improve this website include:

- Ability to Switch between News genres (Entertainment, Sport, Science & Technology)
- Improved RegEx

## Author - Mary-Anne Triggs

Please visit my personal [portfolio](www.maryannetriggs.com)
