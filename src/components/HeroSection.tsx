import { useState, useEffect } from "react";
import { ChevronRight, Users, MapPin, Ticket, CalendarClock } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import React from "react";

const images = [
  "/Herosection-4.png",
  "/Herosection-1.png",
  "/Herosection-2.png"
];

// ▼▼▼ 6月LP用：下部に表示するテキストリスト ▼▼▼
const otherCompanies = [
   "タワーパートナーズセミコンダクター","ダイヘン", "残り枠1社Coming Soon..."
];
// ▲▲▲ 追加ここまで ▲▲▲

const HeroSection = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000, stopOnInteraction: false })
  ]);

  return (
    <section className="relative w-full pt-6 pb-16 overflow-hidden bg-transparent">
      
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
        
        {/* 画像バナー */}
        <div className="w-full flex justify-center mb-3 animate-in fade-in slide-in-from-top-4 duration-700">
            <img
            src="/LP_header_28.png"
            alt="28卒限定"
            className="w-[60%] h-auto object-contain"
            />
        </div>

        {/* ヘッダーテキスト部分 */}
        <div className="mb-12 md:mb-16 flex flex-col items-center animate-in fade-in slide-in-from-bottom-4 duration-700 w-full">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#0B1E46] leading-tight mb-5 drop-shadow-sm">
            質の高い就活を
          </h1>
          <div className="mt-1 w-full flex justify-center">
            <p className="text-[11px] sm:text-sm md:text-lg font-serif text-[#0B1E46] tracking-[0.1em] font-medium opacity-90 whitespace-nowrap">
              少人数だからこそ、優良企業と深く話せる座談会
            </p>
          </div>

          {/* ▼▼▼ 差し替え：理系バッジ＋日付・場所ブロック ▼▼▼ */}
<div className="relative mt-10 md:mt-16 flex flex-col items-center w-full animate-in fade-in zoom-in duration-1000 delay-200">

{/* 理系限定ギザギザバッジ */}
<div className="absolute -left-2 md:left-[1%] -top-6 z-10">
  <div className="relative flex items-center justify-center w-16 h-16">
    {/* ギザギザ背景をSVGで描画 */}
    <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <polygon
        points="50,2 61,20 80,12 80,32 100,35 88,52 100,68 80,70 80,88 61,80 50,98 39,80 20,88 20,70 0,68 12,52 0,35 20,32 20,12 39,20"
        fill="#7C3AED"
      />
    </svg>
    {/* バッジテキスト */}
    <span className="relative z-10 text-white font-black text-[10px] leading-tight text-center">
      理系<br />限定
    </span>
  </div>
</div>

{/* 日付 */}
<div className="flex justify-center w-full">
  <div className="inline-flex items-center gap-2 md:gap-3">
    <CalendarClock className="w-6 h-6 md:w-8 md:h-8 text-[#B8860B] drop-shadow-sm" />
    <span className="text-2xl md:text-3xl font-serif font-bold text-[#0B1E46] tracking-widest drop-shadow-sm">
      6/6<span className="text-lg md:text-xl mx-1 text-[#0B1E46] opacity-80">(土)</span>14:00~
    </span>
  </div>
</div>

{/* 場所 */}
<div className="mt-2 flex justify-center w-full">
  <div className="inline-flex items-center gap-2">
    <MapPin className="w-5 h-5 md:w-6 md:h-6 text-[#B8860B] drop-shadow-sm" />
    <span className="text-lg md:text-xl font-serif font-bold text-[#0B1E46] tracking-wider drop-shadow-sm">
      グランフロント大阪
    </span>
  </div>
</div>

</div>
{/* ▲▲▲ 差し替えここまで ▲▲▲ */}

          <div className="mt-4 md:mt-6 flex flex-col items-center w-full animate-in fade-in zoom-in duration-1000 delay-400">
             <p className="text-base md:text-xl font-serif font-bold text-[#0B1E46] tracking-wide leading-tight drop-shadow-sm flex flex-wrap items-baseline justify-center gap-1">
                {/* ▼ 修正：アクセント色をゴールド（#B8860B）に戻しました ▼ */}
                <span className="text-[#B8860B] text-lg md:text-2xl mx-1">超有名企業</span>
                <span>参加決定</span>
             </p>
          </div>
        </div>

        {/* 企業ロゴセクション（4月LPの白枠デザインを適用） */}
        <div className="w-screen md:w-full max-w-5xl mb-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 bg-white py-6 md:py-10 md:rounded-2xl border-y md:border border-slate-200/80 shadow-sm flex flex-col justify-center items-center px-4 sm:px-8">
            
            {/* 上段：メインロゴ（logo-hero.png の一枚絵） */}
              <div className="flex justify-center items-center w-full max-w-3xl mb-6 md:mb-8 px-2">
                <img 
                  src="/logo-hero.png" 
                  alt="参加決定企業一覧"
                  onError={(e) => {
                    e.currentTarget.src = "https://placehold.co/800x300/e2e8f0/64748b?text=logo-hero.png";
                    e.currentTarget.className = "w-full max-w-[600px] h-auto object-contain opacity-70"; // rounded-mdも削除
                  }}
                  className="w-full h-auto object-contain" // drop-shadow-sm（影）を削除
                />
              </div>

            {/* 下段：その他の社名テキスト（スラッシュ区切り） */}
            {/* ▼ 修正：border-t と border-slate-100（横線）を削除しました ▼ */}
            <div className="w-full max-w-3xl flex flex-wrap justify-center items-center gap-x-3 gap-y-2 md:gap-x-6 md:gap-y-3 pt-2 md:pt-4">
                {otherCompanies.map((name, index) => (
                  <div key={index} className="flex items-center">
                    {/* ▼ 修正：テキストカラーを #0B1E46 に戻しました ▼ */}
                    <span className="text-xs md:text-sm font-bold text-[#0B1E46] whitespace-nowrap tracking-wider">
                      {name}
                    </span>
                    {/* 最後の要素以外は区切り線を表示 */}
                    {index < otherCompanies.length - 1 && (
                      <span className="hidden md:inline-block ml-6 text-slate-300">/</span>
                    )}
                  </div>
                ))}
            </div>

        </div>

        {/* 写真エリア */}
        <div className="relative w-full max-w-4xl mx-auto mb-10 shadow-2xl overflow-hidden border border-slate-200/60 rounded-xl">
          <div className="overflow-hidden bg-slate-100 aspect-[16/9]" ref={emblaRef}>
            <div className="flex h-full">
              {images.map((src, index) => (
                <div className="flex-[0_0_100%] min-w-0 relative h-full" key={index}>
                  <img
                    src={src}
                    alt={`関西就活 Scene ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* イベントの特徴（3つの丸） */}
        <div className="w-full max-w-lg md:max-w-xl mx-auto mb-12 px-2">
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            
            {/* Limit */}
            <div className="flex items-center bg-white border border-[#B8860B]/30 rounded-full px-3 py-2 shadow-sm whitespace-nowrap justify-center">
               <div className="w-8 h-8 rounded-full bg-[#0B1E46] flex items-center justify-center mr-2 text-white shrink-0">
                  <Users size={14} />
               </div>
               <div className="text-left">
                  <p className="text-[9px] text-slate-400 font-bold tracking-widest uppercase">LIMIT</p>
                  <p className="text-sm font-bold text-[#0B1E46]">30名限定</p>
               </div>
            </div>

            {/* Style */}
            <div className="flex items-center bg-white border border-[#B8860B]/30 rounded-full px-3 py-2 shadow-sm whitespace-nowrap justify-center">
               <div className="w-8 h-8 rounded-full bg-[#0B1E46] flex items-center justify-center mr-2 text-white shrink-0">
                  <Ticket size={14} />
               </div>
               <div className="text-left">
                  <p className="text-[9px] text-slate-400 font-bold tracking-widest uppercase">STYLE</p>
                  <p className="text-sm font-bold text-[#0B1E46]">特別選考あり</p>
               </div>
            </div>

            {/* Target */}
            <div className="col-span-2 flex justify-center">
              <div className="flex items-center bg-white border border-[#B8860B]/30 rounded-full px-8 py-2 shadow-sm whitespace-nowrap">
                 <div className="w-8 h-8 rounded-full bg-[#0B1E46] flex items-center justify-center mr-2 text-white shrink-0">
                    <MapPin size={14} />
                 </div>
                 <div className="text-left">
                    <p className="text-[9px] text-slate-400 font-bold tracking-widest uppercase">TARGET</p>
                    <p className="text-sm font-bold text-[#0B1E46]">関関同立・国公立の28卒『理系』学生</p>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;