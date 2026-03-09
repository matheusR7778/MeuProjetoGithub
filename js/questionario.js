// Dados do questionário
const TimeManagementData = {
    questions: [
        {
            id: 1,
            question: "Como você geralmente planeja seu dia?",
            options: [
                { value: "a", text: "Lista detalhada de tarefas com horários específicos" },
                { value: "b", text: "Lista de prioridades sem horários fixos" },
                { value: "c", text: "Decido conforme o dia vai acontecendo" },
                { value: "d", text: "Raramente planejo, vou resolvendo as urgências" }
            ]
        },
        {
            id: 2,
            question: "Quando você tem múltiplas tarefas, como decide por onde começar?",
            options: [
                { value: "a", text: "Pela mais urgente ou com prazo mais curto" },
                { value: "b", text: "Pela mais importante e estratégica" },
                { value: "c", text: "Pela mais fácil ou rápida de terminar" },
                { value: "d", text: "Pela que estou com mais vontade de fazer" }
            ]
        },
        {
            id: 3,
            question: "Como você lida com interrupções durante tarefas importantes?",
            options: [
                { value: "a", text: "Bloqueio totalmente e foco até terminar" },
                { value: "b", text: "Atendo rapidamente e volto ao foco" },
                { value: "c", text: "Paro completamente e depois retomo" },
                { value: "d", text: "Multitarefa - faço várias coisas ao mesmo tempo" }
            ]
        },
        {
            id: 4,
            question: "Qual é sua relação com prazos?",
            options: [
                { value: "a", text: "Sempre termino com antecedência" },
                { value: "b", text: "Termino próximo ao prazo, mas sem estresse" },
                { value: "c", text: "Frequentemente preciso de mais tempo" },
                { value: "d", text: "Só trabalho bem sob pressão de prazos curtos" }
            ]
        },
        {
            id: 5,
            question: "Como você usa tecnologia para gerenciar seu tempo?",
            options: [
                { value: "a", text: "Uso múltiplos apps e sistemas integrados" },
                { value: "b", text: "Uso um método principal (app ou papel)" },
                { value: "c", text: "Uso lembretes básicos no celular" },
                { value: "d", text: "Prefiro métodos manuais sem tecnologia" }
            ]
        },
        {
            id: 6,
            question: "Quando você se sente mais produtivo?",
            options: [
                { value: "a", text: "Manhãs - tenho pico de energia cedo" },
                { value: "b", text: "Tardes - vou aquecendo durante o dia" },
                { value: "c", text: "Noites - sou mais criativo tarde" },
                { value: "d", text: "Varia muito - não tenho horário fixo" }
            ]
        },
        {
            id: 7,
            question: "Como você lida com tarefas grandes e complexas?",
            options: [
                { value: "a", text: "Divido em partes pequenas e planejo cada etapa" },
                { value: "b", text: "Foco no todo e vou ajustando no caminho" },
                { value: "c", text: "Começo e vejo no que dá" },
                { value: "d", text: "Adio até não ter mais como escapar" }
            ]
        },
        {
            id: 8,
            question: "Qual é sua atitude em relação a dizer 'não' para demandas?",
            options: [
                { value: "a", text: "Digo não facilmente para proteger meu tempo" },
                { value: "b", text: "Avalio cuidadosamente antes de decidir" },
                { value: "c", text: "Tenho dificuldade em dizer não" },
                { value: "d", text: "Quase nunca digo não - aceito tudo" }
            ]
        }
    ],

    // Sistema de pontuação para perfis de gestão do tempo
    scoring: {
        a: "estrategista",
        b: "flexivel", 
        c: "reativo",
        d: "improvisador"
    },

    // Banco com 50+ respostas personalizadas
    responses: {
        // 15 respostas para ESTRATEGISTA
        estrategista: [
            "🎯 Você é um Estrategista Nato - planejamento é seu superpoder!",
            "📊 Sua abordagem metódica e sistemática é impressionante e eficiente.",
            "⚡ Você domina a arte de transformar caos em ordem através do planejamento.",
            "🏆 Sua capacidade de antecipar problemas e criar planos B é competitiva.",
            "🧠 Você pensa como um enxadrista - sempre 3 jogadas à frente.",
            "📈 Seus sistemas de organização são dignos de serem ensinados.",
            "🎪 Você transforma projetos complexos em sequências executáveis.",
            "💎 Sua disciplina com prazos e horários é rara e valiosa.",
            "🚀 Você otimiza processos naturalmente - eficiência é seu DNA.",
            "🌈 Seu planejamento detalhado elimina surpresas desagradáveis.",
            "🔧 Você constrói sistemas que funcionam independente do seu humor.",
            "🎨 Sua abordagem combina criatividade com execução precisa.",
            "⚖️ Você equilibra perfeitamente visão estratégica e ação tática.",
            "🌟 Sua produtividade é consistente e previsível - uma raridade.",
            "📋 Suas listas de tarefas são obras de arte da organização."
        ],

        // 15 respostas para FLEXÍVEL  
        flexivel: [
            "🔄 Você é o Mestre da Flexibilidade - adaptabilidade é sua força!",
            "🌊 Você navega por mudanças com a graça de um surfista profissional.",
            "🎭 Sua capacidade de se ajustar às circunstâncias é extraordinária.",
            "🌈 Você encontra oportunidades onde outros veem problemas.",
            "⚡ Sua agilidadade mental permite pivotar rapidamente quando necessário.",
            "🎯 Você mantém o foco no essencial sem se prender a planos rígidos.",
            "💡 Sua mente ágil conecta pontos que outros não veem.",
            "🚀 Você acelera em ambientes dinâmicos e em constante mudança.",
            "🎪 Você performa bem sob pressão e em cenários imprevisíveis.",
            "🌱 Sua abordagem orgânica permite crescimento em múltiplas direções.",
            "🎨 Você pinta com as cores que a vida te oferece no momento.",
            "⚖️ Você equilibra espontaneidade com responsabilidade admirávelmente.",
            "🌟 Sua versatilidade é um ativo em um mundo em transformação.",
            "🔮 Você intui o fluxo natural das coisas e segue com sabedoria.",
            "🎵 Sua produtividade tem ritmo próprio, mas sempre encontra a melodia."
        ],

        // 15 respostas para REATIVO
        reativo: [
            "🎪 Você é o Reactor Dinâmico - responde ao momento com energia!",
            "⚡ Sua capacidade de ação imediata em situações urgentes é notável.",
            "🔥 Você brilha em ambientes de alta pressão e ação rápida.",
            "🎯 Seu foco no 'agora' permite resolver problemas instantaneamente.",
            "🚀 Você decola quando a situação exige velocidade e decisão.",
            "💥 Sua energia explosiva em momentos críticos é impressionante.",
            "🌪️ Você transforma crises em oportunidades através da ação direta.",
            "🎭 Sua performance em cenários imprevisíveis é cinematográfica.",
            "⚡ Você é como um raio - rápido, preciso e cheio de energia.",
            "🔧 Sua habilidade de 'consertar enquanto voa' é admirável.",
            "🎪 Você dança com o caos e encontra ritmo no improviso.",
            "💎 Seu valor brilha mais em situações que exigem resposta imediata.",
            "🚒 Você é o bombeiro da produtividade - excelente em apagar incêndios.",
            "🎯 Sua intuição para o que precisa ser feito AGORA é aguçada.",
            "🌟 Você ilumina situações obscuras com ação decisiva e coragem."
        ],

        // 15 respostas para IMPROVISADOR
        improvisador: [
            "🎨 Você é o Artista da Improvisação - criatividade em tempo real!",
            "🎭 Sua capacidade de criar soluções do nada é verdadeiramente artística.",
            "✨ Você transforma limitações em oportunidades através da inventividade.",
            "🎪 Sua mente funciona como um estúdio de criação constante.",
            "🌈 Você vê possibilidades onde outros veem obstáculos intransponíveis.",
            "🚀 Sua abordagem 'mão na massa' produz resultados surpreendentes.",
            "💡 Suas soluções improvisadas frequentemente superam planos elaborados.",
            "🎵 Sua produtividade tem o ritmo do jazz - livre, criativa e única.",
            "🌱 Você cresce organicamente, adaptando-se ao terreno que pisa.",
            "🎯 Seu foco no presente permite inovações que planejadores não veem.",
            "⚡ Sua velocidade de pensamento e ação é impressionante.",
            "🔮 Você intui caminhos que a lógica não consegue mapear antecipadamente.",
            "🌟 Seu brilho criativo ilumina problemas de ângulos inesperados.",
            "🎨 Você pinta com as cores do momento, criando obras únicas.",
            "💎 Sua habilidade de encontrar diamantes no caos é extraordinária."
        ]
    },

    // 50+ estratégias personalizadas
    strategies: [
        "⏰ Técnica Pomodoro Avançada: 25min foco + 5min pausa + 15min revisão",
        "🎯 Método Eisenhower: Urgente/Importante em 4 quadrantes visuais",
        "🚀 Time Blocking: Agende blocos de trabalho como reuniões importantes",
        "🌈 Theme Days: Dedique cada dia da semana a um tipo diferente de tarefa",
        "💡 2-Minute Rule: Se levar menos de 2 minutos, faça IMEDIATAMENTE",
        "🎪 Energy Mapping: Identifique seus picos de energia naturais",
        "🔍 Weekly Review: 1 hora semanal para planejar e ajustar sistemas",
        "🚫 Digital Minimalism: Reduza apps e notificações ao essencial",
        "🎯 MIT (Most Important Task): 1 tarefa crucial por dia, acima de tudo",
        "🌈 Batching: Agrupe tarefas similares para ganhar eficiência",
        "💭 Mindful Transitions: 60 segundos de consciência entre atividades",
        "🚀 Parkinson's Law: Defina prazos artificiais mais curtos",
        "🎨 Visual Planning: Use cores e elementos visuais no planejamento",
        "⚡ Power Hour: 60 minutos de foco absoluto nas tarefas mais difíceis",
        "🌅 Morning Ritual: Rotina matinal consistente para criar momentum",
        "🎯 Decision Matrix: Sistema para tomar decisões rápidas e eficazes",
        "🚫 Not-To-Do List: Liste o que você NÃO vai fazer para focar no essencial",
        "💡 Idea Capture: Sistema rápido para capturar ideias antes que se percam",
        "🌈 Energy Accounting: Gerencie energia, não apenas tempo",
        "🎪 Focus Environment: Crie ambientes específicos para tipos de trabalho",
        "🚀 Progress Tracking: Métodos visuais para acompanhar avanços",
        "💭 Reflection Blocks: Tempo dedicado para pensar, não apenas fazer",
        "🎯 Priority Filter: Filtro de 3 perguntas antes de aceitar novas tarefas",
        "🌈 Digital Detox: Períodos regulares sem dispositivos eletrônicos",
        "⚡ Speed Implementation: Execute rapidamente decisões já tomadas",
        "🌱 Growth Time: Horários fixos para aprendizado e desenvolvimento",
        "🎨 Creative Sandbox: Espaço/tempo para experimentação sem pressão",
        "🚫 Interruption Shield: Estratégias específicas para proteger seu foco",
        "💡 Flow State Triggers: Rituais para entrar em estado de fluxo",
        "🌈 Energy Renewal: Técnicas de recuperação energética durante o dia",
        "🎯 Goal Alignment: Conecte tarefas diárias com objetivos de longo prazo",
        "🚀 Automation Setup: Identifique o que pode ser automatizado",
        "💭 Mind Mapping: Para planejamento criativo e resolução de problemas",
        "🎪 Productivity Sprints: Períodos curtos de hiperprodutividade",
        "🌈 Environmental Design: Otimize seu espaço para facilitar ações desejadas",
        "⚡ Quick Wins: Comece o dia com vitórias rápidas para criar momentum",
        "🌅 Evening Review: 15 minutos para fechar o dia e planejar o próximo",
        "🎯 Task Unification: Combine tarefas complementares naturalmente",
        "🚫 Notification Management: Controle total sobre interrupções digitais",
        "💡 Learning Integration: Aprenda enquanto executa tarefas rotineiras",
        "🌈 Energy Cycling: Alterne entre tipos de tarefas para manter energia",
        "🎪 Progress Celebration: Reconheça e celebre cada avanço",
        "🚀 Deadline Stacking: Múltiplos prazos curtos em vez de um longo",
        "💭 Mental Models: Use frameworks para pensar sobre produtividade",
        "🎯 Buffer Time: Sempre inclua margem de segurança nos prazos",
        "🌈 Task Sequencing: Ordem inteligente para sequência de execução",
        "⚡ Rapid Prototyping: Versões rápidas antes de versões perfeitas",
        "🌱 Skill Stacking: Combine habilidades para multiplicar eficiência",
        "🎨 Analog Methods: Use papel e caneta para certos tipos de planejamento",
        "🚀 Productivity Metrics: Meça o que importa, não apenas horas trabalhadas"
    ],

    // Análises detalhadas por perfil
    profileAnalysis: {
        estrategista: {
            name: "🎯 O Estrategista Metódico",
            description: "Mestre do planejamento e execução sistemática",
            strengths: [
                "Excelente em projetos complexos que exigem planejamento detalhado",
                "Altamente confiável com prazos e compromissos",
                "Cria sistemas eficientes que funcionam consistentemente",
                "Antecipa problemas e cria planos de contingência"
            ],
            challenges: [
                "Pode ser muito rígido quando planos precisam mudar",
                "Às vezes gasta muito tempo planejando em vez de agir",
                "Pode subestimar a importância da flexibilidade",
                "Risco de perfeccionismo paralisante"
            ],
            growth: "Aprender a abraçar a flexibilidade sem perder a eficiência"
        },

        flexivel: {
            name: "🔄 O Adaptável Dinâmico",
            description: "Especialista em ajustar-se a circunstâncias em mudança",
            strengths: [
                "Excelente em ambientes dinâmicos e imprevisíveis",
                "Mantém produtividade mesmo quando planos mudam",
                "Bom em priorizar sob pressão",
                "Encontra oportunidades em situações caóticas"
            ],
            challenges: [
                "Pode procrastinar por confiar demais na adaptabilidade",
                "Às vezes falta estrutura para projetos de longo prazo",
                "Pode se distrair com novas oportunidades",
                "Risco de sobrecarregar-se aceitando muitas coisas"
            ],
            growth: "Desenvolver mais estrutura sem perder a agilidade"
        },

        reativo: {
            name: "⚡ O Reactor Energético",
            description: "Brilha em situações que exigem ação imediata",
            strengths: [
                "Excelente sob pressão e em crises",
                "Toma decisões rápidas e eficazes",
                "Altamente produtivo quando motivado",
                "Bom em resolver problemas urgentes"
            ],
            challenges: [
                "Pode negligencer planejamento preventivo",
                "Produtividade pode ser inconsistente",
                "Risco de burnout por padrão 'tudo ou nada'",
                "Pode criar crises desnecessárias por falta de planejamento"
            ],
            growth: "Aprender a cultivar produtividade consistente além dos picos"
        },

        improvisador: {
            name: "🎨 O Criativo Improvisador",
            description: "Gênio em criar soluções inovadoras no momento",
            strengths: [
                "Extremamente criativo e inovador",
                "Excelente em pensar fora da caixa",
                "Bom em projetos que exigem originalidade",
                "Encontra soluções únicas para problemas complexos"
            ],
            challenges: [
                "Pode faltar consistência na execução",
                "Dificuldade com tarefas rotineiras",
                "Risco de começar muitos projetos e terminar poucos",
                "Pode subestimar a importância de sistemas"
            ],
            growth: "Desenvolver disciplina sem sufocar a criatividade"
        }
    }
};

