// ===== LAPORAN: hitung skor, kategori KPSP, dan rekomendasi stimulasi =====
function calculateDashboardSummary() {
    if (!currentChildId || !childrenDatabase[currentChildId]) return;

    const child = childrenDatabase[currentChildId];
    const assessment = (child.assessments && child.assessments[currentSemester]) ? child.assessments[currentSemester] : { age: currentKpspAge, answers: {} };
    const questions = kpspDatabase[assessment.age || currentKpspAge] || [];
    const totalQuestions = questions.length;

    let scoreYa = 0;
    let totalAnswered = 0;
    const failedDomains = new Set();

    questions.forEach(q => {
        const ans = assessment.answers[q.id];
        if (ans) {
            totalAnswered++;
            if (ans === 'YA') {
                scoreYa++;
            } else if (ans === 'TIDAK') {
                failedDomains.add(q.domain);
            }
        }
    });

    const motAnswers = (child.motorikAssessments && child.motorikAssessments[currentSemester]) ? child.motorikAssessments[currentSemester] : {};
    let motorikFailed = false;

    Object.keys(motAnswers).forEach(k => {
        if (motAnswers[k] === 'TIDAK') motorikFailed = true;
    });

    if (motorikFailed) {
        failedDomains.add('sensoryMotor');
    }

    let categoryText = "Belum Lengkap";
    let categoryBadgeClass = "bg-slate-100 text-slate-700 border-slate-200";

    if (totalAnswered >= totalQuestions && totalQuestions > 0) {
        if (totalQuestions >= 9) {
            if (scoreYa >= 9) {
                categoryText = "Sesuai Perkembangan (S)";
                categoryBadgeClass = "bg-emerald-100 text-emerald-800 border-emerald-200";
            } else if (scoreYa >= 7) {
                categoryText = "Meragukan (M) - Perlu Stimulasi";
                categoryBadgeClass = "bg-amber-100 text-amber-800 border-amber-200";
            } else {
                categoryText = "Penyimpangan (P) - Rujuk Dokter";
                categoryBadgeClass = "bg-rose-100 text-rose-800 border-rose-200";
            }
        } else {
            if (scoreYa === totalQuestions) {
                categoryText = "Sesuai Perkembangan (S)";
                categoryBadgeClass = "bg-emerald-100 text-emerald-800 border-emerald-200";
            } else {
                categoryText = "Perlu Evaluasi Lanjut";
                categoryBadgeClass = "bg-amber-100 text-amber-800 border-amber-200";
            }
        }
    }

    const badgeEl = document.getElementById('overallRiskBadge');
    if(badgeEl) {
        badgeEl.className = `font-bold text-xs px-4 py-2 rounded-xl border ${categoryBadgeClass} inline-flex items-center gap-1.5`;
        badgeEl.innerText = categoryText;
    }

    const kScoreD = document.getElementById('kpspScoreDetail');
    if(kScoreD) kScoreD.innerText = `Skor "YA": ${scoreYa} dari ${totalQuestions} Pertanyaan`;

    const rCN = document.getElementById('rptChildName');
    if(rCN) rCN.innerText = child.name;
    const rCA = document.getElementById('rptChildAge');
    if(rCA) rCA.innerText = `${child.ageMonths} Bulan`;
    const rCG = document.getElementById('rptChildGender');
    if(rCG) rCG.innerText = child.gender;
    const rKM = document.getElementById('rptKpspModule');
    if(rKM) rKM.innerText = `${assessment.age || currentKpspAge} Bulan`;
    const rSY = document.getElementById('rptScoreYa');
    if(rSY) rSY.innerText = scoreYa;
    const rTQ = document.getElementById('rptTotalQuestions');
    if(rTQ) rTQ.innerText = totalQuestions;
    const rCT = document.getElementById('rptCategoryText');
    if(rCT) rCT.innerText = categoryText;

    const rptBadge = document.getElementById('rptBadgeCategory');
    if(rptBadge) {
        rptBadge.innerHTML = `<span class="${categoryBadgeClass} font-bold px-4 py-2 rounded-xl text-xs border">${categoryText}</span>`;
    }

    const rptStimulationList = document.getElementById('rptStimulationList');
    if (rptStimulationList) {
        rptStimulationList.innerHTML = '';
        
        if (failedDomains.size > 0) {
            let htmlList = '<p class="font-bold text-slate-800 mb-2">Berdasarkan hasil jawaban KPSP, berikut adalah area yang memerlukan stimulasi khusus di rumah maupun di sekolah:</p><ul class="space-y-2 pl-4 list-disc">';
            failedDomains.forEach(domainKey => {
                const domainTitle = domainLabels[domainKey] || domainKey;
                const recommendation = defaultStimulations[domainKey] || "Lakukan stimulasi terarah sesuai panduan tumbuh kembang anak.";
                htmlList += `<li><strong>${domainTitle}:</strong> ${recommendation}</li>`;
            });
            htmlList += '</ul>';
            rptStimulationList.innerHTML = htmlList;
        } else if (totalAnswered > 0 && scoreYa === totalQuestions) {
            rptStimulationList.innerHTML = '<p class="font-bold text-emerald-800"><i class="fa-solid fa-circle-check"></i> Luar biasa! Semua aspek perkembangan anak sesuai dengan usianya. Pertahankan pola pengasuhan positif dan berikan stimulasi pengayaan secara rutin agar potensi anak semakin berkembang optimal.</p>';
        } else {
            rptStimulationList.innerHTML = '<p class="text-slate-500 italic">Belum ada data jawaban KPSP yang lengkap untuk menghasilkan rekomendasi spesifik. Selesaikan pengisian kuesioner KPSP terlebih dahulu.</p>';
        }
    }
}
