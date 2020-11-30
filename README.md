# interview-setup
This repository provides bootstrap project which includes interview questions

`backend` folder includes the server bootstrapper that needs implementation as well as backend question

`frontend` folder simply includes a frontend react app that needs implementation

## Interview Questions

### Write a nodejs express endpoint to fetch a given weather conditions.

You should use: https://developer.accuweather.com/

First register to the system using the URL above
Create an app and get an API key
Use that API key to get weather information
It should work on your localhost 4000 port.

`Write a nodejs express endpoint to fetch next 5 days of weather temperature forecast.`

Sample Response:

takes location_key_id as input
GET /forecast
{
   forecasts:[{date:2020-11-24T07:00:00+00:00", low: 35, high: 46}, {...}, ..]
}
You can use: https://developer.accuweather.com/
You need to register & create API key first.
And you can use that API key to get weather information
It should work on your localhost 4000 port.

It is enough to use 3 locations:
London: 328328, Berlin: 178087, Ankara: 316938

### Create dev and prod environments - using different API keys

- Explain the reason as to why Express ‘app’ and ‘server’ must be kept separate.

### Create a frontend application which has the following:

  - A single dropdown menu which has the 3 locations above
  - When selected fetch information regarding the next five days and simply put them on a day-temperature table

### How should the tests would be structured for such an application?
