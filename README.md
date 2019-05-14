# **Stocks-Live**

This app shows real time stock market data in the form of table.
The app subscribes for updates via WebSockets (server url: ws://stocks.mnet.website).

This project was bootstrapped with `create-react-app` and deployed live at: http://stockslive.herokuapp.com/ .


# Running the application locally

**Prerequisites:** You need to have Node + NPM installed.

**Clone the repo:**

    git clone https://github.com/raiswathi5/stocks-live.git

**Install dependencies:**

    npm install

**Starting the application in development mode:**

    npm start


# Building the application:

To build the production assets, run

    npm run build


# Features In Current Version:
  - A table showing data for all the stocks.
  - Each row shows:
    - The latest stock price. (With background color relative to the previous stock value).
    - Last updated time for each stock.
  - Reset history of all stocks with the click of a button.
  - Connection errors are handled properly.
  - Shows the status: Online or Offline according to the market status.


# Future Implementation:
Some of the things that can be implemented in the future version are:
  - Market Trend arrow indicating how stock values behaved.
  - Graphs can show historical values w.r.t. time for any stocks selected.
  - Zoom reset for graph.
  - Ability to select any stocks, to be shown in the Graph.
