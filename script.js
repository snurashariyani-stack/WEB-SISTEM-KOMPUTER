const materials = [
    {
        title: "Pengertian Sistem Komputer",
        html: `
            <h4>Apa itu sistem komputer?</h4>
            <p>Sistem komputer adalah kesatuan komponen yang saling berhubungan untuk menerima data, mengolahnya, menyimpan data, dan menghasilkan informasi.</p>
            <p>Komputer tidak hanya terdiri atas perangkat keras. Agar dapat bekerja, komputer juga membutuhkan perangkat lunak dan manusia yang menggunakan atau mengelolanya.</p>
            <h4>Tiga komponen utama</h4>
            <ul>
                <li><strong>Hardware:</strong> komponen fisik komputer.</li>
                <li><strong>Software:</strong> program atau instruksi yang dijalankan komputer.</li>
                <li><strong>Brainware:</strong> manusia yang menggunakan atau mengelola komputer.</li>
            </ul>
            <h4>Contoh dalam kehidupan sehari-hari</h4>
            <p>Saat mengetik tugas, keyboard berfungsi sebagai hardware, aplikasi pengolah kata sebagai software, dan kamu sebagai brainware. Ketiganya bekerja sama untuk membantu menyelesaikan tugas.</p>
        `
    },
    {
        title: "Hardware (Perangkat Keras)",
        html: `
            <h4>Pengertian hardware</h4>
            <p>Hardware adalah bagian fisik komputer yang dapat dilihat dan disentuh. Hardware memiliki fungsi yang berbeda sesuai perannya dalam sistem.</p>
            <h4>Jenis hardware berdasarkan fungsi</h4>
            <ul>
                <li><strong>Input:</strong> memasukkan data, misalnya keyboard, mouse, scanner, dan mikrofon.</li>
                <li><strong>Processing:</strong> mengolah instruksi dan data, misalnya CPU. RAM membantu menyediakan tempat penyimpanan sementara bagi data yang sedang digunakan.</li>
                <li><strong>Output:</strong> menyampaikan hasil, misalnya monitor, printer, dan speaker.</li>
                <li><strong>Storage:</strong> menyimpan data, misalnya SSD, HDD, dan flashdisk.</li>
            </ul>
            <h4>Perbedaan RAM dan storage</h4>
            <p>RAM menyimpan data sementara saat program berjalan. SSD dan HDD menyimpan data dalam jangka panjang, termasuk ketika komputer dimatikan.</p>
            <h4>Contoh</h4>
            <p>Ketika kamu mengetik, keyboard memasukkan data, CPU memproses instruksi, monitor menampilkan hasil, dan file dapat disimpan ke SSD.</p>
        `
    },
    {
        title: "Software (Perangkat Lunak)",
        html: `
            <h4>Pengertian software</h4>
            <p>Software adalah program dan instruksi yang mengatur bagaimana komputer menjalankan tugas. Software tidak memiliki bentuk fisik seperti hardware.</p>
            <h4>Jenis software</h4>
            <ul>
                <li><strong>Sistem operasi:</strong> mengelola sumber daya komputer dan menyediakan lingkungan untuk menjalankan aplikasi. Contoh: Windows, Linux, dan macOS.</li>
                <li><strong>Aplikasi:</strong> membantu pengguna melakukan tugas tertentu. Contoh: aplikasi pengolah kata, browser, dan aplikasi desain.</li>
                <li><strong>Utility:</strong> membantu pemeliharaan, keamanan, atau pengelolaan sistem. Contoh: alat pencadangan dan antivirus.</li>
                <li><strong>Bahasa pemrograman dan tools pengembangan:</strong> digunakan untuk menulis serta membangun program.</li>
            </ul>
            <h4>Hubungan software dan hardware</h4>
            <p>Software memberikan instruksi, sedangkan hardware menjalankan operasi fisik sesuai instruksi tersebut. Sistem operasi juga menjadi penghubung antara aplikasi dan sumber daya perangkat keras.</p>
            <h4>Contoh</h4>
            <p>Ketika membuka browser, sistem operasi mengatur sumber daya yang diperlukan agar browser dapat berjalan.</p>
        `
    },
    {
        title: "Brainware (Pengguna)",
        html: `
            <h4>Pengertian brainware</h4>
            <p>Brainware adalah manusia yang berinteraksi dengan sistem komputer, baik sebagai pengguna, pengembang, maupun pengelola.</p>
            <h4>Contoh peran brainware</h4>
            <ul>
                <li><strong>End-user:</strong> memakai komputer atau aplikasi untuk menyelesaikan pekerjaan.</li>
                <li><strong>Programmer:</strong> menulis, menguji, dan memperbaiki kode program.</li>
                <li><strong>Administrator:</strong> mengelola sistem, akun, atau infrastruktur jaringan.</li>
                <li><strong>Teknisi:</strong> memeriksa, merawat, dan memperbaiki perangkat komputer.</li>
                <li><strong>Analis sistem:</strong> mempelajari kebutuhan pengguna dan merancang solusi sistem informasi.</li>
            </ul>
            <h4>Mengapa brainware penting?</h4>
            <p>Manusia menentukan tujuan penggunaan komputer, memberikan instruksi, mengelola data, dan mengambil keputusan berdasarkan informasi yang dihasilkan sistem.</p>
        `
    },
    {
        title: "Cara Kerja Sistem Komputer",
        html: `
            <h4>Siklus IPOS</h4>
            <p>Secara umum, proses kerja komputer dapat dijelaskan melalui Input, Processing, Output, dan Storage (IPOS).</p>
            <ul>
                <li><strong>Input:</strong> data atau instruksi dimasukkan melalui perangkat input.</li>
                <li><strong>Processing:</strong> CPU menjalankan instruksi untuk mengolah data dengan dukungan komponen lain seperti RAM.</li>
                <li><strong>Output:</strong> hasil pengolahan disampaikan melalui perangkat output.</li>
                <li><strong>Storage:</strong> data atau hasil disimpan agar dapat digunakan kembali.</li>
            </ul>
            <h4>Contoh: menghitung angka</h4>
            <p>Kamu memasukkan angka melalui keyboard (input). Program dan CPU mengolah angka tersebut (processing). Hasil perhitungan ditampilkan di monitor (output). Jika diperlukan, hasil disimpan ke file (storage).</p>
            <h4>Hal yang perlu diingat</h4>
            <p>IPOS merupakan model sederhana untuk memahami alur pengolahan data. Dalam praktiknya, komputer dapat membaca, menulis, dan memproses data secara berulang serta menjalankan banyak proses sekaligus.</p>
        `
    }
];

