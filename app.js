const exams = [
  {person:'Ana', personKey:'ana', system:'Hematologia', exam:'Hemácias / hemoglobina / hematócrito', result:'4,50 milhões/mm³ · 14,1 g/dL · 42,9%', range:'Dentro da faixa do laudo', purpose:'Avaliam quantidade de glóbulos vermelhos, transporte de oxigênio e anemia.', reading:'Normais; não há anemia.', action:'Sem conduta específica.', status:'good'},
  {person:'Ana', personKey:'ana', system:'Hematologia', exam:'Índices das hemácias', result:'VCM 95,3 · HCM 31,3 · CHCM 32,9 · RDW 11,5', range:'Dentro das faixas', purpose:'Caracterizam tamanho, hemoglobina e variação das hemácias.', reading:'Padrão normocítico, sem anisocitose relevante.', action:'Sem conduta específica.', status:'good'},
  {person:'Ana', personKey:'ana', system:'Hematologia', exam:'Leucócitos', result:'3.270/mm³', range:'Baixo no laudo', purpose:'Quantificam células de defesa circulantes.', reading:'Leucopenia; deve ser interpretada pelo diferencial.', action:'Repetir hemograma e comparar histórico.', status:'priority'},
  {person:'Ana', personKey:'ana', system:'Hematologia', exam:'Neutrófilos absolutos', result:'883/mm³', range:'Baixo no laudo', purpose:'Medem a principal defesa contra infecções bacterianas e fúngicas.', reading:'Neutropenia moderada e isolada; principal achado da Ana.', action:'Confirmar com diferencial/lâmina; febre exige avaliação no mesmo dia.', status:'priority'},
  {person:'Ana', personKey:'ana', system:'Hematologia', exam:'Eosinófilos', result:'10% · 327/mm³', range:'Percentual alto; absoluto normal', purpose:'Podem subir em alergias, parasitoses e outras condições.', reading:'Elevação relativa, causada em parte pela queda dos neutrófilos; não há eosinofilia absoluta.', action:'Não tratar pelo percentual isolado.', status:'context'},
  {person:'Ana', personKey:'ana', system:'Hematologia', exam:'Linfócitos / monócitos / basófilos', result:'1.668 · 327 · 65/mm³', range:'Valores absolutos normais', purpose:'Compõem diferentes partes da resposta imune.', reading:'Linfócitos em 51% e basófilos em 2% estão relativamente altos, mas as quantidades absolutas são normais.', action:'Nenhuma isoladamente.', status:'good'},
  {person:'Ana', personKey:'ana', system:'Hematologia', exam:'Plaquetas', result:'208.000/mm³', range:'Normal', purpose:'Participam da coagulação e reparo vascular.', reading:'Preservadas.', action:'Sem conduta específica.', status:'good'},
  {person:'Ana', personKey:'ana', system:'Cardiovascular', exam:'Colesterol total', result:'239 mg/dL', range:'Alto pelo laudo', purpose:'Soma aproximada das frações de colesterol.', reading:'Superestima a impressão de risco porque inclui HDL 88; não deve ser usado sozinho.', action:'Interpretar com LDL, não-HDL e risco global.', status:'context'},
  {person:'Ana', personKey:'ana', system:'Cardiovascular', exam:'LDL-C', result:'132,7 mg/dL', range:'Acima de metas de vários grupos', purpose:'Estima colesterol em partículas aterogênicas LDL.', reading:'Elevação discreta/moderada; relevância depende do risco absoluto.', action:'Medir pressão, rever antecedentes e calcular risco.', status:'attention'},
  {person:'Ana', personKey:'ana', system:'Cardiovascular', exam:'HDL-C', result:'88 mg/dL', range:'Alto/favorável', purpose:'Integra o transporte reverso de colesterol, mas não é um antídoto isolado.', reading:'Muito alto e favorável no conjunto; não anula o LDL.', action:'Sem tratamento para aumentar ou reduzir HDL.', status:'good'},
  {person:'Ana', personKey:'ana', system:'Cardiovascular', exam:'Triglicérides', result:'91 mg/dL', range:'Normal', purpose:'Refletem lipídios circulantes ligados ao metabolismo energético.', reading:'Favoráveis.', action:'Manter rotina.', status:'good'},
  {person:'Ana', personKey:'ana', system:'Cardiovascular', exam:'Não-HDL / razões (calculados)', result:'151 · total/HDL 2,72 · TG/HDL 1,03', range:'Cálculos, não impressos no laudo', purpose:'Não-HDL resume partículas aterogênicas; razões ajudam a visualizar o padrão.', reading:'Perfil global melhor do que o colesterol total sugere, embora haja carga aterogênica moderada.', action:'Usar como complemento, não diagnóstico.', status:'context'},
  {person:'Ana', personKey:'ana', system:'Tireoide', exam:'TSH ultrassensível', result:'4,33 mUI/mL', range:'0,40–4,30 (19–61 anos)', purpose:'Sinal hipofisário que regula a tireoide.', reading:'Elevação mínima; só sugere disfunção subclínica se persistir.', action:'Repetir TSH/T4L e considerar anti-TPO.', status:'attention'},
  {person:'Ana', personKey:'ana', system:'Tireoide', exam:'T4 livre', result:'1,07 ng/dL', range:'Normal', purpose:'Mede a fração livre do principal hormônio tireoidiano.', reading:'Normal; afasta hipotireoidismo manifesto neste exame.', action:'Interpretar junto do TSH repetido.', status:'good'},
  {person:'Ana', personKey:'ana', system:'Glicemia', exam:'Glicose', result:'98 mg/dL', range:'Normal', purpose:'Fotografia da glicemia no momento da coleta.', reading:'Normal.', action:'Manter rotina.', status:'good'},
  {person:'Ana', personKey:'ana', system:'Glicemia', exam:'Hemoglobina glicada', result:'5,2% · eAG 103 mg/dL', range:'Normal', purpose:'Estima a glicemia média dos últimos 2–3 meses.', reading:'Sem sinal laboratorial de pré-diabetes ou diabetes.', action:'Rastreamento habitual.', status:'good'},
  {person:'Ana', personKey:'ana', system:'Rins e urina', exam:'Creatinina / ureia', result:'0,8 · 35 mg/dL', range:'Normais', purpose:'Ajudam a avaliar filtração renal e metabolismo nitrogenado.', reading:'Função renal globalmente preservada no conjunto.', action:'Sem conduta específica.', status:'good'},
  {person:'Ana', personKey:'ana', system:'Rins e urina', exam:'Urina tipo I', result:'Densidade 1.015 · pH 6 · leucócitos 3.000/mL · hemácias 2.000/mL', range:'Sem proteína, glicose, cetona, sangue, nitrito ou cilindros', purpose:'Rastreia infecção, sangue, proteína e alterações urinárias.', reading:'Aspecto límpido; sedimento sem sinal de infecção ou lesão renal.', action:'Sem conduta específica.', status:'good'},
  {person:'Ana', personKey:'ana', system:'Rins e urina', exam:'Cristais de oxalato de cálcio', result:'Positivo (+)', range:'Achado microscópico', purpose:'Mostram precipitação de sais na amostra.', reading:'Não diagnostica cálculo renal sem sintomas, sangue ou imagem.', action:'Hidratação; investigar se cólica, hematúria ou recorrência.', status:'context'},
  {person:'Ana', personKey:'ana', system:'Fígado', exam:'AST/TGO · ALT/TGP', result:'24 · 21 U/L', range:'Normais', purpose:'Enzimas que podem subir com lesão hepatocelular ou muscular.', reading:'Sem sinal enzimático de lesão hepática.', action:'Sem conduta específica.', status:'good'},
  {person:'Ana', personKey:'ana', system:'Vitaminas e ferro', exam:'Vitamina D (25-OH)', result:'28 ng/mL', range:'Zona limítrofe em alguns referenciais', purpose:'Reflete o estoque circulante de vitamina D.', reading:'Não é deficiência grave; alvo ótimo universal é incerto em adultos saudáveis.', action:'Rever risco ósseo, exposição e ingestão antes de suplementar.', status:'context'},
  {person:'Ana', personKey:'ana', system:'Vitaminas e ferro', exam:'Vitamina B12', result:'668 pg/mL', range:'Normal', purpose:'Essencial para sistema nervoso e formação sanguínea.', reading:'Adequada.', action:'Sem reposição indicada pelo número.', status:'good'},
  {person:'Ana', personKey:'ana', system:'Vitaminas e ferro', exam:'Ferro / ferritina', result:'125 µg/dL · 58,3 ng/mL', range:'Normais', purpose:'Avaliam ferro circulante e reserva corporal.', reading:'Reservas adequadas; não explicam a neutropenia.', action:'Sem reposição de ferro pelo painel.', status:'good'},
  {person:'Ana', personKey:'ana', system:'Hormonal', exam:'FSH / estradiol', result:'105 mUI/mL · 5 pg/mL', range:'Padrão pós-menopausa', purpose:'Caracterizam o eixo gonadal feminino.', reading:'Compatível com pós-menopausa; não é doença isolada.', action:'Conduta guiada por sintomas e saúde óssea, não pelos números.', status:'context'},
  {person:'Ana', personKey:'ana', system:'Hormonal', exam:'Cortisol sérico', result:'16,90 µg/dL', range:'Depende do horário', purpose:'Hormônio do eixo do estresse com forte ritmo diário.', reading:'Sem horário/contexto não permite concluir excesso ou deficiência.', action:'Não rastrear Cushing com cortisol aleatório; só investigar se clínica compatível.', status:'context'},
  {person:'Ana', personKey:'ana', system:'Vitaminas e ferro', exam:'Proteína C reativa', result:'0,15 mg/dL (1,5 mg/L)', range:'Baixa', purpose:'Marcador inespecífico de inflamação.', reading:'Não sugere inflamação sistêmica importante na coleta.', action:'Sem conduta isolada.', status:'good'},
  {person:'Ana', personKey:'ana', system:'Rins e urina', exam:'Cálcio', result:'9,7 mg/dL', range:'Normal', purpose:'Participa de osso, contração muscular e sinalização celular.', reading:'Normal.', action:'Sem conduta específica.', status:'good'},
  {person:'Ana', personKey:'ana', system:'Prevenção', exam:'Coproparasitológico', result:'Helmintos e protozoários ausentes', range:'Negativo', purpose:'Pesquisa parasitas intestinais na amostra.', reading:'Negativo.', action:'Sem tratamento antiparasitário pelo exame.', status:'good'},

  {person:'Vado', personKey:'vado', system:'Hematologia', exam:'Hemácias / hemoglobina / hematócrito', result:'4,89 milhões/mm³ · 15,2 g/dL · 45,0%', range:'Normais', purpose:'Avaliam quantidade de glóbulos vermelhos, transporte de oxigênio e anemia.', reading:'Normais; não há anemia.', action:'Sem conduta específica.', status:'good'},
  {person:'Vado', personKey:'vado', system:'Hematologia', exam:'Índices das hemácias', result:'VCM 92 · HCM 31,1 · CHCM 33,8 · RDW 12,7', range:'Normais', purpose:'Caracterizam tamanho, hemoglobina e variação das hemácias.', reading:'Padrão normal.', action:'Sem conduta específica.', status:'good'},
  {person:'Vado', personKey:'vado', system:'Hematologia', exam:'Leucócitos e diferencial', result:'5.920/mm³ · neutrófilos 3.374 · linfócitos 1.776 · monócitos 592 · eosinófilos 178/mm³', range:'Normais; basófilos 0', purpose:'Avaliam células de defesa e sua distribuição.', reading:'Sem leucopenia, neutropenia ou outra alteração absoluta.', action:'Sem conduta específica.', status:'good'},
  {person:'Vado', personKey:'vado', system:'Hematologia', exam:'Plaquetas', result:'251.000/mm³', range:'Normal', purpose:'Participam da coagulação e reparo vascular.', reading:'Preservadas.', action:'Sem conduta específica.', status:'good'},
  {person:'Vado', personKey:'vado', system:'Cardiovascular', exam:'Colesterol total', result:'234 mg/dL', range:'Alto pelo laudo', purpose:'Soma aproximada das frações de colesterol.', reading:'Aqui acompanha LDL alto e HDL baixo; não é elevação explicada por HDL protetor.', action:'Estratificar risco global.', status:'attention'},
  {person:'Vado', personKey:'vado', system:'Cardiovascular', exam:'LDL-C', result:'178,7 mg/dL', range:'Alto', purpose:'Estima colesterol em partículas LDL aterogênicas.', reading:'Elevação importante; principal achado cardiovascular.', action:'Confirmar, calcular risco e discutir tratamento após causas secundárias.', status:'priority'},
  {person:'Vado', personKey:'vado', system:'Cardiovascular', exam:'HDL-C', result:'37 mg/dL', range:'Baixo', purpose:'Integra transporte reverso e o perfil lipídico geral.', reading:'Baixo; reforça perfil desfavorável, mas não é alvo medicamentoso isolado.', action:'Manter exercício; focar risco global e LDL.', status:'attention'},
  {person:'Vado', personKey:'vado', system:'Cardiovascular', exam:'Triglicérides', result:'92 mg/dL', range:'Normal', purpose:'Refletem lipídios circulantes ligados ao metabolismo energético.', reading:'Favoráveis.', action:'Manter rotina.', status:'good'},
  {person:'Vado', personKey:'vado', system:'Cardiovascular', exam:'Não-HDL / razões (calculados)', result:'197 · total/HDL 6,32 · TG/HDL 2,49', range:'Cálculos, não impressos no laudo', purpose:'Não-HDL resume colesterol aterogênico; razões visualizam o padrão.', reading:'Carga aterogênica alta, coerente com o LDL.', action:'ApoB e Lp(a) podem refinar risco.', status:'priority'},
  {person:'Vado', personKey:'vado', system:'Tireoide', exam:'TSH ultrassensível', result:'6,96 mUI/mL', range:'Alto', purpose:'Sinal hipofisário que regula a tireoide.', reading:'Com T4 livre normal, forma padrão de hipotireoidismo subclínico.', action:'Repetir TSH/T4L, anti-TPO e sintomas; tratar de modo individualizado.', status:'attention'},
  {person:'Vado', personKey:'vado', system:'Tireoide', exam:'T4 livre', result:'0,92 ng/dL', range:'Normal', purpose:'Mede a fração livre do principal hormônio tireoidiano.', reading:'Normal; não há hipotireoidismo manifesto neste exame.', action:'Interpretar com repetição do TSH.', status:'good'},
  {person:'Vado', personKey:'vado', system:'Glicemia', exam:'Glicose', result:'95 mg/dL', range:'Normal', purpose:'Fotografia da glicemia no momento da coleta.', reading:'Normal.', action:'Manter rotina.', status:'good'},
  {person:'Vado', personKey:'vado', system:'Glicemia', exam:'Hemoglobina glicada', result:'5,4% · eAG 107 mg/dL', range:'Normal', purpose:'Estima a glicemia média dos últimos 2–3 meses.', reading:'Sem sinal laboratorial de pré-diabetes ou diabetes.', action:'Rastreamento habitual.', status:'good'},
  {person:'Vado', personKey:'vado', system:'Rins e urina', exam:'Creatinina / ureia', result:'1,0 · 44 mg/dL', range:'Normais', purpose:'Ajudam a avaliar filtração renal e metabolismo nitrogenado.', reading:'Função renal globalmente preservada no conjunto.', action:'Sem conduta específica.', status:'good'},
  {person:'Vado', personKey:'vado', system:'Rins e urina', exam:'Urina tipo I', result:'Densidade 1.015 · pH 6 · leucócitos 4.000/mL · hemácias 2.000/mL', range:'Sem proteína, glicose, cetona, sangue, nitrito ou cilindros', purpose:'Rastreia infecção, sangue, proteína e alterações urinárias.', reading:'Aspecto límpido; sedimento sem sinal de infecção ou lesão renal.', action:'Sem conduta específica.', status:'good'},
  {person:'Vado', personKey:'vado', system:'Rins e urina', exam:'Cristais de oxalato de cálcio', result:'Positivo (+)', range:'Achado microscópico', purpose:'Mostram precipitação de sais na amostra.', reading:'Não diagnostica cálculo renal sem sintomas, sangue ou imagem.', action:'Hidratação; investigar se cólica, hematúria ou recorrência.', status:'context'},
  {person:'Vado', personKey:'vado', system:'Fígado', exam:'AST/TGO · ALT/TGP', result:'15 · 12 U/L', range:'Normais', purpose:'Enzimas que podem subir com lesão hepatocelular ou muscular.', reading:'Sem sinal enzimático de lesão hepática.', action:'Sem conduta específica.', status:'good'},
  {person:'Vado', personKey:'vado', system:'Vitaminas e ferro', exam:'Vitamina D (25-OH)', result:'23 ng/mL', range:'Zona limítrofe em alguns referenciais', purpose:'Reflete o estoque circulante de vitamina D.', reading:'Não é deficiência grave; alvo ótimo universal é incerto em adultos saudáveis.', action:'Rever ingestão, exposição e risco ósseo antes de suplementar.', status:'context'},
  {person:'Vado', personKey:'vado', system:'Vitaminas e ferro', exam:'Vitamina B12', result:'452 pg/mL', range:'Normal', purpose:'Essencial para sistema nervoso e formação sanguínea.', reading:'Adequada.', action:'Sem reposição indicada pelo número.', status:'good'},
  {person:'Vado', personKey:'vado', system:'Vitaminas e ferro', exam:'Ferro / ferritina', result:'113 µg/dL · 280 ng/mL', range:'Dentro da faixa masculina', purpose:'Avaliam ferro circulante e reserva corporal.', reading:'Ferritina alta-normal não equivale a sobrecarga de ferro.', action:'Se persistente, saturação de transferrina/TIBC e PCR.', status:'context'},
  {person:'Vado', personKey:'vado', system:'Rins e urina', exam:'Ácido úrico', result:'5,8 mg/dL', range:'Normal', purpose:'Produto do metabolismo de purinas, ligado a gota e cálculos em certos contextos.', reading:'Normal.', action:'Sem tratamento.', status:'good'},
  {person:'Vado', personKey:'vado', system:'Rins e urina', exam:'Cálcio', result:'9,1 mg/dL', range:'Normal', purpose:'Participa de osso, contração muscular e sinalização celular.', reading:'Normal.', action:'Sem conduta específica.', status:'good'},
  {person:'Vado', personKey:'vado', system:'Prevenção', exam:'PSA total', result:'0,47 ng/mL', range:'Baixo', purpose:'Marcador prostático usado em decisão compartilhada de rastreamento.', reading:'Resultado tranquilizador, mas não é garantia absoluta.', action:'Seguir rastreamento conforme sintomas, risco e decisão médica.', status:'good'},
  {person:'Vado', personKey:'vado', system:'Prevenção', exam:'Coproparasitológico (3 amostras)', result:'Helmintos e protozoários ausentes', range:'Negativo', purpose:'Pesquisa parasitas intestinais em amostras seriadas.', reading:'Negativo.', action:'Sem tratamento antiparasitário pelo exame.', status:'good'},
  {person:'Vado', personKey:'vado', system:'Prevenção', exam:'Sangue oculto nas fezes', result:'Negativo', range:'Negativo', purpose:'Pesquisa sangramento microscópico como parte de rastreamento colorretal.', reading:'Tranquilizador para esta coleta, mas não encerra o rastreamento aos 60 anos.', action:'Confirmar método e intervalo; FIT costuma ser anual ou colonoscopia conforme estratégia.', status:'context'}
];

