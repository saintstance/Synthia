import React, { useState } from 'react';

const Calendar: React.FC = () => {
  const [view, setView] = useState<'week' | 'month' | 'day'>('month');

  return (
    <div className="flex h-full bg-white dark:bg-slate-900">
      {/* Left Sidebar for Calendar (Mini) */}
      <div className="w-64 p-6 border-r border-gray-200 dark:border-slate-700 hidden md:block overflow-y-auto">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm font-bold text-gray-800 dark:text-white">November 2025</h3>
            <div className="flex space-x-1">
              <button className="text-gray-500 hover:text-gray-800 dark:text-slate-400 dark:hover:text-white text-xs">←</button>
              <button className="text-gray-500 hover:text-gray-800 dark:text-slate-400 dark:hover:text-white text-xs">→</button>
            </div>
          </div>
          {/* Mini Grid - Simplistic Representation */}
          <div className="grid grid-cols-7 gap-y-2 text-center text-xs">
            <div className="text-gray-400">S</div><div className="text-gray-400">M</div><div className="text-gray-400">T</div><div className="text-gray-400">W</div><div className="text-gray-400">T</div><div className="text-gray-400">F</div><div className="text-gray-400">S</div>
            {/* Days */}
            {Array.from({ length: 35 }).map((_, i) => (
              <div key={i} className={`p-1 ${i === 22 ? 'bg-violet-600 text-white rounded-full' : 'text-gray-700 dark:text-slate-300'}`}>
                {(i % 30) + 1}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">My Calendars</h4>
            <div className="space-y-2">
              <label className="flex items-center cursor-pointer">
                <input type="checkbox" defaultChecked className="rounded border-gray-300 text-violet-600 focus:ring-violet-500 h-4 w-4" />
                <span className="ml-3 text-sm text-gray-700 dark:text-slate-300">Personal</span>
              </label>
              <label className="flex items-center cursor-pointer">
                <input type="checkbox" defaultChecked className="rounded border-gray-300 text-blue-500 focus:ring-blue-500 h-4 w-4" />
                <span className="ml-3 text-sm text-gray-700 dark:text-slate-300">Work</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Main Calendar View */}
      <div className="flex-1 flex flex-col">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-slate-700">
          <div className="flex items-center space-x-4">
            <div className="flex bg-gray-100 dark:bg-slate-800 rounded-lg p-1">
              <button 
                onClick={() => setView('week')}
                className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${view === 'week' ? 'bg-white dark:bg-slate-600 shadow-sm text-gray-800 dark:text-white' : 'text-gray-500 dark:text-slate-400'}`}
              >Week</button>
              <button 
                onClick={() => setView('month')}
                className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${view === 'month' ? 'bg-white dark:bg-slate-600 shadow-sm text-gray-800 dark:text-white' : 'text-gray-500 dark:text-slate-400'}`}
              >Month</button>
              <button 
                onClick={() => setView('day')}
                className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${view === 'day' ? 'bg-white dark:bg-slate-600 shadow-sm text-gray-800 dark:text-white' : 'text-gray-500 dark:text-slate-400'}`}
              >Day</button>
            </div>
            <h2 className="text-lg font-bold text-gray-800 dark:text-white ml-2">November 2025</h2>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {view === 'month' && (
            <div className="h-full grid grid-cols-7 grid-rows-5 border-l border-t border-gray-200 dark:border-slate-700">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                <div key={day} className="p-2 border-b border-r border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-xs font-semibold text-gray-500 dark:text-slate-400 text-center">
                  {day}
                </div>
              ))}
              {Array.from({ length: 35 }).map((_, i) => (
                <div key={i} className="min-h-[100px] border-b border-r border-gray-200 dark:border-slate-700 p-2 relative hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-colors">
                  <span className="text-sm text-gray-500 dark:text-slate-400 font-medium">{i + 1}</span>
                  {i === 16 && (
                    <div className="mt-1 text-xs bg-pink-500 text-white p-1 rounded truncate shadow-sm">
                      Monthly Team Standup
                    </div>
                  )}
                  {i === 18 && (
                    <div className="mt-1 text-xs bg-emerald-500 text-white p-1 rounded truncate shadow-sm">
                      Client Presentation
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
          {view !== 'month' && (
            <div className="flex h-full items-center justify-center text-gray-500 dark:text-slate-400">
              <p>Detailed {view} view implementation placeholder</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Calendar;