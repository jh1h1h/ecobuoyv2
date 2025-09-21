import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Circle } from "rc-progress";
import useSensorData from './sensorData';
import { Home2, Chart, Settings } from '@solar-icons/react';

function getTempColor(type, value) {
  if (value >= 19 && value <= 20) return "bg-green-500"; // optimal
  if (value >= 18 && value <= 21) return "bg-yellow-500"; // warning
  return "bg-red-500"; // out of safe range
}

function getTurbColor(type, value) {
  if (value >= 19 && value <= 20) return "bg-green-500"; // optimal
  if (value >= 18 && value <= 21) return "bg-yellow-500"; // warning
  return "bg-red-500"; // out of safe range
}

function getPHColor(type, value) {
  return value < 7 ? "bg-red-500" : "bg-green-500";
}

function getOxyColor(type, value) {
  if (value >= 19 && value <= 20) return "bg-green-500"; // optimal
  if (value >= 18 && value <= 21) return "bg-yellow-500"; // warning
  return "bg-red-500"; // out of safe range
}

function App() {
  const [count, setCount] = useState(0);
  // const { data, error } = useSensorData();
  const data = {temperature: 22, light: 21, pH: 7, oxygen: 10} // test data

  return (
    <div className="min-h-screen bg-[#DDF1FF] font-mont flex flex-col items-center p-4">

          {/* Header */}
          <div className="w-full flex justify-between items-center mt-2">
            <div className="text-lg text-left font-bold text-[#086C76]">
              Hey Jenny! <span className="inline-block">👋</span>
              <p className="text-xs font-normal">Let’s guard your fish!</p>
            </div>
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
          <div className="text-left mt-6 space-y-4 w-full">
            {/* Temperature */}
            <div className="flex items-center justify-between bg-[#DCF5FD] rounded-2xl p-4 shadow">
              <div className="flex items-start space-x-3">
                <div className="flex items-center justify-center min-w-10 h-10 rounded-full bg-[#086C76] text-white text-sm">🌡</div>
                <div>
                  <h2 className="text-[#086C76] font-bold">Temperature</h2>
                  <p className="text-xs text-[#086C76] opacity-70 leading-snug">
                    Keeps track of water warmth, too hot or cold can stress your fish.
                  </p>
                </div>
              </div>
              <div className={`flex items-center justify-center min-w-14 h-14 rounded-full bg-[#4AC354] text-white font-bold ${data.temperature !== null ? getTempColor("temperature", data.temperature) : "bg-gray-400"}`}>
                {data.temperature !== null ? `${data.temperature}` : (
                  <div className="inline-flex items-center space-x-2 text-sm text-gray-500">
                    <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      {/* <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle> */}
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                    </svg>
                  </div>
                )}
              </div>
            </div>
    
            {/* Turbidity */}
            <div className="flex items-center justify-between bg-[#DCF5FD] rounded-2xl p-4 shadow">
              <div className="flex items-start space-x-3">
                <div className="flex items-center justify-center min-w-10 h-10 rounded-full bg-[#086C76] text-white text-sm">💧</div>
                <div>
                  <h2 className="text-[#086C76] font-bold">Turbidity</h2>
                  <p className="text-xs text-[#086C76] opacity-70 leading-snug">
                    Tells you how clear your water is, cloudy water may mean waste or algae.
                  </p>
                </div>
              </div>
              <div className={`flex items-center justify-center min-w-14 h-14 rounded-full bg-[#4AC354] text-white font-bold ${data.light !== null ? getTurbColor("turbidity", data.light) : "bg-gray-400"}`}>
                {data.light !== null ? `${data.light}` : (
                  <div className="inline-flex items-center space-x-2 text-sm text-gray-500">
                    <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      {/* <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle> */}
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                    </svg>
                  </div>
                )}
              </div>
            </div>

            {/* pH Levels */}
            <div className="flex items-center justify-between bg-[#DCF5FD] rounded-2xl p-4 shadow">
              <div className="flex items-start space-x-3">
                <div className="flex items-center justify-center min-w-10 h-10 rounded-full bg-[#086C76] text-white text-sm">🧪</div>
                <div>
                  <h2 className="text-[#086C76] font-bold">pH Levels</h2>
                  <p className="text-xs text-[#086C76] opacity-70 leading-snug">
                    Monitors water acidity to keep your fish safe.
                  </p>
                </div>
              </div>
              <div className={`flex items-center justify-center min-w-14 h-14 rounded-full bg-[#4AC354] text-white font-bold ${data.pH !== null ? getPHColor("pH", data.pH) : "bg-gray-400"}`}>
                {data.pH !== null ? `${data.pH}` : (
                  <div className="inline-flex items-center space-x-2 text-sm text-gray-500">
                    <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      {/* <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle> */}
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                    </svg>
                  </div>
                )}
              </div>
            </div>

            {/* Dissolved Oxygen */}
            <div className="flex items-center justify-between bg-[#DCF5FD] rounded-2xl p-4 shadow">
              <div className="flex items-start space-x-3">
                <div className="flex items-center justify-center min-w-10 h-10 rounded-full bg-[#086C76] text-white text-sm">💧</div>
                <div>
                  <h2 className="text-[#086C76] font-bold">Dissolved Oxygen</h2>
                  <p className="text-xs text-[#086C76] opacity-70 leading-snug">
                    This tells you if your fish have enough air to breathe.
                  </p>
                </div>
              </div>
              <div className={`flex items-center justify-center min-w-14 h-14 rounded-full bg-[#4AC354] text-white font-bold ${data.oxygen !== null ? getOxyColor("oxygen", data.oxygen) : "bg-gray-400"}`}>
                {data.oxygen !== null ? `${data.oxygen}` : (
                  <div className="inline-flex items-center space-x-2 text-sm text-gray-500">
                    <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      {/* <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle> */}
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                    </svg>
                  </div>
                )}
              </div>
            </div>

          </div>
    
          {/* Bottom Navigation */}
          <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-[#E6F9FD] w-[90%] max-w-md h-16 rounded-full shadow-md flex items-center justify-around">
            <Home2 weight={'Bold'} size={25} color='#086C76' />
            <Chart weight={'Linear'} size={25} color='#086C76' />
            <Settings weight={'Linear'} size={25} color='#086C76' />
          </div>

          <div className="padding-bottom h-20"></div>
        </div>
  )
}

export default App