const labels = {priority:'Prioridade', attention:'Atenção', context:'Contexto', good:'Favorável'};
const glossary = [
  ['Anti-TPO', 'Um anticorpo: uma “marca” feita pelo sistema de defesa. Quando aparece, pode indicar que o próprio corpo está irritando a tireoide.'],
  ['ApoB', 'É como contar quantos “caminhões” capazes de deixar colesterol na parede das artérias estão circulando.'],
  ['AST/TGO', 'Enzima encontrada no fígado e nos músculos. Quando sobe muito, pode ser sinal de lesão nessas células.'],
  ['ALT/TGP', 'Enzima mais ligada ao fígado. É um dos sensores usados para procurar irritação ou lesão hepática.'],
  ['Aterosclerose', 'Acúmulo lento de gordura e inflamação na parede das artérias, como uma sujeira que estreita um cano ao longo dos anos.'],
  ['Aterogênico', 'Algo que pode favorecer o acúmulo de gordura na parede das artérias ao longo dos anos.'],
  ['Basófilos', 'Um tipo pouco numeroso de célula de defesa que participa de alergias e sinais inflamatórios.'],
  ['Cilindros', 'Pequenos moldes formados dentro dos canais dos rins. Certos tipos podem dar pistas de lesão renal.'],
  ['Cortisol', 'Hormônio que ajuda o corpo a acordar, reagir ao estresse e organizar energia. Ele muda bastante durante o dia.'],
  ['Creatinina', 'Resíduo produzido pelos músculos. Os rins o filtram; por isso ele ajuda a observar como os rins estão trabalhando.'],
  ['Cushing', 'Condição rara em que o corpo fica exposto a cortisol demais por muito tempo. Um cortisol isolado não confirma isso.'],
  ['Estradiol', 'Um dos principais hormônios sexuais femininos. Costuma cair bastante depois da menopausa.'],
  ['Eosinófilos', 'Células de defesa que podem aumentar em alergias e algumas infecções por parasitas. O valor absoluto importa mais que o percentual sozinho.'],
  ['Ferritina', 'É como o “estoque de ferro” do corpo. Também pode subir quando existe inflamação, álcool em excesso ou alteração do fígado.'],
  ['FIT', 'Teste de fezes que procura quantidades minúsculas de sangue que os olhos não conseguem ver.'],
  ['FSH', 'Hormônio do cérebro que pede aos ovários para trabalharem. Depois da menopausa, ele costuma ficar alto porque os ovários respondem menos.'],
  ['Hematócrito', 'Mostra quanto do volume do sangue é ocupado pelos glóbulos vermelhos.'],
  ['Hematúria', 'Nome técnico para presença de sangue na urina.'],
  ['Hemácias', 'São os glóbulos vermelhos, as células que levam oxigênio para o corpo.'],
  ['Hemocromatose', 'Doença, geralmente genética, em que o corpo acumula ferro demais. Ferritina isolada não basta para confirmá-la.'],
  ['HbA1c', 'É outro nome para hemoglobina glicada: a estimativa da média de açúcar no sangue nos últimos dois ou três meses.'],
  ['Hemoglobina', 'Proteína dentro dos glóbulos vermelhos que carrega oxigênio pelo corpo.'],
  ['Hemoglobina glicada', 'Mostra uma média aproximada do açúcar no sangue nos últimos dois ou três meses. Também aparece como HbA1c.'],
  ['Hipotireoidismo manifesto', 'Quando a tireoide claramente produz hormônio de menos: o TSH sobe e o T4 livre cai.'],
  ['Hipotireoidismo subclínico', 'Quando o cérebro precisa “gritar mais” para a tireoide trabalhar, mas o hormônio T4 ainda continua normal.'],
  ['HDL-C', 'Partícula que ajuda a transportar colesterol de volta. Um número alto costuma ser favorável, mas não apaga o risco do LDL.'],
  ['LDL-C', 'Partícula que leva colesterol pelo sangue. Em excesso e por muito tempo, pode deixá-lo na parede das artérias.'],
  ['Leucócitos', 'São os glóbulos brancos: o conjunto das células de defesa que circulam no sangue.'],
  ['Leucopenia', 'Quando o número total de glóbulos brancos está menor que o esperado.'],
  ['Linfócitos', 'Células de defesa que reconhecem invasores, guardam memória e ajudam a produzir anticorpos.'],
  ['Lp(a)', 'Uma partícula de colesterol definida principalmente pelos genes. Geralmente basta medi-la uma vez para refinar o risco do coração.'],
  ['Não-HDL', 'É todo o colesterol que não está no HDL. Resume as partículas que podem entrar na parede das artérias.'],
  ['Neutrófilos', 'Células de defesa que funcionam como a equipe de resposta rápida, principalmente contra bactérias e fungos.'],
  ['Neutropenia', 'Quando há poucos neutrófilos no sangue. Pode ser passageira, mas aumenta a atenção para infecções quando a queda é maior.'],
  ['Monócitos', 'Células de defesa que ajudam a limpar restos e podem virar “faxineiros” dentro dos tecidos.'],
  ['Oxalato de cálcio', 'Um tipo de cristal que pode aparecer na urina. Encontrar cristais não significa automaticamente que exista uma pedra no rim.'],
  ['Plaquetas', 'Pequenos fragmentos do sangue que ajudam a formar o tampão quando acontece um sangramento.'],
  ['PCR', 'Proteína C reativa: um alarme geral de inflamação. Ela diz que há fumaça, mas sozinha não diz onde está o fogo.'],
  ['PSA', 'Proteína produzida pela próstata. Ajuda no acompanhamento, mas não confirma nem exclui câncer sozinha.'],
  ['Saturação de transferrina', 'Mostra quanto dos “ônibus” que transportam ferro está ocupado. Ajuda a saber se realmente existe ferro demais.'],
  ['Subclínico', 'Quer dizer que existe uma pista no exame, mas o hormônio principal ainda está normal e pode não haver sintomas claros.'],
  ['T4 livre', 'É o hormônio da tireoide disponível para o corpo usar. Ajuda a saber se a produção está realmente baixa ou alta.'],
  ['Triglicérides', 'Forma de gordura usada como combustível e reserva de energia. Pode subir com álcool, açúcar, excesso calórico e algumas doenças.'],
  ['TSH', 'É o “recado” que o cérebro manda para a tireoide trabalhar. Se a tireoide responde pouco, o cérebro costuma aumentar esse recado.'],
  ['TIBC', 'Teste que estima quantos lugares existem nos transportadores de ferro. Ele ajuda a interpretar ferro e ferritina.'],
  ['Ureia', 'Resíduo formado quando o corpo usa proteínas. Rins, hidratação e alimentação podem mudar seu valor.'],
  ['Vitamina D (25-OH)', 'É a medida usada para estimar a reserva de vitamina D. Não existe um número mágico perfeito para toda pessoa saudável.'],
  ['VCM', 'Mostra o tamanho médio dos glóbulos vermelhos. Ajuda a investigar diferentes tipos de anemia.'],
  ['HCM', 'Estima quanta hemoglobina existe dentro de cada glóbulo vermelho.'],
  ['CHCM', 'Mostra a concentração de hemoglobina dentro dos glóbulos vermelhos.'],
  ['RDW', 'Mostra se os glóbulos vermelhos têm tamanhos muito diferentes entre si.'],
  ['eAG', 'Transforma a hemoglobina glicada em uma média estimada de açúcar no sangue, em mg/dL.'],
  ['Coproparasitológico', 'Exame de fezes que procura vermes e protozoários.'],
  ['Densitometria', 'Exame de imagem que mede a quantidade de mineral nos ossos e ajuda a estimar risco de fratura.'],
  ['Risco absoluto', 'Chance real de um evento acontecer em um período, juntando idade, pressão, colesterol, cigarro, diabetes e outros fatores.'],
  ['Transaminases', 'Nome do grupo de enzimas AST/TGO e ALT/TGP, usadas como sensores de fígado e músculo.']
].sort((a,b) => a[0].localeCompare(b[0], 'pt-BR'));
const tbody = document.querySelector('#examTableBody');
const search = document.querySelector('#examSearch');
const systemFilter = document.querySelector('#systemFilter');
const statusFilter = document.querySelector('#statusFilter');
const emptyState = document.querySelector('#emptyState');
const tableCount = document.querySelector('#tableCount');
let profile = 'all';

