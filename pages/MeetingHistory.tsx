
import React, { useState } from 'react';
import { Search, Filter, Upload, List, LayoutGrid, FileText, ArrowUp, ExternalLink, Clock, Users, Star, Layers } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MeetingHistory: React.FC = () => {
  const [view, setView] = useState<'list' | 'grid'>('list');
  const navigate = useNavigate();

  // Updated data to represent Meeting Summaries/Documentation
  const files = [
    { 
      id: 1, 
      name: 'Capstone Project Proposal Defense', 
      subtext: "Meeting Summary • 45m duration", 
      modified: '10m ago', 
      owner: 'Klariz Habla', 
      activity: 'You recently opened this', 
      activityIcon: true 
    },
    { 
      id: 2, 
      name: 'SIA 101 - Requirements Analysis', 
      subtext: "Transcript & Action Items", 
      modified: '2h ago', 
      owner: 'Klariz Habla', 
      activity: 'You edited this file', 
      activityIcon: true 
    },
    { 
      id: 3, 
      name: 'UI/UX Design Review - Sprint 4', 
      subtext: "Recording & Notes", 
      modified: 'Yesterday', 
      owner: 'Peter Parker', 
      activity: 'Shared with team', 
      activityIcon: true 
    },
    { 
      id: 4, 
      name: 'Database Schema Finalization', 
      subtext: "Technical Documentation", 
      modified: 'Nov 15, 2025', 
      owner: 'Klariz Habla', 
      activity: '', 
      activityIcon: false 
    },
    { 
      id: 5, 
      name: 'Weekly Team Sync', 
      subtext: "Meeting Recap", 
      modified: 'Nov 10, 2025', 
      owner: 'Sarah Chen', 
      activity: '', 
      activityIcon: false 
    },
    { 
      id: 6, 
      name: 'Client Kickoff - Project Alpha', 
      subtext: "Presentation & Feedback", 
      modified: 'Oct 28, 2025', 
      owner: 'Klariz Habla', 
      activity: '', 
      activityIcon: false 
    },
  ];

  return (
    <div className="p-6 md:p-8 bg-gray-50 dark:bg-slate-900 h-full overflow-y-auto">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Meeting Summary</h2>
        <p className="text-sm text-gray-500 dark:text-slate-400 mt-1">Access documentation, transcripts, and records from past sessions.</p>
      </div>

      {/* Header Filters */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <button className="px-4 py-2 bg-black text-white dark:bg-white dark:text-black rounded-full text-sm font-medium flex items-center gap-2 shadow-sm transition-transform active:scale-95">
          <Layers className="w-4 h-4" /> All
        </button>
        <button className="px-4 py-2 bg-white text-gray-700 border border-gray-200 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300 rounded-full text-sm font-medium hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors flex items-center gap-2 shadow-sm">
          <Clock className="w-4 h-4 text-gray-500" /> Recently opened
        </button>
        <button className="px-4 py-2 bg-white text-gray-700 border border-gray-200 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300 rounded-full text-sm font-medium hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors flex items-center gap-2 shadow-sm">
          <Users className="w-4 h-4 text-gray-500" /> Shared
        </button>
        <button className="px-4 py-2 bg-white text-gray-700 border border-gray-200 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300 rounded-full text-sm font-medium hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors flex items-center gap-2 shadow-sm">
          <Star className="w-4 h-4 text-gray-500" /> Favorites
        </button>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="relative w-full sm:w-80">
            <input
              type="text"
              placeholder="Search summaries..."
              className="w-full pl-10 pr-4 py-2 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 transition-colors shadow-sm dark:text-white"
            />
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
          </div>
          <button className="p-2 border border-gray-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors shadow-sm flex items-center gap-1 px-3 text-sm font-medium text-gray-700 dark:text-slate-300">
            <Filter className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center gap-4 w-full sm:w-auto justify-end">
          <button className="flex items-center gap-2 text-gray-600 dark:text-slate-300 hover:text-gray-900 dark:hover:text-white transition-colors text-sm font-medium">
            <Upload className="w-4 h-4" />
            Upload
          </button>
          <div className="h-5 w-px bg-gray-300 dark:bg-slate-700 mx-1"></div>
          <div className="flex items-center gap-1">
             <button 
               onClick={() => setView('list')}
               className={`p-1.5 rounded transition-colors ${view === 'list' ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-400' : 'text-gray-500 hover:bg-gray-100 dark:hover:bg-slate-800'}`}
             >
               <List className="w-5 h-5" />
             </button>
             <button 
               onClick={() => setView('grid')}
               className={`p-1.5 rounded transition-colors ${view === 'grid' ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-400' : 'text-gray-500 hover:bg-gray-100 dark:hover:bg-slate-800'}`}
             >
               <LayoutGrid className="w-5 h-5" />
             </button>
          </div>
        </div>
      </div>

      {/* File List */}
      <div className="bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-slate-700 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="border-b border-gray-200 dark:border-slate-700 text-xs font-medium text-gray-500 dark:text-slate-400">
                <th className="py-3 px-6 w-[40%]">
                  <div className="flex items-center gap-1 cursor-pointer hover:text-gray-700 dark:hover:text-slate-200 group">
                    Meeting Name <ArrowUp className="w-3 h-3 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </th>
                <th className="py-3 px-6 w-[20%]">Date Modified</th>
                <th className="py-3 px-6 w-[20%]">Owner</th>
                <th className="py-3 px-6 w-[20%]">Activity</th>
              </tr>
            </thead>
            <tbody>
              {files.map((file) => (
                <tr 
                  key={file.id} 
                  onClick={() => navigate(`/meeting-summary/${file.id}`)}
                  className="border-b border-gray-100 dark:border-slate-700/50 hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors group last:border-0 cursor-pointer"
                >
                  <td className="py-3 px-6">
                    <div className="flex items-center gap-4">
                      {/* Word Icon Simulation */}
                      <div className="relative w-8 h-10 bg-white border border-blue-200 rounded-sm shadow-sm flex items-center justify-center flex-shrink-0 group-hover:shadow-md transition-shadow">
                         <div className="absolute top-0 right-0 border-t-[8px] border-r-[8px] border-t-gray-100 border-r-white transform rotate-90"></div>
                         <FileText className="w-5 h-5 text-blue-600 z-10" />
                         <div className="absolute bottom-1 right-1 text-[6px] font-bold text-blue-600">DOC</div>
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-gray-900 dark:text-white truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{file.name}</p>
                        <p className="text-xs text-gray-500 dark:text-slate-400 truncate">{file.subtext}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-6 text-sm text-gray-600 dark:text-slate-300 whitespace-nowrap">{file.modified}</td>
                  <td className="py-3 px-6 text-sm text-gray-600 dark:text-slate-300 whitespace-nowrap">{file.owner}</td>
                  <td className="py-3 px-6">
                    {file.activity && (
                      <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-slate-400 bg-gray-100 dark:bg-slate-700 px-2 py-1 rounded-full w-fit">
                        {file.activityIcon && <ExternalLink className="w-3 h-3 text-blue-500" />}
                        <span>{file.activity}</span>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {files.length === 0 && (
            <div className="p-8 text-center text-gray-500 dark:text-slate-400">
                No meeting summaries found.
            </div>
        )}
      </div>
    </div>
  );
};

export default MeetingHistory;
