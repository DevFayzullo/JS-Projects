const teamName = document.getElementById("team");
const typeOfSport = document.getElementById("sport");
const worldCupYear = document.getElementById("year");
const headCoach = document.getElementById("head-coach");
const playerCards = document.getElementById("player-cards");
const playersDropdownList = document.getElementById("players");

const myFavoriteFootballTeam = {
  team: "Germany National Football Team",
  sport: "Football",
  year: 2014,
  isWorldCupWinner: true,
  headCoach: {
    coachName: "Joachim Löw",
    matches: 7,
  },
  players: [
    {
      name: "Manuel Neuer",
      position: "goalkeeper",
      number: 1,
      isCaptain: false,
      nickname: "Sweeper Keeper",
    },
    {
      name: "Philipp Lahm",
      position: "defender",
      number: 16,
      isCaptain: true,
      nickname: "Magic Dwarf",
    },
    {
      name: "Mats Hummels",
      position: "defender",
      number: 5,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Jerome Boateng",
      position: "defender",
      number: 20,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Benedikt Höwedes",
      position: "defender",
      number: 4,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Bastian Schweinsteiger",
      position: "midfielder",
      number: 7,
      isCaptain: false,
      nickname: "Schweini",
    },
    {
      name: "Toni Kroos",
      position: "midfielder",
      number: 18,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Mesut Özil",
      position: "midfielder",
      number: 8,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Thomas Müller",
      position: "forward",
      number: 13,
      isCaptain: false,
      nickname: "Raumdeuter",
    },
    {
      name: "Miroslav Klose",
      position: "forward",
      number: 11,
      isCaptain: false,
      nickname: "Goal Machine",
    },
    {
      name: "Mario Götze",
      position: "forward",
      number: 19,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Andre Schürrle",
      position: "forward",
      number: 9,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Christoph Kramer",
      position: "midfielder",
      number: 23,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Shkodran Mustafi",
      position: "defender",
      number: 2,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Per Mertesacker",
      position: "defender",
      number: 17,
      isCaptain: false,
      nickname: "The Big Friendly Giant",
    },
    {
      name: "Lukas Podolski",
      position: "forward",
      number: 10,
      isCaptain: false,
      nickname: "Poldi",
    },
  ],
};

Object.freeze(myFavoriteFootballTeam);

const { sport, team, year, players } = myFavoriteFootballTeam;
const { coachName } = myFavoriteFootballTeam.headCoach;

typeOfSport.textContent = sport;
teamName.textContent = team;
worldCupYear.textContent = year;
headCoach.textContent = coachName;

const setPlayerCards = (arr = players) => {
  playerCards.innerHTML = arr
    .map(({ name, position, number, isCaptain, nickname }) => {
      return `
      <div class="player-card">
        <h2>${isCaptain ? "(Captain) " : ""}${name}</h2>
        <p>Position: ${position}</p>
        <p>Number: ${number}</p>
        <p>Nickname: ${nickname !== null ? nickname : "N/A"}</p>
      </div>
    `;
    })
    .join("");
};

setPlayerCards(); // display all initially

playersDropdownList.addEventListener("change", (e) => {
  const selected = e.target.value;
  if (selected === "all") {
    setPlayerCards();
  } else if (selected === "nickname") {
    setPlayerCards(players.filter((player) => player.nickname !== null));
  } else {
    setPlayerCards(players.filter((player) => player.position === selected));
  }
});
s;
