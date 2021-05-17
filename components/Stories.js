import StoryCard from '../components/StoryCard';


const stories = [
  {
    name: "Aryan Bhardwaj",
    src: "http://links.papareact.com/zof",
    profile: "http://links.papareact.com/l4v",
  },

  {
    name: "Elon Musk",
    src: "http://links.papareact.com/4zn",
    profile: "http://links.papareact.com/kxk",
  },

  {
    name: "Jeff Bezos",
    src: "http://links.papareact.com/k2j",
    profile: "http://links.papareact.com/f0p",
  },

  {
    name: "Mark Zuckerberg",
    src: "http://links.papareact.com/xql",
    profile: "http://links.papareact.com/snf",
  },

  {
    name: "Bill Gates",
    src: "http://links.papareact.com/4u4",
    profile: "http://links.papareact.com/zvy",
  },
];

function Stories() {
  return(
  <div className="flex justify center space-x-3 mx-auto">
    {stories.map((story) => (
      <StoryCard
        key={story.src}
        name={story.name}
        src={story.src}
        profile={story.profile}
      />
    ))}
  </div>
  );
}

export default Stories;


