// ===== UI UMUM: login guru, pindah tab, semester, notifikasi toast =====
function openLoginModal() {
    document.getElementById('loginModal').classList.remove('hidden');
}

function handleLogin(e) {
    e.preventDefault();
    activeTeacher = document.getElementById('loginTeacherName').value || "Guru Penguji";
    activeSchool = document.getElementById('loginSchoolName').value || "TK / PAUD";
    activeCity = document.getElementById('loginCityName').value || "Kota";

    document.getElementById('headerSchoolTag').innerText = activeSchool;
    document.getElementById('dashTeacherName').innerText = activeTeacher;
    document.getElementById('dashSchoolName').innerText = activeSchool;
    document.getElementById('rptSchoolName').innerText = activeSchool.toUpperCase();
    document.getElementById('rptTeacherName').innerText = activeTeacher;
    document.getElementById('rptSigTeacher').innerText = activeTeacher;

    saveDataToLocalStorage();
    document.getElementById('loginModal').classList.add('hidden');
    showToast("Identitas guru & TK berhasil disimpan!");
}

function switchTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
    document.querySelectorAll('.tab-button').forEach(el => {
        el.classList.remove('tab-active');
        el.classList.add('text-slate-500');
    });

    const target = document.getElementById(`view-${tabId}`);
    if (target) target.classList.remove('hidden');

    const activeNav = document.getElementById(`nav-${tabId}`);
    if (activeNav) {
        activeNav.classList.add('tab-active');
        activeNav.classList.remove('text-slate-500');
    }
}

function switchSemester() {
    currentSemester = document.getElementById('semesterSelect').value;
    document.querySelectorAll('.currentSemesterLbl').forEach(el => el.innerText = currentSemester);
    loadChildDataToUI();
    updateDashboardStats();
    showToast(`Beralih ke Penilaian Semester ${currentSemester}`);
}

function showToast(message) {
    const toast = document.getElementById('toast');
    if(!toast) return;
    document.getElementById('toastMsg').innerText = message;
    toast.classList.remove('translate-y-20', 'opacity-0');
    setTimeout(() => {
        toast.classList.add('translate-y-20', 'opacity-0');
    }, 3000);
}
