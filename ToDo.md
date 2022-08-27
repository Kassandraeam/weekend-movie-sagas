## Add the Detail View to our Movie App

For this weekend challenge you'll be expanding on a movie management application! We're already able to see movies that exist in our DB. We'll need to be able to see detailed view for each individual movie, including all genres associated with that movie. This is a very common pattern, to go from a list to showing more information about a single item. 

## Database Setup

- [x] 1. Create a database named `saga_movies_weekend`
- [x] 2. Run the queries from `database.sql` on the `saga_movies_weekend` database

## Install Dependencies

- [x] 1. `npm install`
- [x] 2. `npm run server`
- [x] 3. `npm run client`

## Notes

### Table Relationships
Genres can be applied to many different movies. Movies can have multiple genres. This is Many-to-Many! Junction Table time!

We've given you the database complete with a junction table and data for `movies_genres`.
 
### Movie Poster Images
We've added some movie posters in the `public/images` folder, and the database is set up to use them. If you want your own posters, you'll want to add the files there!

---

## Feature List

> NOTE: Start by taking inventory of the existing code. Part of the work for setting up sagas has been done for you.

### Home / List Page

This view is completed already! It displays all of the movies in the movie database. 

When a movie poster is clicked, a user should be brought to the `/details` view for that movie.
- [] Click Movie poster
- [] Brought to details view/page.

### Details Page

This should show all details **including ALL genres** for the selected movie, including title, description, and the image, too! Use Sagas and Redux to handle these requests and data.
Show all details for the selected movie
- [] Title
- [] Description
- [] Image

- [] Back button that brings the user back to the Home/List page.
> Base functionality does not require the movie details to load correctly after refresh of the browser.
> Hint : You can make a GET request for a specific movie. Remember `req.params` and `:id`?
---

### General Considerations

As one of your last projects, it's possible you will be sharing this with employers, so be sure to follow best practices and make it look good!

- [ ] Invest some time in styling it up!
    - [ ] Research cards for your movie posters on the list page
    - [ ] Research grids for your movie posters on the Movie List page
- [ ] Commit your code frequently! You should have at 15+ commits on a project of this size. Use branches to help break down your features.
- [ ] Comment your code.
- [ ] Update this README to include a description of the project in your own words.

---