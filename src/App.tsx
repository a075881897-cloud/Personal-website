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
  ChevronRight,
  FileText,
  MonitorPlay,
  File
} from 'lucide-react';

const PROJECTS = [
  { id: 1, title: '清明連假旅行規劃 Word', date: '2026/03/09', type: 'doc', link: 'https://drive.google.com/file/d/1fw7qdT-_L0XICJ4XfZJIBkCbmwjwD1-i/view', embed: 'https://drive.google.com/file/d/1fw7qdT-_L0XICJ4XfZJIBkCbmwjwD1-i/preview' },
  { id: 2, title: '清明連假旅行規劃 簡報', date: '2026/03/17', type: 'slide', link: 'https://docs.google.com/presentation/d/1ah96SQlHrZtaTVJFVWZmFPAnCZRpnAQKpivA01la6NI/present?slide=id.p1', embed: 'https://docs.google.com/presentation/d/1ah96SQlHrZtaTVJFVWZmFPAnCZRpnAQKpivA01la6NI/embed' },
  { id: 3, title: 'Gamma 清明連假 PDF', date: '2026/03/23', type: 'pdf', link: 'https://drive.google.com/file/d/1ufHWkeiZDmUC8vFBG256pWUhRraeT3Om/view', embed: 'https://drive.google.com/file/d/1ufHWkeiZDmUC8vFBG256pWUhRraeT3Om/preview' },
  { id: 4, title: 'Manus清明連假 PPT', date: '2026/03/23', type: 'slide', link: 'https://drive.google.com/file/d/1ufHWkeiZDmUC8vFBG256pWUhRraeT3Om/view', embed: 'https://drive.google.com/file/d/1ufHWkeiZDmUC8vFBG256pWUhRraeT3Om/preview' },
  { id: 5, title: 'Notebook LM清明連假 PDF', date: '2026/03/23', type: 'pdf', link: 'https://drive.google.com/file/d/1fr0knU9DIZxv2RhPy2MhnBkXp4e9HOhy/view', embed: 'https://drive.google.com/file/d/1fr0knU9DIZxv2RhPy2MhnBkXp4e9HOhy/preview' },
  { id: 6, title: '清明連假 PPT', date: '2026/04/05', type: 'slide', link: 'https://drive.google.com/file/d/1iWbri1niIekE2YaWTMw3Mcjfak9uSmPO/view', embed: 'https://drive.google.com/file/d/1iWbri1niIekE2YaWTMw3Mcjfak9uSmPO/preview' },
  { id: 7, title: '3D公仔', date: '2026/04/13', type: '3d', link: 'https://studio.tripo3d.ai/3d-model/12705dfd-ecfa-4486-a8fe-9091f9c2e1dd?invite_code=5OKBBA', embed: null },
];

