setTimeout(() => {
  document.getElementById('splash').style.display = 'none';
  document.getElementById('app').classList.remove('hidden');
}, 1500);

function showTab(id) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}
