// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    valentineName: "SAM <3 ",

    // The title that appears in the browser tab
    // You can use emojis! 
    pageTitle: "for my luvrrr ",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['💌', '💋', '💌', '💋','💌', '💋', '💌', '💋','💌', '💋', '💌', '💋','💌', '💋', '💌', '💋','💌', '💋', '💌', '💋'],  // Heart emojis
        bears: ['💌', '💋','💌', '💋', '💌', '💋','💌', '💋', '💌', '💋','💌', '💋', '💌', '💋']                       // 
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "My sam, welcome to my page mauhaha- wait well actually this is more like your page, a fan page of sorts if you will. The first thing you are required to do is turn your volume up and click the button on the top right. Please, I'm desperate. ",                                    // First interaction
            yesBtn: "yess, I'll click it because I like you ",                                             // Text for "Yes" button
            noBtn: "No!! don't tell me what to dooo ",                                               // Text for "No" button 
            secretAnswer: "YES! I'LL CLICK IT BECAUSE I LOVE YOUUUUUUUUUUUU SOO MUCCCHHH"           // Secret hover message
          
        },
        second: {
            text: "okii pop quiz time. first question: how much do youu luv me 🤔?  ",                          // For the love meter
            startText: "hmm dis mucchh",                                   // Text before the percentage
            nextBtn: "alright easy, hit me with the next your honor :p"                                         // Text for the next button
        }, 
        third: {
            text: "will you be my Valentine on ~~February 14th, 2025~~ February 23rd, 2025?? ", // The big question!
            yesBtn: "Yes!",                                             // Text for "Yes" button
            noBtn: "No"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "WOOOOW You love me that much?? 🥰🚀💝",  // Shows when they go past 5000%
        high: "To infinity and beyond! 🚀💝",              // Shows when they go past 1000%
        normal: "And beyond! 🥰"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "Yay! I'm the luckiest person in the world! 🎉💝💖💝💓",
        message: "Now come get your gift, a big warm hug and a huge kiss!",
        emojis: "🎁💖🤗💝💋❤️💕"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#ffafbd",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#ffc3a0",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#ff6b6b",     // Button color (should stand out against the background)
        buttonHover: "#ff8787",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#ff4757"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "70px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: "2.0"         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/dsehfilbn/video/upload/v1739507103/Glue_Song_cp308y.mp3", // Music streaming URL
        startText: " PLAY MEEEE PLEASEEEE",        // Button text to start music
        stopText: " STOPPP >.< ",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
