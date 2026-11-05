// ===== MULAI APLIKASI: dijalankan saat halaman selesai dimuat =====
window.onload = function() {
    loadDataFromLocalStorage();

    document.getElementById('headerSchoolTag').innerText = activeSchool;
    document.getElementById('dashTeacherName').innerText = activeTeacher;
    document.getElementById('dashSchoolName').innerText = activeSchool;
    document.getElementById('rptSchoolName').innerText = activeSchool.toUpperCase();
    document.getElementById('rptTeacherName').innerText = activeTeacher;
    document.getElementById('rptSigTeacher').innerText = activeTeacher;

    document.getElementById('loginTeacherName').value = activeTeacher;
    document.getElementById('loginSchoolName').value = activeSchool;
    document.getElementById('loginCityName').value = activeCity;

    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    document.getElementById('rptDate').innerText = new Date().toLocaleDateString('id-ID', options);

    populateChildSelect();
    loadChildDataToUI();
    updateDashboardStats();
};
