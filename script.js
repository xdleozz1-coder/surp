window.addEventListener('DOMContentLoaded', () => {
    // 🌸 Quotes
    const quotes = [
      "You're my everything, princess 💗🥺😙 — from Amila",
      "Every day with you feels like a dream I never want to end 💞",
      "You are my reason, my smile, my home ❤️",
      "Even when we’re apart, my heart is always with you 💋",
      "Your love is my favorite place to be 💕",
      "You're my everything, my world, my forever 💞",
      "Every heartbeat of mine belongs to you ❤️",
      "With you, every day feels like a fairytale ✨",
      "You are the sunshine that lights up my soul ☀️",
      "My heart smiles every time I see you 😊💖",
      "Loving you is my favorite thing to do 💋",
      "You are my today and all of my tomorrows 💍",
      "Even forever wouldn’t be enough with you 💕",
      "I fall in love with you more every single day 💓",
      "You’re my dream I never want to wake up from 🌙",
      "Your love is my favorite place to be 🏡💗",
      "You’re the reason behind my happiest moments 😘",
      "I still get butterflies every time you smile 🦋",
      "You and me — a perfect love story 📖💞",
      "My world begins and ends with you 🌎❤️",
      "Your hug is my safest place in the world 🤗",
      "If I had one wish, it would be you forever 💫",
      "You are the peace my heart always searched for 🕊️",
      "You’re my heart’s favorite melody 🎶💖",
      "Even silence feels beautiful when I’m with you 💞",
      "Your eyes are my favorite galaxy 🌌",
      "You make my heart skip its favorite beat 💓",
      "My love for you grows stronger each sunrise 🌅",
      "You are the best decision I’ve ever made 💍",
      "I could look at you and smile for a lifetime 😊",
      "Your love is magic I never want to end ✨",
      "Every moment with you is a treasure ⏳💖",
      "You make ordinary moments extraordinary 🌸",
      "You’re the only person I’d share my fries with 🍟❤️",
      "My soul feels complete with you in it 💞",
      "I loved you yesterday, I love you today, and I’ll love you forever 💝",
      "You’re my favorite notification every day 📱💌",
      "Every time I see you, my heart whispers ‘mine’ 💓",
      "You’re my calm in every storm 🌧️❤️",
      "Your smile is my daily dose of happiness 😍",
      "My heart beats only for you 💓",
      "Distance means nothing when hearts are connected 🌍💞",
      "You make love look so easy 💫",
      "You’re not just my love — you’re my life ❤️",
      "I could never unlove you, even if I tried 💔💖",
      "My favorite part of the day is you 💕",
      "You’re my once-in-a-lifetime kind of love 💍",
      "You complete me in every possible way 🧩💞",
      "You are my sweetest addiction 🍯💓",
      "You’re the ‘yes’ my heart always wanted 💗",
      "My love for you is endless like the sea 🌊❤️",
      "You’re my heart’s favorite person 💞",
      "You make my world bloom like spring 🌸💖",
      "Your voice feels like home to my soul 🏡💕",
      "You’re my reason for believing in love again 💫",
      "Every love song suddenly makes sense with you 🎶❤️",
      "You’re my forever kind of person 💍💖",
      "I thank the stars for bringing you into my life 🌟",
      "You make my heart smile even on cloudy days ☁️💗",
      "You’re my daily dose of happiness 💊❤️",
      "No distance can keep our hearts apart 💞🌍",
      "You are the poetry my heart always wanted to write ✍️💖",
      "You are my peace after every chaos 🕊️💫",
      "My heart chose you and will choose you every time 💓",
      "You’re my moonlight on the darkest nights 🌙💖",
      "You make my world so colorful 🎨💗",
      "I still get nervous around you — every single time 😳❤️",
      "My favorite place will always be your arms 🤗💕",
      "You are my person, always and forever 💍",
      "You’re the reason I believe in love stories 📖💞",
      "I’d rather lose sleep than lose you 💤❤️",
      "My heart belongs to you and only you 💓",
      "You make my soul feel alive 🔥💖",
      "You are my endless love story 💞",
      "You’re the smile I wear every day 😊💗",
      "Even the stars envy our love 🌟💞",
      "You are my sunshine on rainy days ☀️🌧️",
      "Your love feels like home 🏡💖",
      "You are the reason my heart beats faster 💓",
      "I love you more than words can ever say 💬❤️",
      "You’re my sweetest hello and hardest goodbye 💞",
      "You make my life brighter every single day 🌈💗",
      "You’re the missing piece I never knew I needed 🧩💖",
      "I still get lost in your eyes every time 👀💞",
      "You’re my best friend and my greatest love ❤️",
      "With you, I have everything I’ll ever need 💍💗",
      "You’re the love that feels like home 🏡❤️",
      "You are my forever and always 💞",
      "You make my heart race and my soul calm at once 💓🕊️",
      "Every love story is beautiful, but ours is my favorite 📖💖",
      "You’re my reason for every smile 😊❤️",
      "Your heart is my favorite place to live 💕",
      "You’re the one I prayed for every night 🙏💗",
      "You are my dream come true 💫💖",
      "My heart beats your name every second 💓",
      "I’ll love you till the stars stop shining 🌟❤️",
      "You’re my happiness, my peace, my home 💞",
      "You are the rhythm my heart dances to 🎶💗",
      "I never believed in soulmates until I met you 💕",
      "Your love is the light that guides my heart 🔥❤️",
      "Every second with you is priceless ⏰💖",
      "You’re my always, my forever, my everything 💍💞",
      "You’re the most beautiful chapter of my life 📖❤️",
      "With you, love feels like magic every day ✨💗",
      "You are my heart’s greatest adventure 🌍💞",
      "My love for you is infinite ♾️❤️"
    ];
  
    const loveBtn = document.getElementById('loveBtn');
    const music = document.getElementById('bgMusic');
    const body = document.body;
    const counterElement = document.getElementById("daysTogether");
    const startDate = new Date("2025-09-26T00:00:00"); // Relationship start date
  
    // ✅ Safe autoplay after user gesture
    if (loveBtn) {
      loveBtn.addEventListener('click', () => {
        music?.play().catch(() => {});
        showQuote();
      });
    }
  
    // ✍️ Typewriter effect
    function typewriterEffect(element, text, speed = 50) {
      let i = 0;
      element.textContent = '';
      const timer = setInterval(() => {
        element.textContent += text[i];
        i++;
        if (i >= text.length) clearInterval(timer);
      }, speed);
    }
  
    // 🕓 Quote of the day
    function getTodayQuoteIndex() {
      const now = new Date();
      const diffDays = Math.floor((now - new Date("2025-01-01T00:00:00")) / (1000 * 60 * 60 * 24));
      return diffDays % quotes.length;
    }
  
    function showQuote() {
      const quote = quotes[getTodayQuoteIndex()];
      const box = document.createElement('div');
      box.classList.add('popup-box');
      document.body.appendChild(box);
      typewriterEffect(box, quote, 40);
      setTimeout(() => box.remove(), 5000);
    }
  
    // ❤️ Floating hearts
    setInterval(() => {
      const heart = document.createElement('div');
      heart.classList.add('floating-heart');
      heart.textContent = '♥️';
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.fontSize = (15 + Math.random() * 20) + 'px';
      heart.style.animationDuration = (4 + Math.random() * 4) + 's';
      body.appendChild(heart);
      setTimeout(() => heart.remove(), 8000);
    }, 400);
  
    // 🕰 Live “time together” counter
    function updateTimeTogether() {
      const now = new Date();
      let diff = now - startDate;
  
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      diff -= days * 1000 * 60 * 60 * 24;
  
      const hours = Math.floor(diff / (1000 * 60 * 60));
      diff -= hours * 1000 * 60 * 60;
  
      const minutes = Math.floor(diff / (1000 * 60));
      diff -= minutes * 1000 * 60;
  
      const seconds = Math.floor(diff / 1000);
  
      if (counterElement) {
        counterElement.textContent = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds ❤️`;
      }
    }
  
    updateTimeTogether();
    setInterval(updateTimeTogether, 1000);
  
    // 🌠 Day/Night background with stars (Sri Lanka Time)
    function setDayNightBackground() {
      // Get current time in Sri Lanka (UTC+5:30)
      const nowUTC = new Date();
      const nowInSL = new Date(nowUTC.getTime() + (5.5 * 60 * 60 * 1000));
      const hour = nowInSL.getUTCHours();
  
      // Remove old stars before creating new ones
      document.querySelectorAll('.star').forEach(star => star.remove());
  
      if (hour >= 18 || hour < 6) {
        // 🌙 Night
        body.style.background = "radial-gradient(#000022, #000000)";
        createStars();
      } else {
        // ☀️ Day
        body.style.background = "linear-gradient(#aee1f9, #ffffff)";
      }
    }
  
    function createStars() {
      for (let i = 0; i < 60; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        const size = Math.random() * 2 + 1;
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        star.style.position = 'absolute';
        star.style.background = 'white';
        star.style.borderRadius = '50%';
        star.style.top = Math.random() * 100 + 'vh';
        star.style.left = Math.random() * 100 + 'vw';
        star.style.opacity = Math.random();
        star.style.animationDelay = Math.random() * 3 + 's';
        body.appendChild(star);
      }
    }
  
    // Set initially and refresh every hour
    setDayNightBackground();
    setInterval(setDayNightBackground, 60 * 60 * 1000); // every hour
  
    // 🌟 Twinkle animation for stars
    const style = document.createElement('style');
    style.textContent = `
      @keyframes twinkle {
        0%, 100% { opacity: 0.3; }
        50% { opacity: 1; }
      }
      .star {
        animation: twinkle 2s infinite ease-in-out;
      }
    `;
    document.head.appendChild(style);
  
    // 💞 Floating her name
    function floatName() {
      const name = document.createElement('div');
      name.classList.add('floating-name');
      name.textContent = "My Princess 💖";
  
      // Random vertical position
      name.style.top = Math.random() * 90 + 'vh';
  
      // Random animation speed
      name.style.animationDuration = (8 + Math.random() * 5) + 's';
  
      body.appendChild(name);
  
      // Remove after animation
      setTimeout(() => name.remove(), 13000);
    }
  
    setInterval(floatName, 4000);
  });
  