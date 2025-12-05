import React, { useState } from 'react';
import { DiskInfo, NavItem } from '../types';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

// Mock Data matching the screenshot
const DISK_DATA: DiskInfo[] = [
  { letter: 'A:\\', fs: 'NTFS', total: 500.00, used: 150.06, free: 349.94, percent: 30.0 },
  { letter: 'B:\\', fs: 'NTFS', total: 38.07, used: 5.29, free: 32.77, percent: 13.9 },
  { letter: 'C:\\', fs: 'NTFS', total: 300.00, used: 248.99, free: 51.01, percent: 83.0 },
  { letter: 'D:\\', fs: 'NTFS', total: 500.00, used: 276.08, free: 223.92, percent: 55.2 },
  { letter: 'E:\\', fs: 'NTFS', total: 200.00, used: 69.05, free: 130.94, percent: 34.5 },
];

const NAV_ITEMS: NavItem[] = [
  { id: 'dashboard', label: '仪表盘', active: true },
  { id: 'process', label: '进程管理' },
  { id: 'apps', label: '应用管理' },
  { id: 'registry', label: '注册表管理' },
  { id: 'dev', label: '开发环境' },
  { id: 'pkg', label: '包管理' },
  { id: 'settings', label: '设置' },
];

const NETWORK_DATA = Array.from({ length: 20 }, (_, i) => ({
  name: i.toString(),
  uv: Math.floor(Math.random() * 50) + 10,
}));