// Sistema de análise para gestão do tempo
const TimeAnalysisSystem = {
    determineProfile(answers) {
        const profileCount = {
            estrategista: 0,
            flexivel: 0,
            reativo: 0,
            improvisador: 0
        };

        // Contar respostas por perfil
        Object.values(answers).forEach(answer => {
            const profile = TimeManagementData.scoring[answer];
            profileCount[profile]++;
        });

        // Encontrar perfil dominante
        let maxCount = 0;
        let dominantProfile = 'flexivel';

        Object.entries(profileCount).forEach(([profile, count]) => {
            if (count > maxCount) {
                maxCount = count;
                dominantProfile = profile;
            }
        });

        return dominantProfile;
    },

    generateResponses(profile) {
        const responses = [];
        
        // Selecionar 4 respostas aleatórias do perfil
        const profileResponses = TimeManagementData.responses[profile];
        const selectedResponses = profileResponses
            .sort(() => 0.5 - Math.random())
            .slice(0, 4);
        responses.push(...selectedResponses);
        
        return responses;
    },

    generateStrategies(profile) {
        // Estratégias específicas por perfil
        const profileSpecificStrategies = {
            estrategista: [
                "📊 Aproveite sua força no planejamento criando sistemas ainda mais eficientes",
                "🎯 Use sua habilidade de antecipação para criar planos de contingência robustos",
                "⚡ Combine planejamento detalhado com execução rápida para maximizar resultados",
                "🌈 Desenvolva flexibilidade dentro de seus sistemas estruturados"
            ],
            flexivel: [
                "🔄 Use sua adaptabilidade para testar diferentes métodos de produtividade",
                "🎪 Crie estruturas leves que permitam flexibilidade sem caos",
                "⚡ Aproveite sua agilidade para pivotar rapidamente entre prioridades",
                "🌈 Desenvolva sistemas que se adaptem às mudanças naturais do dia"
            ],
            reativo: [
                "⚡ Use sua energia reativa para criar momentum em projetos importantes",
                "🎯 Canalize sua capacidade de ação rápida para tarefas estratégicas",
                "🚀 Crie gatilhos que ativem seu modo 'ação' quando necessário",
                "💡 Aprenda a gerar a mesma energia para projetos de longo prazo"
            ],
            improvisador: [
                "🎨 Use sua criatividade para desenvolver métodos únicos de organização",
                "✨ Transforme tarefas rotineiras em desafios criativos",
                "🚀 Aproveite sua habilidade de improvisação para resolver problemas complexos",
                "🌈 Crie sistemas que estimulem而不是 sufocar sua criatividade"
            ]
        };

        // Combinar estratégias específicas com gerais
        const specific = profileSpecificStrategies[profile] || [
            "🎯 Desenvolva consciência do seu estilo natural de produtividade",
            "💡 Experimente diferentes abordagens para encontrar o que funciona para você",
            "🚀 Aproveite suas forças únicas enquanto trabalha nas áreas de crescimento",
            "🌈 Crie um sistema personalizado que respeite sua individualidade"
        ];

        const general = TimeManagementData.strategies
            .sort(() => 0.5 - Math.random())
            .slice(0, 4);

        return [...specific, ...general].sort(() => 0.5 - Math.random()).slice(0, 6);
    },

    getProfileAnalysis(profile) {
        return TimeManagementData.profileAnalysis[profile];
    }
};

