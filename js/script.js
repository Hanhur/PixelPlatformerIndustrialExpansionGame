// Инициализация игры
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const imgId_0034 = new Image();
imgId_0034.src = "../images/tile_0034.png";

const imgId_0035 = new Image();
imgId_0035.src = "../images/tile_0035.png";

const imgId_0045 = new Image();
imgId_0045.src = "../images/tile_0045.png";

const imgId_0018 = new Image();
imgId_0018.src = "../images/tile_0018.png";

const imgId_0019 = new Image();
imgId_0019.src = "../images/tile_0019.png";

const imgId_0013 = new Image();
imgId_0013.src = "../images/tile_0013.png";

const imgId_0094 = new Image();
imgId_0094.src = "../images/tile_0094.png";

const imgId_0010 = new Image();
imgId_0010.src = "../images/tile_0010.png";

const imgId_0060 = new Image();
imgId_0060.src = "../images/tile_0060.png";

const imgId_0009 = new Image();
imgId_0009.src = "../images/tile_0009.png";

const imgId_0078 = new Image();
imgId_0078.src = "../images/tile_0078.png";

const imgId_0077 = new Image();
imgId_0077.src = "../images/tile_0077.png";

const imgId_0075 = new Image();
imgId_0075.src = "../images/tile_0075.png";

const imgId_0109 = new Image();
imgId_0109.src = "../images/tile_0109.png";

