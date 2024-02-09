function Profile({scientist, size=100}) {
  return (
    <section className="profile">
      <h2>{scientist.name}</h2>
      <img
      className="avatar"
      src={'https://i.imgur.com/' + scientist.imageId + 's.jpg'}
      alt={scientist.name}
      width={size}
      height={size}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {scientist.profession}
        </li>
        <li>
          <b>Awards: {scientist.awardCount} </b>
          {scientist.discoveries}
        </li>
      </ul>
    </section>
  )
}



export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
      scientist={{name: 'Maria Skłodowska-Curie', imageId: 'szV5sdG', profession: 'physicist and chemist', awardCount: '4\nNobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal', discoveries: 'polonium (element)'}}
      size={70}/>
      <Profile
      scientist={{name: 'Katsuko Saruhashi', imageId: 'YfeOqp2', profession: 'geochemist', awardCount: '2\nMiyake Prize for geochemistry, Tanaka Prize', discoveries: 'a method for measuring carbon dioxide in seawater'}}
      size={70}/>
    </div>
      
  );
}
