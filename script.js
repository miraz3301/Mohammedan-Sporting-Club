// Fade-in animation
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

// Smooth page transition
document.querySelectorAll("a").forEach(link => {
    if (
        link.hostname === window.location.hostname &&
        !link.hasAttribute("target") &&
        link.href !== ""
    ) {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            document.body.classList.remove("loaded");
            setTimeout(() => {
                window.location.href = this.href;
            }, 350);
        });
    }
});

// Tab Switcher for Player Cards
const buttons = document.querySelectorAll(".tab-btn");
const cards = document.querySelectorAll(".player-card");

if (buttons.length > 0) {
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            buttons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            const category = this.dataset.category;

            cards.forEach(card => {
                if (category === "all" || card.classList.contains(category)) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });
}

// ============================================
// MODERN ROLE SELECTOR & LOGIN
// ============================================

document.addEventListener("DOMContentLoaded", () => {
    const roleButtons = document.querySelectorAll(".role-btn");
    const selectedRoleInput = document.getElementById("selectedRole");
    const btnRoleLabel = document.getElementById("btnRoleLabel");
    const loginForm = document.getElementById("loginForm");

    // Tab switcher logic
    if (roleButtons.length > 0) {
        roleButtons.forEach(button => {
            button.addEventListener("click", () => {
                roleButtons.forEach(btn => btn.classList.remove("active"));
                button.classList.add("active");

                const role = button.dataset.role;
                if (selectedRoleInput) selectedRoleInput.value = role;
                if (btnRoleLabel) {
                    btnRoleLabel.textContent = role.charAt(0).toUpperCase() + role.slice(1);
                }
            });
        });
    }

    // Form Submission & Routing
    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const role = selectedRoleInput ? selectedRoleInput.value : "player";
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            if (username === "admin" && password === "1234") {
                document.body.classList.remove("loaded");

                setTimeout(() => {
                    const routes = {
                        player: "player-dashboard.html",
                        employee: "employee-dashboard.html",
                        coach: "coach-dashboard.html"
                    };

                    window.location.href = routes[role] || "dashboard.html";
                }, 350);
            } else {
                alert("Invalid Username or Password");
            }
        });
    }

    // ============================================
    // DASHBOARD NAVIGATION TOGGLE
    // ============================================

    const navEdit = document.getElementById("nav-edit");
    const navOverview = document.getElementById("nav-overview");
    const editSection = document.getElementById("editSection");
    const cancelEdit = document.querySelector(".cancel-edit");
    
    // Select all dashboard cards EXCEPT the edit section
    const overviewCards = document.querySelectorAll(".dash-grid > div:not(.edit-section), .dash-grid > a");

    function showEdit() {
        if(!editSection) return;
        overviewCards.forEach(card => card.style.display = "none");
        editSection.style.display = "block";
        if(navOverview) navOverview.classList.remove("active");
        if(navEdit) navEdit.classList.add("active");
    }

    function showOverview() {
        if(!editSection) return;
        overviewCards.forEach(card => card.style.display = "block");
        editSection.style.display = "none";
        if(navEdit) navEdit.classList.remove("active");
        if(navOverview) navOverview.classList.add("active");
    }

    if (navEdit) navEdit.addEventListener("click", (e) => {
        e.preventDefault();
        showEdit();
    });

    if (navOverview) navOverview.addEventListener("click", (e) => {
        e.preventDefault();
        showOverview();
    });

    if (cancelEdit) cancelEdit.addEventListener("click", showOverview);
});