function drawGame()
{
    ctx.drawImage(imgId_0018, 0, 280);
    ctx.drawImage(imgId_0018, 18, 280);
    ctx.drawImage(imgId_0018, 36, 280);
    ctx.drawImage(imgId_0018, 54, 280);
    ctx.drawImage(imgId_0018, 72, 280);
    ctx.drawImage(imgId_0018, 90, 280);
    ctx.drawImage(imgId_0019, 108, 280);
    // =======================================================
    ctx.drawImage(imgId_0034, 0, 298);
    ctx.drawImage(imgId_0034, 18, 298);
    ctx.drawImage(imgId_0034, 36, 298);
    ctx.drawImage(imgId_0034, 54, 298);
    ctx.drawImage(imgId_0034, 72, 298);
    ctx.drawImage(imgId_0034, 90, 298);
    ctx.drawImage(imgId_0035, 108, 298);
    ctx.drawImage(imgId_0109, 126, 298);
    ctx.drawImage(imgId_0077, 144, 298);
    // =======================================================
    ctx.drawImage(imgId_0034, 0, 316);
    ctx.drawImage(imgId_0034, 18, 316);
    ctx.drawImage(imgId_0034, 36, 316);
    ctx.drawImage(imgId_0034, 54, 316);
    ctx.drawImage(imgId_0009, 54, 316);
    ctx.drawImage(imgId_0034, 72, 316);
    ctx.drawImage(imgId_0034, 90, 316);
    ctx.drawImage(imgId_0035, 108, 316);
    ctx.drawImage(imgId_0075, 144, 316);
    // ========================================================
    ctx.drawImage(imgId_0034, 0, 334);
    ctx.drawImage(imgId_0034, 18, 334);
    ctx.drawImage(imgId_0010, 18, 334);
    ctx.drawImage(imgId_0034, 36, 334);
    ctx.drawImage(imgId_0034, 54, 334);
    ctx.drawImage(imgId_0060, 54, 334);
    ctx.drawImage(imgId_0034, 72, 334);
    ctx.drawImage(imgId_0034, 90, 334);
    ctx.drawImage(imgId_0035, 108, 334);
    ctx.drawImage(imgId_0078, 144, 334);
    // ========================================================
    ctx.drawImage(imgId_0019, 72, 352);
    ctx.drawImage(imgId_0034, 90, 352);
    ctx.drawImage(imgId_0035, 108, 352);
    ctx.drawImage(imgId_0013, 126, 352);
    ctx.drawImage(imgId_0094, 144, 352);
    ctx.drawImage(imgId_0013, 162, 352);
    ctx.drawImage(imgId_0013, 180, 352);
    ctx.drawImage(imgId_0013, 198, 352);
    // =======================================================
    ctx.drawImage(imgId_0018, 0, 352);
    ctx.drawImage(imgId_0018, 18, 352);
    ctx.drawImage(imgId_0018, 36, 352);
    ctx.drawImage(imgId_0018, 54, 352);
    // ========================================================
    ctx.drawImage(imgId_0034, 0, 370);
    ctx.drawImage(imgId_0034, 18, 370);
    ctx.drawImage(imgId_0034, 36, 370);
    ctx.drawImage(imgId_0034, 54, 370);
    ctx.drawImage(imgId_0035, 72, 370);
    ctx.drawImage(imgId_0034, 90, 370);
    ctx.drawImage(imgId_0035, 108, 370);
    ctx.drawImage(imgId_0045, 126, 370);
    ctx.drawImage(imgId_0045, 144, 370);
    ctx.drawImage(imgId_0045, 162, 370);
    ctx.drawImage(imgId_0045, 180, 370);
    ctx.drawImage(imgId_0045, 198, 370);
    // =========================================================
    ctx.drawImage(imgId_0034, 0, 388);
    ctx.drawImage(imgId_0034, 18, 388);
    ctx.drawImage(imgId_0034, 36, 388);
    ctx.drawImage(imgId_0034, 54, 388);
    ctx.drawImage(imgId_0035, 72, 388);
    ctx.drawImage(imgId_0034, 90, 388);
    ctx.drawImage(imgId_0035, 108, 388);
    ctx.drawImage(imgId_0045, 126, 388);
    ctx.drawImage(imgId_0045, 144, 388);
    ctx.drawImage(imgId_0045, 162, 388);
    ctx.drawImage(imgId_0045, 180, 388);
    ctx.drawImage(imgId_0045, 198, 388);
    // =========================================================
    ctx.drawImage(imgId_0034, 0, 406);
    ctx.drawImage(imgId_0034, 18, 406);
    ctx.drawImage(imgId_0034, 36, 406);
    ctx.drawImage(imgId_0034, 54, 406);
    ctx.drawImage(imgId_0035, 72, 406);
    ctx.drawImage(imgId_0034, 90, 406);
    ctx.drawImage(imgId_0035, 108, 406);
    ctx.drawImage(imgId_0045, 126, 406);
    ctx.drawImage(imgId_0045, 144, 406);
    ctx.drawImage(imgId_0045, 162, 406);
    ctx.drawImage(imgId_0045, 180, 406);
    ctx.drawImage(imgId_0045, 198, 406);
    // ======================================================
    ctx.drawImage(imgId_0034, 0, 424);
    ctx.drawImage(imgId_0034, 18, 424);
    ctx.drawImage(imgId_0034, 36, 424);
    ctx.drawImage(imgId_0034, 54, 424);
    ctx.drawImage(imgId_0035, 72, 424);
    ctx.drawImage(imgId_0034, 90, 424);
    ctx.drawImage(imgId_0035, 108, 424);
    ctx.drawImage(imgId_0045, 126, 424);
    ctx.drawImage(imgId_0045, 144, 424);
    ctx.drawImage(imgId_0045, 162, 424);
    ctx.drawImage(imgId_0045, 180, 424);
    ctx.drawImage(imgId_0045, 198, 424);
    // ======================================================
    ctx.drawImage(imgId_0034, 0, 442);
    ctx.drawImage(imgId_0034, 18, 442);
    ctx.drawImage(imgId_0034, 36, 442);
    ctx.drawImage(imgId_0034, 54, 442);
    ctx.drawImage(imgId_0035, 72, 442);
    ctx.drawImage(imgId_0034, 90, 442);
    ctx.drawImage(imgId_0035, 108, 442);
    ctx.drawImage(imgId_0045, 126, 442);
    ctx.drawImage(imgId_0045, 144, 442);
    ctx.drawImage(imgId_0045, 162, 442);
    ctx.drawImage(imgId_0045, 180, 442);
    ctx.drawImage(imgId_0045, 198, 442);
    // ======================================================
    ctx.drawImage(imgId_0034, 0, 460);
    ctx.drawImage(imgId_0034, 18, 460);
    ctx.drawImage(imgId_0034, 36, 460);
    ctx.drawImage(imgId_0034, 54, 460);
    ctx.drawImage(imgId_0035, 72, 460);
    ctx.drawImage(imgId_0034, 90, 460);
    ctx.drawImage(imgId_0035, 108, 460);
    ctx.drawImage(imgId_0045, 126, 460);
    ctx.drawImage(imgId_0045, 144, 460);
    ctx.drawImage(imgId_0045, 162, 460);
    ctx.drawImage(imgId_0045, 180, 460);
    ctx.drawImage(imgId_0045, 198, 460);
    // ======================================================
    ctx.drawImage(imgId_0034, 0, 478);
    ctx.drawImage(imgId_0034, 18, 478);
    ctx.drawImage(imgId_0034, 36, 478);
    ctx.drawImage(imgId_0034, 54, 478);
    ctx.drawImage(imgId_0035, 72, 478);
    ctx.drawImage(imgId_0034, 90, 478);
    ctx.drawImage(imgId_0035, 108, 478);
    ctx.drawImage(imgId_0045, 126, 478);
    ctx.drawImage(imgId_0045, 144, 478);
    ctx.drawImage(imgId_0045, 162, 478);
    ctx.drawImage(imgId_0045, 180, 478);
    ctx.drawImage(imgId_0045, 198, 478);
    // ======================================================
    ctx.drawImage(imgId_0034, 0, 496);
    ctx.drawImage(imgId_0034, 18, 496);
    ctx.drawImage(imgId_0034, 36, 496);
    ctx.drawImage(imgId_0034, 54, 496);
    ctx.drawImage(imgId_0035, 72, 496);
    ctx.drawImage(imgId_0034, 90, 496);
    ctx.drawImage(imgId_0035, 108, 496);
    ctx.drawImage(imgId_0045, 126, 496);
    ctx.drawImage(imgId_0045, 144, 496);
    ctx.drawImage(imgId_0045, 162, 496);
    ctx.drawImage(imgId_0045, 180, 496);
    ctx.drawImage(imgId_0045, 198, 496);
}

