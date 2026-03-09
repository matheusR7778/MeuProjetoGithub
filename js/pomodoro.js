// =======================================================
// --- 1. CONFIGURAÇÃO PADRÃO ---
// =======================================================
const CONFIG = {
    POMODORO_TIME: 25 * 60,       // 25 minutos em segundos
    SHORT_BREAK_TIME: 5 * 60,     // 5 minutos em segundos
    LONG_BREAK_TIME: 15 * 60,     // 15 minutos em segundos
    CYCLES_BEFORE_LONG_BREAK: 4   // 4 Pomodoros por ciclo
};

// =======================================================
// --- 2. CLASSE PomodoroCore (Lógica de Contagem) ---
// (Sem mudanças, mas incluída para completude)
// =======================================================
class PomodoroCore {
    constructor() {
        this.state = {
            mode: "pomodoro",
            timeRemaining: CONFIG.POMODORO_TIME,
            isRunning: false,
            isPaused: false,
            intervalId: null
        };
    }

    getModeTime(mode) {
         switch (mode) {
            case 'pomodoro': return CONFIG.POMODORO_TIME;
            case 'short_break': return CONFIG.SHORT_BREAK_TIME;
            case 'long_break': return CONFIG.LONG_BREAK_TIME;
            default: return CONFIG.POMODORO_TIME;
        }
    }

    setMode(mode) {
        this.state.mode = mode;
        this.state.timeRemaining = this.getModeTime(mode);
        this.resetTimer();
    }

    startTimer() {
        if (this.state.isRunning && !this.state.isPaused) return;

        this.state.isRunning = true;
        this.state.isPaused = false;
        
        if (this.state.intervalId) {
            clearInterval(this.state.intervalId);
        }

        this.state.intervalId = setInterval(() => this.tick(), 1000);
    }

    pauseTimer() {
        if (!this.state.isRunning || this.state.isPaused) return;
        this.state.isPaused = true;
        clearInterval(this.state.intervalId);
    }

    resetTimer() {
        clearInterval(this.state.intervalId);
        this.state.intervalId = null;
        this.state.isRunning = false;
        this.state.isPaused = false;
        
        this.state.timeRemaining = this.getModeTime(this.state.mode);
    }

    tick() {
        if (this.state.timeRemaining <= 0) {
            this.completeTimer(); 
            return;
        }

        this.state.timeRemaining--;
        // logs e outras atualizações de UI fora do core
    }

    completeTimer() {
        clearInterval(this.state.intervalId);
        this.state.intervalId = null;
        this.state.isRunning = false;
        this.state.isPaused = false;
    }
}

// =======================================================
// --- 3. CLASSE PomodoroAnimations (Sem mudanças) ---
// =======================================================
class PomodoroAnimations {
    constructor() {
        this.focaEstudandoLuzAcesa = document.getElementById('foca-estudando-luz-acesa');
        this.focaLuzApagada = document.getElementById('foca-luz-apagada');
        this.focaVirandoPagina = document.getElementById('foca-virando-pagina');
        this.focaDivertindo = document.getElementById('foca-divertindo');
        this.allFocaStudyImages = [this.focaEstudandoLuzAcesa, this.focaLuzApagada, this.focaVirandoPagina];
        this.imageAnimationInterval = null;
        this.currentImageIndex = 0;
    }

    _hideAll() {
        [...this.allFocaStudyImages, this.focaDivertindo].forEach(img => {
            if (img) img.classList.remove('active', 'animando', 'virando-pagina', 'celebration');
        });
    }

    setStudyMode() {
        this.stopAnimation();
        this._hideAll();
        if (this.focaEstudandoLuzAcesa) this.focaEstudandoLuzAcesa.classList.add('active');
    }

    startStudyAnimation() {
        this.stopAnimation();
        this.currentImageIndex = 0; 
        
        if (!this.allFocaStudyImages || this.allFocaStudyImages.length === 0) return;

        this.imageAnimationInterval = setInterval(() => {
            this.currentImageIndex = (this.currentImageIndex + 1) % this.allFocaStudyImages.length;
            const currentImage = this.allFocaStudyImages[this.currentImageIndex];

            this._hideAll();
            
            if (currentImage) {
                currentImage.classList.add('active');
                if (currentImage.id === 'foca-virando-pagina') {
                    currentImage.classList.add('virando-pagina');
                    setTimeout(() => {
                        currentImage.classList.remove('virando-pagina');
                    }, 600);
                }
            }
        }, 4000); 
    }
    
