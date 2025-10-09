// Инициализация игры
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Элементы интерфейса
const startScreen = document.getElementById("startScreen");
const gameOverScreen = document.getElementById("gameOverScreen");
const levelCompleteScreen = document.getElementById("levelCompleteScreen");
const startButton = document.getElementById("startButton");
const restartButton = document.getElementById("restartButton");
const nextLevelButton = document.getElementById("nextLevelButton");
const levelDisplay = document.getElementById("level");
const livesDisplay = document.getElementById("lives");
const scoreDisplay = document.getElementById("score");
const gearsDisplay = document.getElementById("gears");
const finalScoreDisplay = document.getElementById("finalScore");

// Игровые переменные
let gameState = "start"; // start, playing, gameOver, levelComplete
let level = 1;
let lives = 3;
let score = 0;
let gearsCollected = 0;
let totalGears = 0;

// Игровые объекты
let player = {
    x: 50,
    y: 300,
    width: 24,
    height: 32,
    velocityX: 0,
    velocityY: 0,
    speed: 5,
    jumpPower: 12,
    isJumping: false,
    color: "#e94560",
};

let platforms = [];
let gears = [];
let hazards = [];
let exit = null;

// Гравитация
const gravity = 0.5;

// Клавиши управления
const keys = {
    right: false,
    left: false,
    up: false,
};

// Загрузка изображений
const tileImages = {};
let imagesLoaded = 0;
const totalImages = 78; // Общее количество изображений

// Список всех изображений
const imageFiles = [
    'tile_0005.png', 'tile_0007.png', 'tile_0008.png', 'tile_0009.png',
    'tile_0010.png', 'tile_0011.png', 'tile_0012.png', 'tile_0013.png',
    'tile_0017.png', 'tile_0018.png', 'tile_0019.png', 'tile_0020.png',
    'tile_0021.png', 'tile_0022.png', 'tile_0023.png', 'tile_0024.png',
    'tile_0025.png', 'tile_0027.png', 'tile_0028.png', 'tile_0033.png',
    'tile_0034.png', 'tile_0035.png', 'tile_0036.png', 'tile_0038.png',
    'tile_0039.png', 'tile_0041.png', 'tile_0042.png', 'tile_0043.png',
    'tile_0044.png', 'tile_0045.png', 'tile_0049.png', 'tile_0050.png',
    'tile_0051.png', 'tile_0052.png', 'tile_0053.png', 'tile_0054.png',
    'tile_0056.png', 'tile_0057.png', 'tile_0058.png', 'tile_0059.png',
    'tile_0060.png', 'tile_0061.png', 'tile_0062.png', 'tile_0063.png',
    'tile_0064.png', 'tile_0065.png', 'tile_0068.png', 'tile_0069.png',
    'tile_0070.png', 'tile_0073.png', 'tile_0074.png', 'tile_0075.png',
    'tile_0077.png', 'tile_0078.png', 'tile_0080.png', 'tile_0081.png',
    'tile_0082.png', 'tile_0083.png', 'tile_0085.png', 'tile_0087.png',
    'tile_0088.png', 'tile_0090.png', 'tile_0094.png', 'tile_0098.png',
    'tile_0100.png', 'tile_0101.png', 'tile_0102.png', 'tile_0104.png',
    'tile_0106.png', 'tile_0109.png'
];

function loadImages() {
    imageFiles.forEach(filename => {
        const img = new Image();
        img.src = `./images/${filename}`;
        img.onload = () => {
            imagesLoaded++;
            if (imagesLoaded === totalImages) {
                console.log("All images loaded successfully");
            }
        };
        img.onerror = () => {
            console.error(`Failed to load image: ${filename}`);
            // Создаем placeholder для отсутствующих изображений
            const placeholder = document.createElement('canvas');
            placeholder.width = 18;
            placeholder.height = 18;
            const ctx = placeholder.getContext('2d');
            ctx.fillStyle = '#ff00ff';
            ctx.fillRect(0, 0, 18, 18);
            ctx.fillStyle = '#000';
            ctx.fillText('?', 5, 12);
            tileImages[filename.replace('.png', '')] = placeholder;
        };
        const key = filename.replace('.png', '').replace('tile_', 'imgId_');
        tileImages[key] = img;
    });
}

// Инициализация уровня
function initLevel() {
    platforms = [];
    gears = [];
    hazards = [];
    gearsCollected = 0;

    // Создание платформ в зависимости от уровня
    if (level === 1) {
        // Платформы для уровня 1
        platforms = [
            { x: 0, y: 480, width: 200, height: 20, color: "#555" },
            { x: 250, y: 430, width: 150, height: 20, color: "#555" },
            { x: 450, y: 380, width: 150, height: 20, color: "#555" },
            { x: 650, y: 330, width: 150, height: 20, color: "#555" },
            { x: 500, y: 280, width: 100, height: 20, color: "#555" },
            { x: 300, y: 280, width: 100, height: 20, color: "#555" },
            { x: 100, y: 330, width: 100, height: 20, color: "#555" },
        ];

        // Шестерёнки для уровня 1
        gears = [
            { x: 100, y: 300, radius: 12, color: "#ffcc00", collected: false },
            { x: 320, y: 250, radius: 12, color: "#ffcc00", collected: false },
            { x: 520, y: 250, radius: 12, color: "#ffcc00", collected: false },
            { x: 700, y: 300, radius: 12, color: "#ffcc00", collected: false },
        ];

        // Опасности для уровня 1
        hazards = [
            {
                x: 400,
                y: 460,
                width: 40,
                height: 20,
                color: "#ff0000",
                type: "saw",
            },
            {
                x: 600,
                y: 410,
                width: 40,
                height: 20,
                color: "#ff0000",
                type: "saw",
            },
        ];

        // Выход
        exit = { x: 750, y: 280, width: 30, height: 50, color: "#00ff00" };
    } else if (level === 2) {
        // Платформы для уровня 2
        platforms = [
            { x: 0, y: 480, width: 150, height: 20, color: "#555" },
            { x: 200, y: 460, width: 100, height: 20, color: "#555" },
            { x: 350, y: 430, width: 100, height: 20, color: "#555" },
            { x: 500, y: 400, width: 100, height: 20, color: "#555" },
            { x: 650, y: 370, width: 150, height: 20, color: "#555" },
            { x: 550, y: 300, width: 100, height: 20, color: "#555" },
            { x: 350, y: 270, width: 100, height: 20, color: "#555" },
            { x: 150, y: 240, width: 100, height: 20, color: "#555" },
        ];

        // Шестерёнки для уровня 2
        gears = [
            { x: 240, y: 430, radius: 12, color: "#ffcc00", collected: false },
            { x: 400, y: 400, radius: 12, color: "#ffcc00", collected: false },
            { x: 600, y: 370, radius: 12, color: "#ffcc00", collected: false },
            { x: 590, y: 270, radius: 12, color: "#ffcc00", collected: false },
            { x: 190, y: 210, radius: 12, color: "#ffcc00", collected: false },
        ];

        // Опасности для уровня 2
        hazards = [
            {
                x: 300,
                y: 440,
                width: 40,
                height: 20,
                color: "#ff0000",
                type: "saw",
            },
            {
                x: 450,
                y: 410,
                width: 40,
                height: 20,
                color: "#ff0000",
                type: "saw",
            },
            {
                x: 700,
                y: 370,
                width: 40,
                height: 20,
                color: "#ff0000",
                type: "saw",
            },
        ];

        // Выход
        exit = { x: 50, y: 200, width: 30, height: 50, color: "#00ff00" };
    }

    // Начальная позиция игрока
    player.x = 50;
    player.y = 300;
    player.velocityX = 0;
    player.velocityY = 0;
    player.isJumping = false;

    totalGears = gears.length;
    updateUI();
}

// Обновление интерфейса
function updateUI() {
    levelDisplay.textContent = level;
    livesDisplay.textContent = lives;
    scoreDisplay.textContent = score;
    gearsDisplay.textContent = `${gearsCollected}/${totalGears}`;
}

// Обработка ввода
document.addEventListener("keydown", (e) => {
    if (gameState !== "playing") return;

    if (e.key === "ArrowRight" || e.key === "d") keys.right = true;
    if (e.key === "ArrowLeft" || e.key === "a") keys.left = true;
    if (
        (e.key === "ArrowUp" || e.key === "w" || e.key === " ") &&
        !player.isJumping
    ) {
        player.velocityY = -player.jumpPower;
        player.isJumping = true;
    }
    if (e.key === "r") resetGame();
});

document.addEventListener("keyup", (e) => {
    if (e.key === "ArrowRight" || e.key === "d") keys.right = false;
    if (e.key === "ArrowLeft" || e.key === "a") keys.left = false;
});

// Движение игрока
function movePlayer() {
    // Горизонтальное движение
    if (keys.right) {
        player.velocityX = player.speed;
    } else if (keys.left) {
        player.velocityX = -player.speed;
    } else {
        player.velocityX = 0;
    }

    // Применение гравитации
    player.velocityY += gravity;

    // Обновление позиции
    player.x += player.velocityX;
    player.y += player.velocityY;

    // Ограничение в пределах экрана
    if (player.x < 0) player.x = 0;
    if (player.x + player.width > canvas.width)
        player.x = canvas.width - player.width;
    if (player.y > canvas.height) {
        playerDie();
    }

    // Проверка столкновений с платформами
    player.isJumping = true;
    for (let platform of platforms) {
        if (
            player.x < platform.x + platform.width &&
            player.x + player.width > platform.x &&
            player.y + player.height > platform.y &&
            player.y + player.height < platform.y + platform.height &&
            player.velocityY > 0
        ) {
            player.y = platform.y - player.height;
            player.velocityY = 0;
            player.isJumping = false;
        }
    }

    // Проверка столкновений с шестерёнками
    for (let gear of gears) {
        if (
            !gear.collected &&
            player.x < gear.x + gear.radius &&
            player.x + player.width > gear.x - gear.radius &&
            player.y < gear.y + gear.radius &&
            player.y + player.height > gear.y - gear.radius
        ) {
            gear.collected = true;
            gearsCollected++;
            score += 100;
            updateUI();
        }
    }

    // Проверка столкновений с опасностями
    for (let hazard of hazards) {
        if (
            player.x < hazard.x + hazard.width &&
            player.x + player.width > hazard.x &&
            player.y < hazard.y + hazard.height &&
            player.y + player.height > hazard.y
        ) {
            playerDie();
        }
    }

    // Проверка достижения выхода
    if (
        exit &&
        player.x < exit.x + exit.width &&
        player.x + player.width > exit.x &&
        player.y < exit.y + exit.height &&
        player.y + player.height > exit.y
    ) {
        if (gearsCollected === totalGears) {
            levelComplete();
        }
    }
}

// Смерть игрока
function playerDie() {
    lives--;
    updateUI();

    if (lives <= 0) {
        gameOver();
    } else {
        // Перезапуск уровня
        player.x = 50;
        player.y = 300;
        player.velocityX = 0;
        player.velocityY = 0;
        player.isJumping = false;

        // Сброс собранных шестерёнок
        gearsCollected = 0;
        for (let gear of gears) {
            gear.collected = false;
        }
        updateUI();
    }
}

