# Pathways
Pathways is a bike share application that provides visitors with information about nearby bike stations. Users can sign up, search for a station, and leave or read comments about any station. 

http://path-ways.herokuapp.com/

## Technologies / APIs

<ul>
  <li>
    Ruby 2.6.5
  </li>
  <li>
    Rails 5.2.3
  </li>
  <li>
    React 16.8.0
  </li>
  <li>
    Devise
  </li>
   <li>
    Google-maps-react 2.0.2
  </li>
  <li>
    Faraday 0.9.2
  </li>
  <li>
    Geocoder - 1.5
  </li>
  <li>
    Blue Bikes System Data - https://www.bluebikes.com/system-data
  </li>
    
</ul>

## Run Locally

Git Clone the repo and run both commands in your terminal: 

```
bundle install
yarn install
```

After that create your database by: 

```
bundle exec rake db:create
bundle exec rake db:migrate
```

Once that is finished start running the servers!

```
rails s
yarn start
```

## Future Features

<ul>
  <li>
    Ability for users to favorite stations.
  </li>
  <li>
    Upvote/Downvote comments.
  </li>
 <li>
    Users to add pictures.
  </li>
</ul>