const preQuestions = [
    {
        q: "Komponen fisik komputer yang dapat disentuh disebut...",
        options: ["Software", "Hardware", "Brainware", "Informasi"],
        answer: 1,
        explanation: "Hardware merupakan komponen fisik komputer, seperti keyboard, monitor, dan CPU."
    },
    {
        q: "Manakah yang termasuk perangkat input?",
        options: ["Monitor", "Speaker", "Keyboard", "Printer"],
        answer: 2,
        explanation: "Keyboard digunakan untuk memasukkan data dan instruksi ke komputer."
    },
    {
        q: "Program yang mengelola sumber daya komputer adalah...",
        options: ["Sistem operasi", "Mouse", "Scanner", "Flashdisk"],
        answer: 0,
        explanation: "Sistem operasi mengelola sumber daya komputer dan menyediakan layanan untuk aplikasi."
    },
    {
        q: "Siapa yang menggunakan atau mengelola sistem komputer?",
        options: ["Hardware", "Software", "Brainware", "Storage"],
        answer: 2,
        explanation: "Brainware merujuk pada manusia yang menggunakan atau mengelola sistem komputer."
    },
    {
        q: "Perangkat yang umum digunakan untuk menyimpan file dalam jangka panjang adalah...",
        options: ["RAM", "SSD", "CPU", "Monitor"],
        answer: 1,
        explanation: "SSD merupakan media penyimpanan yang mempertahankan data meskipun komputer dimatikan."
    }
];

