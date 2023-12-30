import Profile from "./Profile";

export default function Gallery({ Array }) {
  return (
    <section>
      <h1>Amazing Scientists</h1>
      {Array.map((name, i) => {
        return <Profile name={Array[i].name} index={i + 1} key={i + 1} gender={Array[i].gender} image={Array[i].image}/>;
      })}
    </section>
  );
}
