const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const menuContainer = document.getElementById("menu-container");

// Giữ nguyên code của bạn
registerLink.onclick = () => {
    wrapper.classList.add('active');
};

loginLink.onclick = () => {
    wrapper.classList.remove('active');
};

// Thêm chức năng hiển thị menu sau khi đăng nhập hoặc đăng ký thành công
function showMenu() {
    loginForm.style.display = "none";
    registerForm.style.display = "none";
    menuContainer.style.display = "block";
}

// Xử lý đăng ký
registerForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = registerForm.querySelector("input[type='text']").value;
    const email = registerForm.querySelector("input[type='email']").value;
    const password = registerForm.querySelector("input[type='password']").value;

    // Kiểm tra xem email đã được đăng ký chưa
    if (localStorage.getItem(email)) {
        alert("Email đã được đăng ký.");
    } else {
        // Lưu thông tin người dùng vào localStorage
        const user = { username: username, password: password };
        localStorage.setItem(email, JSON.stringify(user));
        alert("Đăng ký thành công! Vui lòng đăng nhập.");
        wrapper.classList.remove('active'); // Chuyển về form đăng nhập
    }
});

// Xử lý đăng nhập
loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = loginForm.querySelector("input[type='text']").value;
    const password = loginForm.querySelector("input[type='password']").value;

    const user = JSON.parse(localStorage.getItem(email));

    if (user && user.password === password) {
        alert("Đăng nhập thành công!");
        showMenu(); // Hiển thị menu sau khi đăng nhập thành công
    } else {
        alert("Email hoặc mật khẩu không đúng.");
    }
});

// Hiển thị đồng hồ và ngày giờ trong menu
function updateClock() {
    const now = new Date();
    const dateString = now.toLocaleDateString();
    const timeString = now.toLocaleTimeString();
    document.getElementById("date-time").textContent = `Ngày: ${dateString}`;
    document.getElementById("clock").textContent = `Giờ: ${timeString}`;
}

setInterval(updateClock, 1000);