export default function App() {
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);

  const getProjectIcon = (type: string) => {
    switch (type) {
      case 'doc': return <FileText className="w-6 h-6 text-blue-500" />;
      case 'slide': return <MonitorPlay className="w-6 h-6 text-orange-500" />;
      case 'pdf': return <File className="w-6 h-6 text-red-500" />;
      case '3d': return <Globe className="w-6 h-6 text-purple-500" />;
      default: return <FileText className="w-6 h-6 text-gray-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans pb-20">
      <header className="bg-white border-b-4 border-primary-500 shadow-sm pt-16 pb-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-primary-500 blur-3xl"></div>
          <div className="absolute top-40 right-40 w-64 h-64 rounded-full bg-blue-500 blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-8">
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden shadow-lg border-4 border-white bg-gray-200 shrink-0">
            <img 
              src="https://drive.google.com/thumbnail?id=10lrx8OVicC0Jr-lOQd6esyhhwCNHRMOK&sz=w800" 
              alt="Hsuan Yu Chen" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center md:text-left flex-1">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">陳宣諭</h1>
            <h2 className="text-2xl text-gray-500 font-light mb-4 uppercase tracking-widest">Hsuan Yu Chen</h2>
            
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-gray-600 mb-6 bg-gray-100/50 inline-flex p-3 rounded-xl border border-gray-100">
              <span className="flex items-center gap-2">雙魚座</span>
              <span className="w-1 h-1 rounded-full bg-gray-300"></span>
              <span className="flex items-center gap-2">A型</span>
              <span className="w-1 h-1 rounded-full bg-gray-300"></span>
              <span className="flex items-center gap-2">2007-02-28</span>
            </div>
            
            <div className="flex items-center justify-center md:justify-start">
              <a href="mailto:A111182112@nkust.edu.tw" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium transition-colors bg-primary-50 px-4 py-2 rounded-lg">
                <Mail className="w-5 h-5" />
                A111182112@nkust.edu.tw
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 mt-12 space-y-12">
        <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-lg leading-relaxed text-gray-700">
          您好，我是陳宣諭，目前就讀大學，個性主動積極，對於學習新事物充滿熱情。樂於與不同人交流合作在挑戰中成長，持續提升自己能力。
        </section>

        <div className="grid md:grid-cols-2 gap-8">
          <section className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3 pb-2 border-b-2 border-primary-100">
              <Briefcase className="w-6 h-6 text-primary-500" />
              工作經歷
            </h3>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-full">
              <div className="flex flex-col gap-1 mb-4">
                <span className="text-sm font-bold text-primary-600 bg-primary-50 w-fit px-3 py-1 rounded-full">2024-07 - 現在</span>
                <h4 className="text-lg font-bold text-gray-900 mt-2">六和小玲</h4>
                <p className="text-gray-500 font-medium">服務業</p>
              </div>
              <ul className="space-y-3 text-gray-600 list-disc list-inside marker:text-primary-400">
                <li>協助門市日常營運執行，執行標準化作業流程維護顧客體驗</li>
                <li>負責POS操作、飲品調製與現場流程管理</li>
                <li>負責門市營銷執行，包含顧客服務、飲品製作及品質控管，確保出餐效率</li>
              </ul>
            </div>
          </section>

          <section className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3 pb-2 border-b-2 border-primary-100">
              <GraduationCap className="w-6 h-6 text-primary-500" />
              學歷
            </h3>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-full">
              <div className="flex flex-col gap-1 mb-2">
                <span className="text-sm font-bold text-primary-600 bg-primary-50 w-fit px-3 py-1 rounded-full">2022 - 現在</span>
                <h4 className="text-lg font-bold text-gray-900 mt-2">國立高雄科技大學</h4>
                <p className="text-gray-500 font-medium">航運技術系</p>
              </div>
            </div>
          </section>
        </div>

        <section className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3 pb-2 border-b-2 border-primary-100">
            <BookOpen className="w-6 h-6 text-primary-500" />
            學期作業
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {PROJECTS.map((project) => (
              <div 
                key={project.id} 
                className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-primary-200 transition-all cursor-pointer group flex flex-col items-center text-center gap-3"
                onClick={() => setSelectedProject(project)}
              >
                <div className="w-14 h-14 rounded-full bg-gray-50 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary-50 transition-all">
                  {getProjectIcon(project.type)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 line-clamp-2 text-sm mb-1 group-hover:text-primary-600 transition-colors">{project.title}</h4>
                  <p className="text-xs text-gray-400">{project.date}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="grid md:grid-cols-2 gap-8">
          <section className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3 pb-2 border-b-2 border-primary-100">
              <Terminal className="w-6 h-6 text-primary-500" />
              技能
            </h3>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-6 h-full">
              
              <div>
                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">語言能力</h4>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="bg-gray-50 p-3 rounded-xl">
                    <p className="text-xs text-gray-500 mb-1">英文</p>
                    <p className="font-semibold text-gray-900 text-sm">TOEIC</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-xl">
                    <p className="text-xs text-gray-500 mb-1">中文</p>
                    <p className="font-semibold text-gray-900 text-sm">精通</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-xl">
                    <p className="text-xs text-gray-500 mb-1">台語</p>
                    <p className="font-semibold text-gray-900 text-sm">精通</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">電腦技能</h4>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">辦公室應用軟體</p>
                    <div className="flex flex-wrap gap-2">
                      {['Word', 'Excel', 'Powerpoint'].map(s => (
                        <span key={s} className="bg-blue-50 text-blue-700 text-xs px-2.5 py-1 rounded-md border border-blue-100">{s}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">專業應用軟體 (Google Workspace)</p>
                    <div className="flex flex-wrap gap-2">
                      {['Gmail', 'Drive', 'Meet'].map(s => (
                        <span key={s} className="bg-green-50 text-green-700 text-xs px-2.5 py-1 rounded-md border border-green-100">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>

          <section className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3 pb-2 border-b-2 border-primary-100">
              <Award className="w-6 h-6 text-primary-500" />
              專業證照
            </h3>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-full">
              <ul className="space-y-4 text-sm text-gray-700 font-medium">
                <li className="flex items-start gap-3">
                  <div className="mt-0.5"><Award className="w-4 h-4 text-primary-400" /></div>
                  進階滅火 (Advanced Fire Fighting)
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-0.5"><Award className="w-4 h-4 text-primary-400" /></div>
                  基礎訓練 (Basic Safety Training)
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-0.5"><Award className="w-4 h-4 text-primary-400" /></div>
                  油輪與化學槽船貨物操作基本訓練 (Basic Training for Oil and Chemical Tanker Cargo Operations)
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-0.5"><Award className="w-4 h-4 text-primary-400" /></div>
                  保全職責 (Designated Security Duties)
                </li>
              </ul>
            </div>
          </section>
        </div>

        <section className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3 pb-2 border-b-2 border-primary-100">
            <User className="w-6 h-6 text-primary-500" />
            自傳
          </h3>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-gray-700 leading-loose space-y-6 columns-1 md:columns-2 gap-8">
            <p className="break-inside-avoid">
              我目前就讀國立高雄科技大學航運技術系。在一個氣氛很輕鬆的家庭長大，跟家人相處比較像朋友。很多事情都可以直接說出來討論，而不是用責難的方式解決。也因為這樣，我習慣先聽別人的想法，再慢慢說出自己的意見。遇到問題時，比起衝動反應我會先想一想再行動。
            </p>
            <p className="break-inside-avoid">
              以前的我其實很愛玩，常常只在意當下開不開心，對未來沒有想太多。但隨著年紀慢慢長大，開始發現時間過得很快，也開始思考自己到底想要什麼樣的生活。這幾年我變得比較會替未來打算，也會提醒自己不要只過著一天算一天，而是要為之後的目標慢慢提升實力。這樣的轉變，讓我覺得自己真的有在長大。
            </p>
            <p className="break-inside-avoid">
              平常我很喜歡散步。對我來說散步不只是運動，而是一種讓自己靜下來的方式。有時候心裡很煩，跑一跑反而會想通很多事情除此之外我也很喜歡聽音樂的運動之一，雖然常常會跌倒，但每次成功做出新的動作時都會很有成就感。這些興趣讓我學會堅持，也讓我遇到挫折時不會輕易放棄。
            </p>
            <p className="break-inside-avoid">
              對未來，我希望能找到一份穩定的工作，讓自己有安全感，也能照顧好家人。等到退休之後，如果有機會，我也想去環遊世界，去看看不同地方的生活方式。我覺得努力工作不只是為了賺錢，也是為了讓未來有更多選擇。
            </p>
            <p className="break-inside-avoid font-medium text-primary-700 bg-primary-50 p-4 rounded-xl">
              我知道自己還在成長的過程中，還有很多不足的地方，但我會慢慢改進。希望在接下來的學習階段，能讓自己變得更成熟、更有方向。
            </p>
          </div>
        </section>
      </main>

      {selectedProject && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-5xl h-[85vh] flex flex-col overflow-hidden shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-gray-50">
              <h3 className="text-xl font-bold text-gray-900 flex items-center gap-3">
                {getProjectIcon(selectedProject.type)}
                {selectedProject.title}
              </h3>
              <div className="flex items-center gap-2">
                <a 
                  href={selectedProject.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-primary-600 hover:text-primary-700 bg-primary-50 px-3 py-1.5 rounded-lg transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  在新分頁開啟
                </a>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="flex-1 bg-gray-100 w-full relative">
              {selectedProject.embed ? (
                <iframe 
                  src={selectedProject.embed} 
                  className="w-full h-full border-0 absolute inset-0"
                  allow="autoplay"
                ></iframe>
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-center p-8">
                  <div className="w-24 h-24 bg-purple-100 text-purple-500 rounded-full flex items-center justify-center mb-6">
                    <Globe className="w-12 h-12" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">3D 模型無法直接預覽</h4>
                  <p className="text-gray-500 mb-8 max-w-sm">
                    此項目需要在原平台開啟以獲得最佳的 3D 互動體驗。
                  </p>
                  <a 
                    href={selectedProject.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white font-medium bg-primary-600 hover:bg-primary-700 px-6 py-3 rounded-xl transition-all shadow-md hover:shadow-lg"
                  >
                    前往 Tripo3D 預覽
                    <ExternalLink className="w-5 h-5" />
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
