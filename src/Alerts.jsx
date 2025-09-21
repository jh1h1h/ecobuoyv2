import { Link } from "react-router-dom";
import TempIcon from "./assets/temp.svg";
import OxygenIcon from "./assets/oxygen.svg";
import TurbidityIcon from "./assets/turbidity.svg";
import PHIcon from "./assets/ph.svg";

const alerts = [
  {
    type: "High Temperature",
    message: "Reached 28 degrees. EcoBuoy switched on the aeration pump.",
    date: "09/09/25",
    time: "20:55",
    icon: TempIcon
  },
  {
    type: "Low DO",
    message: "Recorded 8.6. EcoBuoy switched on the aeration pump.",
    date: "07/09/25",
    time: "17:37",
    icon: OxygenIcon
  },
  {
    type: "High Turbidity",
    message: "Change your farm water soon.",
    date: "31/08/25",
    time: "02:45",
    icon: TurbidityIcon
  },
  {
    type: "Low DO",
    message: "EcoBuoy switched on the aeration pump.",
    date: "30/08/25",
    time: "08:25",
    icon: OxygenIcon
  },
  {
    type: "Low pH",
    message: "3.5 pH recorded. EcoBuoy has dropped limestone.",
    date: "23/08/25",
    time: "14:08",
    icon: PHIcon
  },
  {
    type: "High Temperature",
    message: "EcoBuoy switched on the aeration pump.",
    date: "23/08/25",
    time: "14:08",
    icon: TempIcon
  },
];

export default function Alerts() {
  return (
    <div className="min-h-screen bg-[#DDF1FF] font-mont p-4">
      {/* Header */}
      <div className="flex items-center space-x-2 mb-4">
        <Link to="/" className="text-[#086C76] font-bold text-lg">←</Link>
        <div className="text-lg font-bold text-[#086C76]">Alerts</div>
      </div>

      {/* Alerts Card */}
      <div className="bg-[#DCF5FD] rounded-2xl shadow divide-y divide-[#C9E8F3] text-left">
        {alerts.map((alert, idx) => (
          <div key={idx} className="p-4 flex justify-between items-start">
            <div className="flex items-start space-x-3">
              <div className="flex items-center justify-center min-w-10 h-10 rounded-full bg-[#086C76] text-white text-lg">
                <img src={alert.icon} alt={alert.type} className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="font-bold text-[#086C76]">{alert.type}</h2>
                <p className="text-xs text-[#086C76] opacity-70 leading-snug">{alert.message}</p>
              </div>
            </div>
            <div className="text-right text-xs text-[#086C76] font-semibold">
              <p>{alert.date}</p>
              <p>{alert.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
