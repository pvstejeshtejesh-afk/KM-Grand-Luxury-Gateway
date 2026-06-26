window.addEventListener('load',()=>setTimeout(()=>document.getElementById('preloader').style.display='none',700));
const menuBtn=document.getElementById('menuBtn'), links=document.getElementById('links');
menuBtn.onclick=()=>links.classList.toggle('open');
document.querySelectorAll('.links a').forEach(a=>a.onclick=()=>links.classList.remove('open'));
document.querySelectorAll('.tab').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.tab').forEach(b=>b.classList.remove('active'));document.querySelectorAll('.tab-panel').forEach(p=>p.classList.remove('active'));btn.classList.add('active');document.getElementById(btn.dataset.tab).classList.add('active')}));
function openModal(id){document.getElementById(id).classList.add('active')} function closeModal(id){document.getElementById(id).classList.remove('active')}
document.querySelectorAll('form').forEach(form=>form.addEventListener('submit',e=>{e.preventDefault();form.querySelector('.success').textContent='Thank you! Your request has been received. Our K.M. Grand team will contact you shortly.';setTimeout(()=>form.reset(),700)}));
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.15});document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
document.querySelectorAll('.gallery img').forEach(img=>img.addEventListener('click',()=>{const m=document.createElement('div');m.className='modal active';m.innerHTML=`<img src="${img.src}" style="max-width:92%;max-height:88%;border-radius:20px;border:1px solid #D4AF37">`;m.onclick=()=>m.remove();document.body.appendChild(m)}));