    stopAnimation() {
        if (this.imageAnimationInterval) {
            clearInterval(this.imageAnimationInterval);
            this.imageAnimationInterval = null;
        }
    }

    triggerModeTransition(mode) {
        this.stopAnimation();
        this._hideAll();

        if (mode === 'pomodoro') {
            this.setStudyMode();
        } else {
            if (this.focaDivertindo) this.focaDivertindo.classList.add('active');
        }
    }
    
    triggerCompletionCelebration() {
        const activeImg = document.querySelector('.foca-img.active');
        if (activeImg) {
            activeImg.classList.add('celebration'); 
            setTimeout(() => {
                activeImg.classList.remove('celebration');
            }, 1500);
        }
    }
}


// =======================================================
// --- 4. CLASSE PomodoroUI (Controles e Display Corrigidos) ---
// =======================================================
class PomodoroUI {
    constructor(core) {
        this.core = core;
        this.progressBarLength = 1539.38; 
        
        this.elements = {
            timerDisplay: document.getElementById('timer'),
            startBtn: document.getElementById('startBtn'),
            pauseBtn: document.getElementById('pauseBtn'),
            resetBtn: document.getElementById('resetBtn'),
            pomodoroBtn: document.getElementById('pomodoroBtn'),
            shortBtn: document.getElementById('shortBtn'),
            longBtn: document.getElementById('longBtn'),
            loopBtn: document.getElementById('loopBtn'), 
            addMinuteBtn: document.getElementById('addMinute'),
            removeMinuteBtn: document.getElementById('removeMinute'),
            progressBar: document.getElementById('progress-bar'),
        };
    }
    
    setupEventListeners(app) { 
        this.elements.startBtn.addEventListener('click', () => app.handleStartContinue());
        this.elements.pauseBtn.addEventListener('click', () => app.pauseTimer());
        this.elements.resetBtn.addEventListener('click', () => app.resetApp());
        
        this.elements.pomodoroBtn.addEventListener('click', () => app.setManualMode('pomodoro'));
        this.elements.shortBtn.addEventListener('click', () => app.setManualMode('short_break'));
        this.elements.longBtn.addEventListener('click', () => app.setManualMode('long_break'));

        this.elements.loopBtn.addEventListener('click', () => app.toggleLoop());
        
        // CORREÇÃO: Chamando o método do App para ajuste
        this.elements.addMinuteBtn.addEventListener('click', () => app.adjustTime(60));
        this.elements.removeMinuteBtn.addEventListener('click', () => app.adjustTime(-60));
    }

    updateDisplay() {
        const remaining = this.core.state.timeRemaining;
        const minutes = String(Math.floor(remaining / 60)).padStart(2, '0');
        const seconds = String(remaining % 60).padStart(2, '0');
        if(this.elements.timerDisplay) this.elements.timerDisplay.textContent = `${minutes}:${seconds}`;
        document.title = `${minutes}:${seconds} | Pomodoro da Foca 🦭`;
        
        this.updateProgressBar();
    }
    
    updateProgressBar() {
        let totalTime = this.core.getModeTime(this.core.state.mode);
        if (totalTime === 0 || !this.elements.progressBar) return;
        
        const percentageCompleted = (1 - (this.core.state.timeRemaining / totalTime));
        const offset = this.progressBarLength * percentageCompleted;
        this.elements.progressBar.style.strokeDashoffset = offset;

        const color = (this.core.state.mode === 'pomodoro') ? '#0070c0' : '#4fa8c8';
        this.elements.progressBar.style.stroke = color;
    }

    updateModeButtons(isLoopActive) {
        const mode = this.core.state.mode;
        
        const buttons = [this.elements.pomodoroBtn, this.elements.shortBtn, this.elements.longBtn];
        buttons.forEach(btn => btn.classList.remove('active'));
        
        if (mode === 'pomodoro') this.elements.pomodoroBtn.classList.add('active');
        if (mode === 'short_break') this.elements.shortBtn.classList.add('active');
        if (mode === 'long_break') this.elements.longBtn.classList.add('active');
        
        // Desabilita botões de modo se o loop estiver ativo
        buttons.forEach(btn => btn.disabled = isLoopActive);
    }

