
export default function PlayerRow({player, value}) {

  return (
    <>
      <div> {player+1} <input type="range" value={value} min="0" max="5" readOnly/></div>
    </>
  )
}
