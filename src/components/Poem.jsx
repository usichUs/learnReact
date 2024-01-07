const poem = {
  lines: [
    "I write, erase, rewrite",
    "Erase again, and then",
    "A poppy blooms.",
  ],
};

export default function Poem() {
  const len = poem.lines.length;
  return (
    <article>
      {poem.lines.map((line, index) => (
        <>
          <p key={index}>{line}</p>
          {index != len - 1 && <hr />}
        </>
      ))}
    </article>
  );
}
