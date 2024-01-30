import { setGender } from "../functions/setGender";
export default function Profile({ index, name, gender, image }) {
  return (
    <>
      <h2>Scientist number {index}</h2>
      <img className="profilePic" src={image} alt="Katherine Johnson" />
      <h2 className={setGender(gender)}>{name}</h2>
    </>
  );
}
