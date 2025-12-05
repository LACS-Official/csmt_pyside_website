import React from 'react';
import { MockupInterface } from './components/MockupInterface';
import { AiAssistant } from './components/AiAssistant';

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
    <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
          O
        </div>
        <span className="font-bold text-xl tracking-tight text-slate-900">OmniGuard</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
        <a href="#features" className="hover:text-brand-600 transition-colors">功能特性</a>
        <a href="#demo" className="hover:text-brand-600 transition-colors">在线演示</a>
        <a href="#pricing" className="hover:text-brand-600 transition-colors">专业版</a>
      </div>
      <button className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2 rounded-full text-sm font-medium transition-all shadow-lg shadow-slate-900/10">
        免费下载
      </button>
    </div>
  </nav>
);

const FeatureCard = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
  <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
    <div className="w-12 h-12 bg-brand-50 text-brand-600 rounded-lg flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
    <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
  </div>
);

function App() {
  return (
    <div className="min-h-screen pt-16 font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-20 lg:pt-32 lg:pb-28">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-brand-50/50 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-600 text-xs font-semibold uppercase tracking-wide mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
            v3.0 全新发布
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 tracking-tight mb-6">
            不仅仅是管理，<br />
            更是<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-cyan-500">极致掌控</span>
          </h1>
          <p className="text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            OmniGuard 为专业用户打造。集成进程控制、硬件监控、开发环境配置于一体。简洁、纯净、高效。
          </p>
          <div className="flex items-center justify-center gap-4 mb-20">
            <button className="px-8 py-3.5 bg-brand-600 hover:bg-brand-700 text-white rounded-full font-semibold shadow-xl shadow-brand-500/20 transition-all transform hover:-translate-y-0.5">
              立即下载 Windows 版
            </button>
            <button className="px-8 py-3.5 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 rounded-full font-semibold transition-all">
              查看更新日志
            </button>
          </div>

          {/* Interactive Demo Wrapper */}
          <div id="demo" className="relative max-w-5xl mx-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-500 via-cyan-400 to-brand-500 rounded-2xl blur opacity-20"></div>
            <div className="relative bg-slate-900 p-2 rounded-2xl shadow-2xl ring-1 ring-slate-900/5">
              {/* Window Controls */}
              <div className="h-8 bg-[#f3f3f3] rounded-t-xl flex items-center px-4 gap-2 border-b border-slate-200">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <div className="mx-auto text-xs text-slate-400 font-medium select-none">OmniGuard Dashboard</div>
              </div>
              {/* The Actual Mockup Component */}
              <div className="h-[600px] w-full bg-white rounded-b-xl overflow-hidden">
                 <MockupInterface />
              </div>
            </div>

            {/* AI Assistant Floating Widget */}
            <div className="absolute -right-12 -bottom-10 hidden xl:block transform hover:scale-105 transition-transform duration-300">
              <AiAssistant />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">为什么选择 OmniGuard?</h2>
            <p className="text-slate-500">抛弃臃肿，回归纯粹的系统管理体验</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>}
              title="精准硬件监控"
              desc="实时获取 CPU、内存、GPU 及网络吞吐数据。基于内核级的监控引擎，占用资源极低。"
            />
            <FeatureCard 
              icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>}
              title="智能垃圾清理"
              desc="AI 驱动的扫描引擎，准确识别系统缓存、残留文件。在保证系统稳定的前提下释放最大空间。"
            />
            <FeatureCard 
              icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>}
              title="开发者工具箱"
              desc="内置 Node, Python 环境管理、Hosts 编辑、端口查杀等开发者常用工具，效率倍增。"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-slate-800 rounded flex items-center justify-center text-white font-bold text-xs">O</div>
            <span className="font-semibold text-slate-900">OmniGuard</span>
          </div>
          <div className="text-slate-500 text-sm">
            © 2024 OmniGuard Inc. All rights reserved.
          </div>
          <div className="flex gap-6 text-slate-400 hover:text-slate-600">
             <a href="#" className="transition-colors">隐私政策</a>
             <a href="#" className="transition-colors">服务条款</a>
             <a href="#" className="transition-colors">联系我们</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
