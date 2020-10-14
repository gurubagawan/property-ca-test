# Welcome to the Property.ca React Test!

In order to get up and running install the libraries and start the application:

```
  npm install
  npm start
```

It will be running at `localhost:3008`,
(preferably use _Chrome_)

Take a look around.

There are 2 tabs:
* The default `Listings` tab
* The `Favourites` tab


Everything is populated with mock data from the `reducers` folder

_For each of the following tasks, provide a brief description of your work and
any technical decisions you made_


#### 1, You will be re-styling the Listing Item

1. At the moment, the Listing Item is hard coded within the Listings container. Pull the rendering logic of the Listing Item out of Listings container and put it in its own component.

2. Please head over to property.ca home page. The goal is to make the Listing Item to look as close as the Listing cards on website. **Only use the fields available in mock data. For example you do NOT need to add extra fields or functionalities such as maintenance fees, image sliders, days on market, etc.**

3. Currently, on the top bar it is not obvious for a user that which tab (Listings/Favourites) is active. Make it obvious by changing the tab colors when they are active.

4. At the moment listing are shown in the same order as mock data. Sort Listings based on their price. (ascending)

**BONUS**: create a drop down input that user can sort listings based on their price. (ascending/descending)



#### 2. Your goal is to add favourited listings to the Favourite tab

1. At the moment, user can not select listings as favourite listings. Add reducer cases and actions such that a click on a listing, will toggle that listing as favourite listing. (on/off)
   _Use your creativity to highlight the listings when they are favourited. HINT: there is a star.png image in the images folder_

2. Store favourited listings in Redux state and display those listings on the Favourites page.


If you have any questions or need help, please reach it to hirad@condos.ca

_Thank you & Goodluck_ :)
