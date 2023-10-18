# NEWSAPP

The content has been updated in the master branch 

The app has been made using nodejs express and react js

client and server-side has been bifurcated for modularisation
and have their respective docker files 


I have implemented:

1. Search
2. sports/politics/.. etc button for API calls
3. a subscribe bar to store the email IDs of users which would be further used to send newsletters (haven't completed the sending part)
4. Not much work has been done on the design part (will be updated eventually)

Dockerization has been done 
link: https://newtanixx.azurewebsites.net/ (tho still not working =<)
YouTube link: https://youtu.be/_9AfayzyhXU?si=4Qs3EF9VgznhosFA

# NOTE
1. deployment wasn't successful
2. Video playback isn't available due to the source API not having one.
3. CSS has not been worked upon
4. I fetched NEWS API to get the latest news

# Using Docker

For testing the application run (make sure to have .env setup)

docker-compose up --build
The news app is available at localhost:3000
