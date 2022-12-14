# Weekend Challenge 12 - Saga Movies

## Instructions

Reviewing code is an important role developers play. We're going to practice reviewing code from others.

- Get the repo url from your partner
- Get your partner's project running on your computer
- Review the code from your partner and give relevant feedback
- Complete the Markdown section and submit that in the notes section on the assignment app. (Make sure you include who's code you reviewed.)

Practicing compassionate code reviews is important (you can learn more from this video on the topic: https://www.youtube.com/watch?v=Ea8EiIPZvh0 )



## Movies Page

- Student is provided with a Movie List Page and Route. It displays all movies on the DOM.
- [ x ] View has ability to click on a single movie
- [ x ] Clicking on single movie goes to movie details view at `/details`

## Details Page

- [ - ] Detail view should show all detail data include all the genres for the given movie
- [ - ] Has Back to List which goes back to the Home Page



## General Tasks

- [ x ] Use Sagas for API requests to the server
- [ - ] Use cards or grid for nice movie listing presentation
- [ x ] Should have at least 15+ commits. 
- [ idk ] Use branches for features.
- [ x ] Comment your code.
- [ - ] Update this README to include a description of the project in your own words.

# Stretch Goals



## Add Movie Page

- at own route similar to `/add`
- an input field (for the movie title)
- an input field (for the movie poster image URL)
- a textarea (for the movie description)
- a dropdown (for the genres)
- Cancel button, which should bring the user to the Home/List Page
- Save button, which should update the title and description in the database and bring the user to the Home/List Page (which now has the new movie)

### Add Movie POST/INSERT

Requires two inserts: first for the movie data and second into the movies_genres junction table. Much of this was provided in the starting repo. Students will need to match whatever they used for junction column names in that INSERT query.



### Edit Page

- [ - ] View at route `/edit`
- [ x ] Assumes the selected movie id is in Redux
- [ - ] Display an input field for changing the movie title
- [ - ] Displays a textarea for changing the movie description
- [ - ] Cancel button, which should bring the user to the Details Page
- [ - ] Save button, which should update the title and description in the database and bring the user to the Details Page

### OTHER STRETCH GOALS
- [ - ] Display the current values in the input (title) and textarea (description) on the Edit Page
- [ - ] Display all genres on movie list page. Research array_agg to make this possible.
- [ - ] Move sagas and reducers out of your index.js and into separate files (ideally in src/redux/reducers and src/redux/sagas folders).
- [ - ] Allow the user to refresh the details or edit page. The url for the details page would be something like /details/1 for movie with id of 1. Research react router params.
- [ - ] Allow the user to add a genre to a movie.
- [ - ] Allow the user to remove a genre from a movie.
- [ - ] Only display the top 10 movies, and allow the user to search for movie titles with a search bar on the home page (you can do this on the client side or the server side, server side is a bigger stretch, but good practice).
- [ - ] Create an Admin page. Add a link from the Home page to the Admin page. The page should initially display a login form (an input for username and an input for password). When the user enters the correct username (camera) and password (action), the page should display a form to add genres to the database, and a list of all of the genres with an x to remove them from the database. 

## Junction Table

Junction Table and full starter data is provided.


## Genre Join for a specific movie

```sql
-- expected join without array_agg()
-- we only need the genre names for Base Mode, so skip the movie stuff
SELECT genres.name FROM movies
JOIN <junction_table_name> ON movies.id = <junction_table_name>.movies_id
JOIN genres ON genres.id = <junction_table_name>.genres_id
WHERE movies.id = 1; -- Avatar's id
```


## Portal-ready Markdown

```

---
| Functional Requirements | Complete? |
| --- | :---: |
| Movies can be clicked on to go to a detail page | YES |
| Movie Detail Page displays movie image, title, description | no |
| Movie Detail Page displays all genres for this movie | no |
| Movie Detail Page has navigation back to List/Home Page | no |
| Sagas used for calls to server | YES |

---

### Notes:

Notes on items above.

---
| General Items | Complete? |
| --- | :---: |
| More than 15 git commits | kinda |
| Code broken down into Components | YES |
| Commits are descriptive of the changes made or feature added | YES |
| Readme file updated | no |
| Appropriate amount of code comments | YES |
| Code is consistently formatted | YES |
| Good use of Redux (where appropriate) | YES |
---

### Notes:
Code comments seem to be more about what you need to do versus what the thing does. I dont think this matters much, but I try to keep the list of what I need to do separte (ie read me or instructions page) and have functionally as the code comments (but im bad at this anyways, soooo...). With css id recoments just googling what you want, like a card or something and throw that on there. bootstrap makes this really easy, you just add a class of card to the div surounding everything you want in the card. then add classes of card text or card body or whatever. (I suck at mui)..

another recomendation is pull up old assignments where youve done the same thing or the group projects and use those as a template while coding.  I constantly have old assignments up and am viewing them to make sure syntax is correct. When I start a feature, I think back to where I have done this before and go look at that before starting. after while I am able to start doing it from memory, however I still pull up old assignments, especally when i encounter errors.

speaking of errors. console logs with weird notes are my best friend console.log('hi', err) - allows me to see where and when stuff runs or if it even gets to the specific console log at all. this is kinda how I do notes, within the console logs.

over all good start! last piece of advice is to switch features if you get stuck. If a sepecific feture is giving you issues, maybe throw it in a branch, add/commit, go back to main and start on a different feature. or I guess try again. I find it hard to fix broken code becuase it confuses me, so starting over offers more practice and allows you to learn from the previous mistakes plus you can view and utalize the specific parts that worked before while leaving out what didnt.


```