const postQuestions = [
    {
        q: "Manakah pasangan komponen dan fungsi yang benar?",
        options: [
            "Monitor — memasukkan data",
            "Keyboard — menampilkan hasil",
            "CPU — menjalankan instruksi dan mengolah data",
            "SSD — mengeluarkan suara"
        ],
        answer: 2,
        explanation: "CPU menjalankan instruksi dan melakukan pemrosesan data."
    },
    {
        q: "Apa perbedaan utama RAM dengan SSD?",
        options: [
            "RAM untuk output, SSD untuk input",
            "RAM bersifat sementara, SSD menyimpan data jangka panjang",
            "RAM adalah software, SSD adalah brainware",
            "Keduanya selalu menyimpan data dengan cara yang sama"
        ],
        answer: 1,
        explanation: "RAM digunakan untuk data yang sedang diperlukan, sedangkan SSD menyimpan data dalam jangka panjang."
    },
    {
        q: "Urutan model siklus kerja komputer yang benar adalah...",
        options: [
            "Output → Input → Storage → Processing",
            "Processing → Input → Output → Storage",
            "Input → Processing → Output → Storage",
            "Storage → Processing → Input → Output"
        ],
        answer: 2,
        explanation: "Model IPOS dimulai dari input, dilanjutkan processing, output, dan penyimpanan jika diperlukan."
    },
    {
        q: "Perangkat lunak yang mengelola sumber daya dan menyediakan layanan untuk aplikasi disebut...",
        options: ["Sistem operasi", "Keyboard", "Brainware", "SSD"],
        answer: 0,
        explanation: "Sistem operasi mengatur sumber daya perangkat keras dan mendukung aplikasi."
    },
    {
        q: "Seseorang yang membuat dan memperbaiki kode program disebut...",
        options: ["End-user saja", "Programmer", "Printer", "Storage manager"],
        answer: 1,
        explanation: "Programmer menulis, menguji, dan memperbaiki kode program."
    }
];

const iposData = [
    {
        title: "INPUT — Memasukkan Data",
        description: "Komputer menerima data atau instruksi melalui perangkat seperti keyboard, mouse, scanner, atau mikrofon."
    },
    {
        title: "PROCESS — Mengolah Data",
        description: "CPU menjalankan instruksi dan mengolah data. RAM membantu menyediakan tempat penyimpanan sementara bagi data yang sedang dipakai."
    },
    {
        title: "OUTPUT — Menghasilkan Informasi",
        description: "Hasil pengolahan disampaikan kepada pengguna melalui perangkat seperti monitor, printer, atau speaker."
    },
    {
        title: "STORAGE — Menyimpan Data",
        description: "Data dan hasil dapat disimpan pada SSD, HDD, atau media lain agar bisa digunakan kembali di kemudian hari."
    }
];

const matchingPairs = [
    { item: "Keyboard", category: "Input" },
    { item: "Monitor", category: "Output" },
    { item: "SSD", category: "Storage" },
    { item: "CPU", category: "Processing" },
    { item: "Mouse", category: "Input" }
];

let currentTopic = 0;
let preIndex = 0;
let postIndex = 0;
let preScore = 0;
let postScore = 0;
let preAnswered = false;
let postAnswered = false;
let selectedMatch = null;
let matchedItems = [];
let preFinished = false;
let postFinished = false;

function renderTopic(index) {
    currentTopic = Math.max(0, Math.min(index, materials.length - 1));

    document.getElementById("topic-label").textContent =
        `MATERI ${String(currentTopic + 1).padStart(2, "0")}`;

    document.getElementById("topic-title").textContent =
        materials[currentTopic].title;

    document.getElementById("topic-content").innerHTML =
        materials[currentTopic].html;

    document.querySelectorAll(".topic-btn").forEach((button, i) => {
        button.classList.toggle("active", i === currentTopic);
    });

    document.getElementById("topic-prev").disabled = currentTopic === 0;

    document.getElementById("topic-next").textContent =
        currentTopic === materials.length - 1
            ? "Lanjut ke Simulasi →"
            : "Selanjutnya →";
}

function renderQuiz(type) {
    const isPre = type === "pre";
    const questions = isPre ? preQuestions : postQuestions;
    const index = isPre ? preIndex : postIndex;
    const score = isPre ? preScore : postScore;
    const question = questions[index];

    const questionEl = document.getElementById(`${type}-question`);
    const optionsEl = document.getElementById(`${type}-options`);
    const feedbackEl = document.getElementById(`${type}-feedback`);
    const nextButton = document.getElementById(`${type}-next`);
    const progressEl = document.getElementById(`${type}-progress`);
    const scoreEl = document.getElementById(`${type}-score`);
    const barEl = document.getElementById(`${type}-bar`);

    if (!question) return;

    if (isPre) preAnswered = false;
    else postAnswered = false;

    progressEl.textContent = `Pertanyaan ${index + 1} dari ${questions.length}`;
    scoreEl.textContent = `Skor: ${score}`;
    barEl.style.width = `${(index / questions.length) * 100}%`;

    questionEl.innerHTML = `<h3 class="quiz-question">${index + 1}. ${question.q}</h3>`;

    optionsEl.innerHTML = question.options.map((option, i) => `
        <button class="option-btn" data-answer="${i}">
            ${String.fromCharCode(65 + i)}. ${option}
        </button>
    `).join("");

    feedbackEl.textContent = "";
    feedbackEl.className = "feedback";
    nextButton.disabled = true;
    nextButton.textContent =
        index === questions.length - 1 ? "Lihat Hasil →" : "Berikutnya →";

    optionsEl.querySelectorAll(".option-btn").forEach(button => {
        button.addEventListener("click", () => {
            answerQuestion(type, Number(button.dataset.answer));
        });
    });
}

