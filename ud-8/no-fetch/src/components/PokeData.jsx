export default function PokeData({ id , isLoading}){

    if (isLoading) return 

  
    return (
        <div>
            <h2>PokeData</h2>
            <img src={id} alt="" />
        </div>
    )

}