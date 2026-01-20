// ১. Vanta Net Animation ইনিশিয়ালাইজেশন
let vantaEffect = VANTA.NET({
  el: "#vanta-canvas",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0xff3f81,       // শুরুর কালার
  backgroundColor: 0x050505,
  points: 12.00,
  maxDistance: 20.00,
  spacing: 16.00
});

// ২. স্বয়ংক্রিয় কালার পরিবর্তন করার লজিক (Hue Cycle)
let hue = 0;
setInterval(() => {
    hue = (hue + 1) % 360; // ০ থেকে ৩৬০ ডিগ্রিতে ঘুরবে
    const color = new THREE.Color(`hsl(${hue}, 80%, 60%)`);
    
    // Vanta কালার আপডেট করা
    vantaEffect.setOptions({
        color: color.getHex()
    });
}, 100); // প্রতি ১০০ মিলিসেকেন্ডে হালকা পরিবর্তন হবে (খুব স্মুথলি)

// ৩. 3D Tilt Effect কার্ডের জন্য
VanillaTilt.init(document.querySelectorAll(".card"), {
    max: 15,
    speed: 400,
    glare: true,
    "max-glare": 0.3,
});

// ৪. নতুন ট্যাবে ওপেন করার ফাংশন
function openLink(url) {
    window.open(url, '_blank');
}