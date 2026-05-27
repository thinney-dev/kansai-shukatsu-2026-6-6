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
      id: 1.5, 
      name: "メルカリ", 
      tags: ["フリマ", "メガベンチャー"], 
      logoImage: "/logo-mercari.png",
      url: "https://www.mercari.com/jp/",
      details: {
        catchphrase: "「循環型社会」を実現する、日本発グローバルC2Cプラットフォームのリーダー",
        stats: [
          { label: "売上収益", value: "約2,070億円（2024年3月期）" },
          { label: "従業員数", value: "約2,300名（連結）" },
          { label: "事業領域", value: "フリマアプリ、メルペイ、メルコイン等" },
          { label: "キャリア・成長環境", value: "英語公用語化・職種別採用によるプロ人材育成" }
        ],
        strength: "日本最大のフリマアプリ「メルカリ」を運営する、国内屈指のメガベンチャーです。流通総額は年間約1兆円規模に達し、月間利用者数は約2,300万人を誇ります。フリマ事業にとどまらず、スマホ決済「メルペイ」や暗号資産事業「メルコイン」など、フィンテック領域にも積極的に展開しています。社内公用語を英語とし、外国籍エンジニアも多数在籍するなど、真のグローバル企業文化が根付いているのが特徴です。職種別・ポジション別の採用と透明性の高い評価制度により、若手でも裁量を持って社会課題に挑める環境が整っており、スタートアップ精神とメガベンチャーの安定感を両立した稀有なキャリアフィールドです。"
      }
    },
    {
      id: 2,
      name: "阪急阪神不動産",
      tags: ["不動産", "デベロッパー"],
      logoImage: "/logo-阪急阪神不動産.png",
      url: "https://www.hhp.co.jp/",
      details: {
        catchphrase: "100年のまちづくりを未来へつなぐ、阪急阪神グループの総合不動産デベロッパー",
        stats: [
          { label: "売上高", value: "1,719億円（2025年3月期）" },
          { label: "従業員数", value: "1,008名（2025年3月末）" },
          { label: "資本金", value: "124億2,600万円" },
          { label: "設立", value: "1947年2月17日" }
        ],
        strength:
          "阪急阪神不動産は、大阪・阪神沿線のまちづくりで100年以上の歴史を持つ阪急阪神ホールディングスの総合不動産デベロッパーです。オフィス・商業施設の賃貸や再開発、マンション・戸建住宅の分譲、仲介、リフォームなど幅広い事業を展開し、首都圏やASEANなど海外へも事業を拡大しています。主力マンションブランド「ジオ」は自社一貫体制で開発から販売、アフターサービスまで行い、永住にふさわしい暮らしを提案します。グループの安定基盤と成長性に加え、フレックスタイムや在宅勤務制度など柔軟な働き方を整えており、まちづくりを通じて豊かなライフスタイルを創造したい学生に適した環境です。"
      }
    },
    {
      id: 3,
      // 企業名はJSXのまま維持
      name: (
        <>
          タワーパートナーズ<br />
          セミコンダクター
        </>
      ),
      tags: ["半導体", "メーカー"],
      logoImage: "/logo-TPSCo.png",
      url: "https://www.jp-tpsco.com/",
      details: {
        catchphrase:
          "日本生まれの外資系アナログ半導体ファウンドリとして、日本の技術を世界へ",
        stats: [
          { label: "売上高", value: "656億円（2024年12月期）" },
          { label: "従業員数", value: "1,773名（2025年3月1日現在）" },
          { label: "設立", value: "2014年2月28日" },
          { label: "資本金", value: "26億7,640万円" }
        ],
        strength:
          "タワー パートナーズ セミコンダクター（TPSCo）は、パナソニックとイスラエルのタワーセミコンダクターが合弁して2014年に誕生した国内初のアナログ半導体ファウンドリです。日本の高品質なモノづくりとタワーセミコンダクターのグローバルなマーケティングやファウンドリビジネスのノウハウを融合し、アナログ・パワー・イメージング・高周波・高耐圧の半導体を開発・製造しています。IoT、車載、通信（5G）、VR/AR、AIなど成長分野のキーデバイスで世界中の顧客を支えており、国内外の生産拠点を活用したグローバルな供給体制が強みです。社員一人ひとりの個性を尊重する自由闊達な社風で、フレキシブルな働き方や資格取得支援などキャリア形成を支援する制度が整っており、日本の技術で世界に挑戦したい理系学生に最適な環境です。"
      }
    },
    {
      id: 4,
      name: "ダイヘン",
      tags: ["産業用ロボット", "BtoB"],
      logoImage: "/logo-Daihen.png",
      url: "https://www.daihen.co.jp/",
      details: {
        catchphrase:
          "エネルギー管理・ロボット・材料加工の３ドメインで産業の未来を拓く総合電機メーカー",
        stats: [
          { label: "売上高", value: "2,263億円（2025年3月期連結）" },
          { label: "営業利益", value: "161億円（2025年3月期連結）" },
          { label: "従業員数", value: "4,606人（連結・2025年3月期）" },
          { label: "設立", value: "1919年" }
        ],
        strength:
          "1919年創業のダイヘンは、変圧器メーカーからスタートし、現在はエネルギーマネジメント、ファクトリーオートメーション、マテリアルプロセシングの３ドメインで事業を展開する総合電機メーカーです。柱上変圧器やワイヤレス充電システムなど電力機器による社会インフラの高度化、世界トップシェア（約20％）のアーク溶接ロボットを中心とした産業用ロボットによる工場の自動化、プラズマやレーザによる高精度材料加工技術など、幅広い技術でモノづくりやエネルギー分野の革新に貢献しています。国内外19拠点のグローバルネットワークを通じて製品を提供し、脱炭素社会や労働力不足、デジタル化といった社会課題の解決に挑戦する研究開発型企業を目指しています。安定した業績と世界的な製品シェアを背景に、充実した研修制度や二週間連続休暇制度など働きやすい環境も整っており、技術を通じて社会課題を解決したい学生に魅力的な職場です。"
      }
    },
    
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