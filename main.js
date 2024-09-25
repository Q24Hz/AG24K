document.addEventListener('DOMContentLoaded', function () {
    const loginContainer = document.getElementById('login-container');
    const menuContainer = document.getElementById('menu-container');
    const loginForm = document.getElementById('login-form');
    const showCalendarButton = document.getElementById('show-calendar');
    const showChatButton = document.getElementById('show-chat');
    const calendar = document.getElementById('calendar');
    const chat = document.getElementById('chat');
    const logoutButton = document.getElementById('logout');
    const dateTimeDisplay = document.getElementById('date-time');
    const clockDisplay = document.getElementById('clock');

    // Hàm chuyển đổi từ 24h sang 12h
    function formatTime(date) {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // 0 giờ phải là 12
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        return hours + ':' + minutes + ':' + seconds + ' ' + ampm;
    }

    // Cập nhật giờ và ngày
    function updateDateTime() {
        const now = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        dateTimeDisplay.textContent = now.toLocaleDateString('vi-VN', options);
        clockDisplay.textContent = formatTime(now);
    }

    // Cập nhật thời gian mỗi giây
    setInterval(updateDateTime, 1000);
    updateDateTime(); // Cập nhật ngay lập tức

    // Xử lý đăng nhập
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        loginContainer.style.display = 'none';
        menuContainer.style.display = 'flex';
    });

    // Hiển thị nội dung lịch
    showCalendarButton.addEventListener('click', function () {
        calendar.style.display = 'block';
        chat.style.display = 'none';
    });

    // Hiển thị nội dung chat
    showChatButton.addEventListener('click', function () {
        chat.style.display = 'block';
        calendar.style.display = 'none';
    });

    // Đăng xuất
    logoutButton.addEventListener('click', function () {
        menuContainer.style.display = 'none';
        loginContainer.style.display = 'flex';
    });
});
