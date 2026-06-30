import React, { useState } from 'react';
import { Activity, Users, TrendingUp, LayoutGrid, CheckCircle2, FileText, Megaphone, Zap, Trophy, MessageCircle, Quote } from 'lucide-react';
import { executiveData } from './data';
import { formatNumber, formatPercent, cn } from './utils';

export default function App() {
  const [activePlatform, setActivePlatform] = useState<keyof typeof executiveData.platforms>('instagram_stories');

  const platformsArray = Object.entries(executiveData.platforms).map(([key, data]) => ({
    id: key,
    ...data
  }));

  const currentPlatformData = executiveData.platforms[activePlatform];

  return (
    <div className="min-h-screen bg-assai-bg font-sans text-gray-900 selection:bg-assai-orange selection:text-white pb-20">
      {/* Header Executivo */}
      <header className="bg-assai-blue text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-xl font-bold tracking-tight">Relatório Gerencial de Performance - São João 2026</h1>
              <p className="mt-1 text-xs opacity-80 uppercase tracking-widest">Relatório Executivo | Assaí Atacadista</p>
            </div>
            <div className="flex flex-col items-end gap-2">
              <div className="flex items-center gap-4 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-sm">
                <img src="https://i.imgur.com/ihchsJt.png" alt="Assaí Atacadista" className="h-7 object-contain" />
                <div className="h-5 w-px bg-white/30"></div>
                <img src="https://i.imgur.com/lAyMWKF.png" alt="Megamídia" className="h-7 object-contain" />
              </div>
              <span className="text-xs opacity-60 font-medium">Maio - Junho 2026</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 mt-6 space-y-6">
        
        {/* KPI Cards (Big Numbers) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-assai-blue flex flex-col justify-center">
            <div className="text-sm text-gray-500 font-bold uppercase mb-1 flex items-center gap-2">
              <LayoutGrid className="w-4 h-4 text-assai-blue" />
              Total de Posts
            </div>
            <div className="text-3xl font-black text-assai-blue">{formatNumber(executiveData.global_metrics.total_posts)}</div>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-assai-orange flex flex-col justify-center">
             <div className="text-sm text-gray-500 font-bold uppercase mb-1 flex items-center gap-2">
              <Users className="w-4 h-4 text-assai-orange" />
              Alcance Total
            </div>
            <div className="text-3xl font-black text-assai-blue">{formatNumber(executiveData.global_metrics.total_alcance_visualizacoes)}</div>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-blue-400 flex flex-col justify-center">
             <div className="text-sm text-gray-500 font-bold uppercase mb-1 flex items-center gap-2">
              <Activity className="w-4 h-4 text-blue-400" />
              Interações Totais
            </div>
            <div className="text-3xl font-black text-assai-blue">{formatNumber(executiveData.global_metrics.total_interacoes)}</div>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-green-500 flex flex-col justify-center">
             <div className="text-sm text-gray-500 font-bold uppercase mb-1 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-green-500" />
              Taxa Engajamento
            </div>
            <div className="text-3xl font-black text-assai-orange">{formatPercent(executiveData.global_metrics.taxa_engajamento_medio_global)}</div>
          </div>
        </div>

        {/* Quadrante de Sucesso: Presença vs. Impacto */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl shadow-sm p-6 lg:p-8">
          <div className="text-center mb-8">
            <h2 className="text-xl font-bold text-assai-blue uppercase tracking-wide">O Quadrante de Sucesso: Presença vs. Impacto</h2>
            <p className="text-sm text-gray-500 mt-2">Traduzindo o esforço operacional da marca e a eficiência dos conteúdos</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Presença */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 relative overflow-hidden">
               <div className="flex items-center gap-3 mb-6">
                 <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                   <Megaphone className="w-6 h-6" />
                 </div>
                 <h3 className="text-lg font-bold text-gray-900">Presença <span className="text-sm font-normal text-gray-500 block">O Esforço de Comunicação</span></h3>
               </div>
               <ul className="space-y-4">
                 <li className="flex gap-3">
                   <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                   <div>
                     <strong className="text-gray-900 font-semibold block">Omnicanalidade Ativa:</strong>
                     <span className="text-sm text-gray-600">Cobertura estratégica em 4 ecossistemas digitais distintos (Facebook, Instagram Feed, Instagram Stories e TikTok), cercando a jornada do consumidor.</span>
                   </div>
                 </li>
                 <li className="flex gap-3">
                   <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                   <div>
                     <strong className="text-gray-900 font-semibold block">Consistência e Sustentação:</strong>
                     <span className="text-sm text-gray-600">Produção robusta de 75 conteúdos nativos, mantendo a marca ativa desde o planejamento até o pós-festa em junho, capturando as compras de última hora.</span>
                   </div>
                 </li>
               </ul>
            </div>

            {/* Impacto */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 relative overflow-hidden">
               <div className="flex items-center gap-3 mb-6">
                 <div className="p-3 bg-orange-50 text-assai-orange rounded-lg">
                   <Zap className="w-6 h-6" />
                 </div>
                 <h3 className="text-lg font-bold text-gray-900">Impacto <span className="text-sm font-normal text-gray-500 block">A Eficiência do Conteúdo</span></h3>
               </div>
               <ul className="space-y-4">
                 <li className="flex gap-3">
                   <CheckCircle2 className="w-5 h-5 text-assai-orange shrink-0 mt-0.5" />
                   <div>
                     <strong className="text-gray-900 font-semibold block">Ganho de Escala:</strong>
                     <span className="text-sm text-gray-600">Atração da economia da atenção com mais de 3,5 milhão de oportunidades de contato e visualizações geradas.</span>
                   </div>
                 </li>
                 <li className="flex gap-3">
                   <CheckCircle2 className="w-5 h-5 text-assai-orange shrink-0 mt-0.5" />
                   <div>
                     <strong className="text-gray-900 font-semibold block">Retorno de Atenção:</strong>
                     <span className="text-sm text-gray-600">Engajamento real e ativo do público traduzido em mais de 106.000 interações diretas (curtidas, comentários e cliques).</span>
                   </div>
                 </li>
                 <li className="flex gap-3">
                   <CheckCircle2 className="w-5 h-5 text-assai-orange shrink-0 mt-0.5" />
                   <div>
                     <strong className="text-gray-900 font-semibold block">Conexão Emocional:</strong>
                     <span className="text-sm text-gray-600">Formatos de utilidade prática (receitas juninas e dicas) que romperam a barreira do desinteresse e geraram alto valor para o consumidor.</span>
                   </div>
                 </li>
               </ul>
            </div>
          </div>
        </div>

        {/* Destaques de Conteúdo & Percepção do Público */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl shadow-sm p-6 lg:p-8">
          <div className="text-center mb-8">
            <h2 className="text-xl font-bold text-assai-blue uppercase tracking-wide">Destaques de Conteúdo & Percepção do Público</h2>
            <p className="text-sm text-gray-500 mt-2">Os posts campeões e o retorno qualitativo da audiência</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Coluna Esquerda: Conteúdos Campeões */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2 mb-2">
                <Trophy className="w-5 h-5 text-yellow-500" />
                Os 5 Conteúdos Campeões <span className="text-sm font-normal text-gray-500 block sm:inline">(Visão Quantitativa)</span>
              </h3>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100 flex gap-4 items-start hover:shadow-md transition-shadow">
                  <img src="https://i.imgur.com/dOKXIhn.png" alt="Instagram Ofertas" className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-md border border-gray-100 shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-pink-600 mb-1 uppercase tracking-wider">Instagram (19/05 - Ofertas)</div>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Alcance recorde de <strong className="text-gray-900">91.514 contas</strong> e <strong className="text-gray-900">10.380 interações</strong>, registrando o maior engajamento da campanha (11,34%) com 7.613 cliques no link.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100 flex gap-4 items-start hover:shadow-md transition-shadow">
                  <img src="https://i.imgur.com/4zMYMUj.png" alt="Instagram Economia" className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-md border border-gray-100 shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-pink-600 mb-1 uppercase tracking-wider">Instagram (01/06 - Economia)</div>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      <strong className="text-gray-900">82.400 contas alcançadas</strong> e <strong className="text-gray-900">6.210 interações</strong>, gerando tração massiva de conversão com 4.850 cliques diretos.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100 flex gap-4 items-start hover:shadow-md transition-shadow">
                  <img src="https://i.imgur.com/Qxes5bG.png" alt="Instagram Futebol" className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-md border border-gray-100 shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-pink-600 mb-1 uppercase tracking-wider">Instagram (14/05 - Futebol Ifood)</div>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Maior visibilidade de Feed com <strong className="text-gray-900">150.460 impressões</strong>, 58.610 de alcance e 547 interações diretas.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100 flex gap-4 items-start hover:shadow-md transition-shadow">
                  <img src="https://i.imgur.com/XDlrWab.png" alt="Facebook Bolo de Milho" className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-md border border-gray-100 shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-blue-600 mb-1 uppercase tracking-wider">Facebook (05/06 - Receita Bolo)</div>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Melhor performance orgânica da rede com <strong className="text-gray-900">16.450 de alcance</strong>, 210 interações e a maior taxa de engajamento da plataforma (1,28%).
                    </p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100 flex gap-4 items-start hover:shadow-md transition-shadow">
                  <img src="https://i.imgur.com/YB87Xpw.png" alt="TikTok Pamonha" className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-md border border-gray-100 shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-gray-900 mb-1 uppercase tracking-wider">TikTok (12/06 - Receita Pamonha)</div>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Líder de engajamento dinâmico com <strong className="text-gray-900">4.120 visualizações brutas</strong> e 3,52% de engajamento em conteúdo nativo.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Coluna Direita: Voz do Consumidor */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2 mb-2">
                <MessageCircle className="w-5 h-5 text-assai-orange" />
                A Voz do Consumidor <span className="text-sm font-normal text-gray-500 block sm:inline">(Visão Qualitativa)</span>
              </h3>
              
              <div className="space-y-4">
                <blockquote className="bg-white p-4 sm:p-5 rounded-lg shadow-sm border-l-4 border-assai-orange flex gap-4 items-start relative">
                  <Quote className="w-6 h-6 text-orange-200 shrink-0 absolute top-4 left-4" />
                  <div className="pl-8 w-full">
                    <img src="https://i.imgur.com/oHuX94f.png" alt="Comentário 1" className="w-full object-contain mix-blend-multiply opacity-90" />
                  </div>
                </blockquote>

                <blockquote className="bg-white p-4 sm:p-5 rounded-lg shadow-sm border-l-4 border-assai-orange flex gap-4 items-start relative">
                  <Quote className="w-6 h-6 text-orange-200 shrink-0 absolute top-4 left-4" />
                  <div className="pl-8 w-full">
                    <img src="https://i.imgur.com/i193aeI.png" alt="Comentário 2" className="w-full object-contain mix-blend-multiply opacity-90" />
                  </div>
                </blockquote>

                <blockquote className="bg-white p-4 sm:p-5 rounded-lg shadow-sm border-l-4 border-assai-orange flex gap-4 items-start relative">
                  <Quote className="w-6 h-6 text-orange-200 shrink-0 absolute top-4 left-4" />
                  <div className="pl-8 w-full">
                    <img src="https://i.imgur.com/8DKJGOW.png" alt="Comentário 3" className="w-full object-contain mix-blend-multiply opacity-90" />
                  </div>
                </blockquote>

                <blockquote className="bg-white p-4 sm:p-5 rounded-lg shadow-sm border-l-4 border-assai-orange flex gap-4 items-start relative">
                  <Quote className="w-6 h-6 text-orange-200 shrink-0 absolute top-4 left-4" />
                  <div className="pl-8 w-full">
                    <img src="https://i.imgur.com/rcgDz0n.png" alt="Comentário 4" className="w-full object-contain mix-blend-multiply opacity-90" />
                  </div>
                </blockquote>

                <blockquote className="bg-white p-4 sm:p-5 rounded-lg shadow-sm border-l-4 border-assai-orange flex gap-4 items-start relative">
                  <Quote className="w-6 h-6 text-orange-200 shrink-0 absolute top-4 left-4" />
                  <div className="pl-8 w-full">
                    <img src="https://i.imgur.com/dANPbJS.png" alt="Comentário 5" className="w-full object-contain mix-blend-multiply opacity-90" />
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        {/* Performance por Plataforma */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
           <div className="bg-gray-50 border-b border-gray-100 px-6 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <h2 className="text-sm font-bold text-assai-blue uppercase tracking-wide">Análise por Plataforma</h2>
              <div className="flex gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-hide">
                 {platformsArray.map(p => (
                   <button
                     key={p.id}
                     onClick={() => setActivePlatform(p.id as any)}
                     className={cn(
                       "px-4 py-2 text-xs font-bold rounded-md transition-colors whitespace-nowrap",
                       activePlatform === p.id 
                        ? "bg-assai-blue text-white shadow-sm"
                        : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
                     )}
                   >
                     {p.name}
                   </button>
                 ))}
              </div>
           </div>
           
           <div className="p-6 grid grid-cols-1 md:grid-cols-12 gap-8 animate-in fade-in duration-300">
              {/* Resumo da plataforma */}
              <div className="md:col-span-4 space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                  <div className="text-xs text-gray-500 uppercase font-bold mb-1">Alcance da Rede</div>
                  <div className="text-2xl font-black text-assai-blue">{formatNumber(currentPlatformData.alcance)}</div>
                </div>
                {'impressoes' in currentPlatformData && (currentPlatformData as any).impressoes != null && (
                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                    <div className="text-xs text-gray-500 uppercase font-bold mb-1">Impressões</div>
                    <div className="text-2xl font-black text-assai-blue">{formatNumber((currentPlatformData as any).impressoes)}</div>
                  </div>
                )}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                    <div className="text-xs text-gray-500 uppercase font-bold mb-1">Engajamento</div>
                    <div className="text-lg font-black text-assai-orange">{formatPercent(currentPlatformData.engajamento_medio)}</div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                    <div className="text-xs text-gray-500 uppercase font-bold mb-1">Interações</div>
                    <div className="text-lg font-black text-gray-900">{formatNumber(currentPlatformData.interacoes)}</div>
                  </div>
                </div>
                <div className="p-3 bg-blue-50/50 rounded-lg border border-blue-100 flex items-center justify-between">
                   <span className="text-xs font-semibold text-blue-900">Volume de Posts</span>
                   <span className="text-sm font-bold text-blue-700 bg-blue-100 px-2 py-0.5 rounded">{currentPlatformData.posts}</span>
                </div>
              </div>
              
              {/* Bullet points analíticos */}
              <div className="md:col-span-8">
                 <h3 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-assai-orange" />
                    Destaques Qualitativos
                 </h3>
                 <ul className="space-y-3">
                   {currentPlatformData.analise_bullets.map((bullet, idx) => (
                     <li key={idx} className="flex gap-3 text-sm text-gray-700 leading-relaxed">
                       <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                       <span>{bullet}</span>
                     </li>
                   ))}
                 </ul>
              </div>
           </div>
        </div>
      </main>
    </div>
  );
}

