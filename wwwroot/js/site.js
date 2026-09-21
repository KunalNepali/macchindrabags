document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       MOBILE NAVIGATION
    ===================================================== */

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", () => {

            navLinks.classList.toggle("active");

        });


        navLinks.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("active");

            });

        });

    }


    /* =====================================================
       REPAIR GALLERY FILTERS
    ===================================================== */

    const filterButtons =
        document.querySelectorAll(".repair-filter");

    const galleryCards =
        document.querySelectorAll(".repair-gallery-card");


    if (filterButtons.length && galleryCards.length) {

        filterButtons.forEach(button => {

            button.addEventListener("click", () => {

                const filter =
                    button.getAttribute("data-filter");


                /* Active button */

                filterButtons.forEach(item => {

                    item.classList.remove("active");

                });

                button.classList.add("active");


                /* Filter cards */

                galleryCards.forEach(card => {

                    const category =
                        card.getAttribute("data-category");


                    if (
                        filter === "all" ||
                        category === filter
                    ) {

                        card.classList.remove("is-hidden");

                    } else {

                        card.classList.add("is-hidden");

                    }

                });

            });

        });

    }


    /* =====================================================
       REPAIR IMAGE LIGHTBOX
    ===================================================== */

    const lightbox =
        document.getElementById("repairLightbox");

    const lightboxImage =
        document.getElementById("lightboxImage");

    const lightboxTitle =
        document.getElementById("lightboxTitle");

    const lightboxDescription =
        document.getElementById("lightboxDescription");

    const lightboxCategory =
        document.getElementById("lightboxCategory");


    if (
        lightbox &&
        lightboxImage &&
        lightboxTitle &&
        lightboxDescription
    ) {


        /* Open lightbox */

        galleryCards.forEach(card => {

            card.addEventListener("click", () => {

                const image =
                    card.getAttribute("data-image");

                const title =
                    card.getAttribute("data-title");

                const description =
                    card.getAttribute("data-description");

                const category =
                    card.querySelector(
                        ".repair-card-overlay span"
                    )?.textContent || "REPAIR WORK";


                lightboxImage.src = image;

                lightboxImage.alt = title;

                lightboxTitle.textContent = title;

                lightboxDescription.textContent =
                    description;

                if (lightboxCategory) {

                    lightboxCategory.textContent =
                        category;

                }


                lightbox.classList.add("active");

                lightbox.setAttribute(
                    "aria-hidden",
                    "false"
                );


                /* Prevent page scrolling */

                document.body.style.overflow = "hidden";

            });

        });


        /* Close lightbox */

        const closeLightbox = () => {

            lightbox.classList.remove("active");

            lightbox.setAttribute(
                "aria-hidden",
                "true"
            );

            document.body.style.overflow = "";

            /* Clear image after animation */

            setTimeout(() => {

                if (
                    !lightbox.classList.contains("active")
                ) {

                    lightboxImage.src = "";

                }

            }, 250);

        };


        document
            .querySelectorAll("[data-lightbox-close]")
            .forEach(element => {

                element.addEventListener(
                    "click",
                    closeLightbox
                );

            });


        /* ESC key */

        document.addEventListener("keydown", event => {

            if (
                event.key === "Escape" &&
                lightbox.classList.contains("active")
            ) {

                closeLightbox();

            }

        });

    }

});