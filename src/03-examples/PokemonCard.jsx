import { useLayoutEffect, useRef, useState } from "react"


export const PokemonCard = ({ id, name, sprites = [] }) => {

  const h2Ref = useRef();
  const [boxSize, setBoxSize] = useState({ width:0, height: 0 });

  useLayoutEffect(() => {
    const { height, width } = h2Ref.current.getBoundingClientRect();
    setBoxSize({ height, width });
    
  }, [name])

  return (
    <section
        style={{ height: 200, display: 'flex', flexDirection: 'row' }}
        >
           <h2 className="text-capitalize" ref={ h2Ref }>#{ id } - { name }</h2> 
           {
                sprites.map( sprite => <img key={ sprite } src={ sprite } alt="" />)
           }
           <div>
            { JSON.stringify(boxSize) }
           </div>
        </section>
  )
}
