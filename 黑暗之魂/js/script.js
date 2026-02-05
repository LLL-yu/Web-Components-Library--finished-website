document.addEventListener("DOMContentLoaded", function() {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    const moreInfo = document.getElementById("more-info");
    const toggleInfoBtn = document.getElementById("toggle-info");

    // 显示/隐藏 "返回顶部" 按钮
    window.addEventListener("scroll", function() {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    });

    // 返回顶部功能
    scrollToTopBtn.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // 折叠/展开功能
    toggleInfoBtn.addEventListener("click", function() {
        if (moreInfo.style.display === "none" || moreInfo.style.display === "") {
            moreInfo.style.display = "block";
            toggleInfoBtn.textContent = "折叠";
        } else {
            moreInfo.style.display = "none";
            toggleInfoBtn.textContent = "展开";
        }
    });
});