// Отрисовка игры
function draw() {
    // Очистка экрана
    ctx.fillStyle = "#162447";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Отрисовка фона (индустриальные элементы)
    drawBackground();

    // Отрисовка платформ
    for (let platform of platforms) {
        ctx.fillStyle = platform.color;
        ctx.fillRect(platform.x, platform.y, platform.width, platform.height);

        // Текстура платформ
        ctx.fillStyle = "#333";
        for (let i = 0; i < platform.width; i += 10) {
            ctx.fillRect(platform.x + i, platform.y, 5, 3);
        }
    }

    // Отрисовка опасностей
    for (let hazard of hazards) {
        ctx.fillStyle = hazard.color;
        if (hazard.type === "saw") {
            // Пила
            ctx.beginPath();
            ctx.arc(
                hazard.x + hazard.width / 2,
                hazard.y + hazard.height / 2,
                hazard.width / 2,
                0,
                Math.PI * 2
            );
            ctx.fill();

            // Зубья пилы
            ctx.fillStyle = "#333";
            for (let i = 0; i < 8; i++) {
                const angle = (i / 8) * Math.PI * 2;
                const x1 =
                    hazard.x +
                    hazard.width / 2 +
                    Math.cos(angle) * (hazard.width / 2 - 2);
                const y1 =
                    hazard.y +
                    hazard.height / 2 +
                    Math.sin(angle) * (hazard.width / 2 - 2);
                const x2 =
                    hazard.x +
                    hazard.width / 2 +
                    Math.cos(angle) * (hazard.width / 2 + 5);
                const y2 =
                    hazard.y +
                    hazard.height / 2 +
                    Math.sin(angle) * (hazard.width / 2 + 5);

                ctx.beginPath();
                ctx.moveTo(
                    hazard.x + hazard.width / 2,
                    hazard.y + hazard.height / 2
                );
                ctx.lineTo(x1, y1);
                ctx.lineTo(x2, y2);
                ctx.closePath();
                ctx.fill();
            }
        } else {
            ctx.fillRect(hazard.x, hazard.y, hazard.width, hazard.height);
        }
    }

    // Отрисовка шестерёнок
    for (let gear of gears) {
        if (!gear.collected) {
            ctx.fillStyle = gear.color;
            ctx.beginPath();
            ctx.arc(gear.x, gear.y, gear.radius, 0, Math.PI * 2);
            ctx.fill();

            // Зубья шестерёнки
            ctx.fillStyle = "#cc9900";
            for (let i = 0; i < 8; i++) {
                const angle = (i / 8) * Math.PI * 2;
                const x1 = gear.x + Math.cos(angle) * (gear.radius - 3);
                const y1 = gear.y + Math.sin(angle) * (gear.radius - 3);
                const x2 = gear.x + Math.cos(angle) * (gear.radius + 3);
                const y2 = gear.y + Math.sin(angle) * (gear.radius + 3);
                const nextAngle = ((i + 0.5) / 8) * Math.PI * 2;
                const x3 = gear.x + Math.cos(nextAngle) * (gear.radius - 3);
                const y3 = gear.y + Math.sin(nextAngle) * (gear.radius - 3);

                ctx.beginPath();
                ctx.moveTo(x1, y1);
                ctx.lineTo(x2, y2);
                ctx.lineTo(x3, y3);
                ctx.closePath();
                ctx.fill();
            }

            // Центр шестерёнки
            ctx.fillStyle = "#996600";
            ctx.beginPath();
            ctx.arc(gear.x, gear.y, 4, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    // Отрисовка выхода
    if (exit) {
        ctx.fillStyle = exit.color;
        ctx.fillRect(exit.x, exit.y, exit.width, exit.height);

        // Дверная ручка
        ctx.fillStyle = "#ccffcc";
        ctx.beginPath();
        ctx.arc(
            exit.x + exit.width - 10,
            exit.y + exit.height / 2,
            4,
            0,
            Math.PI * 2
        );
        ctx.fill();
    }

    // Отрисовка игрока
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.width, player.height);

    // Детали игрока
    ctx.fillStyle = "#b33451";
    // Голова
    ctx.fillRect(player.x + 5, player.y + 5, player.width - 10, 10);
    // Глаза
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(player.x + 8, player.y + 8, 3, 3);
    ctx.fillRect(player.x + player.width - 11, player.y + 8, 3, 3);
}

// Отрисовка фона с индустриальными элементами
function drawBackground() {
    // Трубы
    ctx.fillStyle = "#666";
    ctx.fillRect(100, 100, 200, 20);
    ctx.fillRect(300, 100, 20, 150);
    ctx.fillRect(500, 150, 150, 20);
    ctx.fillRect(650, 150, 20, 100);

    // Окна
    ctx.fillStyle = "#4a9de3";
    for (let i = 0; i < 5; i++) {
        ctx.fillRect(50 + i * 60, 50, 40, 60);
    }

    // Болты на стенах
    ctx.fillStyle = "#999";
    for (let i = 0; i < canvas.width; i += 40) {
        for (let j = 0; j < canvas.height; j += 40) {
            ctx.beginPath();
            ctx.arc(i, j, 2, 0, Math.PI * 2);
            ctx.fill();
        }
    }
}

// Игровой цикл
function gameLoop() {
    if (gameState === "playing") {
        movePlayer();
        draw();
    }
    requestAnimationFrame(gameLoop);
}

// Начало игры
function startGame() {
    gameState = "playing";
    startScreen.classList.add("hidden");
    initLevel();
}

// Завершение уровня
function levelComplete() {
    gameState = "levelComplete";
    levelCompleteScreen.classList.remove("hidden");
    score += 500; // Бонус за завершение уровня
    updateUI();
}

// Конец игры
function gameOver() {
    gameState = "gameOver";
    finalScoreDisplay.textContent = score;
    gameOverScreen.classList.remove("hidden");
}

// Перезапуск игры
function resetGame() {
    gameState = "playing";
    level = 1;
    lives = 3;
    score = 0;
    gearsCollected = 0;
    gameOverScreen.classList.add("hidden");
    levelCompleteScreen.classList.add("hidden");
    initLevel();
}

// Переход на следующий уровень
function nextLevel() {
    level++;
    gameState = "playing";
    levelCompleteScreen.classList.add("hidden");
    initLevel();
}

// Обработчики событий кнопок
startButton.addEventListener("click", startGame);
restartButton.addEventListener("click", resetGame);
nextLevelButton.addEventListener("click", nextLevel);

// Загрузка изображений и запуск игры
loadImages();

// Запуск игрового цикла
gameLoop();

// Обновление интерфейса при загрузке
updateUI();