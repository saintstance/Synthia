import React, { useState, useEffect } from 'react';
import { Plus, MoreHorizontal, Play, Square, X } from 'lucide-react';

const Tasks: React.FC = () => {
  const [view, setView] = useState<'board' | 'list'>('board');
  const [selectedTask, setSelectedTask] = useState<any>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedTask) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedTask]);

  const tasks = {
    todo: [
      { id: 1, title: 'Wireframe Homepage', tags: ['Blueprint'], date: 'Feb 23', checklist: '0/20', status: 'In Progress', priority: 'High', workspace: 'Capstone 101', description: 'Create initial low-fidelity wireframes for the landing page.' },
      { id: 2, title: 'Create UI Style Guide', tags: ['Design'], date: 'Feb 28', checklist: '0/14', status: 'To Do', priority: 'Medium', workspace: 'Capstone 101', description: 'Define typography, color palette, and component library.' },
    ],
    ongoing: [
      { id: 3, title: 'High-Fidelity Homepage', tags: ['Pixel Perfect'], date: 'Tomorrow', checklist: '10/20', active: true, status: 'In Progress', priority: 'High Priority', workspace: 'Capstone 101', description: 'Draft the initial wireframes for the new dashboard layout, focusing on the widget grid system and responsive behavior for mobile devices. Incorporate the new Violet brand color scheme.' },
    ],
    completed: [
      { id: 4, title: 'Prototype for Testing', tags: ['Proto'], date: 'Jan 28', checklist: '19/19', status: 'Completed', priority: 'Low', workspace: 'Capstone 101', description: 'Interactive prototype for user testing session.' },
    ]
  };

  return (
    <div className="flex h-full flex-col bg-gray-50 dark:bg-slate-900 relative">
      <div className="flex-shrink-0 bg-white dark:bg-slate-800 p-6 border-b border-gray-200 dark:border-slate-700 flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Tasks</h2>
        <div className="flex items-center space-x-4">
          <div className="flex bg-gray-100 dark:bg-slate-700 rounded-lg p-1">
            <button 
              onClick={() => setView('board')} 
              className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${view === 'board' ? 'bg-white dark:bg-slate-600 shadow-sm text-gray-800 dark:text-white' : 'text-gray-500 dark:text-slate-400'}`}
            >Board</button>
            <button 
              onClick={() => setView('list')} 
              className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${view === 'list' ? 'bg-white dark:bg-slate-600 shadow-sm text-gray-800 dark:text-white' : 'text-gray-500 dark:text-slate-400'}`}
            >List</button>
          </div>
          <button className="px-4 py-2 bg-violet-600 text-white rounded-lg font-semibold text-sm hover:bg-violet-700 flex items-center space-x-2">
            <Plus className="w-4 h-4" />
            <span>New Task</span>
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-x-auto p-6 md:p-8">
        {view === 'board' ? (
          <div className="flex space-x-6 min-w-max h-full">
            {/* To Do Column */}
            <div className="w-80 flex flex-col h-full bg-gray-100 dark:bg-slate-800/50 rounded-xl p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-gray-700 dark:text-slate-200 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-violet-500"></span> To Do
                </h3>
                <span className="bg-white dark:bg-slate-700 px-2 py-0.5 rounded text-xs text-gray-500 dark:text-slate-300">2</span>
              </div>
              <div className="space-y-3">
                {tasks.todo.map(task => (
                  <div key={task.id} className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 cursor-pointer hover:shadow-md transition-shadow relative group">
                    <div className="flex justify-between mb-2">
                      <span className="px-2 py-0.5 bg-violet-100 text-violet-600 text-xs rounded-full font-medium dark:bg-violet-900/30 dark:text-violet-300">{task.tags[0]}</span>
                      <MoreHorizontal className="w-4 h-4 text-gray-400" />
                    </div>
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-2">{task.title}</h4>
                    <div className="flex justify-between text-xs text-gray-500 dark:text-slate-400 mt-4 pt-3 border-t border-gray-100 dark:border-slate-700">
                      <span>{task.date}</span>
                      <span>{task.checklist}</span>
                    </div>
                    {/* View Button Overlay on Hover */}
                    <div className="absolute inset-0 bg-white/80 dark:bg-slate-800/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                         <button 
                            onClick={(e) => { e.stopPropagation(); setSelectedTask(task); }}
                            className="bg-violet-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-violet-700 shadow-md"
                         >
                            View
                         </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* On Going Column */}
            <div className="w-80 flex flex-col h-full bg-gray-100 dark:bg-slate-800/50 rounded-xl p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-gray-700 dark:text-slate-200 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-yellow-500"></span> On Going
                </h3>
                <span className="bg-white dark:bg-slate-700 px-2 py-0.5 rounded text-xs text-gray-500 dark:text-slate-300">1</span>
              </div>
              <div className="space-y-3">
                {tasks.ongoing.map(task => (
                  <div key={task.id} className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 cursor-pointer hover:shadow-md transition-shadow relative group">
                    <div className="flex justify-between mb-2">
                      <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 text-xs rounded-full font-medium dark:bg-yellow-900/30 dark:text-yellow-300">{task.tags[0]}</span>
                      <MoreHorizontal className="w-4 h-4 text-gray-400" />
                    </div>
                    <div className="h-20 bg-yellow-50 dark:bg-yellow-900/20 rounded mb-2 flex items-center justify-center text-yellow-700 dark:text-yellow-500 font-bold text-xs">Preview</div>
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-2">{task.title}</h4>
                    <div className="flex justify-between text-xs text-red-500 mt-4 pt-3 border-t border-gray-100 dark:border-slate-700">
                      <span>{task.date}</span>
                      <span className="text-gray-500 dark:text-slate-400">{task.checklist}</span>
                    </div>
                     {/* View Button Overlay on Hover */}
                     <div className="absolute inset-0 bg-white/80 dark:bg-slate-800/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                         <button 
                            onClick={(e) => { e.stopPropagation(); setSelectedTask(task); }}
                            className="bg-violet-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-violet-700 shadow-md"
                         >
                            View
                         </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Completed Column */}
            <div className="w-80 flex flex-col h-full bg-gray-100 dark:bg-slate-800/50 rounded-xl p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-gray-700 dark:text-slate-200 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span> Completed
                </h3>
                <span className="bg-white dark:bg-slate-700 px-2 py-0.5 rounded text-xs text-gray-500 dark:text-slate-300">1</span>
              </div>
              <div className="space-y-3">
                {tasks.completed.map(task => (
                  <div key={task.id} className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 opacity-75 relative group">
                    <div className="flex justify-between mb-2">
                      <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full font-medium dark:bg-green-900/30 dark:text-green-300">{task.tags[0]}</span>
                      <MoreHorizontal className="w-4 h-4 text-gray-400" />
                    </div>
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-2 line-through decoration-gray-400">{task.title}</h4>
                    <div className="flex justify-between text-xs text-gray-500 dark:text-slate-400 mt-4 pt-3 border-t border-gray-100 dark:border-slate-700">
                      <span>{task.date}</span>
                      <span>{task.checklist}</span>
                    </div>
                     {/* View Button Overlay on Hover */}
                     <div className="absolute inset-0 bg-white/80 dark:bg-slate-800/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                         <button 
                            onClick={(e) => { e.stopPropagation(); setSelectedTask(task); }}
                            className="bg-violet-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-violet-700 shadow-md"
                         >
                            View
                         </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-20 text-gray-500 dark:text-slate-400">List View Placeholder</div>
        )}
      </div>

      {/* TASK DETAILS MODAL */}
      {selectedTask && (
        <div className="fixed inset-0 z-50 overflow-y-auto" role="dialog" aria-modal="true">
           {/* Backdrop */}
           <div 
             className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity backdrop-blur-sm"
             onClick={() => setSelectedTask(null)}
           ></div>

           <div className="flex min-h-full items-center justify-center p-4">
              <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all w-full max-w-lg dark:bg-slate-800">
                 
                 {/* Header */}
                 <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-slate-700">
                    <div className="flex items-center gap-3">
                       <div className="w-1.5 h-6 bg-violet-600 rounded-full"></div>
                       <h3 className="text-xl font-bold text-gray-900 dark:text-white">{selectedTask.title}</h3>
                    </div>
                    <button 
                       onClick={() => setSelectedTask(null)}
                       className="text-gray-400 hover:text-gray-500 focus:outline-none"
                    >
                       <X className="w-6 h-6" />
                    </button>
                 </div>

                 {/* Body */}
                 <div className="p-6 space-y-6">
                    {/* Status / Priority / Date */}
                    <div className="grid grid-cols-3 gap-4">
                        <div>
                            <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">STATUS</p>
                            <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 dark:bg-blue-900/30 dark:text-blue-300">
                                {selectedTask.status || 'In Progress'}
                            </span>
                        </div>
                        <div>
                            <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">PRIORITY</p>
                            <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10 dark:bg-red-900/30 dark:text-red-300">
                                {selectedTask.priority || 'High Priority'}
                            </span>
                        </div>
                        <div>
                            <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">DUE DATE</p>
                            <p className="text-sm font-semibold text-gray-900 dark:text-white">11/20/2025</p>
                        </div>
                    </div>

                    <div>
                        <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">WORKSPACE</p>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">{selectedTask.workspace || 'Capstone 101'}</p>
                    </div>

                    <div>
                        <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">DESCRIPTION</p>
                        <div className="bg-gray-50 dark:bg-slate-700/50 p-4 rounded-lg text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
                            {selectedTask.description || 'No description provided for this task.'}
                        </div>
                    </div>
                 </div>

                 {/* Footer Actions */}
                 <div className="p-6 bg-gray-50 dark:bg-slate-700/30 flex justify-between items-center border-t border-gray-100 dark:border-slate-700">
                    <button className="text-violet-600 text-sm font-semibold hover:text-violet-700">View all details</button>
                    <div className="flex gap-2">
                        <button className="flex items-center gap-2 px-4 py-2 bg-violet-600 text-white rounded-lg text-sm font-semibold hover:bg-violet-700 transition-colors">
                            <Play className="w-4 h-4 fill-current" /> Play
                        </button>
                         <button className="flex items-center gap-2 px-4 py-2 bg-violet-600 text-white rounded-lg text-sm font-semibold hover:bg-violet-700 transition-colors">
                            <Square className="w-4 h-4 fill-current" /> Stop
                        </button>
                    </div>
                 </div>

              </div>
           </div>
        </div>
      )}

    </div>
  );
};

export default Tasks;