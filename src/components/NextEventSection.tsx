import { CalendarDays, ExternalLink } from "lucide-react";
import React from "react";

const NextEventSection = () => {
  return (
    <section className="py-8 px-4 relative z-10">
      <div className="max-w-3xl mx-auto">
        
        <a 
          href="https://kansai-shukatsu-2026-6-17.pages.dev/"
          target="_blank"
          rel="noopener noreferrer"
          
          /*外枠*/
          className="block bg-gradient-to-br from-white to-[#d2a2ff]/30 border border-[#d2a2ff]/60 shadow-sm hover:shadow-lg rounded-2xl p-8 md:p-10 relative overflow-hidden mb-8 transition-all duration-300 group hover:-translate-y-1"
        >
          
          {/* ▼ 装飾の左下部分 ▼ */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#d2a2ff]/60 to-transparent rounded-bl-full z-0 pointer-events-none transition-transform group-hover:scale-110"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#d2a2ff]/60 to-transparent rounded-tr-full z-0 pointer-events-none transition-transform group-hover:scale-110"></div>
          
          <div className="relative z-10 flex flex-col items-center text-center gap-5">
            
            {/* ラベル */}
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 mb-1 bg-white border border-slate-100 px-4 py-2 rounded-full shadow-sm">
              <CalendarDays className="w-4 h-4 text-[#B8860B]" />
              6月6日の日程が合わない方へ
            </span>
            
            {/* 見出し */}
            <h3 className="text-xl md:text-2xl font-serif font-bold text-[#0B1E46] leading-relaxed">
              <span className="text-[#B8860B] pb-1 mr-1">6月17日(水)</span> <br />
              開催枠もエントリー受付中
            </h3>
            
            {/* 説明文 */}
            <p className="text-[13px] md:text-sm text-slate-500 font-medium mb-2">
              6月17日にも同規模の特別座談会を開催いたします。<br className="md:hidden" />
              6月6日の日程が合わない方は、こちらから詳細をご確認ください。
            </p>

            {/* ▼ 修正：ホバー色を紫から青系(#b0c6eb)に変更し、文字を見やすくドロップシャドウを追加 ▼ */}
            <div className="w-full sm:w-auto flex justify-center">
              <div className="inline-flex items-center justify-center gap-2 bg-[#d2a2ff] text-white drop-shadow-sm px-8 py-4 rounded-full font-bold text-sm shadow-md group-hover:bg-[#e2a9f1] transition-colors duration-300 w-full sm:w-auto whitespace-nowrap">
                6月17日の詳細を見る
                <ExternalLink className="w-4 h-4" />
              </div>
            </div>
            
          </div>
        </a>

      </div>
    </section>
  );
};

export default NextEventSection;