let game = setInterval(drawGame, 100);








// // Элементы интерфейса
// const startScreen = document.getElementById("startScreen");
// const gameOverScreen = document.getElementById("gameOverScreen");
// const levelCompleteScreen = document.getElementById("levelCompleteScreen");
// const startButton = document.getElementById("startButton");
// const restartButton = document.getElementById("restartButton");
// const nextLevelButton = document.getElementById("nextLevelButton");
// const levelDisplay = document.getElementById("level");
// const livesDisplay = document.getElementById("lives");
// const scoreDisplay = document.getElementById("score");
// const gearsDisplay = document.getElementById("gears");
// const finalScoreDisplay = document.getElementById("finalScore");

// // Игровые переменные
// let gameState = "start"; // start, playing, gameOver, levelComplete
// let level = 1;
// let lives = 3;
// let score = 0;
// let gearsCollected = 0;
// let totalGears = 0;

// // Игровые объекты
// let player = {
//     x: 50,
//     y: 300,
//     width: 24,
//     height: 32,
//     velocityX: 0,
//     velocityY: 0,
//     speed: 5,
//     jumpPower: 12,
//     isJumping: false,
//     color: "#e94560",
// };

// let platforms = [];
// let gears = [];
// let hazards = [];
// let exit = null;

// // Гравитация
// const gravity = 0.5;

// // Клавиши управления
// const keys = {
//     right: false,
//     left: false,
//     up: false,
// };

// // Загрузка изображений
// const tileImages = [];
// let imagesLoaded = 0;
// const totalImages = arrayImagesMap.length;

