// ===== DATA ANAK: pilih anak, statistik beranda, tambah anak baru =====
function populateChildSelect() {
    const select = document.getElementById('childSelect');
    select.innerHTML = '<option value="">Pilih anak...</option>';
    Object.keys(childrenDatabase).forEach(id => {
        const c = childrenDatabase[id];
        const opt = document.createElement('option');
        opt.value = id;
        opt.innerText = `${c.name} (${c.ageMonths} Bln)`;
        select.appendChild(opt);
    });
    select.value = currentChildId;
    updateDashboardStats();
}

function switchChildProfile() {
    currentChildId = document.getElementById('childSelect').value;
    loadChildDataToUI();
}

function updateDashboardStats() {
    const childIds = Object.keys(childrenDatabase);
    const total = childIds.length;
    let screened = 0;
    let referral = 0;

    childIds.forEach(id => {
        const c = childrenDatabase[id];
        const assessment = (c.assessments && c.assessments[currentSemester]) ? c.assessments[currentSemester] : null;
        if (assessment && assessment.answers) {
            const answeredKeys = Object.keys(assessment.answers);
            const totalQ = (kpspDatabase[assessment.age] || []).length;
            if (totalQ > 0 && answeredKeys.length >= totalQ) {
                screened++;
                let scoreYa = 0;
                answeredKeys.forEach(k => {
                    if (assessment.answers[k] === 'YA') scoreYa++;
                });
                if (totalQ >= 9 && scoreYa < 7) {
                    referral++;
                }
            }
        }
    });

    const unscreened = total - screened;

    document.getElementById('statTotalChildren').innerText = total;
    document.getElementById('statScreened').innerText = screened;
    document.getElementById('statUnscreened').innerText = unscreened;
    document.getElementById('statReferral').innerText = referral;
}

function loadChildDataToUI() {
    const noChildNotice = document.getElementById('noChildSelectedNotice');
    const childCard = document.getElementById('childSummaryCard');

    if (!currentChildId || !childrenDatabase[currentChildId]) {
        noChildNotice.classList.remove('hidden');
        childCard.classList.add('hidden');

        document.getElementById('rptChildName').innerText = "-";
        document.getElementById('rptChildAge').innerText = "-";
        document.getElementById('rptChildGender').innerText = "-";
        document.getElementById('rptKpspModule').innerText = "-";

        tempAnswers = {};
        tempMotorikAnswers = {};
        loadKpspAge(54);
        renderMotorikQuestions();
        return;
    }

    noChildNotice.classList.add('hidden');
    childCard.classList.remove('hidden');

    const child = childrenDatabase[currentChildId];
    document.getElementById('childName').innerText = child.name;
    document.getElementById('childAgeBadge').innerText = `${child.ageMonths} Bulan`;
    document.getElementById('childGender').innerText = `${child.gender} • TK`;
    document.getElementById('childAvatar').innerText = child.name.split(' ').map(n => n[0]).join('').substring(0, 2);

    currentKpspAge = getClosestKpspAge(child.ageMonths);

    const assessment = (child.assessments && child.assessments[currentSemester]) ? child.assessments[currentSemester] : { age: currentKpspAge, answers: {} };
    tempAnswers = { ...assessment.answers };

    const motorikAss = (child.motorikAssessments && child.motorikAssessments[currentSemester]) ? child.motorikAssessments[currentSemester] : {};
    tempMotorikAnswers = { ...motorikAss };

    loadKpspAge(currentKpspAge);
    renderMotorikQuestions();
    calculateDashboardSummary();
    updateDashboardStats();
}

function openNewChildModal() {
    document.getElementById('newChildModal').classList.remove('hidden');
}

function closeNewChildModal() {
    document.getElementById('newChildModal').classList.add('hidden');
}

function saveNewChild() {
    const nameInput = document.getElementById('inputChildName').value.trim();
    
    if (!nameInput) {
        showToast("Nama lengkap anak wajib diisi!");
        document.getElementById('inputChildName').focus();
        return;
    }

    const name = nameInput;
    const ageMonths = parseInt(document.getElementById('inputChildAgeMonths').value) || 54;
    const gender = document.getElementById('inputChildGender').value;

    const newId = String(Date.now());
    const targetKpspAge = getClosestKpspAge(ageMonths);

    childrenDatabase[newId] = {
        name: name,
        ageMonths: ageMonths,
        gender: gender,
        assessments: {
            "1": { age: targetKpspAge, answers: {} },
            "2": { age: targetKpspAge, answers: {} }
        },
        motorikAssessments: {
            "1": {},
            "2": {}
        },
        growthHistory: [],
        immunizations: {},
        notes: []
    };

    currentChildId = newId;
    saveDataToLocalStorage();
    populateChildSelect();
    updateDashboardStats();
    
    document.getElementById('inputChildName').value = '';
    closeNewChildModal();
    
    loadChildDataToUI();
    
    switchTab('kpsp');
    loadKpspAge(targetKpspAge);

    showToast(`Profil disimpan! Otomatis membuka KPSP Usia ${targetKpspAge} Bulan.`);
}
