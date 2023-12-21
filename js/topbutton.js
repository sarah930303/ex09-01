    // 檢查當前頁面滾動位置
    window.onscroll = function () {
      scrollFunction();
    };
  
    function scrollFunction() {
      var scrollToTopBtn = document.getElementById("scrollToTopBtn");
  
      // 如果滾動位置大於100，顯示箭頭按鈕，否則隱藏
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        scrollToTopBtn.style.display = "block";
      } else {
        scrollToTopBtn.style.display = "none";
      }
    }
  
    // 滾動到頁面頂部
    function scrollToTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }