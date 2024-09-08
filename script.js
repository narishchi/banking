document.addEventListener('DOMContentLoaded', function() {
    // ฟอร์มการล็อกอิน
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault(); // ป้องกันการ submit ฟอร์มจริง ๆ

        // ดึงค่าจากฟอร์ม
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const errorMessage = document.getElementById('errorMessage');

        // ดึงข้อมูลจาก localStorage
        const storedUsername = localStorage.getItem("User");
        const storedPassword = localStorage.getItem("Pass");

        // ตรวจสอบชื่อผู้ใช้และรหัสผ่าน
        if (username === storedUsername && password === storedPassword) {
            alert('เข้าสู่ระบบสำเร็จ!');
            window.location.href = "Texttalk.2.html";
        } else {
            errorMessage.textContent = 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง';
        }
    });
});

// ฟังก์ชันสมัครสมาชิก
function f_signup() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let num = document.getElementById('num').value; // เบอร์โทร

    // เก็บข้อมูลใน localStorage
    localStorage.setItem("User", username);
    localStorage.setItem("Pass", password);
    localStorage.setItem("Phone", num);

    alert("สมัครสมาชิกสำเร็จ!");
    window.location.href = "login.html";
}

// ฟังก์ชันนำไปยังหน้าล็อกอิน
function f_back() {
    window.location.href = "login.html";
}

// ฟังก์ชันนำไปยังหน้าสมัครสมาชิก
function f_tosignup() {
    window.location.href = "signup.html";
}