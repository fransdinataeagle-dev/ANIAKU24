// ===== PENYIMPANAN: localStorage + ekspor/impor cadangan JSON =====
function saveDataToLocalStorage() {
    localStorage.setItem('okupaScreenData', JSON.stringify(childrenDatabase));
    localStorage.setItem('okupaTeacherName', activeTeacher);
    localStorage.setItem('okupaSchoolName', activeSchool);
    localStorage.setItem('okupaCityName', activeCity);
}

function loadDataFromLocalStorage() {
    const savedData = localStorage.getItem('okupaScreenData');
    if (savedData) {
        childrenDatabase = JSON.parse(savedData);
    }
    const savedTeacher = localStorage.getItem('okupaTeacherName');
    if (savedTeacher) activeTeacher = savedTeacher;
    
    const savedSchool = localStorage.getItem('okupaSchoolName');
    if (savedSchool) activeSchool = savedSchool;

    const savedCity = localStorage.getItem('okupaCityName');
    if (savedCity) activeCity = savedCity;
}

function exportDataJSON() {
    const dataToExport = {
        teacher: activeTeacher,
        school: activeSchool,
        city: activeCity,
        children: childrenDatabase
    };
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(dataToExport, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `okupascreen_backup_${new Date().toISOString().slice(0,10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showToast("Data berhasil diekspor (dicadangkan)!");
}

function importDataJSON(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const parsed = JSON.parse(e.target.result);
            if (parsed.children) {
                childrenDatabase = parsed.children;
                if (parsed.teacher) activeTeacher = parsed.teacher;
                if (parsed.school) activeSchool = parsed.school;
                if (parsed.city) activeCity = parsed.city;

                saveDataToLocalStorage();
                
                document.getElementById('headerSchoolTag').innerText = activeSchool;
                document.getElementById('dashTeacherName').innerText = activeTeacher;
                document.getElementById('dashSchoolName').innerText = activeSchool;
                document.getElementById('rptSchoolName').innerText = activeSchool.toUpperCase();
                document.getElementById('rptTeacherName').innerText = activeTeacher;
                document.getElementById('rptSigTeacher').innerText = activeTeacher;

                populateChildSelect();
                loadChildDataToUI();
                updateDashboardStats();
                showToast("Data berhasil dipulihkan (impor sukses)!");
            } else {
                showToast("Format file cadangan tidak valid!");
            }
        } catch (err) {
            showToast("Gagal membaca file JSON!");
        }
        event.target.value = ''; 
    };
    reader.readAsText(file);
}
