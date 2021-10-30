let initialStats = {
  Intelligence: 0,
  Strength: 0,
  Speed: 0,
  Durability: 0,
  Power: 0,
  Combat: 0,
};

/*The following "dummyStats" object is necessary to avoid problems while rendering the hero details modal.
Initially, the Home component initialized the 'showDetails' state with 'null' to not render the HeroDetail but once the DetailButton was clicked (sending the selected hero and updating the 'showDetails' state). This made that, in every hero card, DetailsButton always throw error at the first click (because the hero detail modal do not exists). After that, works fine, because the 'showDetails' is updated at that same click.
*/
const dummyStats = {
  name: "No name",
  biography: {
    "full-name": "No full name",
    aliases: ["No alias"],
  },
  appearance: {
    height: 0,
    weight: 0,
    "eye-color": "empty",
    "hair-color": "nonexistent",
  },
  work: {
    base: "ethereal",
  },
};

export { initialStats, dummyStats };
