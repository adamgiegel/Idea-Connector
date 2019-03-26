#IDEA CONNECTOR

This React web app was designed to connect people who have creative advertising ideas with companies who need an idea.

Contents
Libraries & Middleware
Installation
Structure
Components
User Accounts
Future Development

Libraries & Middleware
Idea Connector was built using create-react-app and comes with the dependencies therein. React is used for state management, and the file structure is arranged accordingly; see below. React handles essential component transitions, including displaying the carousel, search, and log-in panels. Materialize manages the display. React Router handles component rendering and navigation. Carousel library was used on the homepage and company page.

Installation
To get started with Idea Connector, fork this repository and clone it to your hard drive. CD into the folder and run npm install and npm install react-responsive-carousel --save. Once the dependencies have been installed, you can run npm start to get your app running. The locally-hosted version of the app will receive information from a Ruby on Rails backend. For more information about how the back-end is structured, visit the repository. 

Structure
The top-level folder of Idea Connector includes a public folder, which holds the index.html file where the app is officially rendered by React, a src folder which holds the application itself, and then a few other files: the .gitignore, README, and package.json.

The src folder includes one main folder: components, which organizes the bulk of the app's logic.  index.js handles how the app is mounted into the index.html file in the top-level folder.

Components
Idea Connector is composed of six main components:

App
The app component houses the Homepage. All other components will be rendered within this component. The corresponding .css file in the app folder rules all styling within the app.

Homepage
This component is the main componenent of state and fetches data from the backend. It renders the 4 main components of the app.  Those components being Navbar, Login, CompanyPage, and UserPage. React Router is in this component.

Navbar
The Navbar component is responsible for the main navigation/component rendering within the app. This component holds the currentUser name and login information which is shown on the Navbar.  The component features a logout button which allows the user to log out and be redirected back to the login page.

Login 
The Login component holds a Post request for a signup form.  It also passes data up to the homepage so that user information can be fetched from the backend.  This component also renders the Carousel sub-component.

CompanyPage
The CompanyPage is the main component after a company logs in.  It hold multiple sub-components.  EditCompanyForm which allows a company to edit information.  Carousel allows the company to see all ideas.  SearchForm allows the company to search through ideas. SearchIdeas allows a company to make an offer on an idea and like the idea.  This component also renders ButtonExampleLabeled.  IdeaList shows all the ideas in a list format.

UserPage
The UserPage is the main component after a user logs in.  It holds multiple sub-components. NewIdea gives the user the ability to input a new idea.  It renders a UserForm component which sends a POST request is sent to the backend with the form filled information and added to the database.  SeeIdeas pulls all the ideas for that particular user from the backend and displays them.  They are clickable and the full idea shows up along with an offer made and the ability to accept or refuse the offer.  

Future Development
Some ideas for features to add in the future:
I would like a company to be able to chat with a user via websockets.  Also, users can chat with each other.
I would like to implement an email feature so that companies can send emails to users through the site.
I would like to implement Auth for the login page.

Built With
React,
Carousel Library,
Materialize,
Ruby on Rails

Link to Demo...https://youtu.be/0F3H-KJTDOU
