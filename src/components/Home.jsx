import React, {useState} from 'react'
import Mornhiem from '../assets/Mornhiem.png'
import Diamond from '../assets/Diamond.png'
import Emerald from '../assets/Emerald.png'
import Jade from '../assets/Jade.png'
import Ruby from '../assets/Ruby.png'
import Sapphire from '../assets/Sapphire.png'
import Topaz from '../assets/Topaz.png'
import Inventory from './Inventory'
import Gameplay from './Gameplay'
import Controls from './Controls'

const Home = () => {

  const rooms = {
    "Grand Entrance": {"South": "Marketplace"},
    "Marketplace": {"North": "Grand Entrance", "West": "Prison Chambers", "East": "Eastern Mines", "Item": "Diamond"},
    "Prison Chambers": {"South": "Western Mines", "East": "Marketplace", "Item": "Ruby"},
    "Eastern Mines": {"West": "Marketplace", "South": "Forge", "Item": "Emerald"},
    "Western Mines": {"North": "Prison Chambers", "East": "Barracks", "Item": "Sapphire"},
    "Barracks": {"West": "Western Mines", "East": "Forge", "South": "Throne Room", "Item": "Jade"},
    "Forge": {"West": "Barracks", "North": "Eastern Mines", "Item": "Topaz"},
    "Throne Room": {"North": "Barracks", "Item": "Talazar"}
  }

  const itemImages = {
    Diamond,
    Emerald,
    Jade,
    Ruby,
    Sapphire,
    Topaz
  }
  const [endGame, setEndGame] = useState(false);
  const [currRoom, setCurrRoom] = useState('Grand Entrance');
  const [inventory, setInventory] = useState([]);
  const [log, setLog] = useState([
    "Talazar, the orc king indirectly declared war on the dwarven nation of Mornhiem by abducting the dwarven queen.",
    "For years, Talazar and his army were kept at bay due to the Sword of Mornhiem and its many gemstones of power.",
    "An orc spy somehow managed to sneak in and remove one of the gemstones while the queen slept, allowing Talazar to once again enter the mines of Mornhiem.",
    "When he took your queen, Talazar stripped the Sword of Mornhiem of its gemstones and tasked his minions with hiding them.",
    "The gemstones are what made the sword what it is. Search the caverns to collect each gemstone and unite them with your own sword to create a new Sword of Mornhiem.",
    "Remember, if you are missing even one gemstone when you approach Talazar, you will not be powerful enough to stop him.",
    "Step with caution, handle with care, then face Talazar if you dare.",
    "You are in the Grand Entrance"
  ])

  
  
  const roomGuide = (currRoom) => {
    if (rooms[currRoom].Item && !inventory.includes(rooms[currRoom].Item)) {
      addLog(`You see a ${rooms[currRoom].Item} in the room!`)
    }
  }

  const addLog = (text) => setLog((prev) => [...prev, text]);

  const move = (direction) => {
    const newRoom = rooms[currRoom][direction];

    if (newRoom === "Throne Room") {
      setCurrRoom(newRoom);
      checkEndGame();
      setEndGame(true);
    }
    else if (newRoom) {
      setCurrRoom(newRoom);
      addLog(`You move ${direction} to the ${newRoom}`)
      roomGuide(newRoom);
    } else {
      addLog(`You can't go that way!`)
    }
  }

  const collectItem = () => {
    if (rooms[currRoom] && !inventory.includes(rooms[currRoom].Item)) {
      setInventory((prev) => [...prev, rooms[currRoom].Item]);
      addLog(`You collected the ${rooms[currRoom].Item}!`);
    } else {
      addLog(`There's nothing to collect here.`)
    }
  };

  const checkEndGame = () => {
    if (inventory.length === 6) {
      addLog('The last gem clicks into its place, and the sword beings to glow!')
      addLog(`You've done it! The Sword of Mornhiem is complete once more!`)
      addLog(`You slowly open the doors to the Throne Room, accompanied by a long ear piercing 'CREEEEEEEEEK' sound.`)
      addLog('With The Sword of Mornhiem in hand, you charge into the room and quickly overpower Talazar.')
      addLog('Talazar is once again forced out of the Kingdom of Mornhiem, and your queen is safe. Congratulations!')
    } else {
      addLog(`You haven't found all the gemstones yet, but hopefully what you have collected will be enough to defeat Talazer.`)
      addLog(`You slowly open the doors to the Throne Room, accompanied by a long ear piercing 'CREEEEEEEEEK' sound.`)
      addLog('You charge the room sword in hand, but you are quickly overpowered by Talazar.')
      addLog('Without The Sword of Mornhiem, your kingdom is truly lost.')
    }
  }
  


  return (
    <div style={{backgroundImage: `url(${Mornhiem})`}} className='w-full h-screen bg-cover bg-center'>
        
        {/* Gameplay Container */}
        <div className='max-w-[1500px] mx-auto px-8 flex flex-col md:flex-row justify-center items-center h-full'>
          <div className='md:col-span-12 grid grid-rows-[25%_1fr] grid-cols-3 justify-center h-[75%] w-full bg-[rgba(107,114,128,0.72)] border-2 border-amber-400'>


            {/* Top box - Inventory Display */}
            <Inventory inventory={inventory} itemImages={itemImages}/>


            {/* Bottom left box - Gameplay */}
            <Gameplay log={log}/>


            {/* Bottom right box - Controls & Actions */}
            <Controls move={move} collectItem={collectItem} endGame={endGame} />

            
          </div>
        </div>
        
    </div>
  )
}

export default Home
