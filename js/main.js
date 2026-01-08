// ===== Stages Data =====
const stages = [
    { title: "التقييم الهندسي", desc: "فحص شامل لحالة المبنى", img: "assets/images/stage1.jpg" },
    { title: "إزالة الركام", desc: "تنظيف الموقع بالكامل", img: "assets/images/stage2.jpg" },
    { title: "الترميم", desc: "إصلاح الهيكل الأساسي", img: "assets/images/stage3.jpg" },
    { title: "التشطيب", desc: "الكهرباء والدهان", img: "assets/images/stage4.jpg" },
    { title: "السكن الآمن", desc: "المنزل جاهز للسكن", img: "assets/images/stage5.jpg" }
];


let current = 0;

function renderStage() {
    $("#stageTitle").text(stages[current].title);
    $("#stageDesc").text(stages[current].desc);
    $("#stageImg").attr("src", stages[current].img);
}

renderStage();

$("#nextStage").click(() => {
    current < stages.length - 1 ? current++ : alert("انتهت جميع المراحل");
    renderStage();
});

// ===== Engineers =====
const engineers = [
    { name: "م. طارق", spec: "مدني", exp: "10 سنوات" },
    { name: "م. سارة", spec: "معماري", exp: "7 سنوات" },
    { name: "م. محمد", spec: "إنشائي", exp: "12 سنة" }
];

engineers.forEach(e => {
    $("#engineerList").append(`
        <div class="col-md-4 mb-3">
            <div class="engineer-card text-center">
                <i class="fa-solid fa-user fa-2x mb-2"></i>
                <h5>${e.name}</h5>
                <p>${e.spec}</p>
                <p>${e.exp}</p>
            </div>
        </div>
    `);
});

// ===== Contact =====
$("#contactForm").submit(e => {
    e.preventDefault();
    alert("تم إرسال الرسالة بنجاح ✔");
    e.target.reset();
});
