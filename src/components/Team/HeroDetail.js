const HeroDetail = ({hero}) => {
  return (<div>
    <p>Full Name: {hero.biography["full-name"]}</p>
    <p>Alias:{hero.biography.aliases.join(' - ')} </p>
    <div>
      <p>Height: {hero.appearance.height[1]}</p>  
      <p>Weight: {hero.appearance.weight[1]}</p>
    </div>
    <div>
      <p>Eye color: {hero.appearance["eye-color"]}</p>  
      <p>Hair color: {hero.appearance["hair-color"]}</p>
    </div>
    <p>Workplace: {hero.work.base}</p>
  </div>)
}

export default HeroDetail