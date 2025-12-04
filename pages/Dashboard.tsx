import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckSquare, Users, Video, ArrowRight } from 'lucide-react';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [showBriefing, setShowBriefing] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (showBriefing) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [showBriefing]);

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowBriefing(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <div className="p-6 md:p-8 bg-gray-100 dark:bg-slate-900 min-h-full">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Good Day! User</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-200 dark:bg-slate-800 dark:border-slate-700">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs font-medium text-gray-600 mb-2 dark:text-slate-400">Total Tasks</p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">12</p>
                </div>
                <button onClick={() => navigate('/tasks')} className="p-2 hover:bg-gray-100 rounded dark:hover:bg-slate-700 text-gray-600 dark:text-slate-400">
                  <CheckSquare className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-200 dark:bg-slate-800 dark:border-slate-700">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs font-medium text-gray-600 mb-2 dark:text-slate-400">Active Workspaces</p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">2</p>
                </div>
                <button onClick={() => navigate('/collaboration')} className="p-2 hover:bg-gray-100 rounded dark:hover:bg-slate-700 text-gray-600 dark:text-slate-400">
                  <Users className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-200 dark:bg-slate-800 dark:border-slate-700">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs font-medium text-gray-600 mb-2 dark:text-slate-400">Meetings Today</p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">3</p>
                </div>
                <button onClick={() => navigate('/meetings')} className="p-2 hover:bg-gray-100 rounded dark:hover:bg-slate-700 text-gray-600 dark:text-slate-400">
                  <Video className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Alert Box */}
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 dark:bg-slate-800 dark:border-slate-700">
            <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-4 dark:text-slate-300">PRE MEETING HEADS-UP</h3>
            <div className="flex items-start justify-between flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <p className="font-semibold text-gray-900 dark:text-white">Tomorrow, 10:00 AM !</p>
                <p className="text-sm text-gray-600 mt-1 dark:text-slate-400">Strategic Planning and Policy Alignment Meeting - Q4 2025</p>
              </div>
              <button 
                id="btn-view-briefing" 
                onClick={() => setShowBriefing(true)}
                className="px-4 py-2 bg-violet-600 text-white rounded-lg font-medium text-sm hover:bg-violet-700 transition-colors whitespace-nowrap flex items-center gap-2"
              >
                <span>View Briefing</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Task List */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 dark:bg-slate-800 dark:border-slate-700">
            <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-slate-700">
              <h3 className="text-lg font-bold text-gray-800 dark:text-white">Task List Overview</h3>
              <button onClick={() => navigate('/tasks')} className="text-violet-600 font-medium hover:text-violet-700 text-sm">View all</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200 dark:bg-slate-700/50 dark:border-slate-700">
                    <th className="px-6 py-3 text-left font-semibold text-gray-700 dark:text-slate-300 uppercase text-xs tracking-wider">Task Name</th>
                    <th className="px-6 py-3 text-left font-semibold text-gray-700 dark:text-slate-300 uppercase text-xs tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left font-semibold text-gray-700 dark:text-slate-300 uppercase text-xs tracking-wider">Workspace</th>
                    <th className="px-6 py-3 text-left font-semibold text-gray-700 dark:text-slate-300 uppercase text-xs tracking-wider">Due Date</th>
                    <th className="px-6 py-3 text-left font-semibold text-gray-700 dark:text-slate-300 uppercase text-xs tracking-wider">Priority</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
                  <tr className="hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors">
                    <td className="px-6 py-4 text-gray-800 font-medium dark:text-white">UI Design</td>
                    <td className="px-6 py-4"><span className="px-2.5 py-1 bg-blue-50 text-blue-600 border border-blue-100 rounded-full text-xs font-semibold dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800">In Progress</span></td>
                    <td className="px-6 py-4 text-gray-600 dark:text-slate-400">Capstone 101</td>
                    <td className="px-6 py-4 text-gray-600 dark:text-slate-400">11/20/2025</td>
                    <td className="px-6 py-4"><span className="px-2.5 py-1 bg-red-50 text-red-600 border border-red-100 rounded-full text-xs font-semibold dark:bg-red-900/30 dark:text-red-300 dark:border-red-800">High</span></td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors">
                    <td className="px-6 py-4 text-gray-800 font-medium dark:text-white">Database Schema</td>
                    <td className="px-6 py-4"><span className="px-2.5 py-1 bg-green-50 text-green-600 border border-green-100 rounded-full text-xs font-semibold dark:bg-green-900/30 dark:text-green-300 dark:border-green-800">Completed</span></td>
                    <td className="px-6 py-4 text-gray-600 dark:text-slate-400">Capstone 101</td>
                    <td className="px-6 py-4 text-gray-600 dark:text-slate-400">11/15/2025</td>
                    <td className="px-6 py-4"><span className="px-2.5 py-1 bg-red-50 text-red-600 border border-red-100 rounded-full text-xs font-semibold dark:bg-red-900/30 dark:text-red-300 dark:border-red-800">High</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Calendar Widget */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 dark:bg-slate-800 dark:border-slate-700">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-base font-bold text-gray-800 dark:text-white">November</h3>
              <div className="flex gap-2">
                <button className="p-1 hover:bg-gray-100 rounded-full text-gray-400 hover:text-gray-600 dark:hover:bg-slate-700 dark:text-slate-500">←</button>
                <button className="p-1 hover:bg-gray-100 rounded-full text-gray-400 hover:text-gray-600 dark:hover:bg-slate-700 dark:text-slate-500">→</button>
              </div>
            </div>
            
            <div className="grid grid-cols-7 gap-y-4 text-center text-xs">
              {['Su','Mo','Tu','We','Th','Fr','Sa'].map(d => (
                <div key={d} className="font-semibold text-gray-400 py-1">{d}</div>
              ))}
              {/* Simplified logic for display */}
              <div className="py-2 text-gray-300 dark:text-slate-600">26</div>
              <div className="py-2 text-gray-300 dark:text-slate-600">27</div>
              <div className="py-2 text-gray-300 dark:text-slate-600">28</div>
              <div className="py-2 text-gray-300 dark:text-slate-600">29</div>
              <div className="py-2 text-gray-300 dark:text-slate-600">30</div>
              <div className="py-2 text-gray-300 dark:text-slate-600">31</div>
              <div className="py-2 text-gray-700 dark:text-slate-300">1</div>
              <div className="py-2 text-gray-700 dark:text-slate-300">2</div>
              {/* ... filler dates ... */}
              <div className="py-2 text-gray-700 dark:text-slate-300">15</div>
              <div className="py-2 text-gray-700 dark:text-slate-300">16</div>
              <div className="py-2 text-gray-700 dark:text-slate-300">17</div>
              <div className="relative flex items-center justify-center">
                <div className="w-8 h-8 bg-violet-600 text-white rounded-full flex items-center justify-center shadow-md font-semibold">18</div>
              </div>
              <div className="py-2 text-gray-700 dark:text-slate-300">19</div>
              {/* ... */}
            </div>
          </div>

          {/* Schedule Widget */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 dark:bg-slate-800 dark:border-slate-700">
            <div className="mb-6">
              <h3 className="text-base font-bold text-gray-800 dark:text-white">Schedule</h3>
              <p className="text-xs text-gray-500 mt-1 dark:text-slate-400">Today - November 18, 2025</p>
            </div>
            
            <div className="flex flex-col space-y-4">
              <div className="flex gap-4 pb-3 border-b border-gray-100 last:border-0 dark:border-slate-700">
                <div className="w-12 flex-shrink-0 pt-1">
                  <p className="text-sm font-bold text-violet-600 dark:text-violet-400">9:00</p>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-gray-800 dark:text-white">Monthly Meeting</p>
                  <p className="text-xs text-gray-500 mt-0.5 dark:text-slate-400">Capstone 101 Workspace</p>
                </div>
              </div>
              <div className="flex gap-4 pb-3 border-b border-gray-100 last:border-0 dark:border-slate-700">
                <div className="w-12 flex-shrink-0 pt-1">
                  <p className="text-sm font-bold text-violet-600 dark:text-violet-400">10:00</p>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-gray-800 dark:text-white">Design Sync</p>
                  <p className="text-xs text-gray-500 mt-0.5 dark:text-slate-400">Internal Tools</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Briefing Modal */}
      {showBriefing && (
        <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity backdrop-blur-sm"
            onClick={() => setShowBriefing(false)}
          ></div>

          <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-full max-w-3xl dark:bg-slate-800 border border-transparent dark:border-slate-700">
                
                {/* Purple Accent Strip */}
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-violet-600"></div>

                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pl-8 dark:bg-slate-800">
                    <div className="flex items-start justify-between mb-5">
                        <h3 className="text-lg font-bold leading-6 text-gray-900 dark:text-white" id="modal-title">Planning for the Synergy 2025</h3>
                        <button 
                            type="button" 
                            className="rounded-md bg-white dark:bg-slate-800 text-gray-400 hover:text-gray-500 focus:outline-none"
                            onClick={() => setShowBriefing(false)}
                        >
                            <span className="sr-only">Close</span>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Metadata */}
                    <div className="flex items-start gap-10 mb-6 pb-6 border-b border-gray-100 dark:border-slate-700">
                        {/* Date */}
                        <div className="flex items-start gap-3">
                            <div className="p-2 bg-gray-50 dark:bg-slate-700 rounded-lg text-gray-500 dark:text-slate-400 mt-0.5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">DATE & TIME</p>
                                <p className="text-sm font-semibold text-gray-900 dark:text-white">Oct 7, 10:00 AM <span className="text-gray-400 font-normal">(60m)</span></p>
                            </div>
                        </div>
                        {/* Owner */}
                        <div className="flex items-start gap-3">
                            <div className="p-2 bg-gray-50 dark:bg-slate-700 rounded-lg text-gray-500 dark:text-slate-400 mt-0.5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">OWNER</p>
                                <p className="text-sm font-semibold text-gray-900 dark:text-white">Hastiel</p>
                            </div>
                        </div>
                         {/* Tags */}
                         <div className="flex items-start gap-3">
                            <div className="p-2 bg-gray-50 dark:bg-slate-700 rounded-lg text-gray-500 dark:text-slate-400 mt-0.5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l5 5a2 2 0 0 0 2.828 0l7-7a2 2 0 0 0 0-2.828l-5-5z"/><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"/></svg>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">TAGS</p>
                                <div className="flex gap-2">
                                    <span className="inline-flex items-center rounded-md bg-gray-100 dark:bg-slate-700 px-2 py-1 text-xs font-bold text-gray-600 dark:text-slate-300 ring-1 ring-inset ring-gray-500/10 uppercase">STRATEGIC</span>
                                    <span className="inline-flex items-center rounded-md bg-gray-100 dark:bg-slate-700 px-2 py-1 text-xs font-bold text-gray-600 dark:text-slate-300 ring-1 ring-inset ring-gray-500/10 uppercase">ALIGNMENT</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Agenda */}
                    <div className="mb-6 pb-6 border-b border-gray-100 dark:border-slate-700">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="p-1.5 bg-gray-50 dark:bg-slate-700 rounded-md text-gray-500 dark:text-slate-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="M12 13h5"/><path d="M12 17h5"/><path d="M9 13h.01"/><path d="M9 17h.01"/></svg>
                            </div>
                            <h4 className="text-sm font-bold text-gray-900 dark:text-white">Agenda for the meeting:</h4>
                        </div>
                        <ul className="list-disc pl-12 space-y-2 text-sm text-gray-600 dark:text-slate-300 marker:text-gray-400">
                            <li>Review of last quarter's performance indicators</li>
                            <li>Presentation of new policy directives from the control office</li>
                            <li>Budget reallocation for planning activities</li>
                            <li>Open forum for recommendations and process improvement</li>
                            <li>Discussion on inter-departmental coordination for Q4</li>
                        </ul>
                    </div>

                    {/* Attendees */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-1.5 bg-gray-50 dark:bg-slate-700 rounded-md text-gray-500 dark:text-slate-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                            </div>
                            <h4 className="text-sm font-bold text-gray-900 dark:text-white">Attendees</h4>
                        </div>
                        
                        <div className="pl-10 space-y-3">
                            <div className="flex items-center gap-3">
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-600 dark:bg-blue-900/30 dark:text-blue-300">AC</span>
                                <span className="text-sm font-medium text-gray-900 dark:text-white">Althea Cain</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 text-xs font-bold text-purple-600 dark:bg-purple-900/30 dark:text-purple-300">NV</span>
                                <span className="text-sm font-medium text-gray-900 dark:text-white">Neil Villanueva</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-xs font-bold text-green-600 dark:bg-green-900/30 dark:text-green-300">AA</span>
                                <span className="text-sm font-medium text-gray-900 dark:text-white">Anne Abedi</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;