    updateControlButtons() {
        const { isRunning, isPaused } = this.core.state;

        if (isRunning && !isPaused) {
            this.elements.startBtn.style.display = 'none';
            this.elements.pauseBtn.style.display = 'inline';
            this.elements.pauseBtn.innerHTML = '⏸️'; 
        } else if (isRunning && isPaused) {
            this.elements.startBtn.style.display = 'inline';
            this.elements.pauseBtn.style.display = 'none';
            this.elements.startBtn.innerHTML = '▶️'; 
        } else {
            this.elements.startBtn.style.display = 'inline';
            this.elements.pauseBtn.style.display = 'none';
            this.elements.startBtn.innerHTML = '▶️'; 
        }
        
        // NOVO: Desabilita botões de ajuste de tempo se o timer estiver rodando
        const isDisabled = isRunning;
        this.elements.addMinuteBtn.disabled = isDisabled;
        this.elements.removeMinuteBtn.disabled = isDisabled;
    }
}


// =======================================================
// --- 5. CLASSE PomodoroApp Controller (Coração da Aplicação) ---
// =======================================================
class PomodoroApp {
    constructor() {
        this.core = new PomodoroCore();
        this.ui = new PomodoroUI(this.core);
        this.animations = new PomodoroAnimations();

        this.cyclesCompleted = 0; 

        this.initializeApp();
        this.startUpdateLoop();
    }

    initializeApp() {
        this.setupCoreHandlers();
        this.ui.setupEventListeners(this); 
        this.animations.setStudyMode();
        this.ui.updateDisplay();
        this.ui.updateModeButtons(false);
        this.ui.updateControlButtons();
        console.log("🎯 Pomodoro da Foca pronto!");
    }

    setupCoreHandlers() {
        // Sobrescreve setMode para atualizar UI e Animação
        const originalSetMode = this.core.setMode.bind(this.core);
        this.core.setMode = (mode) => {
            originalSetMode(mode);
            this.animations.triggerModeTransition(mode);
            this.ui.updateModeButtons(this.ui.elements.loopBtn.classList.contains('active'));
            this.ui.updateDisplay();
        };

        // Sobrescreve completeTimer para gerenciar o fluxo do ciclo
        const originalCompleteTimer = this.core.completeTimer.bind(this.core);
        this.core.completeTimer = () => {
            originalCompleteTimer();
            
            new Audio('./pomodoro_files/alarme.mp3').play().catch(() => console.log('Alarme não pôde tocar.'));
            this.animations.triggerCompletionCelebration();

            // MUDANÇA PRINCIPAL: Sempre faz transição automática, independente do loop
            this.handleAutoTransition();
            
            this.ui.updateDisplay();
            this.ui.updateModeButtons(this.ui.elements.loopBtn.classList.contains('active'));
        };
        
        // Adiciona logging ao tick
        const originalTick = this.core.tick.bind(this.core);
        this.core.tick = () => {
            originalTick();
            this.ui.updateDisplay();
        }
    }

    // --- NOVA FUNÇÃO: Transição automática entre modos ---
    handleAutoTransition() {
        const mode = this.core.state.mode;
        const delay = 1500; 

        console.log(`🔄 Iniciando transição automática do modo: ${mode}`);

        if (mode === "pomodoro") {
            // Pomodoro → Pausa Curta (sempre)
            setTimeout(() => this.startShortBreak(), delay);
            console.log("🔄 Transição: Pomodoro → Pausa Curta");
            return;
        }

        if (mode === "short_break") {
            // Pausa Curta → Pomodoro (sempre)
            setTimeout(() => this.startPomodoro(), delay);
            console.log("🔄 Transição: Pausa Curta → Pomodoro");
            return;
        }

        if (mode === "long_break") {
            // Pausa Longa → Pomodoro (sempre)
            setTimeout(() => this.startPomodoro(), delay);
            console.log("🔄 Transição: Pausa Longa → Pomodoro");
            return;
        }
    }

    // --- LÓGICA DO CICLO AUTOMÁTICO (apenas para modo loop) ---
    handleCycleFlow() {
        const mode = this.core.state.mode;
        const delay = 1500; 

        if (mode === "pomodoro") {
            this.cyclesCompleted++;
            
            if (this.cyclesCompleted >= CONFIG.CYCLES_BEFORE_LONG_BREAK) {
                this.cyclesCompleted = 0; 
                setTimeout(() => this.startLongBreak(), delay);
                console.log("🎯 Ciclo completo! 4 Pomodoros finalizados → Pausa Longa");
                return;
            }

            setTimeout(() => this.startShortBreak(), delay);
            console.log(`📚 Pomodoro ${this.cyclesCompleted}/4 finalizado → Pausa Curta`);
            return;
        }

        if (mode === "short_break" || mode === "long_break") {
            setTimeout(() => this.startPomodoro(), delay);
            console.log(`🔄 Volta ao trabalho! ${mode === "short_break" ? "Pausa Curta" : "Pausa Longa"} → Pomodoro`);
            return;
        }
    }

