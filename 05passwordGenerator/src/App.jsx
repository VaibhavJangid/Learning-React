import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
   let pass = ''
   let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
   if (numberAllowed) str += "0123456789" // append
   if (characterAllowed) str += "!@#$%^&*()-_+=[]{}~`" // append
   
   for (let index = 1; index <= length; index++) {
    let char = Math.floor(Math.random() * str.length + 1)

    pass += str.charAt(char) // taking out letter from string using 'charAt' method
   }

   setPassword(pass)
   
  }, [length, numberAllowed, characterAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0, 100)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, characterAllowed, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-3 text-orange-400 bg-gray-700'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input 
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly
          ref={passwordRef}
          />

          <button
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
            Copy
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={8}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>
          
          <div className='flex items-center gap-x-1'>
            <input 
             type="checkbox"
             defaultChecked={numberAllowed}
             id='numberInput'
             onChange={() => {
               setNumberAllowed((prev) => !prev) // using callback not to use previous value
             }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          
          <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox"
              defaultChecked={characterAllowed}
              id="characterInput" 
              onChange={() => {
                setCharacterAllowed((prev) => !prev) // using callback not to use previous value
              }}  
            />
            <label htmlFor="characterInput">Character</label>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default App
