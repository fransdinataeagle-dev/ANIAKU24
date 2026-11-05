// ===== SKRINING KPSP: tampilkan soal, jawab YA/TIDAK, simpan penilaian =====
function getClosestKpspAge(months) {
    if (months < 51) return 48;
    if (months < 57) return 54;
    if (months < 63) return 60;
    if (months < 69) return 66;
    return 72;
}

function loadKpspAge(age) {
    currentKpspAge = age;

    document.querySelectorAll('.age-btn').forEach(btn => {
        btn.className = "age-btn text-xs font-bold px-3.5 py-2 rounded-xl border border-slate-200 bg-white text-slate-700 transition";
    });
    const activeBtn = document.getElementById(`btnKpsp${age}`);
    if (activeBtn) {
        activeBtn.className = "age-btn text-xs font-black px-3.5 py-2 rounded-xl bg-brand-600 border-brand-600 text-white shadow-md shadow-brand-600/20 transition";
    }

    document.getElementById('activeKpspTitle').innerText = `Modul KPSP Usia ${age} Bulan`;

    const container = document.getElementById('kpspQuestionsContainer');
    container.innerHTML = '';

    const questions = kpspDatabase[age] || [];
    questions.forEach((q, idx) => {
        const currentVal = tempAnswers[q.id] || null;
        const card = document.createElement('div');
        card.className = "p-5 bg-slate-50/70 border border-slate-200/80 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:border-slate-300 transition shadow-2xs";

        const domainName = domainLabels[q.domain] || "Umum";
        let visualHtml = q.visual ? q.visual : '';
        let subQuestionHtml = '';
        if (q.subQuestions) {
            const subList = q.subQuestions.map(sq => `<li>${sq}</li>`).join('');
            subQuestionHtml = `<ul class="${q.subTextClass || 'list-decimal pl-4 mt-2 space-y-1 text-xs text-slate-700 font-medium'}">${subList}</ul>`;
        }

        card.innerHTML = `
            <div class="space-y-2">
                <div class="flex items-center space-x-2">
                    <span class="text-[10px] font-black text-slate-400 bg-white px-2 py-0.5 rounded-md border border-slate-200">Soal ${idx + 1}</span>
                    <span class="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-md bg-brand-50 text-brand-700 border border-brand-100 tracking-wider">${domainName}</span>
                </div>
                <p class="text-xs font-semibold text-slate-800 leading-relaxed">${q.text}</p>
                ${visualHtml}
                ${subQuestionHtml}
            </div>
            <div class="flex items-center space-x-2.5 shrink-0">
                <button onclick="setAnswer(${q.id}, 'YA')" id="btn-${q.id}-YA" 
                    class="ans-btn px-5 py-2 rounded-xl text-xs font-bold border transition ${currentVal === 'YA' ? 'bg-brand-600 border-brand-600 text-white shadow-md shadow-brand-600/20' : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'}">
                    YA
                </button>
                <button onclick="setAnswer(${q.id}, 'TIDAK')" id="btn-${q.id}-TIDAK" 
                    class="ans-btn px-5 py-2 rounded-xl text-xs font-bold border transition ${currentVal === 'TIDAK' ? 'bg-rose-600 border-rose-600 text-white shadow-md shadow-rose-600/20' : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'}">
                    TIDAK
                </button>
            </div>
        `;
        container.appendChild(card);
    });

    updateProgressText();
}

function setAnswer(qId, val) {
    tempAnswers[qId] = val;

    const btnYa = document.getElementById(`btn-${qId}-YA`);
    const btnTidak = document.getElementById(`btn-${qId}-TIDAK`);

    if (val === 'YA') {
        btnYa.className = "ans-btn px-5 py-2 rounded-xl text-xs font-bold border transition bg-brand-600 border-brand-600 text-white shadow-md shadow-brand-600/20";
        btnTidak.className = "ans-btn px-5 py-2 rounded-xl text-xs font-bold border transition bg-white border-slate-200 text-slate-700 hover:bg-slate-100";
    } else {
        btnTidak.className = "ans-btn px-5 py-2 rounded-xl text-xs font-bold border transition bg-rose-600 border-rose-600 text-white shadow-md shadow-rose-600/20";
        btnYa.className = "ans-btn px-5 py-2 rounded-xl text-xs font-bold border transition bg-white border-slate-200 text-slate-700 hover:bg-slate-100";
    }

    updateProgressText();
}

function updateProgressText() {
    const answeredCount = Object.keys(tempAnswers).length;
    const totalQuestions = (kpspDatabase[currentKpspAge] || []).length;
    document.getElementById('kpspProgress').innerText = `Progres: ${answeredCount} / ${totalQuestions} Soal`;
}

function resetKpspAnswers() {
    tempAnswers = {};
    loadKpspAge(currentKpspAge);
    showToast("Formulir jawaban KPSP direset.");
}

function saveKpspAssessment() {
    if (!currentChildId) {
        showToast("Silakan buat atau pilih profil anak terlebih dahulu!");
        return;
    }

    if (!childrenDatabase[currentChildId].assessments) {
        childrenDatabase[currentChildId].assessments = {};
    }

    childrenDatabase[currentChildId].assessments[currentSemester] = {
        age: currentKpspAge,
        answers: { ...tempAnswers }
    };

    saveDataToLocalStorage();
    calculateDashboardSummary();
    updateDashboardStats();
    showToast(`Data skrining KPSP Semester ${currentSemester} berhasil disimpan!`);
    switchTab('dashboard');
}

function renderMotorikQuestions() {
    const container = document.getElementById('motorikQuestionsContainer');
    if (!container) return;
    container.innerHTML = '';

    motorikDatabase.forEach((m, idx) => {
        const currentVal = tempMotorikAnswers[m.id] || null;
        const card = document.createElement('div');
        card.className = "p-5 bg-indigo-50/40 border border-indigo-100 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:border-indigo-200 transition shadow-2xs";

        card.innerHTML = `
            <div class="space-y-1.5">
                <div class="flex items-center space-x-2">
                    <span class="text-[10px] font-black text-indigo-400 bg-white px-2 py-0.5 rounded-md border border-indigo-100">Obs ${idx + 1}</span>
                    <span class="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-md bg-indigo-100 text-indigo-800 tracking-wider">${m.category}</span>
                </div>
                <p class="text-xs font-semibold text-slate-800 leading-relaxed">${m.text}</p>
            </div>
            <div class="flex items-center space-x-2.5 shrink-0">
                <button onclick="setMotorikAnswer(${m.id}, 'YA')" id="btn-mot-${m.id}-YA" 
                    class="ans-btn px-4 py-2 rounded-xl text-xs font-bold border transition ${currentVal === 'YA' ? 'bg-indigo-600 border-indigo-600 text-white shadow-md shadow-indigo-600/20' : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'}">
                    MAMPU (YA)
                </button>
                <button onclick="setMotorikAnswer(${m.id}, 'TIDAK')" id="btn-mot-${m.id}-TIDAK" 
                    class="ans-btn px-4 py-2 rounded-xl text-xs font-bold border transition ${currentVal === 'TIDAK' ? 'bg-rose-600 border-rose-600 text-white shadow-md shadow-rose-600/20' : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'}">
                    BELUM (TIDAK)
                </button>
            </div>
        `;
        container.appendChild(card);
    });
}
