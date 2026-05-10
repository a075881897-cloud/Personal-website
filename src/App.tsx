import React, { useState } from 'react';
import { 
  Mail, 
  Briefcase, 
  GraduationCap, 
  Award, 
  BookOpen, 
  User, 
  Terminal, 
  Globe, 
  X, 
  ExternalLink,
  FileText,
  MonitorPlay,
  File
} from 'lucide-react';

const PROJECTS = [
  { id: 1, title: '清明連假旅行規劃 Word', date: '03/09', type: 'doc', link: 'https://drive.google.com/file/d/1fw7qdT-_L0XICJ4XfZJIBkCbmwjwD1-i/view', embed: 'https://drive.google.com/file/d/1fw7qdT-_L0XICJ4XfZJIBkCbmwjwD1-i/preview' },
  { id: 2, title: '清明連假旅行規劃 簡報', date: '03/17', type: 'slide', link: 'https://docs.google.com/presentation/d/1ah96SQlHrZtaTVJFVWZmFPAnCZRpnAQKpivA01la6NI/present?slide=id.p1', embed: 'https://docs.google.com/presentation/d/1ah96SQlHrZtaTVJFVWZmFPAnCZRpnAQKpivA01la6NI/embed' },
  { id: 3, title: 'Gamma 清明連假 PDF', date: '03/23', type: 'pdf', link: 'https://drive.google.com/file/d/1ufHWkeiZDmUC8vFBG256pWUhRraeT3Om/view', embed: 'https://drive.google.com/file/d/1ufHWkeiZDmUC8vFBG256pWUhRraeT3Om/preview' },
  { id: 4, title: 'Manus清明連假 PPT', date: '03/23', type: 'slide', link: 'https://drive.google.com/file/d/1ufHWkeiZDmUC8vFBG256pWUhRraeT3Om/view', embed: 'https://drive.google.com/file/d/1ufHWkeiZDmUC8vFBG256pWUhRraeT3Om/preview' },
  { id: 5, title: 'Notebook LM清明連假 PDF', date: '03/23', type: 'pdf', link: 'https://drive.google.com/file/d/1fr0knU9DIZxv2RhPy2MhnBkXp4e9HOhy/view', embed: 'https://drive.google.com/file/d/1fr0knU9DIZxv2RhPy2MhnBkXp4e9HOhy/preview' },
  { id: 6, title: '清明連假 PPT', date: '04/05', type: 'slide', link: 'https://drive.google.com/file/d/1iWbri1niIekE2YaWTMw3Mcjfak9uSmPO/view', embed: 'https://drive.google.com/file/d/1iWbri1niIekE2YaWTMw3Mcjfak9uSmPO/preview' },
  { id: 7, title: '3D公仔', date: '04/13', type: '3d', link: 'https://studio.tripo3d.ai/3d-model/12705dfd-ecfa-4486-a8fe-9091f9c2e1dd?invite_code=5OKBBA', embed: null },
];

