import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const[length,setLength]=useState(8)
  const[numberAllowed,setnumberAllowed]=useState(false)
  const[charAllowed,setcharAllowed]=useState(false)
  const[password,setPassword]=useState("")
  
  const passwordRef = useRef(null)
  
  const generatePassword = useCallback(() => {
    let pass = '';
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str += "0123456789";
    if(charAllowed) str += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    
    for(let i = 1; i <= length; i++){
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword])

  useEffect(() => {
    generatePassword()
  }, [generatePassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 999)
    window.navigator.clipboard.writeText(password)
  }, [password])

  const getPasswordStrength = useCallback(() => {
    let score = 0
    if (length >= 8) score += 1
    if (length >= 12) score += 1
    if (numberAllowed) score += 1
    if (charAllowed) score += 1
    if (length >= 16) score += 1
    
    if (score <= 2) return { level: 'Weak', color: 'from-red-500 to-red-600', width: '33%' }
    if (score <= 3) return { level: 'Medium', color: 'from-yellow-500 to-orange-500', width: '66%' }
    return { level: 'Strong', color: 'from-green-500 to-green-600', width: '100%' }
  }, [length, numberAllowed, charAllowed])

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4'>
      <div className='w-full max-w-lg mx-auto bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20'>
        <div className='text-center mb-8'>
          <h1 className='text-3xl font-bold text-white mb-2'>🔐 Password Generator</h1>
          <p className='text-gray-300 text-sm'>Create secure passwords instantly</p>
        </div>
        
        <div className="relative mb-6">
          <input
            type="text"
            value={password}
            className="w-full py-4 px-4 pr-20 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all font-mono text-lg"
            placeholder="Generated password will appear here"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className='absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95 font-medium'
          >
            📋 Copy
          </button>
        </div>
        
        <div className="bg-white/5 rounded-xl p-4 border border-white/10 mb-6">
          <div className='flex items-center justify-between mb-2'>
            <span className='text-white text-sm font-medium'>Password Strength</span>
            <span className={`text-sm font-bold ${getPasswordStrength().level === 'Strong' ? 'text-green-400' : getPasswordStrength().level === 'Medium' ? 'text-yellow-400' : 'text-red-400'}`}>
              {getPasswordStrength().level}
            </span>
          </div>
          <div className='w-full bg-white/10 rounded-full h-2'>
            <div 
              className={`h-2 rounded-full bg-gradient-to-r ${getPasswordStrength().color} transition-all duration-500`}
              style={{ width: getPasswordStrength().width }}
            ></div>
          </div>
        </div>
        
        <div className='space-y-6'>
          <div className='bg-white/5 rounded-xl p-4 border border-white/10'>
            <div className='flex items-center justify-between mb-3'>
              <label className='text-white font-medium'>Password Length</label>
              <span className='bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold'>{length}</span>
            </div>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className='w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer slider'
              onChange={(e) => {setLength(e.target.value)}}
            />
            <div className='flex justify-between text-xs text-gray-400 mt-1'>
              <span>6</span>
              <span>100</span>
            </div>
          </div>
          
          <div className='grid grid-cols-2 gap-4'>
            <label className="flex items-center space-x-3 bg-white/5 rounded-xl p-4 border border-white/10 cursor-pointer hover:bg-white/10 transition-all">
              <input
                type="checkbox"
                checked={numberAllowed}
                onChange={() => setnumberAllowed((prev) => !prev)}
                className="w-5 h-5 text-purple-600 bg-transparent border-2 border-white/30 rounded focus:ring-purple-500 focus:ring-2"
              />
              <div>
                <div className='text-white font-medium'>Numbers</div>
                <div className='text-gray-400 text-xs'>0-9</div>
              </div>
            </label>
            
            <label className="flex items-center space-x-3 bg-white/5 rounded-xl p-4 border border-white/10 cursor-pointer hover:bg-white/10 transition-all">
              <input
                type="checkbox"
                checked={charAllowed}
                onChange={() => setcharAllowed((prev) => !prev)}
                className="w-5 h-5 text-purple-600 bg-transparent border-2 border-white/30 rounded focus:ring-purple-500 focus:ring-2"
              />
              <div>
                <div className='text-white font-medium'>Symbols</div>
                <div className='text-gray-400 text-xs'>!@#$%</div>
              </div>
            </label>
          </div>
          
          <button
            onClick={generatePassword}
            className='w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg'
          >
            🎲 Generate New Password
          </button>
        </div>
      </div>
    </div>
  )
}

export default App