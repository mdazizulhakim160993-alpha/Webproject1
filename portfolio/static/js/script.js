// =============== Typing Animation =============== 

const words = [ 
  "Frontend Developer", 
  "Python Developer", 
  "Django Learner", 
  "Web Designer" 
]; 
 
let wordIndex = 0; 
let charIndex = 0; 
let deleting = false; 
 
const typing = document.getElementById("typing"); 
 
function type() { 
    const current = words[wordIndex]; 
 
    if (!deleting) { 
        typing.textContent = current.substring(0, charIndex++); 
 
        if (charIndex > current.length) { 
            deleting = true; 
            setTimeout(type, 1200); 
            return; 
        } 
    } else { 
        typing.textContent = current.substring(0, charIndex--); 
 
        if (charIndex === 0) { 
            deleting = false; 
            wordIndex++; 
            if (wordIndex >= words.length) 
                wordIndex = 0; 
        } 
    } 
 
    setTimeout(type, deleting ? 50 : 120); 
} 
 
type();


// =============== Dark Mode =============== 

const darkBtn = document.getElementById("darkBtn"); 
 
let dark = true; 
 
darkBtn.addEventListener("click", () => { 
    if (dark) { 
        document.body.classList.remove("bg-slate-900"); 
        document.body.classList.remove("text-white"); 
        document.body.classList.add("bg-white"); 
        document.body.classList.add("text-black"); 
 
        darkBtn.innerHTML = 
            '<i class="fa-solid fa-sun text-xl"></i>'; 
    } else { 
        document.body.classList.remove("bg-white"); 
        document.body.classList.remove("text-black"); 
        document.body.classList.add("bg-slate-900"); 
        document.body.classList.add("text-white"); 
 
        darkBtn.innerHTML = 
            '<i class="fa-solid fa-moon text-xl"></i>'; 
    } 
 
    dark = !dark; 
});


// =============== Scroll Animation =============== 

const sections = document.querySelectorAll("section"); 
 
const observer = new IntersectionObserver((entries) => { 
    entries.forEach(entry => { 
        if (entry.isIntersecting) { 
            entry.target.classList.add("opacity-100"); 
            entry.target.classList.remove("opacity-0"); 
            entry.target.classList.remove("translate-y-10"); 
        } 
    }); 
}, { threshold: 0.15 }); 
 
sections.forEach(section => { 
    section.classList.add( 
        "opacity-0", 
        "translate-y-10", 
        "duration-700" 
    ); 
    observer.observe(section); 
});


// =============== Back To Top Button =============== 

const topBtn = document.createElement("button"); 
 
topBtn.innerHTML = "↑"; 
 
topBtn.className = 
"fixed bottom-6 right-6 bg-cyan-500 text-white w-12 h-12 rounded-full shadow-lg hidden"; 
 
document.body.appendChild(topBtn); 
 
window.addEventListener("scroll", () => { 
    if (window.scrollY > 400) 
        topBtn.classList.remove("hidden"); 
    else 
        topBtn.classList.add("hidden"); 
}); 
 
topBtn.onclick = () => { 
    window.scrollTo({ top: 0, behavior: "smooth" }); 
};


// =============== Navbar Active Link =============== 

const navLinks = document.querySelectorAll("nav a"); 
 
window.addEventListener("scroll", () => { 
    let current = ""; 
 
    sections.forEach(section => { 
        const top = section.offsetTop - 150; 
        if (scrollY >= top) 
            current = section.id; 
    }); 
 
    navLinks.forEach(link => { 
        link.classList.remove("text-cyan-400"); 
 
        if (link.getAttribute("href") == "#" + current) 
            link.classList.add("text-cyan-400"); 
    }); 
});