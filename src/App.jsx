import Gallery from "./components/Gallery";

const Scientists = [
  { name: "Taylor M.F.", gender: "m", image: "https://habrastorage.org/r/w780/files/c5f/ecf/619/c5fecf619e034ba8935513d6f131a5c4.jpg" },
  { name: "Koshi G.F", gender: "f", image:"https://twizz.ru/wp-content/uploads/2023/06/1687159381_8c7dd922ad47494fc02c388e12c00eac.jpg" },
  { name: "Usachev S.V.", gender: "m", image:"https://sun9-56.userapi.com/impf/c624917/v624917673/43343/LRGjA3-hCkI.jpg?size=1333x750&quality=96&sign=aed1bf348e6b874cd8d20427e85c6672&type=album" },
];

export default function App() {
  return <Gallery Array={Scientists} />;
}
