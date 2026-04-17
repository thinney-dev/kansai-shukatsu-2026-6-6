import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, ExternalLink, Building2, Lightbulb } from "lucide-react";
import React from "react";

const CompaniesSection = () => {
  const [selectedCompany, setSelectedCompany] = useState<any | null>(null);

  // 安全対策
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
      const menuBtn = document.getElementById('mobile-menu-btn');
      if (menuBtn) {
        menuBtn.style.opacity = '1';
        menuBtn.style.pointerEvents = 'auto';
      }
    };
  }, []);

  const openModal = (company: any) => {
    if (company.isComingSoon) return;
    setSelectedCompany(company);
    document.body.style.overflow = 'hidden';
    
    const menuBtn = document.getElementById('mobile-menu-btn');
    if (menuBtn) {
      menuBtn.style.opacity = '0';
      menuBtn.style.pointerEvents = 'none';
    }
  };

  const closeModal = () => {
    setSelectedCompany(null);
    document.body.style.overflow = 'unset';
    
    const menuBtn = document.getElementById('mobile-menu-btn');
    if (menuBtn) {
      menuBtn.style.opacity = '1';
      menuBtn.style.pointerEvents = 'auto';
    }
  };

  // ▼▼▼ 出展企業リスト ▼▼▼
  const companies = [
    { 
      id: 1, 
      name: "PwCコンサルティング", 
      tags: ["戦略コンサル", "外資系"], 
      textLogo: "PwC",
      logoSubText: "※ロゴ申請中",
      url: "https://www.pwc.com/jp/ja/about-us/member/consulting.html",
      details: {
        catchphrase: "世界を牽引する戦略コンサルティング部門（Strategy&）",
        stats: [
          { label: "組織の成り立ち", value: "世界最古の戦略ファームの系譜（旧Booz）" },
          { label: "提供価値", value: "Strategy to Execution（戦略から実行まで）" },
          { label: "成長環境", value: "若手からCxOアジェンダに切り込む" },
          { label: "求める人材像", value: "高度な論理的思考力を持つトップ学生" }
        ],
        strength: "PwCのグローバルネットワークにおいて、最上流の戦略コンサルティングを担うのが『PwC Strategy&』です。世界最古の戦略ファームである旧ブーズ・アンド・カンパニーのDNAを受け継ぎ、全社戦略、事業ポートフォリオ変革、プレM&A戦略といったCxO（経営層）の最重要アジェンダに向き合います。最大の強みは, 描いた戦略を机上の空論で終わらせず、PwCが擁する多様な専門家チームと連携し、確実な実行と成果創出（Strategy to Execution）まで導き切る点にあります。複雑なビジネス課題を紐解く圧倒的な思考力と、完遂力を併せ持つ優秀な学生にとって、極めてエキサイティングで成長角度の高い環境です。"
      }
    },
    { 
      id: 2, 
      // ▼▼▼ 企業名をJSX形式で維持 ▼▼▼
      name: (
        <>
          デロイト トーマツ<br />ベンチャーサポート
        </>
      ), 
      tags: ["ベンチャー支援", "戦略コンサル"], 
      logoImage: "/logo-delo.png",
  url: "https://www.deloitte.com/jp/ja/about/group/deloitte-tohmatsu-venture-support.html",
  details: {
    catchphrase: "スタートアップ支援と新規事業支援を通じて、イノベーション創出を後押しする会社",
    stats: [
      { label: "ミッション", value: "挑戦する人と共に未来を拓く" },
      { label: "主な支援領域", value: "スタートアップ支援・新規事業創出支援・官公庁/自治体支援" },
      { label: "ネットワーク", value: "国内外約5,000社のスタートアップとのネットワーク" },
      { label: "拠点", value: "国内3拠点・海外4拠点で活動" }
    ],
    strength: "デロイト トーマツ ベンチャーサポート（DTVS）は、スタートアップ支援、新規事業創出支援、官公庁や自治体と連携したイノベーター育成支援を行う会社です。就活生の視点では、ベンチャー企業の成長支援だけでなく、大企業のオープンイノベーションや新規事業づくり、政策提言・実行支援まで関われる点が特徴です。2013年から毎週開催しているピッチイベント『Morning Pitch』などを通じて、スタートアップと大企業の協業機会の創出にも取り組んでいます。国内外約5,000社のスタートアップとのネットワークを持ち、販路拡大、資金調達、企業PR、人材確保、海外進出など、成長フェーズに応じた支援を行っています。"
  }
},
    { 
      id: 3, 
      name: "P&G", 
      tags: ["外資系", "マーケティング"], 
      logoImage: "/logo-P&G.png",
      url: "https://jp.pg.com/",
      details: {
        catchphrase: "世界をリードする「経営者輩出」ファーム",
        stats: [
          { label: "グローバルブランド", value: "世界約50億人が愛用するブランド保有" },
          { label: "ビジネスモデル", value: "世界最大級の消費財メーカー" },
          { label: "成長環境", value: "Day1から与えられる圧倒的な裁量" },
          { label: "キャリア", value: "世界最高峰のリーダー育成機関" }
        ],
        strength: "P&Gは、アリエールやパンパースなど日々の生活に欠かせないブランドを世界中で展開する、世界最大級の消費財メーカーです。しかし、真の姿は世界最高峰の『リーダー育成機関』です。職種別採用を敷き、入社早々から数億円規模の予算と重大なプロジェクトを任されます。特にマーケティング職はブランドのミニCEOとして事業戦略から実行までを統括し、極めて高い論理的思考力とリーダーシップが問われます。純粋な実力主義と、人材育成への徹底した投資（内部昇進制）により、世界中の名だたる企業のCEOを輩出する「経営者ファクトリー」として圧倒的な地位を確立しています。"
      }
    },
    { 
      id: 4, 
      name: "富士通", 
      tags: ["IT・通信", "グローバルSIer"], 
      logoImage: "/logo-富士通.png",
      url: "https://www.fujitsu.com/jp/",
      details: {
        catchphrase: "テクノロジーで社会課題を解決する、日本を代表するDX企業",
        stats: [
          { label: "連結売上収益", value: "3兆7,560億円（2023年度）" },
          { label: "従業員数", value: "約124,000名（グローバル）" },
          { label: "事業領域", value: "AI、クラウド、セキュリティ等最先端技術" },
          { label: "キャリア・成長環境", value: "ジョブ型人材マネジメントによる実力主義" }
        ],
        strength: "国内No.1、世界トップクラスのITサービス企業です。現在は従来の「ITベンダー（SIer）」から脱却し、社会課題をクロスインダストリーで解決する事業モデル『Fujitsu Uvance』へとビジネスを大転換しています。世界トップクラスのスーパーコンピュータ「富岳」の技術や、独自のAI「Fujitsu Kozuchi」など、圧倒的なテクノロジーアセットを保有しているのが強みです。また、新卒から「ジョブ型人材マネジメント」を導入し、社内ポスティング制度（異動のフリーエージェント）を徹底するなど、旧来の日系企業の枠を超えた、圧倒的なスピードで成長・挑戦できるグローバルスタンダードな環境が整っています。"
      }
    },
    {
      id: 5,
      name: "損害保険ジャパン",
      tags: ["保険", "損保"],
      logoImage: "/logo-損保.png",
      url: "https://www.sompo-japan.co.jp/",
      details: {
        catchphrase: "“安心・安全・健康”であふれる未来へ",
        stats: [
          { label: "正味収入保険料", value: "2兆2,299億円（2024年度）" },
          { label: "従業員数", value: "20,731名（2025年4月1日現在）" },
          { label: "国内拠点数", value: "営業課・支社・営業所479、損害サービス拠点258" },
          { label: "海外展開", value: "29カ国・地域に拠点を持つ" }
        ],
        strength:
          "損害保険ジャパンは、損害保険業界の国内大手で、火災・自動車・傷害保険など幅広い商品を展開しています。グループ理念に「安心・安全・健康であふれる未来へ」を掲げ、国内約2,000万人のお客さまを支えています。正味収入保険料は2兆2,299億円と国内トップクラスで、社員数2万名を超える大規模な保険会社です。国内479の営業拠点と258の損害サービス拠点に加え、29カ国・地域に海外拠点を持ち、グローバルに事業を展開しています。"
      }
    },
    { id: 6, name: "Coming Soon", tags: ["？？？", "？？？"], isComingSoon: true },
    { id: 7, name: "Coming Soon", tags: ["？？？", "？？？"], isComingSoon: true },
    { id: 8, name: "Coming Soon", tags: ["？？？", "？？？"], isComingSoon: true },
  ];

  return (
    <section className="py-12 px-6 md:px-10 bg-slate-50 relative">
      <div className="max-w-3xl mx-auto">
        
        <div className="text-center mb-10">
           <div className="mb-6">
             <h2 className="text-2xl md:text-3xl font-serif font-medium text-[#0B1E46] mb-3 tracking-wide">
               出展企業
             </h2>
             <p className="text-[#B8860B] font-serif italic text-xs tracking-widest uppercase">
               COMPANIES
             </p>
           </div>
           
           <p className="text-sm font-bold text-slate-500 mb-6 bg-white inline-block px-4 py-1.5 rounded-full shadow-sm border border-slate-200">
             タップすると各企業の詳細データを確認できます
           </p>

           <p className="text-sm md:text-base font-bold text-[#0B1E46] leading-loose tracking-tight mt-2">
             <span className="inline-block whitespace-nowrap">業界最大手から戦略コンサルまで</span>
             <br />
             <span className="inline-block whitespace-nowrap">最難関企業が多数出展</span>
           </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:gap-5 mb-8">
          {companies.map((company: any) => (
            <button
              key={company.id} 
              onClick={() => openModal(company)}
              className="bg-white rounded-xl border border-slate-200 p-4 flex flex-col items-center justify-center gap-3 md:gap-4 shadow-sm hover:shadow-md transition-all min-h-44 md:min-h-48 w-full cursor-pointer group overflow-hidden focus:outline-none focus:ring-2 focus:ring-[#B8860B]/50"
            >
              <div className="w-full h-14 md:h-16 flex items-center justify-center px-2">
                {company.logoImage ? (
                  <img 
                    src={company.logoImage} 
                    alt={`${company.name} ロゴ`}
                    className="max-w-full max-h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity mix-blend-multiply" 
                  />
                ) : company.textLogo ? (
                  <div className="flex flex-col items-center justify-center">
                    <span className="font-black text-2xl md:text-3xl text-[#0B1E46] tracking-wider transition-colors">
                      {company.textLogo}
                    </span>
                    <span className="text-[9px] text-slate-400 font-medium mt-1">
                      {company.logoSubText}
                    </span>
                  </div>
                ) : (
                  <span className="font-black text-xl md:text-3xl text-slate-300 group-hover:text-slate-400 transition-colors">
                    {company.name}
                  </span>
                )}
              </div>
              
              <div className="w-full space-y-2 text-center shrink-0">
                 <div className="flex justify-center gap-1 w-full px-1">
                    {company.tags.map((tag: string, i: number) => (
                        <span key={i} className="text-[10px] px-1.5 py-0.5 border border-slate-200 rounded bg-slate-50 text-slate-500 font-bold whitespace-nowrap flex-shrink-0 truncate max-w-[100px]">
                            {tag}
                        </span>
                    ))}
                 </div>
                 {/* ▼▼▼ 修正箇所：改行を許可し、2行まで表示するスタイルに変更 ▼▼▼ */}
                 <p className="text-[11px] md:text-sm font-bold text-slate-600 mt-1 w-full leading-tight break-words whitespace-normal text-center line-clamp-2 md:line-clamp-none min-h-[2.2rem] md:min-h-0 px-1">
                    {company.name}
                 </p>
              </div>
            </button>
          ))}
        </div>

        <p className="text-[10px] text-slate-400 text-center font-medium">
            ＊参加企業は変更になる可能性があります。
        </p>
      </div>

      {selectedCompany && typeof document !== 'undefined'
        ? createPortal(
            <div 
              className="fixed inset-0 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200"
              style={{ zIndex: 9999 }} 
              onClick={closeModal}
            >
              <div 
                className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative pt-8 pb-4 px-6 border-b border-slate-100 flex flex-col items-center bg-slate-50/50">
                  <button 
                    onClick={closeModal}
                    className="absolute top-3 right-3 z-10 p-2 text-slate-400 hover:bg-slate-200 hover:text-slate-700 rounded-full transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  
                  <div className="h-12 md:h-16 w-full max-w-[80%] flex justify-center items-center mb-3">
                    {selectedCompany.logoImage ? (
                      <img 
                        src={selectedCompany.logoImage} 
                        alt={selectedCompany.name} 
                        className="h-full w-auto object-contain mix-blend-multiply"
                      />
                    ) : selectedCompany.textLogo ? (
                      <div className="flex flex-col items-center justify-center">
                        <span className="font-black text-3xl md:text-4xl text-[#0B1E46] tracking-wider">
                          {selectedCompany.textLogo}
                        </span>
                        <span className="text-[10px] text-slate-400 font-medium mt-1">
                          {selectedCompany.logoSubText}
                        </span>
                      </div>
                    ) : null}
                  </div>
                  <h3 className="text-xl font-bold text-[#0B1E46] text-center">{selectedCompany.name}</h3>
                  <p className="text-xs font-bold text-[#B8860B] mt-1.5 text-center px-4">{selectedCompany.details.catchphrase}</p>
                </div>

                <div className="p-6 overflow-y-auto space-y-5 flex-1 bg-white">
                  <div className="grid grid-cols-2 gap-3">
                    {selectedCompany.details.stats.map((stat: any, i: number) => (
                      <div key={i} className="bg-white border border-[#B8860B]/20 rounded-lg p-3 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1 h-full bg-[#B8860B]/70"></div>
                        <p className="text-[10px] font-bold text-slate-400 mb-1 pl-1">{stat.label}</p>
                        <p className="text-[11px] sm:text-[13px] font-bold text-[#0B1E46] leading-snug pl-1">{stat.value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="bg-[#0B1E46]/5 rounded-lg p-4 border border-[#0B1E46]/10">
                    <div className="flex items-center gap-2 mb-2">
                      <Lightbulb className="w-5 h-5 text-[#B8860B]" />
                      <h4 className="font-bold text-[#0B1E46] text-sm">ここが強み・特徴</h4>
                    </div>
                    <p className="text-[13px] md:text-sm text-slate-600 leading-relaxed font-medium">
                      {selectedCompany.details.strength}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {selectedCompany.tags.map((tag: string, i: number) => (
                      <span key={i} className="text-xs px-2.5 py-1 border border-slate-200 rounded-md bg-slate-50 text-slate-500 font-bold">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 border-t border-slate-100 bg-slate-50">
                  <a 
                    href={selectedCompany.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-slate-800 hover:bg-[#0B1E46] text-white py-3.5 rounded-xl font-bold text-sm transition-colors shadow-sm"
                  >
                    <Building2 className="w-4 h-4" />
                    企業ホームページを見る
                    <ExternalLink className="w-4 h-4 ml-1 opacity-70" />
                  </a>
                </div>
              </div>
            </div>,
            document.body 
          )
        : null}

    </section>
  );
};

export default CompaniesSection;