let inventory = [];
let selectedItem = null;
let bookSeq = [];

// Función para añadir al inventario manteniendo el diseño visual
function addToInventory(itemType, htmlContent) {
    if (inventory.length < 3) {
        inventory.push(itemType);
        const slot = document.getElementById(`slot-${inventory.length - 1}`);
        slot.innerHTML = `<div style="transform: scale(0.7)">${htmlContent}</div>`;
        
        slot.addEventListener("click", () => {
            document.querySelectorAll(".slot").forEach(s => s.classList.remove("selected"));
            slot.classList.add("selected");
            selectedItem = itemType;
        });
    }
}

// 1. Cuadro
document.getElementById("painting").addEventListener("click", function() {
    this.classList.remove("tilted");
    document.getElementById("screwdriver").classList.remove("hidden");
});

// 2. Destornillador
const screwObj = document.getElementById("screwdriver");
screwObj.addEventListener("click", () => {
    addToInventory("tool", '<div class="handle"></div><div class="shaft"></div>');
    screwObj.classList.add("hidden");
});

// 3. Lámpara
document.getElementById("lamp").addEventListener("click", function() {
    if (selectedItem === "tool") {
        this.classList.add("lit");
        const shadow = document.getElementById("shadow-number");
        shadow.classList.remove("hidden");
        shadow.style.color = "rgba(255,255,255,0.2)";
        alert("¡Lámpara arreglada! Una sombra aparece en la pared...");
    }
});

// 4. Libros
document.querySelectorAll(".book").forEach(book => {
    book.addEventListener("click", () => {
        bookSeq.push(book.dataset.order);
        if (bookSeq.length === 3) {
            if (bookSeq.join("-") === "rojo-gris-negro") {
                alert("Has encontrado una Lupa 🔍\nPista: El amor de una madre es para SIEMPRE.");
                addToInventory("lupa", '<div style="font-size:30px">🔍</div>');
            } else {
                alert("Nada ocurre...");
                bookSeq = [];
            }
        }
    });
});

// 5. Taza
document.getElementById("coffee-cup").addEventListener("click", () => {
    if (selectedItem === "lupa") alert("En el fondo ves un número: 7");
});

// 6. Caja Fuerte
document.getElementById("safe").addEventListener("click", () => {
    document.getElementById("safe-modal").classList.remove("hidden");
});

document.getElementById("close-modal").onclick = () => {
    document.getElementById("safe-modal").classList.add("hidden");
};

document.getElementById("unlock-btn").onclick = () => {
    const v1 = document.getElementById("n1").value;
    const v2 = document.getElementById("n2").value;
    const v3 = document.getElementById("word").value.toUpperCase().trim();

    if (v1 === "3" && v2 === "7" && v3 === "SIEMPRE") {
        document.getElementById("safe-modal").classList.add("hidden");
        document.getElementById("safe").style.display = "none";
        document.getElementById("envelope").classList.remove("hidden");
    } else {
        alert("Combinación errónea");
    }
};

// 7. Sobre Final
document.getElementById("envelope").onclick = () => {
    document.getElementById("letter-modal").classList.remove("hidden");
};