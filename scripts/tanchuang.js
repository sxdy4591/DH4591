
// 弹窗功能
function showPopup(message) {
	const popup = document.getElementById('popup');
	const closeButton = document.getElementById('closePopup');
	popup.textContent = message;
	popup.style.display = 'block';

	closeButton.onclick = function() {
		popup.style.display = 'none';
	};

	setTimeout(function() {
		popup.style.display = 'none';
	}, 3000);  // 3秒后隐藏弹窗
}

window.onload = function() {
	showPopup('欢迎拜访我の小网站！');
};