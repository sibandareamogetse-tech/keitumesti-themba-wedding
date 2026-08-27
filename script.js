```javascript
document.addEventListener("DOMContentLoaded", () => {

    /*
    ==========================================
    SIMPLE SCROLL REVEAL EFFECT
    ==========================================
    */

    const sections = document.querySelectorAll(
        ".introduction, .celebration, .gifts-section, .rsvp-section"
    );


    const revealSection = () => {

        sections.forEach((section) => {

            const sectionTop =
                section.getBoundingClientRect().top;

            const screenHeight =
                window.innerHeight;


            if (sectionTop < screenHeight * 0.85) {

                section.classList.add("section-visible");

            }

        });

    };


    revealSection();


    window.addEventListener(
        "scroll",
        revealSection,
        { passive: true }
    );


    /*
    ==========================================
    WHATSAPP BUTTON CHECK
    ==========================================

    The WhatsApp links are standard wa.me links
    and work without a paid service.

    Reamogetse:
    https://wa.me/27812870288

    Khosi:
    https://wa.me/27612875028
    */

});
```