export default function App() {
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);

  const getProjectIcon = (type: string) => {
    switch (type) {
      case 'doc': return <FileText className="w-5 h-5" />;
      case 'slide': return <MonitorPlay className="w-5 h-5" />;
      case 'pdf': return <File className="w-5 h-5" />;
      case '3d': return <Globe className="w-5 h-5" />;
      default: return <FileText className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F7F2] font-serif pb-24 selection:bg-[#E9E4D9] selection:text-[#2D2926]">
      {/* Header/Hero Section */}
      <header className="bg-[#E9E4D9] border-b border-[#D9D2C3] pt-16 pb-12">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="w-40 h-40 md:w-48 md:h-48 border border-[#D9D2C3] bg-[#F9F7F2] p-2 shrink-0">
            <img 
              src="https://drive.google.com/thumbnail?id=10lrx8OVicC0Jr-lOQd6esyhhwCNHRMOK&sz=w800"
              alt="Hsuan Yu Chen" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover grayscale opacity-90 transition-all duration-700 hover:grayscale-0 hover:opacity-100"
            />
          </div>
          <div className="text-center md:text-left flex-1 py-2">
            <p className="text-[10px] tracking-[0.2em] text-[#8C7B6A] uppercase font-sans font-bold mb-3">
              Personal Archive
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-[#2D2926] font-serif tracking-tight mb-2">
              陳宣諭
            </h1>
            <h2 className="text-lg text-[#8C7B6A] font-sans font-light uppercase tracking-[0.2em]">
              Hsuan Yu Chen
            </h2>
            
            <div className="w-12 h-1 bg-[#BC6C25] mt-6 mb-6 mx-auto md:mx-0"></div>
            
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs font-sans text-[#6B645E] mb-8">
              <span className="flex items-center gap-2">雙魚座</span>
              <span className="text-[#D9D2C3]">|</span>
              <span className="flex items-center gap-2">A型</span>
              <span className="text-[#D9D2C3]">|</span>
              <span className="flex items-center gap-2 font-mono">2007/02/28</span>
            </div>
            
            <div className="flex items-center justify-center md:justify-start">
              <a href="mailto:A111182112@nkust.edu.tw" className="inline-flex items-center gap-3 text-xs font-sans font-bold px-5 py-3 border border-[#BC6C25] text-[#BC6C25] hover:bg-[#BC6C25] hover:text-white transition-colors uppercase tracking-widest">
                <Mail className="w-4 h-4" />
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 mt-12 space-y-12">
        
        {/* Intro */}
        <section className="bg-white p-6 md:p-8 border border-[#D9D2C3] flex items-stretch gap-6">
          <div className="w-1 bg-[#BC6C25] shrink-0"></div>
          <p className="text-lg md:text-xl leading-relaxed text-[#4A443F] italic font-serif py-2">
            您好，我是陳宣諭，目前就讀大學，個性主動積極，對於學習新事物充滿熱情。樂於與不同人交流合作在挑戰中成長，持續提升自己能力。
          </p>
        </section>

        {/* Experience & Education Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Work Experience */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 pb-3 border-b border-[#D9D2C3]">
              <Briefcase className="w-5 h-5 text-[#8C7B6A]" />
              <h3 className="text-xl text-[#2D2926] font-serif">工作經歷</h3>
            </div>
            <div className="bg-white p-6 border border-[#D9D2C3] h-[calc(100%-48px)]">
              <div className="flex flex-col gap-1 mb-5">
                <span className="text-[10px] uppercase tracking-[0.1em] text-[#8C7B6A] font-sans font-bold">2024/07 - Present</span>
                <h4 className="text-lg font-bold text-[#2D2926] font-serif mt-2">六和小玲</h4>
                <p className="text-xs text-[#8C7B6A] font-sans italic">服務業</p>
              </div>
              <ul className="space-y-3 text-[#6B645E] text-sm leading-relaxed list-disc list-inside">
                <li>協助門市日常營運執行，執行標準化作業流程維護顧客體驗</li>
                <li>負責 POS 操作、飲品調製與現場流程管理</li>
                <li>負責門市營銷執行，包含顧客服務、飲品製作及品質控管，確保出餐效率</li>
              </ul>
            </div>
          </section>

          {/* Education */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 pb-3 border-b border-[#D9D2C3]">
              <GraduationCap className="w-5 h-5 text-[#8C7B6A]" />
              <h3 className="text-xl text-[#2D2926] font-serif">學歷</h3>
            </div>
            <div className="bg-white p-6 border border-[#D9D2C3] h-[calc(100%-48px)]">
              <div className="flex flex-col gap-1 mb-2">
                <span className="text-[10px] uppercase tracking-[0.1em] text-[#8C7B6A] font-sans font-bold">2022 - Present</span>
                <h4 className="text-lg font-bold text-[#2D2926] font-serif mt-2">國立高雄科技大學</h4>
                <p className="text-sm text-[#8C7B6A] font-sans mt-2">航運技術系</p>
              </div>
            </div>
          </section>
        </div>

        {/* Projects / Assignments */}
        <section className="space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-[#D9D2C3]">
            <div className="flex items-center gap-3">
              <BookOpen className="w-5 h-5 text-[#8C7B6A]" />
              <h3 className="text-xl text-[#2D2926] font-serif">學期作業</h3>
            </div>
            <span className="text-xs font-sans text-[#8C7B6A]">(共 {PROJECTS.length} 筆)</span>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            {PROJECTS.map((project, index) => {
              const borderColors = ['#BC6C25', '#606C38', '#283618', '#D9D2C3'];
              const borderColor = borderColors[index % borderColors.length];
              
              return (
              <div 
                key={project.id} 
                className="bg-white p-5 border border-[#D9D2C3] border-l-4 shadow-sm hover:bg-[#F9F7F2] transition-colors cursor-pointer group flex items-start gap-4"
                style={{ borderLeftColor: borderColor }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="text-[#A69D91] mt-1 group-hover:text-[#2D2926] transition-colors">
                  {getProjectIcon(project.type)}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-[#2D2926] text-sm group-hover:text-[#BC6C25] transition-colors mb-1">
                    {project.title}
                  </h4>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-[#A69D91] font-mono">{project.date}</span>
                    <span className="text-[10px] px-1.5 py-0.5 bg-[#E9E4D9] text-[#6B645E] font-sans uppercase tracking-wider">
                      {project.type}
                    </span>
                  </div>
                </div>
              </div>
            )})}
          </div>
        </section>

        {/* Skills & Certs */}
        <div className="grid md:grid-cols-2 gap-8">
          <section className="space-y-6">
            <div className="flex items-center gap-3 pb-3 border-b border-[#D9D2C3]">
              <Terminal className="w-5 h-5 text-[#8C7B6A]" />
              <h3 className="text-xl text-[#2D2926] font-serif">技能與工具</h3>
            </div>
            <div className="bg-white p-6 border border-[#D9D2C3] space-y-8 h-[calc(100%-48px)]">
              
              <div>
                <p className="text-[10px] uppercase tracking-widest text-[#8C7B6A] font-sans font-bold mb-4">語言能力</p>
                <div className="grid grid-cols-3 gap-3">
                  <div className="border border-[#D9D2C3] bg-[#F9F7F2] p-3 text-center">
                    <p className="text-[10px] text-[#8C7B6A] uppercase tracking-wider mb-1 font-sans">English</p>
                    <p className="font-bold text-[#4A443F] text-sm font-sans">TOEIC</p>
                  </div>
                  <div className="border border-[#D9D2C3] bg-[#F9F7F2] p-3 text-center">
                    <p className="text-[10px] text-[#8C7B6A] uppercase tracking-wider mb-1 font-sans">Mandarin</p>
                    <p className="font-bold text-[#4A443F] text-sm font-sans">精通</p>
                  </div>
                  <div className="border border-[#D9D2C3] bg-[#F9F7F2] p-3 text-center">
                    <p className="text-[10px] text-[#8C7B6A] uppercase tracking-wider mb-1 font-sans">Taiwanese</p>
                    <p className="font-bold text-[#4A443F] text-sm font-sans">精通</p>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-widest text-[#8C7B6A] font-sans font-bold mb-4">專業應用</p>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-sans text-[#6B645E] mb-2 italic">Office Suite</p>
                    <div className="flex flex-wrap gap-2">
                      {['Word', 'Excel', 'PowerPoint'].map(s => (
                        <span key={s} className="border border-[#D9D2C3] bg-[#E9E4D9] text-[#4A443F] text-xs px-3 py-1 font-sans">{s}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-sans text-[#6B645E] mb-2 italic">Google Workspace</p>
                    <div className="flex flex-wrap gap-2">
                      {['Gmail', 'Drive', 'Meet'].map(s => (
                        <span key={s} className="border border-[#D9D2C3] bg-[#E9E4D9] text-[#4A443F] text-xs px-3 py-1 font-sans">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>

          <section className="space-y-6">
            <div className="flex items-center gap-3 pb-3 border-b border-[#D9D2C3]">
              <Award className="w-5 h-5 text-[#8C7B6A]" />
              <h3 className="text-xl text-[#2D2926] font-serif">專業證照</h3>
            </div>
            <div className="bg-white p-6 border border-[#D9D2C3] h-[calc(100%-48px)]">
              <ul className="space-y-5 text-[#4A443F] text-sm font-sans">
                <li className="flex items-start gap-4">
                  <div className="mt-0.5 p-1 bg-[#E9E4D9] text-[#BC6C25] shrink-0"><Award className="w-4 h-4" /></div>
                  <span className="leading-relaxed">進階滅火<br/><span className="text-[#8C7B6A] text-xs">Advanced Fire Fighting</span></span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-0.5 p-1 bg-[#E9E4D9] text-[#BC6C25] shrink-0"><Award className="w-4 h-4" /></div>
                  <span className="leading-relaxed">基礎訓練<br/><span className="text-[#8C7B6A] text-xs">Basic Safety Training</span></span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-0.5 p-1 bg-[#E9E4D9] text-[#BC6C25] shrink-0"><Award className="w-4 h-4" /></div>
                  <span className="leading-relaxed">油輪與化學槽船貨物操作基本訓練<br/><span className="text-[#8C7B6A] text-xs">Basic Training for Oil and Chemical Tanker Cargo Operations</span></span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-0.5 p-1 bg-[#E9E4D9] text-[#BC6C25] shrink-0"><Award className="w-4 h-4" /></div>
                  <span className="leading-relaxed">保全職責<br/><span className="text-[#8C7B6A] text-xs">Designated Security Duties</span></span>
                </li>
              </ul>
            </div>
          </section>
        </div>

        {/* Autobiography */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-[#D9D2C3]">
            <User className="w-5 h-5 text-[#8C7B6A]" />
            <h3 className="text-xl text-[#2D2926] font-serif">自傳</h3>
          </div>
          <div className="bg-white p-8 border border-[#D9D2C3] text-[#4A443F] leading-loose space-y-6 columns-1 md:columns-2 gap-10">
            <p className="break-inside-avoid">
              我目前就讀國立高雄科技大學航運技術系。在一個氣氛很輕鬆的家庭長大，跟家人相處比較像朋友。很多事情都可以直接說出來討論，而不是用責難的方式解決。也因為這樣，我習慣先聽別人的想法，再慢慢說出自己的意見。遇到問題時，比起衝動反應我會先想一想再行動。
            </p>
            <p className="break-inside-avoid">
              以前的我其實很愛玩，常常只在意當下開不開心，對未來沒有想太多。但隨著年紀慢慢長大，開始發現時間過得很快，也開始思考自己到底想要什麼樣的生活。這幾年我變得比較會替未來打算，也會提醒自己不要只過著一天算一天，而是要為之後的目標慢慢提升實力。這樣的轉變，讓我覺得自己真的有在長大。
            </p>
            <p className="break-inside-avoid">
              平常我很喜歡散步。對我來說散步不只是運動，而是一種讓自己靜下來的方式。有時候心裡很煩，跑一跑反而會想通很多事情。除此之外我也很喜歡聽音樂的運動之一，雖然常常會跌倒，但每次成功做出新的動作時都會很有成就感。這些興趣讓我學會堅持，也讓我遇到挫折時不會輕易放棄。
            </p>
            <p className="break-inside-avoid">
              對未來，我希望能找到一份穩定的工作，讓自己有安全感，也能照顧好家人。等到退休之後，如果有機會，我也想去環遊世界，去看看不同地方的生活方式。我覺得努力工作不只是為了賺錢，也是為了讓未來有更多選擇。
            </p>
          </div>
          <div className="bg-[#E9E4D9] border-l-4 border-[#BC6C25] p-6 text-[#2D2926] italic flex gap-4 mt-6">
            <p className="leading-relaxed">
              我知道自己還在成長的過程中，還有很多不足的地方，但我會慢慢改進。希望在接下來的學習階段，能讓自己變得更成熟、更有方向。
            </p>
          </div>
        </section>
      </main>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-[#2D2926]/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#F9F7F2] w-full max-w-5xl h-[85vh] flex flex-col shadow-2xl border border-[#D9D2C3] animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#D9D2C3] bg-[#E9E4D9]">
              <div className="flex items-center gap-4">
                <div className="text-[#8C7B6A]">
                  {getProjectIcon(selectedProject.type)}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#2D2926] font-serif">{selectedProject.title}</h3>
                  <p className="text-[10px] text-[#8C7B6A] font-sans uppercase tracking-[0.2em]">{selectedProject.date} Archive</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <a 
                  href={selectedProject.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hidden sm:flex items-center gap-2 text-[10px] font-sans font-bold px-4 py-2 border border-[#BC6C25] text-[#BC6C25] hover:bg-[#BC6C25] hover:text-white transition-colors tracking-widest uppercase"
                >
                  View Original
                  <ExternalLink className="w-3 h-3" />
                </a>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="p-2 text-[#8C7B6A] hover:text-[#2D2926] hover:bg-[#D9D2C3] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="flex-1 bg-[#F9F7F2] w-full relative content-center">
              {selectedProject.embed ? (
                <iframe 
                  src={selectedProject.embed} 
                  className="w-full h-full border-0 absolute inset-0 bg-white"
                  allow="autoplay"
                ></iframe>
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-center p-8">
                  <div className="w-20 h-20 bg-[#E9E4D9] text-[#BC6C25] flex items-center justify-center mb-6">
                    <Globe className="w-10 h-10" />
                  </div>
                  <h4 className="text-xl font-bold text-[#2D2926] font-serif mb-3">Model Preview Unavailable</h4>
                  <p className="text-[#6B645E] mb-8 max-w-sm text-sm font-sans italic">
                    此 3D 專案項目需要在 Tripo3D 平台開啟以獲得最佳的互動與瀏覽體驗。
                  </p>
                  <a 
                    href={selectedProject.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white font-sans text-xs font-bold bg-[#283618] hover:bg-[#1f2813] px-6 py-3 transition-all tracking-wider uppercase"
                  >
                    Enter Studio
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