function answerQuestion(type, chosenIndex) {
    const isPre = type === "pre";
    if (isPre ? preAnswered : postAnswered) return;

    if (isPre) preAnswered = true;
    else postAnswered = true;

    const questions = isPre ? preQuestions : postQuestions;
    const index = isPre ? preIndex : postIndex;
    const question = questions[index];
    const feedbackEl = document.getElementById(`${type}-feedback`);
    const nextButton = document.getElementById(`${type}-next`);

    const buttons = document.querySelectorAll(`#${type}-options .option-btn`);

    buttons.forEach(button => {
        button.disabled = true;
        const answer = Number(button.dataset.answer);

        if (answer === question.answer) button.classList.add("correct");
        if (answer === chosenIndex && chosenIndex !== question.answer) {
            button.classList.add("wrong");
        }
    });

    if (chosenIndex === question.answer) {
        if (isPre) preScore++;
        else postScore++;

        feedbackEl.textContent = `Benar! ${question.explanation}`;
        feedbackEl.className = "feedback correct";
    } else {
        feedbackEl.textContent = `Belum tepat. ${question.explanation}`;
        feedbackEl.className = "feedback incorrect";
    }

    document.getElementById(`${type}-score`).textContent =
        `Skor: ${isPre ? preScore : postScore}`;

    nextButton.disabled = false;
}

function nextQuestion(type) {
    const isPre = type === "pre";
    if (isPre ? !preAnswered : !postAnswered) return;

    const questions = isPre ? preQuestions : postQuestions;

    if (isPre) {
        preIndex++;

        if (preIndex >= questions.length) {
            finishQuiz("pre");
            return;
        }
    } else {
        postIndex++;

        if (postIndex >= questions.length) {
            finishQuiz("post");
            return;
        }
    }

    renderQuiz(type);
}

function finishQuiz(type) {
    const isPre = type === "pre";
    const questions = isPre ? preQuestions : postQuestions;
    const score = isPre ? preScore : postScore;
    const percentage = Math.round((score / questions.length) * 100);

    if (isPre) preFinished = true;
    else postFinished = true;

    document.getElementById(`${type}-bar`).style.width = "100%";
    document.getElementById(`${type}-question`).innerHTML = "";
    document.getElementById(`${type}-options`).innerHTML = "";
    document.getElementById(`${type}-feedback`).textContent = "";
    document.getElementById(`${type}-next`).style.display = "none";

    const result = document.getElementById(`${type}-result`);

    let message;

    if (percentage >= 80) {
        message = "Hebat! Pemahamanmu sudah sangat baik.";
    } else if (percentage >= 60) {
        message = "Bagus! Terus pelajari bagian yang belum kamu kuasai.";
    } else {
        message = "Tetap semangat. Pelajari materi dan coba evaluasi lagi.";
    }

    result.innerHTML = `
        <div class="result-panel">
            <h3>${isPre ? "Pre-test Selesai!" : "Post-test Selesai!"}</h3>
            <p>Jawaban benar: ${score} dari ${questions.length}</p>
            <p>Nilai: ${percentage}/100</p>
            <p>${message}</p>
            <a class="btn" href="${isPre ? "#materi" : "#kesimpulan"}">
                ${isPre ? "Pelajari Materi →" : "Lihat Kesimpulan →"}
            </a>
        </div>
    `;

    if (isPre) {
        document.getElementById("final-pre").textContent = `${percentage}/100`;
    } else {
        document.getElementById("final-post").textContent = `${percentage}/100`;
    }
}

