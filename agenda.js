 const form = document.getElementById("formTarefa");
    const listaTarefas = document.getElementById("listaTarefas");
    // Novas referências para o menu
    const hamburgerBtn = document.getElementById("hamburger-btn");
    const navMenu = document.getElementById("main-nav");

    function toggleMenu() {
        navMenu.classList.toggle('active');
        hamburgerBtn.textContent = navMenu.classList.contains('active') ? '✖' : '☰';
    }
    
    hamburgerBtn.addEventListener("click", toggleMenu);
    
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if(navMenu.classList.contains('active')) {
                toggleMenu();
            }
        });
    });
    // Fim das adições do menu

    function carregarTarefas() {
      const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
      listaTarefas.innerHTML = "";
      tarefas.forEach((t, index) => {
        const div = document.createElement("div");
        div.className = "tarefa";
        div.innerHTML = `
          <div class="tarefa-info">
            <strong>${t.titulo}</strong><br>
            📅 ${t.data} — ${t.periodo}
          </div>
          <div>
            <button onclick="usarPomodoro('${t.titulo}')">🎯 Usar Pomodoro</button>
            <button onclick="excluirTarefa(${index})">🗑️</button>
          </div>
        `;
        listaTarefas.appendChild(div);
      });
    }

    function salvarTarefa(tarefa) {
      const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
      tarefas.push(tarefa);
      localStorage.setItem("tarefas", JSON.stringify(tarefas));
      carregarTarefas();
    }

    function excluirTarefa(index) {
      const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
      tarefas.splice(index, 1);
      localStorage.setItem("tarefas", JSON.stringify(tarefas));
      carregarTarefas();
    }

    function usarPomodoro(titulo) {
      localStorage.setItem("tarefaAtual", titulo);
      window.location.href = "index.html";
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const titulo = document.getElementById("titulo").value.trim();
      const data = document.getElementById("data").value;
      const periodo = document.getElementById("periodo").value;

      if (!titulo || !data || !periodo) {
        alert("Preencha todos os campos!");
        return;
      }

      const novaTarefa = { titulo, data, periodo };
      salvarTarefa(novaTarefa);
      form.reset();
    });

    carregarTarefas();
 