// function loadImages() {
//     arrayImagesMap.forEach((src, index) => {
//         const img = new Image();
//         img.src = src;
//         img.onload = () => {
//             imagesLoaded++;
//             if (imagesLoaded === totalImages) {
//                 console.log("All images loaded successfully");
//             }
//         };
//         img.onerror = () => {
//             console.error(`Failed to load image: ${src}`);
//         };
//         tileImages[index] = img;
//     });
// }

// // Инициализация уровня
// function initLevel() {
//     platforms = [];
//     gears = [];
//     hazards = [];
//     gearsCollected = 0;

//     // Создание платформ в зависимости от уровня
//     if (level === 1) {
//         // Платформы для уровня 1
//         platforms = [
//             { x: 0, y: 400, width: 200, height: 20, color: "#555" },
//             { x: 250, y: 350, width: 150, height: 20, color: "#555" },
//             { x: 450, y: 300, width: 150, height: 20, color: "#555" },
//             { x: 650, y: 250, width: 150, height: 20, color: "#555" },
//             { x: 500, y: 200, width: 100, height: 20, color: "#555" },
//             { x: 300, y: 200, width: 100, height: 20, color: "#555" },
//             { x: 100, y: 250, width: 100, height: 20, color: "#555" },
//         ];

//         // Шестерёнки для уровня 1
//         gears = [
//             { x: 100, y: 220, radius: 12, color: "#ffcc00", collected: false },
//             { x: 320, y: 170, radius: 12, color: "#ffcc00", collected: false },
//             { x: 520, y: 170, radius: 12, color: "#ffcc00", collected: false },
//             { x: 700, y: 220, radius: 12, color: "#ffcc00", collected: false },
//         ];

//         // Опасности для уровня 1
//         hazards = [
//             {
//                 x: 400,
//                 y: 380,
//                 width: 40,
//                 height: 20,
//                 color: "#ff0000",
//                 type: "saw",
//             },
//             {
//                 x: 600,
//                 y: 330,
//                 width: 40,
//                 height: 20,
//                 color: "#ff0000",
//                 type: "saw",
//             },
//         ];

//         // Выход
//         exit = { x: 750, y: 200, width: 30, height: 50, color: "#00ff00" };
//     } else if (level === 2) {
//         // Платформы для уровня 2
//         platforms = [
//             { x: 0, y: 400, width: 150, height: 20, color: "#555" },
//             { x: 200, y: 380, width: 100, height: 20, color: "#555" },
//             { x: 350, y: 350, width: 100, height: 20, color: "#555" },
//             { x: 500, y: 320, width: 100, height: 20, color: "#555" },
//             { x: 650, y: 290, width: 150, height: 20, color: "#555" },
//             { x: 550, y: 220, width: 100, height: 20, color: "#555" },
//             { x: 350, y: 190, width: 100, height: 20, color: "#555" },
//             { x: 150, y: 160, width: 100, height: 20, color: "#555" },
//         ];

//         // Шестерёнки для уровня 2
//         gears = [
//             { x: 240, y: 350, radius: 12, color: "#ffcc00", collected: false },
//             { x: 400, y: 320, radius: 12, color: "#ffcc00", collected: false },
//             { x: 600, y: 290, radius: 12, color: "#ffcc00", collected: false },
//             { x: 590, y: 190, radius: 12, color: "#ffcc00", collected: false },
//             { x: 190, y: 130, radius: 12, color: "#ffcc00", collected: false },
//         ];

//         // Опасности для уровня 2
//         hazards = [
//             {
//                 x: 300,
//                 y: 360,
//                 width: 40,
//                 height: 20,
//                 color: "#ff0000",
//                 type: "saw",
//             },
//             {
//                 x: 450,
//                 y: 310,
//                 width: 40,
//                 height: 20,
//                 color: "#ff0000",
//                 type: "saw",
//             },
//             {
//                 x: 700,
//                 y: 270,
//                 width: 40,
//                 height: 20,
//                 color: "#ff0000",
//                 type: "saw",
//             },
//         ];