function normalize(value) {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

function renderTable() {
  const query = normalize(search.value.trim());
  const system = systemFilter.value;
  const status = statusFilter.value;
  const filtered = exams.filter(item => {
    const haystack = normalize(Object.values(item).join(' '));
    return (profile === 'all' || item.personKey === profile)
      && (system === 'all' || item.system === system)
      && (status === 'all' || item.status === status)
      && (!query || haystack.includes(query));
  });

  tbody.innerHTML = filtered.map(item => `
    <tr>
      <td class="exam-name"><strong>${item.exam}</strong><small>${item.person} · ${item.system}</small><span class="table-status status-${item.status}">${labels[item.status]}</span></td>
      <td class="result-cell"><strong>${item.result}</strong><small>${item.range}</small></td>
      <td>${item.purpose}</td>
      <td>${item.reading}</td>
      <td>${item.action}</td>
    </tr>`).join('');
  emptyState.hidden = filtered.length !== 0;
  tableCount.textContent = `${filtered.length} resultado${filtered.length === 1 ? '' : 's'} exibido${filtered.length === 1 ? '' : 's'}`;
  annotateTerms(tbody);
}

function annotateTerms(root) {
  const skip = new Set(['SCRIPT','STYLE','A','BUTTON','INPUT','SELECT','TEXTAREA','OPTION']);
  const entries = [...glossary].sort((a,b) => b[0].length - a[0].length);
  const escaped = entries.map(([term]) => term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const pattern = new RegExp(`\\b(${escaped.join('|')})\\b`, 'gi');
  const definitions = new Map(entries.map(([term, definition]) => [normalize(term), definition]));
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.nodeValue.trim() || skip.has(node.parentElement?.tagName) || node.parentElement?.closest('.term')) return NodeFilter.FILTER_REJECT;
      pattern.lastIndex = 0;
      return pattern.test(node.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    }
  });
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach(node => {
    pattern.lastIndex = 0;
    const fragment = document.createDocumentFragment();
    let last = 0;
    node.nodeValue.replace(pattern, (match, _term, offset) => {
      fragment.append(node.nodeValue.slice(last, offset));
      const span = document.createElement('span');
      span.className = 'term';
      span.tabIndex = 0;
      span.setAttribute('role', 'button');
      span.setAttribute('aria-describedby', 'termPopover');
      span.dataset.definition = definitions.get(normalize(match));
      span.textContent = match;
      fragment.append(span);
      last = offset + match.length;
      return match;
    });
    fragment.append(node.nodeValue.slice(last));
    node.replaceWith(fragment);
  });
}

