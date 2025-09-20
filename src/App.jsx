import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Circle } from "rc-progress";
import useSensorData from './sensorData';


function App() {
  const [count, setCount] = useState(0);
  const { data, error } = useSensorData();

  return (
    <div className="min-h-screen bg-[#DDF1FF] font-sans flex flex-col items-center p-4">

                {data.temperature !== null ? `${data.temperature}` : (
                  <div className="inline-flex items-center space-x-2 text-sm text-gray-500">
                    <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      {/* <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle> */}
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                    </svg>
                  </div>
                )}

                {data.light !== null ? `${data.light}` : (
                  <div className="inline-flex items-center space-x-2 text-sm text-gray-500">
                    <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      {/* <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle> */}
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                    </svg>
                  </div>
                )}

                {data.pH !== null ? `${data.pH}` : (
                  <div className="inline-flex items-center space-x-2 text-sm text-gray-500">
                    <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      {/* <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle> */}
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                    </svg>
                  </div>
                )}

          {/* Header */}
          <div className="w-full flex justify-between items-center mt-2">
            <h1 className="text-xl font-bold text-[#086C76]">
              Hey Jenny! <span className="inline-block">👋</span>
              <p className="text-sm font-normal">Let’s guard your fish!</p>
            </h1>
            <img
              src="https://i.pravatar.cc/40"
              alt="profile"
              className="w-10 h-10 rounded-full border"
            />
          </div>
    
          {/* Health Score */}
          <div className="mt-8 flex flex-col items-center">
            <div className="relative">
              <Circle percent={86} strokeWidth={10} trailWidth={10} strokeColor="#07A9BA" trailColor="#C9E8F3" className="w-40 h-40" />
              <span className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-[#086C76]">
                86%
              </span>
            </div>
            <p className="mt-2 text-[#9CA3AF] font-semibold">Health Score</p>
          </div>
    
          {/* Cards */}
          <div className="mt-6 space-y-4 w-full">
            {/* Temperature */}
            <div className="flex items-center justify-between bg-[#DCF5FD] rounded-2xl p-4 shadow">
              <div>
                <h2 className="text-[#086C76] font-bold flex items-center">🌡 Temperature</h2>
                <p className="text-sm text-[#086C76] opacity-70">Keeps track of water warmth, too hot or cold can stress your fish.</p>
              </div>
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#4AC354] text-white font-bold">
                24
              </div>
            </div>
    
            {/* Turbidity */}
            <div className="flex items-center justify-between bg-[#DCF5FD] rounded-2xl p-4 shadow">
              <div>
                <h2 className="text-[#086C76] font-bold flex items-center">💧 Turbidity</h2>
                <p className="text-sm text-[#086C76] opacity-70">Tells you how clear your water is, cloudy water may mean waste or algae.</p>
              </div>
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#D3B53D] text-white font-bold">
                24
              </div>
            </div>

            {/* Dissolved Oxygen */}
            <div className="flex items-center justify-between bg-[#DCF5FD] rounded-2xl p-4 shadow">
              <div>
                <h2 className="text-[#086C76] font-bold flex items-center">💧 Dissolved Oxygen</h2>
                <p className="text-sm text-[#086C76] opacity-70">This tells you if your fish have enough air to breathe.</p>
              </div>
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#D3B53D] text-white font-bold">
                5.0
              </div>
            </div>
    
            {/* pH Levels */}
            <div className="flex items-center justify-between bg-[#DCF5FD] rounded-2xl p-4 shadow">
              <div>
                <h2 className="text-[#086C76] font-bold flex items-center">🧪 pH Levels</h2>
                <p className="text-sm text-[#086C76] opacity-70">Monitors water acidity to keep your fish safe.</p>
              </div>
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#C34A4A] text-white font-bold">
                6.0
              </div>
            </div>
          </div>
    
          {/* Bottom Navigation */}
          <div className="fixed bottom-4 bg-white rounded-2xl shadow-md w-[90%] max-w-md flex justify-around py-3">
            <button className="flex flex-col items-center text-[#086C76]">
              {/* <Home className="w-6 h-6" /> */}
              <span className="text-sm">Home</span>
            </button>
            <button className="flex flex-col items-center text-[#086C76]">
              {/* <Trends className="w-6 h-6" /> */}
              <span className="text-sm">Trends</span>
            </button>
            <button className="flex flex-col items-center text-[#086C76]">
              {/* <Settings className="w-6 h-6" /> */}
              <span className="text-sm">Settings</span>
            </button>
          </div>
        </div>
  )
}

export default App