//         // Выход
//         exit = { x: 50, y: 120, width: 30, height: 50, color: "#00ff00" };
//     }

//     // Начальная позиция игрока
//     player.x = 50;
//     player.y = 300;
//     player.velocityX = 0;
//     player.velocityY = 0;
//     player.isJumping = false;

//     totalGears = gears.length;
//     updateUI();
// }

// // Обновление интерфейса
// function updateUI() {
//     levelDisplay.textContent = level;
//     livesDisplay.textContent = lives;
//     scoreDisplay.textContent = score;
//     gearsDisplay.textContent = `${gearsCollected}/${totalGears}`;
// }

// // Обработка ввода
// document.addEventListener("keydown", (e) => {
//     if (gameState !== "playing") return;

//     if (e.key === "ArrowRight" || e.key === "d") keys.right = true;
//     if (e.key === "ArrowLeft" || e.key === "a") keys.left = true;
//     if (
//         (e.key === "ArrowUp" || e.key === "w" || e.key === " ") &&
//         !player.isJumping
//     ) {
//         player.velocityY = -player.jumpPower;
//         player.isJumping = true;
//     }
//     if (e.key === "r") resetGame();
// });

// document.addEventListener("keyup", (e) => {
//     if (e.key === "ArrowRight" || e.key === "d") keys.right = false;
//     if (e.key === "ArrowLeft" || e.key === "a") keys.left = false;
// });

// // Движение игрока
// function movePlayer() {
//     // Горизонтальное движение
//     if (keys.right) {
//         player.velocityX = player.speed;
//     } else if (keys.left) {
//         player.velocityX = -player.speed;
//     } else {
//         player.velocityX = 0;
//     }

//     // Применение гравитации
//     player.velocityY += gravity;

//     // Обновление позиции
//     player.x += player.velocityX;
//     player.y += player.velocityY;

//     // Ограничение в пределах экрана
//     if (player.x < 0) player.x = 0;
//     if (player.x + player.width > canvas.width)
//         player.x = canvas.width - player.width;
//     if (player.y > canvas.height) {
//         playerDie();
//     }

//     // Проверка столкновений с платформами
//     player.isJumping = true;
//     for (let platform of platforms) {
//         if (
//             player.x < platform.x + platform.width &&
//             player.x + player.width > platform.x &&
//             player.y + player.height > platform.y &&
//             player.y + player.height < platform.y + platform.height &&
//             player.velocityY > 0
//         ) {
//             player.y = platform.y - player.height;
//             player.velocityY = 0;
//             player.isJumping = false;
//         }
//     }

//     // Проверка столкновений с шестерёнками
//     for (let gear of gears) {
//         if (
//             !gear.collected &&
//             player.x < gear.x + gear.radius &&
//             player.x + player.width > gear.x - gear.radius &&
//             player.y < gear.y + gear.radius &&
//             player.y + player.height > gear.y - gear.radius
//         ) {
//             gear.collected = true;
//             gearsCollected++;
//             score += 100;
//             updateUI();
//         }
//     }

//     // Проверка столкновений с опасностями
//     for (let hazard of hazards) {
//         if (
//             player.x < hazard.x + hazard.width &&
//             player.x + player.width > hazard.x &&
//             player.y < hazard.y + hazard.height &&
//             player.y + player.height > hazard.y
//         ) {
//             playerDie();
//         }
//     }

//     // Проверка достижения выхода
//     if (
//         exit &&
//         player.x < exit.x + exit.width &&
//         player.x + player.width > exit.x &&
//         player.y < exit.y + exit.height &&
//         player.y + player.height > exit.y
//     ) {
//         if (gearsCollected === totalGears) {
//             levelComplete();
//         }
//     }
// }

// // Смерть игрока
// function playerDie() {
//     lives--;
//     updateUI();

