# Technoblog


  ## Table of Contents

  * [Acceptance Criteria](#acceptance-criteria)
  * [Installation](#installation)
  * [Links](#links)  
  * [Usage](#usage)
  * [Technologies](#technologies)
  * [API](#api)
  * [Repo Data](#repo)
  

## Acceptance Criteria

GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments


## Installation
To install the necessary dependencies, run the following command:

```
npm i
```

in the package.json file for the root folder, the client folder, and the server folder.

### Running the application

Use the command npm run watch in the server folder and npm start in the client folder!


## Links
![Landing Page](./Develop/client/public/images/BookSearchStart.jpg)
![Book Search Page](./Develop/client/public/images/BookSearchLogin.jpg)
![Saved Books Page](./Develop/client/public/images/BookSearchSavedBooks.jpg)
	[Deployed Application](https://renbryant.github.io/MooPlayer/)


## Usage
In this app the user is able to sing up and log in to their own specific credentials. Their password is hashed using bcrypt and JWT, so no need to worry about security. Then the user is able to search for whatever book they want using our search bar that grabs information from the API. The user is able to save books that they like to their profile, and then also delete them when they view their profile. And of course the user is also able to log out of their account, and then log back in whenever they want.


## Technologies
The front end of this application:

```
react
apollo client
jwt-decode
graphql
bootstrap
```

The back end of this application:

```
mongoose
express
bcrypt
apollo-server-express
jwt
nodemon
graphql
```


## API
This project uses the Google Books API search engine built with a RESTful API, and refactors it to be a GraphQL API built with an Apollo Server.
[Link to Google Books API website](https://developers.google.com/books)


## Repo Data
This repo was contributed by RenBryant. I am a computer science student, a full-time worker, and a coding enthusiast! I love learning new things about computers and how they work and enjoy working on projects. Here is my GitHub Profile! [RenBryant](https://github.com/RenBryant). Thank you for checking out this project!