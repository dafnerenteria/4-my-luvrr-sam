

const CONFIG = {
    // Your Valentine's name that will appear in the title
    valentineName: "my sweetest sam ",

    // The title that appears in the browser tab
    // You can use emojis! 
    pageTitle: "4 my luvrr ",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['💌', '💋', '💌', '💋','💌', '💋', '💌', '💋','💌', '💋', '💌', '💋','💌', '💋', '💌', '💋','💌', '💋', '💌', '💋'],  // Heart emojis
        bears: ['💌', '💋','💌', '💋', '💌', '💋','💌', '💋', '💌', '💋','💌', '💋', '💌', '💋','💌', '💋','💌', '💋', '💌', '💋','💌', '💋', '💌', '💋','💌', '💋', '💌', '💋']                       // 
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "welcome to my page mauhaha- wait well actually this is more like your page, a fan page of sorts if you will. The first thing you are required to do is turn your volume up and click the button on the top right. plsss, i'm desperate. ",                                    // First interaction
            yesBtn: "yess, i'll click it because i like you ",                                             // Text for "Yes" button
            noBtn: "literally noooo!! don't tell me what to dooo ",                                               // Text for "No" button 
            secretAnswer: "YES! I'LL CLICK IT BECAUSE I LOVE YOUUUUUUUUUUUU SOO MUCCCHHH"           // Secret hover message
          
        },
        second: {
            text: "okii pop quiz time, how much do youu luv me 🤔?  ",                          // For the love meter
            startText: "hmm dis mucchh...i think ",                                   // Text before the percentage
            nextBtn: "alright easy, hit me with the next your honor "                                         // Text for the next button
        },  
        third: {
            text: "will you be my valentine on F̶e̶b̶r̶u̶a̶r̶y̶ 1̶4̶t̶h̶, 2̶0̶2̶5̶ February 23rd, 2025?? pretty pls! pretty pls! it would be my greatest dream come tru >.<", // The big question!
            yesBtn: "duhhhhhhhhhh!!!",                                             // Text for "Yes" button
            noBtn: "honestly nooo... maybe next year tho"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "EHHH YOUUUU LUVVV MEEEE ☺️",  // Shows when they go past 5000%
        high: " yeahh you still hate me  ",              // Shows when they go past 1000%
        normal: "okii so you hate me  "                           // Shows when they go past 100%
    },

    // Messages that appear after they say "duuuuhhhhhhh "
    celebration: {
        title: "i always knew i was lucky but i never knew i was gods favorite. sam i know this is small but i want you to feel loved and cared for even from a distance. while we can't celebrate the 14th maybe the 23rd can be our valentine date whether that be virtual or in person :). the 23rd you are mine. ",
        message: "INFINITE KISSES 4 YOU MY WONDERFUL WOMAN <3333.  ",
        emojis: "💋💋💋💋💋💋💋💋"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#EA698B",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#47126B",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#ff6b6b",     // Button color (should stand out against the background)
        buttonHover: "#C05299",          // Button hover color (slightly lighter than buttonBackground)
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