    // --- Funções do Ciclo (pomodoro, pausa_curta, pausa_longa) ---
    startPomodoro() {
        this.core.setMode("pomodoro");
        this.core.startTimer();
        this.animations.startStudyAnimation();
        this.ui.updateControlButtons();
        console.log("▶️ Iniciando Pomodoro…");
    }

    startShortBreak() {
        this.core.setMode("short_break");
        this.core.startTimer();
        this.animations.stopAnimation();
        this.ui.updateControlButtons();
        console.log("☕ Pausa curta iniciada!");
    }

    startLongBreak() {
        this.core.setMode("long_break");
        this.core.startTimer();
        this.animations.stopAnimation();
        this.ui.updateControlButtons();
        console.log("🌴 Pausa longa iniciada!");
    }
    
    // --- Funções de Controle de Usuário ---
    handleStartContinue() {
        // Se já está rodando, não faz nada (proteção)
        if (this.core.state.isRunning && !this.core.state.isPaused) return; 

        this.core.startTimer();
        if (this.core.state.mode === 'pomodoro') {
            this.animations.startStudyAnimation();
        }
        this.ui.updateControlButtons();
    }

    pauseTimer() {
        this.core.pauseTimer();
        this.animations.stopAnimation();
        this.ui.updateControlButtons();
    }
    
    resetApp() {
        this.core.setMode('pomodoro'); 
        this.core.resetTimer();
        this.cyclesCompleted = 0;
        this.ui.elements.loopBtn.classList.remove('active');
        this.ui.updateDisplay();
        this.ui.updateModeButtons(false);
        this.ui.updateControlButtons();
        this.animations.setStudyMode();
        console.log("🔄 Pomodoro resetado para modo inicial");
    }

    toggleLoop() {
        const loopIsActive = this.ui.elements.loopBtn.classList.toggle('active');

        if (loopIsActive && !this.core.state.isRunning) {
            this.cyclesCompleted = 0;
            this.startPomodoro();
            console.log("🚀 CICLO AUTOMÁTICO ATIVADO e INICIADO!");
        } else if (!loopIsActive) {
            console.log("🛑 MODO LOOP DESATIVADO.");
        }
        this.ui.updateModeButtons(loopIsActive);
    }
    
    setManualMode(mode) {
        if (this.ui.elements.loopBtn.classList.contains('active')) return;
        
        this.core.setMode(mode);
        this.ui.updateDisplay();
        this.ui.updateModeButtons(false);
        this.ui.updateControlButtons();
    }

    adjustTime(seconds) {
        // Permite ajuste apenas se o timer não estiver rodando
        if (this.core.state.isRunning) return;

        let modeTimeKey;
        switch (this.core.state.mode) {
            case 'pomodoro': modeTimeKey = 'POMODORO_TIME'; break;
            case 'short_break': modeTimeKey = 'SHORT_BREAK_TIME'; break;
            case 'long_break': modeTimeKey = 'LONG_BREAK_TIME'; break;
            default: return;
        }
        
        // Atualiza a constante global CONFIG e garante um mínimo de 60 segundos
        CONFIG[modeTimeKey] = Math.max(60, CONFIG[modeTimeKey] + seconds);
        
        // Atualiza o tempo restante do estado para o novo valor
        this.core.state.timeRemaining = CONFIG[modeTimeKey];
        
        this.ui.updateDisplay();
        console.log(`⏰ Tempo ${this.core.state.mode} ajustado para: ${Math.floor(CONFIG[modeTimeKey] / 60)}min`);
    }

    // --- Loop de Atualização de UI (1 segundo) ---
    startUpdateLoop() {
        // Removemos o setInterval daqui, pois o `tick()` do Core já é um intervalo de 1s.
        // O `updateDisplay()` é chamado dentro do `tick()` (sobrescrito em setupCoreHandlers).
    }
}

// Inicializa a aplicação quando o DOM estiver completamente carregado
document.addEventListener('DOMContentLoaded', () => {
    window.pomodoroApp = new PomodoroApp();
});