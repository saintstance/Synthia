import React, { useState, useEffect } from 'react';
import { Mic, MicOff, Video, VideoOff, PhoneOff, MessageSquare, Users, MoreVertical, Share } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MeetingRoom: React.FC = () => {
  const navigate = useNavigate();
  const [micOn, setMicOn] = useState(true);
  const [camOn, setCamOn] = useState(true);
  const [time, setTime] = useState('');
  const [showPanel, setShowPanel] = useState<'chat' | 'people' | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-screen flex flex-col bg-[#1F1F1F] text-white overflow-hidden font-sans">
      {/* Top Bar */}
      <header className="h-16 bg-[#1F1F1F] border-b border-gray-700 flex items-center justify-between px-4 z-20">
        <div className="flex items-center space-x-3 w-1/4">
          <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
          <span className="font-medium text-gray-300 text-sm">REC 00:12:45</span>
        </div>
        <div className="flex-1 text-center font-semibold text-gray-200">
          Weekly Design Sync
        </div>
        <div className="w-1/4 flex justify-end text-sm text-gray-400">
          {time}
        </div>
      </header>

      {/* Main Stage */}
      <div className="flex-1 flex overflow-hidden relative">
        <div className="flex-1 bg-black flex flex-col items-center justify-center relative p-4">
          {/* Grid of Participants */}
          <div className="grid grid-cols-2 gap-4 w-full h-full max-w-5xl max-h-[80vh]">
            <div className="bg-gray-800 rounded-xl relative overflow-hidden flex items-center justify-center group">
              <div className="absolute bottom-4 left-4 bg-black/50 px-2 py-1 rounded text-sm font-medium">You</div>
              {camOn ? (
                <div className="w-full h-full bg-gray-700 flex items-center justify-center text-gray-500">[Camera Feed Placeholder]</div>
              ) : (
                <div className="w-24 h-24 rounded-full bg-violet-600 flex items-center justify-center text-3xl font-bold">PP</div>
              )}
              <div className="absolute top-4 right-4 bg-black/50 p-1 rounded-full">
                {micOn ? <Mic className="w-4 h-4 text-white" /> : <MicOff className="w-4 h-4 text-red-500" />}
              </div>
            </div>
            <div className="bg-gray-800 rounded-xl relative overflow-hidden flex items-center justify-center">
              <div className="absolute bottom-4 left-4 bg-black/50 px-2 py-1 rounded text-sm font-medium">Sarah Chen</div>
              <img src="https://picsum.photos/600/400?random=1" alt="Sarah" className="w-full h-full object-cover opacity-80" />
            </div>
            <div className="bg-gray-800 rounded-xl relative overflow-hidden flex items-center justify-center">
              <div className="absolute bottom-4 left-4 bg-black/50 px-2 py-1 rounded text-sm font-medium">Mike Ross</div>
              <div className="w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center text-3xl font-bold">MR</div>
            </div>
            <div className="bg-gray-800 rounded-xl relative overflow-hidden flex items-center justify-center">
              <div className="absolute bottom-4 left-4 bg-black/50 px-2 py-1 rounded text-sm font-medium">Emily Dao</div>
              <img src="https://picsum.photos/600/400?random=2" alt="Emily" className="w-full h-full object-cover opacity-80" />
            </div>
          </div>
        </div>

        {/* Side Panel */}
        {showPanel && (
          <div className="w-80 bg-[#1F1F1F] border-l border-gray-700 flex flex-col transition-all duration-300">
            <div className="p-4 border-b border-gray-700 flex justify-between items-center">
              <h3 className="font-bold text-lg">{showPanel === 'chat' ? 'Meeting Chat' : 'Participants (4)'}</h3>
              <button onClick={() => setShowPanel(null)} className="text-gray-400 hover:text-white">✕</button>
            </div>
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {showPanel === 'chat' ? (
                <>
                  <div className="text-sm">
                    <span className="font-bold text-violet-400">Sarah Chen</span>
                    <span className="text-xs text-gray-500 ml-2">10:05 AM</span>
                    <p className="text-gray-300 mt-1">Can everyone see my screen?</p>
                  </div>
                  <div className="text-sm">
                    <span className="font-bold text-blue-400">Mike Ross</span>
                    <span className="text-xs text-gray-500 ml-2">10:06 AM</span>
                    <p className="text-gray-300 mt-1">Yes, looking good!</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-violet-600 flex items-center justify-center text-xs">PP</div>
                      <span>You</span>
                    </div>
                    <Mic className="w-4 h-4 text-gray-400" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img src="https://picsum.photos/40/40?random=1" className="w-8 h-8 rounded-full" />
                      <span>Sarah Chen</span>
                    </div>
                    <Mic className="w-4 h-4 text-gray-400" />
                  </div>
                </>
              )}
            </div>
            {showPanel === 'chat' && (
              <div className="p-4 border-t border-gray-700">
                <input type="text" placeholder="Type a message..." className="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-violet-500" />
              </div>
            )}
          </div>
        )}
      </div>

      {/* Bottom Controls */}
      <div className="h-20 bg-[#1F1F1F] border-t border-gray-700 flex items-center justify-center space-x-4 px-4">
        <button 
          onClick={() => setMicOn(!micOn)} 
          className={`p-3 rounded-full transition-colors ${micOn ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-red-500 hover:bg-red-600 text-white'}`}
        >
          {micOn ? <Mic className="w-5 h-5" /> : <MicOff className="w-5 h-5" />}
        </button>
        <button 
          onClick={() => setCamOn(!camOn)} 
          className={`p-3 rounded-full transition-colors ${camOn ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-red-500 hover:bg-red-600 text-white'}`}
        >
          {camOn ? <Video className="w-5 h-5" /> : <VideoOff className="w-5 h-5" />}
        </button>
        <button className="p-3 rounded-full bg-gray-700 hover:bg-gray-600 text-white transition-colors">
          <Share className="w-5 h-5" />
        </button>
        <button 
          onClick={() => navigate('/meetings')}
          className="px-6 py-3 rounded-full bg-red-600 hover:bg-red-700 text-white font-semibold transition-colors flex items-center gap-2"
        >
          <PhoneOff className="w-5 h-5" />
          <span>Leave</span>
        </button>
        <div className="h-8 w-px bg-gray-700 mx-2"></div>
        <button 
          onClick={() => setShowPanel(showPanel === 'chat' ? null : 'chat')}
          className={`p-3 rounded-full transition-colors ${showPanel === 'chat' ? 'bg-violet-600 text-white' : 'bg-gray-700 hover:bg-gray-600 text-white'}`}
        >
          <MessageSquare className="w-5 h-5" />
        </button>
        <button 
          onClick={() => setShowPanel(showPanel === 'people' ? null : 'people')}
          className={`p-3 rounded-full transition-colors ${showPanel === 'people' ? 'bg-violet-600 text-white' : 'bg-gray-700 hover:bg-gray-600 text-white'}`}
        >
          <Users className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default MeetingRoom;