// Classe principal do questionário
class TimeManagementQuiz {
    constructor() {
        this.currentQuestion = 0;
        this.answers = {};
        this.initializeApp();
    }

    initializeApp() {
        this.showPage('home-page');
        this.setupEventListeners();
    }

    setupEventListeners() {
        document.getElementById('startBtn').addEventListener('click', () => {
            this.startQuiz();
        });

        document.getElementById('prevBtn').addEventListener('click', () => {
            this.previousQuestion();
        });

        document.getElementById('nextBtn').addEventListener('click', () => {
            this.nextQuestion();
        });

        document.getElementById('submitBtn').addEventListener('click', () => {
            this.submitQuiz();
        });

        document.getElementById('restartBtn').addEventListener('click', () => {
            this.restartQuiz();
        });

        document.getElementById('homeBtn').addEventListener('click', () => {
            this.showPage('home-page');
        });

        // Menu hamburger
        const hamburgerBtn = document.getElementById("hamburger-btn");
        const navMenu = document.getElementById("main-nav");

        hamburgerBtn.addEventListener("click", () => {
            navMenu.classList.toggle("active");
            hamburgerBtn.textContent = navMenu.classList.contains("active") ? "✖" : "☰";
        });

        // Fecha o menu se o usuário clicar em um link
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if(navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    hamburgerBtn.textContent = "☰";
                }
            });
        });
    }

    startQuiz() {
        this.currentQuestion = 0;
        this.answers = {};
        this.showPage('quiz-page');
        this.displayQuestion();
        this.updateProgress();
        this.updateNavigation();
    }

    displayQuestion() {
        const question = TimeManagementData.questions[this.currentQuestion];
        const questionContainer = document.getElementById('questionContainer');
        
        let optionsHTML = '';
        question.options.forEach(option => {
            const isChecked = this.answers[question.id] === option.value;
            optionsHTML += `
                <div class="option">
                    <input type="radio" id="opt_${question.id}_${option.value}" name="answer" 
                           value="${option.value}" ${isChecked ? 'checked' : ''}>
                    <label for="opt_${question.id}_${option.value}" class="option-label">${option.text}</label>
                </div>
            `;
        });

        questionContainer.innerHTML = `
            <div class="question-card">
                <div class="question-number">Questão ${question.id}/8</div>
                <div class="question-text">${question.question}</div>
                <div class="options">${optionsHTML}</div>
            </div>
        `;

        // Adicionar event listeners para os radios
        document.querySelectorAll('input[name="answer"]').forEach(radio => {
            radio.addEventListener('change', (e) => {
                this.answers[question.id] = e.target.value;
            });
        });
    }

    updateProgress() {
        const progress = ((this.currentQuestion + 1) / TimeManagementData.questions.length) * 100;
        document.getElementById('progressFill').style.width = `${progress}%`;
        document.getElementById('progressText').textContent = 
            `Questão ${this.currentQuestion + 1} de ${TimeManagementData.questions.length}`;
    }

    updateNavigation() {
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const submitBtn = document.getElementById('submitBtn');

        prevBtn.disabled = this.currentQuestion === 0;
        
        const isLastQuestion = this.currentQuestion === TimeManagementData.questions.length - 1;
        nextBtn.style.display = isLastQuestion ? 'none' : 'block';
        submitBtn.style.display = isLastQuestion ? 'block' : 'none';
    }

    previousQuestion() {
        if (this.currentQuestion > 0) {
            this.saveCurrentAnswer();
            this.currentQuestion--;
            this.displayQuestion();
            this.updateProgress();
            this.updateNavigation();
        }
    }

    nextQuestion() {
        if (this.validateCurrentQuestion()) {
            this.saveCurrentAnswer();
            
            if (this.currentQuestion < TimeManagementData.questions.length - 1) {
                this.currentQuestion++;
                this.displayQuestion();
                this.updateProgress();
                this.updateNavigation();
            }
        } else {
            alert('Por favor, selecione uma resposta antes de continuar.');
        }
    }

    validateCurrentQuestion() {
        const currentQuestionId = TimeManagementData.questions[this.currentQuestion].id;
        return this.answers[currentQuestionId] !== undefined;
    }

    saveCurrentAnswer() {
        const selectedOption = document.querySelector('input[name="answer"]:checked');
        if (selectedOption) {
            const questionId = TimeManagementData.questions[this.currentQuestion].id;
            this.answers[questionId] = selectedOption.value;
        }
    }

    submitQuiz() {
        if (this.validateCurrentQuestion()) {
            this.saveCurrentAnswer();
            this.showResults();
        } else {
            alert('Por favor, responda esta questão antes de finalizar.');
        }
    }

    showResults() {
        this.showPage('results-page');
        this.displayResults();
    }

    displayResults() {
        const profile = TimeAnalysisSystem.determineProfile(this.answers);
        const responses = TimeAnalysisSystem.generateResponses(profile);
        const strategies = TimeAnalysisSystem.generateStrategies(profile);
        const analysis = TimeAnalysisSystem.getProfileAnalysis(profile);
        
        let resultsHTML = `
            <div class="score-section">
                <div class="score-card">
                    <div class="score-circle">
                        <div class="score-value">${profile.charAt(0).toUpperCase() + profile.slice(1)}</div>
                        <div class="score-label">Seu Perfil</div>
                    </div>
                    <div class="score-info">
                        <h2>${analysis.name}</h2>
                        <p>${analysis.description}</p>
                    </div>
                </div>
            </div>

            <div class="analysis-section">
                <h3 class="section-title">💪 Suas Principais Forças</h3>
                <div class="analysis-grid">
        `;

        analysis.strengths.forEach((strength, index) => {
            resultsHTML += `
                <div class="analysis-card">
                    <h4>Força ${index + 1}</h4>
                    <p>${strength}</p>
                </div>
            `;
        });

        resultsHTML += `
                </div>
            </div>

            <div class="analysis-section">
                <h3 class="section-title">🎯 Análise do Seu Perfil</h3>
                <div class="analysis-grid">
        `;

        responses.forEach((response, index) => {
            resultsHTML += `
                <div class="analysis-card">
                    <h4>Insight ${index + 1}</h4>
                    <p>${response}</p>
                </div>
            `;
        });

        resultsHTML += `
                </div>
            </div>

            <div class="tips-section">
                <h3 class="section-title">🚀 Estratégias Personalizadas</h3>
                <div class="tips-grid">
        `;

        strategies.forEach((strategy, index) => {
            resultsHTML += `
                <div class="tip-item">
                    <div class="tip-number">${index + 1}</div>
                    <p>${strategy}</p>
                </div>
            `;
        });

        resultsHTML += `
                </div>
            </div>

            <div class="type-section">
                <h3 class="section-title">🌱 Áreas de Desenvolvimento</h3>
                <div class="type-card">
                    <h3>Desafios e Crescimento</h3>
                    <p><strong>Desafios:</strong> ${analysis.challenges.join(', ')}</p>
                    <p><strong>Oportunidade de Crescimento:</strong> ${analysis.growth}</p>
                </div>
            </div>
        `;

        document.getElementById('resultsContainer').innerHTML = resultsHTML;
    }

    restartQuiz() {
        this.startQuiz();
    }

    showPage(pageId) {
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });
        document.getElementById(pageId).classList.add('active');
    }
}

// Inicializar a aplicação quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    new TimeManagementQuiz();
});