function renderMatching() {
    const itemsEl = document.getElementById("matching-items");
    const categoriesEl = document.getElementById("matching-categories");

    const shuffled = [...matchingPairs].sort(() => Math.random() - 0.5);

    itemsEl.innerHTML = shuffled.map(pair => `
        <button class="match-item" data-item="${pair.item}">
            ${pair.item}
        </button>
    `).join("");

    categoriesEl.innerHTML = ["Input", "Processing", "Output", "Storage"].map(category => `
        <button class="match-category" data-category="${category}">
            ${category}
        </button>
    `).join("");

    itemsEl.querySelectorAll(".match-item").forEach(button => {
        button.addEventListener("click", () => {
            if (matchedItems.includes(button.dataset.item)) return;

            selectedMatch = button.dataset.item;

            itemsEl.querySelectorAll(".match-item").forEach(item => {
                item.classList.toggle("selected", item === button);
            });

            document.getElementById("matching-feedback").textContent =
                `Sekarang pilih kategori untuk ${selectedMatch}.`;

            document.getElementById("matching-feedback").className = "feedback";
        });
    });

    categoriesEl.querySelectorAll(".match-category").forEach(button => {
        button.addEventListener("click", () => checkMatch(button.dataset.category));
    });

    updateMatchingProgress();
}

function checkMatch(category) {
    const feedback = document.getElementById("matching-feedback");

    if (!selectedMatch) {
        feedback.textContent = "Pilih perangkat terlebih dahulu.";
        feedback.className = "feedback incorrect";
        return;
    }

    const pair = matchingPairs.find(item => item.item === selectedMatch);

    if (pair.category === category) {
        matchedItems.push(selectedMatch);

        const itemButton = document.querySelector(
            `.match-item[data-item="${selectedMatch}"]`
        );

        if (itemButton) {
            itemButton.disabled = true;
            itemButton.classList.remove("selected");
            itemButton.classList.add("matched");
        }

        const categoryButton = document.querySelector(
            `.match-category[data-category="${category}"]`
        );

        if (categoryButton) categoryButton.classList.add("matched");

        feedback.textContent = "Benar! Pasangan berhasil dicocokkan.";
        feedback.className = "feedback correct";

        selectedMatch = null;
        updateMatchingProgress();
    } else {
        feedback.textContent = "Belum tepat. Coba pikirkan fungsi perangkat tersebut.";
        feedback.className = "feedback incorrect";
    }
}

function updateMatchingProgress() {
    document.getElementById("matching-progress").textContent =
        `Pasangan benar: ${matchedItems.length} dari ${matchingPairs.length}`;

    if (matchedItems.length === matchingPairs.length) {
        document.getElementById("matching-feedback").textContent =
            "Semua pasangan berhasil! Kamu sudah menyelesaikan latihan.";
        document.getElementById("matching-feedback").className = "feedback correct";
    }
}

function resetMatching() {
    matchedItems = [];
    selectedMatch = null;

    document.getElementById("matching-feedback").textContent = "";
    renderMatching();
}

function resetAll() {
    currentTopic = 0;
    preIndex = 0;
    postIndex = 0;
    preScore = 0;
    postScore = 0;
    preAnswered = false;
    postAnswered = false;
    preFinished = false;
    postFinished = false;

    document.getElementById("pre-next").style.display = "inline-block";
    document.getElementById("post-next").style.display = "inline-block";
    document.getElementById("pre-result").innerHTML = "";
    document.getElementById("post-result").innerHTML = "";

    document.getElementById("final-pre").textContent = "-";
    document.getElementById("final-post").textContent = "-";

    renderQuiz("pre");
    renderQuiz("post");
    renderTopic(0);
    resetMatching();

    window.location.hash = "beranda";
}

document.querySelectorAll(".topic-btn").forEach(button => {
    button.addEventListener("click", () => {
        renderTopic(Number(button.dataset.topic));
    });
});

document.getElementById("topic-prev").addEventListener("click", () => {
    renderTopic(currentTopic - 1);
});

document.getElementById("topic-next").addEventListener("click", () => {
    if (currentTopic < materials.length - 1) {
        renderTopic(currentTopic + 1);
    } else {
        document.getElementById("simulasi").scrollIntoView({ behavior: "smooth" });
    }
});

document.querySelectorAll(".ipos-card").forEach(button => {
    button.addEventListener("click", () => {
        const index = Number(button.dataset.ipos);

        document.querySelectorAll(".ipos-card").forEach(card => {
            card.classList.toggle("active", card === button);
        });

        document.getElementById("ipos-title").textContent = iposData[index].title;
        document.getElementById("ipos-description").textContent =
            iposData[index].description;
    });
});

document.getElementById("pre-next").addEventListener("click", () => {
    nextQuestion("pre");
});

document.getElementById("post-next").addEventListener("click", () => {
    nextQuestion("post");
});

document.getElementById("matching-reset").addEventListener("click", resetMatching);
document.getElementById("reset-all").addEventListener("click", resetAll);

renderTopic(0);
renderQuiz("pre");
renderQuiz("post");
renderMatching();