//     if (lives <= 0) {
//         gameOver();
//     } else {
//         // Перезапуск уровня
//         player.x = 50;
//         player.y = 300;
//         player.velocityX = 0;
//         player.velocityY = 0;
//         player.isJumping = false;

//         // Сброс собранных шестерёнок
//         gearsCollected = 0;
//         for (let gear of gears) {
//             gear.collected = false;
//         }
//         updateUI();
//     }
// }

// // Отрисовка игры
// function draw() {
//     // Очистка экрана
//     ctx.fillStyle = "#162447";
//     ctx.fillRect(0, 0, canvas.width, canvas.height);

//     // Отрисовка фона (индустриальные элементы)
//     drawBackground();

//     // Отрисовка платформ
//     for (let platform of platforms) {
//         ctx.fillStyle = platform.color;
//         ctx.fillRect(platform.x, platform.y, platform.width, platform.height);

//         // Текстура платформ
//         ctx.fillStyle = "#333";
//         for (let i = 0; i < platform.width; i += 10) {
//             ctx.fillRect(platform.x + i, platform.y, 5, 3);
//         }
//     }

//     // Отрисовка опасностей
//     for (let hazard of hazards) {
//         ctx.fillStyle = hazard.color;
//         if (hazard.type === "saw") {
//             // Пила
//             ctx.beginPath();
//             ctx.arc(
//                 hazard.x + hazard.width / 2,
//                 hazard.y + hazard.height / 2,
//                 hazard.width / 2,
//                 0,
//                 Math.PI * 2
//             );
//             ctx.fill();

//             // Зубья пилы
//             ctx.fillStyle = "#333";
//             for (let i = 0; i < 8; i++) {
//                 const angle = (i / 8) * Math.PI * 2;
//                 const x1 =
//                     hazard.x +
//                     hazard.width / 2 +
//                     Math.cos(angle) * (hazard.width / 2 - 2);
//                 const y1 =
//                     hazard.y +
//                     hazard.height / 2 +
//                     Math.sin(angle) * (hazard.width / 2 - 2);
//                 const x2 =
//                     hazard.x +
//                     hazard.width / 2 +
//                     Math.cos(angle) * (hazard.width / 2 + 5);
//                 const y2 =
//                     hazard.y +
//                     hazard.height / 2 +
//                     Math.sin(angle) * (hazard.width / 2 + 5);

//                 ctx.beginPath();
//                 ctx.moveTo(
//                     hazard.x + hazard.width / 2,
//                     hazard.y + hazard.height / 2
//                 );
//                 ctx.lineTo(x1, y1);
//                 ctx.lineTo(x2, y2);
//                 ctx.closePath();
//                 ctx.fill();
//             }
//         } else {
//             ctx.fillRect(hazard.x, hazard.y, hazard.width, hazard.height);
//         }
//     }

//     // Отрисовка шестерёнок
//     for (let gear of gears) {
//         if (!gear.collected) {
//             ctx.fillStyle = gear.color;
//             ctx.beginPath();
//             ctx.arc(gear.x, gear.y, gear.radius, 0, Math.PI * 2);
//             ctx.fill();

//             // Зубья шестерёнки
//             ctx.fillStyle = "#cc9900";
//             for (let i = 0; i < 8; i++) {
//                 const angle = (i / 8) * Math.PI * 2;
//                 const x1 = gear.x + Math.cos(angle) * (gear.radius - 3);
//                 const y1 = gear.y + Math.sin(angle) * (gear.radius - 3);
//                 const x2 = gear.x + Math.cos(angle) * (gear.radius + 3);
//                 const y2 = gear.y + Math.sin(angle) * (gear.radius + 3);
//                 const nextAngle = ((i + 0.5) / 8) * Math.PI * 2;
//                 const x3 = gear.x + Math.cos(nextAngle) * (gear.radius - 3);
//                 const y3 = gear.y + Math.sin(nextAngle) * (gear.radius - 3);