const glossaryGrid = document.querySelector('#glossaryGrid');
const glossarySearch = document.querySelector('#glossarySearch');
const glossaryCount = document.querySelector('#glossaryCount');
const glossaryEmpty = document.querySelector('#glossaryEmpty');
function renderGlossary() {
  const query = normalize(glossarySearch.value.trim());
  const filtered = glossary.filter(([term, definition]) => !query || normalize(`${term} ${definition}`).includes(query));
  glossaryGrid.innerHTML = filtered.map(([term, definition]) => `<article class="glossary-card"><span class="glossary-letter">${term.slice(0,1)}</span><h3>${term}</h3><p>${definition}</p></article>`).join('');
  glossaryCount.textContent = `${filtered.length} termo${filtered.length === 1 ? '' : 's'}`;
  glossaryEmpty.hidden = filtered.length !== 0;
}
glossarySearch.addEventListener('input', renderGlossary);

document.querySelectorAll('.profile-button').forEach(button => {
  button.addEventListener('click', () => {
    profile = button.dataset.profile;
    document.querySelectorAll('.profile-button').forEach(item => {
      const active = item === button;
      item.classList.toggle('active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    document.querySelectorAll('[data-person]').forEach(element => {
      const person = element.dataset.person;
      element.classList.toggle('profile-hidden', profile !== 'all' && person !== profile && person !== 'all');
    });
    renderTable();
  });
});

[search, systemFilter, statusFilter].forEach(control => control.addEventListener('input', renderTable));

const themeToggle = document.querySelector('#themeToggle');
const savedTheme = localStorage.getItem('medical-theme');
if (savedTheme) document.documentElement.dataset.theme = savedTheme;
themeToggle.addEventListener('click', () => {
  const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = next;
  localStorage.setItem('medical-theme', next);
});

document.querySelector('#printButton').addEventListener('click', () => window.print());

const backToTop = document.querySelector('#backToTop');
window.addEventListener('scroll', () => backToTop.classList.toggle('visible', window.scrollY > 700), {passive:true});
backToTop.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, {threshold:.08});
document.querySelectorAll('.reveal').forEach(element => revealObserver.observe(element));

