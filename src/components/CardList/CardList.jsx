import React from 'react'
import Card from '../Card/Card'


// Here we define our query as a multi-line string
// Storing it in a separate .graphql/.gql file is also possible
var query = `
query ($id: Int, $season: MediaSeason, $seasonYear:Int $page: Int, $perPage: Int, $search: String) {
  Page (page: $page, perPage: $perPage) {
    pageInfo {
      total
      currentPage
      lastPage
      hasNextPage
      perPage
    }
    media (id: $id, season:$season, seasonYear: $seasonYear, search: $search) {
      id
      season
      seasonYear
      coverImage{
        extraLarge
        large
        medium
        color
      }
      title {
        romaji
        english
      }
    }
  }
}
`;

var variables = {
    // search: "Fate/Zero",
    page: 1,
    perPage: 40,
    seasonYear:2023,
    season: 'SPRING'
};

// Define the config we'll need for our Api request
var url = 'https://graphql.anilist.co',
    options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            query: query,
            variables: variables
        })
    };

// Make the HTTP Api request
fetch(url, options).then(handleResponse)
                   .then(handleData)
                   .catch(handleError);

function handleResponse(response) {
    return response.json().then(function (json) {
        return response.ok ? json : Promise.reject(json);
    });
}

function handleData(data) {
    console.log(data);
}

function handleError(error) {
    alert('Error, check console');
    console.error(error);
}

function CardList() {
  return (
    <>
      <Card/>
    <img src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx199-ehguwq1mPvtN.jpg"/>
    </>
  )
}

export default CardList