//                 ctx.beginPath();
//                 ctx.moveTo(x1, y1);
//                 ctx.lineTo(x2, y2);
//                 ctx.lineTo(x3, y3);
//                 ctx.closePath();
//                 ctx.fill();
//             }

//             // Центр шестерёнки
//             ctx.fillStyle = "#996600";
//             ctx.beginPath();
//             ctx.arc(gear.x, gear.y, 4, 0, Math.PI * 2);
//             ctx.fill();
//         }
//     }

//     // Отрисовка выхода
//     if (exit) {
//         ctx.fillStyle = exit.color;
//         ctx.fillRect(exit.x, exit.y, exit.width, exit.height);

//         // Дверная ручка
//         ctx.fillStyle = "#ccffcc";
//         ctx.beginPath();
//         ctx.arc(
//             exit.x + exit.width - 10,
//             exit.y + exit.height / 2,
//             4,
//             0,
//             Math.PI * 2
//         );
//         ctx.fill();
//     }

//     // Отрисовка игрока
//     ctx.fillStyle = player.color;
//     ctx.fillRect(player.x, player.y, player.width, player.height);

//     // Детали игрока
//     ctx.fillStyle = "#b33451";
//     // Голова
//     ctx.fillRect(player.x + 5, player.y + 5, player.width - 10, 10);
//     // Глаза
//     ctx.fillStyle = "#ffffff";
//     ctx.fillRect(player.x + 8, player.y + 8, 3, 3);
//     ctx.fillRect(player.x + player.width - 11, player.y + 8, 3, 3);
// }

// // Отрисовка фона с индустриальными элементами
// function drawBackground() {
//     // Трубы
//     ctx.fillStyle = "#666";
//     ctx.fillRect(100, 100, 200, 20);
//     ctx.fillRect(300, 100, 20, 150);
//     ctx.fillRect(500, 150, 150, 20);
//     ctx.fillRect(650, 150, 20, 100);

//     // Окна
//     ctx.fillStyle = "#4a9de3";
//     for (let i = 0; i < 5; i++) {
//         ctx.fillRect(50 + i * 60, 50, 40, 60);
//     }

//     // Болты на стенах
//     ctx.fillStyle = "#999";
//     for (let i = 0; i < canvas.width; i += 40) {
//         for (let j = 0; j < canvas.height; j += 40) {
//             ctx.beginPath();
//             ctx.arc(i, j, 2, 0, Math.PI * 2);
//             ctx.fill();
//         }
//     }
// }

// // Игровой цикл
// function gameLoop() {
//     if (gameState === "playing") {
//         movePlayer();
//         draw();
//     }
//     requestAnimationFrame(gameLoop);
// }

// // Начало игры
// function startGame() {
//     gameState = "playing";
//     startScreen.classList.add("hidden");
//     initLevel();
// }

// // Завершение уровня
// function levelComplete() {
//     gameState = "levelComplete";
//     levelCompleteScreen.classList.remove("hidden");
//     score += 500; // Бонус за завершение уровня
//     updateUI();
// }

// // Конец игры
// function gameOver() {
//     gameState = "gameOver";
//     finalScoreDisplay.textContent = score;
//     gameOverScreen.classList.remove("hidden");
// }

// // Перезапуск игры
// function resetGame() {
//     gameState = "playing";
//     level = 1;
//     lives = 3;
//     score = 0;
//     gearsCollected = 0;
//     gameOverScreen.classList.add("hidden");
//     levelCompleteScreen.classList.add("hidden");
//     initLevel();
// }

// // Переход на следующий уровень
// function nextLevel() {
//     level++;
//     gameState = "playing";
//     levelCompleteScreen.classList.add("hidden");
//     initLevel();
// }

// // Обработчики событий кнопок
// startButton.addEventListener("click", startGame);
// restartButton.addEventListener("click", resetGame);
// nextLevelButton.addEventListener("click", nextLevel);

// // Загрузка изображений и запуск игры
// loadImages();

// // Запуск игрового цикла
// gameLoop();

// // Обновление интерфейса при загрузке
// updateUI();