const sections = [...document.querySelectorAll('main section[id]')];
const navLinks = [...document.querySelectorAll('.side-nav a')];
const navObserver = new IntersectionObserver(entries => {
  const visible = entries.filter(entry => entry.isIntersecting).sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (!visible) return;
  navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${visible.target.id}`));
}, {rootMargin:'-20% 0px -65% 0px', threshold:[0,.2,.5]});
sections.forEach(section => navObserver.observe(section));

renderGlossary();
annotateTerms(document.querySelector('main'));
renderTable();

const termPopover = document.querySelector('#termPopover');
let pinnedTerm = null;
function showTerm(term, pin = false) {
  if (!term) return;
  if (pin) pinnedTerm = term;
  termPopover.textContent = term.dataset.definition;
  termPopover.setAttribute('aria-hidden', 'false');
  termPopover.classList.add('visible');
  const rect = term.getBoundingClientRect();
  const width = Math.min(310, window.innerWidth - 28);
  const estimatedHeight = termPopover.offsetHeight || 86;
  const left = Math.max(14, Math.min(window.innerWidth - width - 14, rect.left + rect.width / 2 - width / 2));
  const top = rect.top > estimatedHeight + 22 ? rect.top - estimatedHeight - 10 : rect.bottom + 10;
  termPopover.style.width = `${width}px`;
  termPopover.style.left = `${left}px`;
  termPopover.style.top = `${Math.max(10, top)}px`;
}
function hideTerm(force = false) {
  if (pinnedTerm && !force) return;
  pinnedTerm = null;
  termPopover.classList.remove('visible');
  termPopover.setAttribute('aria-hidden', 'true');
}
document.addEventListener('pointerover', event => { const term = event.target.closest('.term'); if (term && !pinnedTerm) showTerm(term); });
document.addEventListener('pointerout', event => { if (event.target.closest('.term') && !pinnedTerm) hideTerm(); });
document.addEventListener('focusin', event => { const term = event.target.closest('.term'); if (term) showTerm(term); });
document.addEventListener('focusout', event => { if (event.target.closest('.term')) hideTerm(true); });
document.addEventListener('click', event => {
  const term = event.target.closest('.term');
  if (term) {
    if (pinnedTerm === term) hideTerm(true); else showTerm(term, true);
  } else {
    hideTerm(true);
  }
});
window.addEventListener('scroll', () => { if (pinnedTerm) showTerm(pinnedTerm, true); else hideTerm(); }, {passive:true});
