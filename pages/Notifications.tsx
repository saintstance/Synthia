import React from 'react';
import { Bell, User, Calendar, CheckSquare } from 'lucide-react';

const Notifications: React.FC = () => {
  return (
    <div className="flex h-full bg-gray-50 dark:bg-slate-900">
      {/* Left List */}
      <div className="w-full md:w-1/3 bg-white dark:bg-slate-800 border-r border-gray-200 dark:border-slate-700 flex flex-col">
        <div className="p-6 border-b border-gray-200 dark:border-slate-700">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">Activity</h2>
            <button className="text-gray-400 hover:text-gray-600 dark:hover:text-slate-300">...</button>
          </div>
          <div className="flex space-x-2 overflow-x-auto pb-2">
            <button className="px-4 py-1.5 bg-violet-100 text-violet-700 rounded-full text-sm font-semibold whitespace-nowrap">All</button>
            <button className="px-4 py-1.5 bg-gray-100 text-gray-600 rounded-full text-sm font-medium hover:bg-gray-200 dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600 whitespace-nowrap">Unread</button>
            <button className="px-4 py-1.5 bg-gray-100 text-gray-600 rounded-full text-sm font-medium hover:bg-gray-200 dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600 whitespace-nowrap">@Mentions</button>
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto">
          {/* Notification Item */}
          <div className="p-4 border-l-4 border-violet-600 bg-violet-50 dark:bg-slate-700/50 cursor-pointer">
            <div className="flex justify-between items-start">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-violet-600 text-white flex items-center justify-center font-bold">NV</div>
                <div>
                  <p className="text-sm font-bold text-gray-900 dark:text-white">Neil Villanueva</p>
                  <p className="text-xs text-gray-600 dark:text-slate-400 truncate w-48">Meeting invitation for design review</p>
                </div>
              </div>
              <span className="text-xs text-gray-400 font-medium">8:46 PM</span>
            </div>
          </div>

          <div className="p-4 border-l-4 border-transparent hover:bg-gray-50 dark:hover:bg-slate-700 cursor-pointer">
            <div className="flex justify-between items-start">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold">AS</div>
                <div>
                  <p className="text-sm font-bold text-gray-900 dark:text-white">Alex Smith</p>
                  <p className="text-xs text-gray-600 dark:text-slate-400 truncate w-48">mentioned you in a comment</p>
                </div>
              </div>
              <span className="text-xs text-gray-400 font-medium">10m</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Details Panel (Hidden on mobile usually, keeping simple here) */}
      <div className="hidden md:block flex-1 p-8 overflow-y-auto">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-200 dark:border-slate-700 p-8">
          <div className="flex justify-between items-start mb-6 border-b border-gray-100 dark:border-slate-700 pb-6">
            <div className="flex gap-4">
              <div className="p-3 bg-violet-50 dark:bg-slate-700 text-violet-600 dark:text-violet-400 rounded-xl">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">Design Review</h2>
                <p className="text-sm text-gray-500 dark:text-slate-400">Invitation from <span className="font-semibold text-gray-700 dark:text-slate-200">Neil Villanueva</span></p>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-violet-600 text-white rounded-lg font-bold text-sm hover:bg-violet-700">Accept</button>
              <button className="px-4 py-2 bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-slate-300 rounded-lg font-bold text-sm hover:bg-gray-200">Decline</button>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gray-50 dark:bg-slate-700/50 rounded-xl p-5 border border-gray-100 dark:border-slate-600">
              <h4 className="font-bold text-gray-900 dark:text-white mb-3 text-sm">Agenda</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-slate-300">
                <li className="flex items-start gap-2"><span className="mt-1.5 w-1.5 h-1.5 bg-violet-500 rounded-full"></span>Review initial wireframes</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 w-1.5 h-1.5 bg-violet-500 rounded-full"></span>Discuss navigation flow</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;