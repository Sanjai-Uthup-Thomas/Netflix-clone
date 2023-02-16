# Netflix Clone

- Demo: https://netflix-clone-s1o9.vercel.app/

This project is a simplified front end clone of Netflix. It was created with React and CSS (Grid and Flexbox). It uses [The MovieDB Api](https://www.themoviedb.org/documentation/api) to search for movies and display details. Feel free to contribute!


### Tools used

- Webpack v5
- Axios
- React
- css


### Runing Project Locally

- Install dependencies: run `npm install` in root project
- Get API key from [here](https://www.themoviedb.org/documentation/api)
- Create constants/constants file in src and add:
 ```javascript
export const baseUrl = 'https://api.themoviedb.org/3'
export const API_KEY = 'Your API KEY'
export const imageUrl = 'https://image.tmdb.org/t/p/original'
``` 
- Run project: `npm start`

### User Stories

- movies will be listed by categories.
- User can click on a movie and a modal should movies will be listed by categoriepop up. It should show video related to that film.
- The webpage adapts to any screen size.
### Sample Images

![Screenshot from imgur](https://imgur.com/GVWzpRm.jpg)
![Screenshot from imgur](https://imgur.com/PmtbbqA.jpg)
