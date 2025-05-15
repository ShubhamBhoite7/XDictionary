export default function Definition({ definition }) {
  if (!definition) return null;

  return (
    <div>
      {definition === "Word not found in the dictionary." ? (
        <p>{definition}</p>
      ) : (
        <>
          <h3>Definition:</h3>
          <p>{definition}</p>
        </>
      )}
    </div>
  );
}