export const MockupInterface: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="w-full h-full bg-white flex overflow-hidden text-sm select-none font-sans">
      {/* Sidebar - Matching the Blue Style */}
      <div className="w-48 bg-white p-3 flex flex-col gap-2 border-r border-slate-100 flex-shrink-0">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`
              w-full py-2.5 px-4 rounded text-center transition-all duration-200 font-medium tracking-wide
              ${item.id === activeTab 
                ? 'bg-[#0078d4] text-white shadow-md shadow-blue-200' 
                : 'bg-white text-slate-600 hover:bg-slate-50 border border-transparent hover:border-slate-200'}
            `}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="flex-1 bg-white p-6 overflow-y-auto">
        {activeTab === 'dashboard' ? (
          <div className="space-y-6 max-w-5xl mx-auto">
            
            {/* Row 1: System Overview Cards */}
            <div className="border border-slate-200 rounded-lg p-5 shadow-sm">
              <h3 className="text-slate-500 mb-4 border-l-4 border-[#0078d4] pl-2 font-medium">系统概览</h3>
              <div className="grid grid-cols-2 gap-10">
                {/* Left Column: CPU & Disk */}
                <div className="space-y-8">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-slate-500">CPU使用率</span>
                    </div>
                    <div className="text-3xl font-bold text-slate-800 mb-2">17.4%</div>
                    <div className="w-full bg-slate-100 h-6 rounded-sm overflow-hidden relative">
                      <div className="bg-[#00c853] h-full transition-all duration-1000 ease-out flex items-center px-2 text-xs text-white" style={{ width: '17.4%' }}>
                        17%
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-slate-500">磁盘使用率</span>
                    </div>
                    <div className="text-3xl font-bold text-slate-800 mb-2">30.0%</div>
                    <div className="w-full bg-slate-100 h-6 rounded-sm overflow-hidden relative">
                       <div className="bg-[#00c853] h-full transition-all duration-1000 ease-out flex items-center px-2 text-xs text-white" style={{ width: '30%' }}>
                        30%
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column: Memory & Network */}
                <div className="space-y-8">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-slate-500">内存使用率</span>
                    </div>
                    <div className="text-3xl font-bold text-slate-800 mb-2">68.8%</div>
                     <div className="w-full bg-slate-100 h-6 rounded-sm overflow-hidden relative">
                       <div className="bg-[#f5a623] h-full transition-all duration-1000 ease-out flex items-center px-2 text-xs text-white" style={{ width: '68.8%' }}>
                        68%
                      </div>
                    </div>
                  </div>

                  <div>
                     <div className="flex justify-between mb-1">
                      <span className="text-slate-500">网络流量</span>
                    </div>
                    <div className="h-20 flex items-center gap-4">
                      <div className="flex-1 space-y-2 text-slate-600">
                        <div className="flex justify-between text-xs"><span>上传:</span> <span>4.54 KB/s</span></div>
                        <div className="flex justify-between text-xs"><span>下载:</span> <span>9.8 KB/s</span></div>
                      </div>
                      <div className="w-24 h-16 opacity-50">
                        <ResponsiveContainer width="100%" height="100%">
                          <AreaChart data={NETWORK_DATA}>
                            <defs>
                              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                              </linearGradient>
                            </defs>
                            <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" isAnimationActive={true} />
                          </AreaChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2: System Info */}
            <div className="border border-slate-200 rounded-lg p-5 shadow-sm">
              <h3 className="text-slate-500 mb-4 border-l-4 border-[#0078d4] pl-2 font-medium">系统信息</h3>
              <div className="overflow-hidden rounded border border-slate-200">
                <table className="w-full text-left">
                  <thead className="bg-slate-100 text-slate-600 font-medium">
                    <tr>
                      <th className="p-3 border-b border-r border-slate-200 w-32 text-center">项目</th>
                      <th className="p-3 border-b border-slate-200 text-center">信息</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    <tr><td className="p-3 border-r border-slate-200 text-center text-slate-500">操作系统</td><td className="p-3">Windows 11 Pro</td></tr>
                    <tr><td className="p-3 border-r border-slate-200 text-center text-slate-500">CPU型号</td><td className="p-3">AMD Ryzen 9 7950X 16-Core Processor</td></tr>
                    <tr><td className="p-3 border-r border-slate-200 text-center text-slate-500">内存总量</td><td className="p-3">64.00 GB</td></tr>
                    <tr><td className="p-3 border-r border-slate-200 text-center text-slate-500">显卡信息</td><td className="p-3">NVIDIA GeForce RTX 4090</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Row 3: Disk Info */}
            <div className="border border-slate-200 rounded-lg p-5 shadow-sm">
              <h3 className="text-slate-500 mb-4 border-l-4 border-[#0078d4] pl-2 font-medium">磁盘信息</h3>
              <div className="overflow-hidden rounded border border-slate-200">
                <table className="w-full text-left">
                  <thead className="bg-slate-100 text-slate-600 font-medium">
                    <tr>
                      <th className="p-3 border-b border-r border-slate-200">盘符</th>
                      <th className="p-3 border-b border-r border-slate-200">文件系统</th>
                      <th className="p-3 border-b border-r border-slate-200">总量(GB)</th>
                      <th className="p-3 border-b border-r border-slate-200">已用(GB)</th>
                      <th className="p-3 border-b border-r border-slate-200">可用(GB)</th>
                      <th className="p-3 border-b border-slate-200">使用率(%)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    {DISK_DATA.map((disk) => {
                      const color = disk.percent > 80 ? 'text-red-500' : disk.percent > 50 ? 'text-orange-500' : 'text-[#00c853]';
                      return (
                        <tr key={disk.letter} className="hover:bg-slate-50">
                          <td className="p-3 border-r border-slate-200">{disk.letter}</td>
                          <td className="p-3 border-r border-slate-200">{disk.fs}</td>
                          <td className="p-3 border-r border-slate-200">{disk.total.toFixed(2)}</td>
                          <td className="p-3 border-r border-slate-200">{disk.used.toFixed(2)}</td>
                          <td className="p-3 border-r border-slate-200">{disk.free.toFixed(2)}</td>
                          <td className={`p-3 font-medium ${color}`}>{disk.percent.toFixed(1)}%</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        ) : (
          <div className="flex h-full items-center justify-center text-slate-400 flex-col gap-4">
            <svg className="w-16 h-16 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <p>模块开发中: {NAV_ITEMS.find(n => n.id === activeTab)?.label}</p>
          </div>
        )}
      </div>
    </div>
  );
};
