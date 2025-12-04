import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, MessageSquare } from 'lucide-react';

const Collaboration: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 md:p-8 bg-gray-100 dark:bg-slate-900 h-full overflow-y-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-semibold text-gray-800 dark:text-white">Collaboration</h1>
        <button className="flex items-center space-x-2 px-4 py-2 bg-violet-600 text-white font-medium rounded-lg hover:bg-violet-700 transition-colors">
          <Plus className="w-5 h-5" />
          <span>Join or create team</span>
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 dark:bg-slate-800 dark:border-slate-700 p-6">
        <div className="flex items-center space-x-2 mb-6">
          <MessageSquare className="w-5 h-5 text-gray-600 dark:text-slate-300" />
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Teams</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Team Card 1 */}
          <div 
            onClick={() => navigate('/workspace')}
            className="bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 font-bold">Logo</div>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">SBIT-3K SIA101</h3>
                  <p className="text-sm text-gray-500 dark:text-slate-400">8 members</p>
                </div>
              </div>
            </div>
            <div className="flex items-center mt-4 pt-4 border-t border-gray-100 dark:border-slate-600 text-violet-600 dark:text-violet-400 text-sm font-medium">
              View workspace
            </div>
          </div>

          {/* Create New Card */}
          <button className="border-2 border-dashed border-gray-300 dark:border-slate-600 rounded-lg p-8 flex flex-col items-center justify-center text-center hover:border-violet-500 hover:bg-violet-50 dark:hover:bg-slate-700/50 transition-colors">
            <Plus className="w-8 h-8 text-gray-400 mb-2" />
            <p className="font-medium text-gray-700 dark:text-slate-300 mb-1">Create a new team</p>
            <p className="text-sm text-gray-500 dark:text-slate-400">Start a new workspace</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Collaboration;