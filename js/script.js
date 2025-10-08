// Инициализация игры
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const imgId_0033 = new Image();
imgId_0033.src = "../images/tile_0033.png";

const imgId_0034 = new Image();
imgId_0034.src = "../images/tile_0034.png";

const imgId_0035 = new Image();
imgId_0035.src = "../images/tile_0035.png";

const imgId_0038 = new Image();
imgId_0038.src = "../images/tile_0038.png";

const imgId_0045 = new Image();
imgId_0045.src = "../images/tile_0045.png";

const imgId_0017 = new Image();
imgId_0017.src = "../images/tile_0017.png";

const imgId_0018 = new Image();
imgId_0018.src = "../images/tile_0018.png";

const imgId_0019 = new Image();
imgId_0019.src = "../images/tile_0019.png";

const imgId_0011 = new Image();
imgId_0011.src = "../images/tile_0011.png";

const imgId_0012 = new Image();
imgId_0012.src = "../images/tile_0012.png";

const imgId_0013 = new Image();
imgId_0013.src = "../images/tile_0013.png";

const imgId_0094 = new Image();
imgId_0094.src = "../images/tile_0094.png";

const imgId_0010 = new Image();
imgId_0010.src = "../images/tile_0010.png";

const imgId_0060 = new Image();
imgId_0060.src = "../images/tile_0060.png";

const imgId_0007 = new Image();
imgId_0007.src = "../images/tile_0007.png";

const imgId_0009 = new Image();
imgId_0009.src = "../images/tile_0009.png";

const imgId_0078 = new Image();
imgId_0078.src = "../images/tile_0078.png";

const imgId_0077 = new Image();
imgId_0077.src = "../images/tile_0077.png";

const imgId_0074 = new Image();
imgId_0074.src = "../images/tile_0074.png";

const imgId_0075 = new Image();
imgId_0075.src = "../images/tile_0075.png";

const imgId_0087 = new Image();
imgId_0087.src = "../images/tile_0087.png";

const imgId_0090 = new Image();
imgId_0090.src = "../images/tile_0090.png";

const imgId_0057 = new Image();
imgId_0057.src = "../images/tile_0057.png";

const imgId_0058 = new Image();
imgId_0058.src = "../images/tile_0058.png";

const imgId_0104 = new Image();
imgId_0104.src = "../images/tile_0104.png";

const imgId_0109 = new Image();
imgId_0109.src = "../images/tile_0109.png";

const imgId_0041 = new Image();
imgId_0041.src = "../images/tile_0041.png";

const imgId_0043 = new Image();
imgId_0043.src = "../images/tile_0043.png";

const imgId_0051 = new Image();
imgId_0051.src = "../images/tile_0051.png";

const imgId_0050 = new Image();
imgId_0050.src = "../images/tile_0050.png";

const imgId_0052 = new Image();
imgId_0052.src = "../images/tile_0052.png";

const imgId_0053 = new Image();
imgId_0053.src = "../images/tile_0053.png";

const imgId_0020 = new Image();
imgId_0020.src = "../images/tile_0020.png";

const imgId_0022 = new Image();
imgId_0022.src = "../images/tile_0022.png";

const imgId_0023 = new Image();
imgId_0023.src = "../images/tile_0023.png";

const imgId_0025 = new Image();
imgId_0025.src = "../images/tile_0025.png";

const imgId_0028 = new Image();
imgId_0028.src = "../images/tile_0028.png";

const imgId_0049 = new Image();
imgId_0049.src = "../images/tile_0049.png";

const imgId_0073 = new Image();
imgId_0073.src = "../images/tile_0073.png";

const imgId_0042 = new Image();
imgId_0042.src = "../images/tile_0042.png";

const imgId_0098 = new Image();
imgId_0098.src = "../images/tile_0098.png";

const imgId_0062 = new Image();
imgId_0062.src = "../images/tile_0062.png";

const imgId_0063 = new Image();
imgId_0063.src = "../images/tile_0063.png";

const imgId_0039 = new Image();
imgId_0039.src = "../images/tile_0039.png";

const imgId_0068 = new Image();
imgId_0068.src = "../images/tile_0068.png";

const imgId_0005 = new Image();
imgId_0005.src = "../images/tile_0005.png";

const imgId_0008 = new Image();
imgId_0008.src = "../images/tile_0008.png";

const imgId_0083 = new Image();
imgId_0083.src = "../images/tile_0083.png";

const imgId_0056 = new Image();
imgId_0056.src = "../images/tile_0056.png";

const imgId_0024 = new Image();
imgId_0024.src = "../images/tile_0024.png";

const imgId_0081 = new Image();
imgId_0081.src = "../images/tile_0081.png";

const imgId_0082 = new Image();
imgId_0082.src = "../images/tile_0082.png";

function drawGame()
{
    ctx.drawImage(imgId_0012, 162, 174);
    ctx.drawImage(imgId_0041, 346, 174);
    ctx.drawImage(imgId_0060, 430, 174);
    // ========================================================
    ctx.drawImage(imgId_0041, 18, 192);
    ctx.drawImage(imgId_0028, 162, 192);
    ctx.drawImage(imgId_0020, 274, 192);
    ctx.drawImage(imgId_0005, 292, 192);
    ctx.drawImage(imgId_0005, 310, 192);
    ctx.drawImage(imgId_0005, 328, 192);
    ctx.drawImage(imgId_0005, 346, 192);
    ctx.drawImage(imgId_0005, 364, 192);
    ctx.drawImage(imgId_0005, 382, 192);
    ctx.drawImage(imgId_0038, 400, 192);
    ctx.drawImage(imgId_0005, 418, 192);
    ctx.drawImage(imgId_0005, 436, 192);
    // =========================================================
    ctx.drawImage(imgId_0087, 0, 210);
    ctx.drawImage(imgId_0104, 18, 210);
    ctx.drawImage(imgId_0090, 36, 210);
    ctx.drawImage(imgId_0011, 72, 210);
    ctx.drawImage(imgId_0063, 144, 210);
    ctx.drawImage(imgId_0062, 162, 210);
    ctx.drawImage(imgId_0063, 180, 210);
    ctx.drawImage(imgId_0008, 318, 210);
    ctx.drawImage(imgId_0052, 400, 210);
    ctx.drawImage(imgId_0082, 382, 210);
    ctx.drawImage(imgId_0081, 418, 210);
    // ========================================================
    ctx.drawImage(imgId_0075, 18, 226);
    ctx.drawImage(imgId_0043, 72, 226);
    ctx.drawImage(imgId_0057, 108, 226);
    ctx.drawImage(imgId_0007, 180, 226);
    ctx.drawImage(imgId_0024, 318, 226);
    ctx.drawImage(imgId_0052, 400, 226);
    // ========================================================
    ctx.drawImage(imgId_0075, 18, 244);
    ctx.drawImage(imgId_0043, 72, 244);
    ctx.drawImage(imgId_0058, 108, 244);
    ctx.drawImage(imgId_0023, 180, 244);
    ctx.drawImage(imgId_0042, 242, 244);
    ctx.drawImage(imgId_0024, 318, 244);
    ctx.drawImage(imgId_0052, 400, 244);
    ctx.drawImage(imgId_0012, 702, 244);
    // ========================================================
    ctx.drawImage(imgId_0075, 18, 262);
    ctx.drawImage(imgId_0043, 72, 262);
    ctx.drawImage(imgId_0074, 108, 262);
    ctx.drawImage(imgId_0039, 180, 262);
    ctx.drawImage(imgId_0073, 242, 262);
    ctx.drawImage(imgId_0083, 318, 262);
    ctx.drawImage(imgId_0052, 400, 262);
    ctx.drawImage(imgId_0028, 702, 262);
    ctx.drawImage(imgId_0098, 900, 262);
    // ========================================================
    ctx.drawImage(imgId_0017, 0, 280);
    ctx.drawImage(imgId_0018, 18, 280);
    ctx.drawImage(imgId_0018, 36, 280);
    ctx.drawImage(imgId_0018, 54, 280);
    ctx.drawImage(imgId_0018, 72, 280);
    ctx.drawImage(imgId_0018, 90, 280);
    ctx.drawImage(imgId_0019, 108, 280);
    ctx.drawImage(imgId_0058, 242, 280);
    ctx.drawImage(imgId_0052, 400, 280);
    ctx.drawImage(imgId_0017, 702, 280);
    ctx.drawImage(imgId_0018, 720, 280);
    ctx.drawImage(imgId_0018, 738, 280);
    ctx.drawImage(imgId_0018, 756, 280);
    ctx.drawImage(imgId_0018, 774, 280);
    ctx.drawImage(imgId_0018, 792, 280);
    ctx.drawImage(imgId_0018, 810, 280);
    ctx.drawImage(imgId_0018, 828, 280);
    ctx.drawImage(imgId_0018, 846, 280);
    ctx.drawImage(imgId_0018, 864, 280);
    ctx.drawImage(imgId_0018, 882, 280);
    ctx.drawImage(imgId_0019, 900, 280);
    // =======================================================
    ctx.drawImage(imgId_0033, 0, 298);
    ctx.drawImage(imgId_0034, 18, 298);
    ctx.drawImage(imgId_0034, 36, 298);
    ctx.drawImage(imgId_0034, 54, 298);
    ctx.drawImage(imgId_0034, 72, 298);
    ctx.drawImage(imgId_0034, 90, 298);
    ctx.drawImage(imgId_0035, 108, 298);
    ctx.drawImage(imgId_0109, 126, 298);
    ctx.drawImage(imgId_0077, 144, 298);
    ctx.drawImage(imgId_0074, 242, 298);
    ctx.drawImage(imgId_0025, 270, 298);
    ctx.drawImage(imgId_0052, 400, 298);
    ctx.drawImage(imgId_0033, 702, 298);
    ctx.drawImage(imgId_0034, 720, 298);
    ctx.drawImage(imgId_0034, 738, 298);
    ctx.drawImage(imgId_0034, 756, 298);
    ctx.drawImage(imgId_0034, 774, 298);
    ctx.drawImage(imgId_0034, 792, 298);
    ctx.drawImage(imgId_0034, 810, 298);
    ctx.drawImage(imgId_0034, 828, 298);
    ctx.drawImage(imgId_0034, 846, 298);
    ctx.drawImage(imgId_0034, 864, 298);
    ctx.drawImage(imgId_0034, 882, 298);
    ctx.drawImage(imgId_0035, 900, 298);
    // =======================================================
    ctx.drawImage(imgId_0033, 0, 316);
    ctx.drawImage(imgId_0034, 18, 316);
    ctx.drawImage(imgId_0034, 36, 316);
    ctx.drawImage(imgId_0034, 54, 316);
    ctx.drawImage(imgId_0009, 54, 316);
    ctx.drawImage(imgId_0034, 72, 316);
    ctx.drawImage(imgId_0034, 90, 316);
    ctx.drawImage(imgId_0035, 108, 316);
    ctx.drawImage(imgId_0075, 144, 316);
    ctx.drawImage(imgId_0017, 216, 316);
    ctx.drawImage(imgId_0018, 234, 316);
    ctx.drawImage(imgId_0018, 252, 316);
    ctx.drawImage(imgId_0019, 270, 316);
    ctx.drawImage(imgId_0052, 400, 316);
    ctx.drawImage(imgId_0033, 702, 316);
    ctx.drawImage(imgId_0034, 720, 316);
    ctx.drawImage(imgId_0034, 738, 316);
    ctx.drawImage(imgId_0034, 756, 316);
    ctx.drawImage(imgId_0034, 774, 316);
    ctx.drawImage(imgId_0034, 792, 316);
    ctx.drawImage(imgId_0034, 810, 316);
    ctx.drawImage(imgId_0034, 828, 316);
    ctx.drawImage(imgId_0034, 846, 316);
    ctx.drawImage(imgId_0034, 864, 316);
    ctx.drawImage(imgId_0034, 882, 316);
    ctx.drawImage(imgId_0035, 900, 316);
    // ========================================================
    ctx.drawImage(imgId_0033, 0, 334);
    ctx.drawImage(imgId_0034, 18, 334);
    ctx.drawImage(imgId_0010, 18, 334);
    ctx.drawImage(imgId_0034, 36, 334);
    ctx.drawImage(imgId_0034, 54, 334);
    ctx.drawImage(imgId_0060, 54, 334);
    ctx.drawImage(imgId_0034, 72, 334);
    ctx.drawImage(imgId_0034, 90, 334);
    ctx.drawImage(imgId_0035, 108, 334);
    ctx.drawImage(imgId_0078, 144, 334);
    ctx.drawImage(imgId_0033, 216, 334);
    ctx.drawImage(imgId_0034, 234, 334);
    ctx.drawImage(imgId_0034, 252, 334);
    ctx.drawImage(imgId_0035, 270, 334);
    ctx.drawImage(imgId_0052, 400, 334);
    ctx.drawImage(imgId_0033, 702, 334);
    ctx.drawImage(imgId_0034, 720, 334);
    ctx.drawImage(imgId_0034, 738, 334);
    ctx.drawImage(imgId_0034, 756, 334);
    ctx.drawImage(imgId_0017, 774, 334);
    ctx.drawImage(imgId_0018, 792, 334);
    ctx.drawImage(imgId_0018, 810, 334);
    ctx.drawImage(imgId_0018, 828, 334);
    ctx.drawImage(imgId_0018, 846, 334);
    ctx.drawImage(imgId_0018, 864, 334);
    ctx.drawImage(imgId_0018, 882, 334);
    ctx.drawImage(imgId_0019, 900, 334);
    // ========================================================
    ctx.drawImage(imgId_0019, 72, 352);
    ctx.drawImage(imgId_0034, 90, 352);
    ctx.drawImage(imgId_0035, 108, 352);
    ctx.drawImage(imgId_0013, 126, 352);
    ctx.drawImage(imgId_0094, 144, 352);
    ctx.drawImage(imgId_0013, 162, 352);
    ctx.drawImage(imgId_0013, 180, 352);
    ctx.drawImage(imgId_0013, 198, 352);
    ctx.drawImage(imgId_0068, 400, 352);
    // =======================================================
    ctx.drawImage(imgId_0017, 0, 352);
    ctx.drawImage(imgId_0018, 18, 352);
    ctx.drawImage(imgId_0018, 36, 352);
    ctx.drawImage(imgId_0018, 54, 352);
    ctx.drawImage(imgId_0033, 216, 352);
    ctx.drawImage(imgId_0034, 234, 352);
    ctx.drawImage(imgId_0034, 252, 352);
    ctx.drawImage(imgId_0035, 270, 352);
    ctx.drawImage(imgId_0033, 702, 352);
    ctx.drawImage(imgId_0034, 720, 352);
    ctx.drawImage(imgId_0034, 738, 352);
    ctx.drawImage(imgId_0034, 756, 352);
    ctx.drawImage(imgId_0033, 774, 352);
    ctx.drawImage(imgId_0034, 792, 352);
    ctx.drawImage(imgId_0034, 810, 352);
    ctx.drawImage(imgId_0034, 828, 352);
    ctx.drawImage(imgId_0034, 846, 352);
    ctx.drawImage(imgId_0034, 864, 352);
    ctx.drawImage(imgId_0034, 882, 352);
    ctx.drawImage(imgId_0035, 900, 352);
    // ========================================================
    ctx.drawImage(imgId_0033, 0, 370);
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
    ctx.drawImage(imgId_0033, 216, 370);
    ctx.drawImage(imgId_0034, 234, 370);
    ctx.drawImage(imgId_0034, 252, 370);
    ctx.drawImage(imgId_0035, 270, 370);
    ctx.drawImage(imgId_0017, 360, 370);
    ctx.drawImage(imgId_0018, 378, 370);
    ctx.drawImage(imgId_0018, 396, 370);
    ctx.drawImage(imgId_0018, 414, 370);
    ctx.drawImage(imgId_0018, 432, 370);
    ctx.drawImage(imgId_0018, 450, 370);
    ctx.drawImage(imgId_0018, 468, 370);
    ctx.drawImage(imgId_0018, 486, 370);
    ctx.drawImage(imgId_0018, 504, 370);
    ctx.drawImage(imgId_0018, 522, 370);
    ctx.drawImage(imgId_0018, 540, 370);
    ctx.drawImage(imgId_0018, 558, 370);
    ctx.drawImage(imgId_0018, 576, 370);
    ctx.drawImage(imgId_0018, 594, 370);
    ctx.drawImage(imgId_0018, 612, 370);
    ctx.drawImage(imgId_0018, 630, 370);
    ctx.drawImage(imgId_0019, 648, 370);
    ctx.drawImage(imgId_0033, 702, 370);
    ctx.drawImage(imgId_0034, 720, 370);
    ctx.drawImage(imgId_0034, 738, 370);
    ctx.drawImage(imgId_0034, 756, 370);
    ctx.drawImage(imgId_0033, 774, 370);
    ctx.drawImage(imgId_0034, 792, 370);
    ctx.drawImage(imgId_0034, 810, 370);
    ctx.drawImage(imgId_0034, 828, 370);
    ctx.drawImage(imgId_0034, 846, 370);
    ctx.drawImage(imgId_0034, 864, 370);
    ctx.drawImage(imgId_0034, 882, 370);
    ctx.drawImage(imgId_0035, 900, 370);
    // =========================================================
    ctx.drawImage(imgId_0033, 0, 388);
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
    ctx.drawImage(imgId_0020, 180, 388);
    ctx.drawImage(imgId_0045, 198, 388);
    ctx.drawImage(imgId_0038, 198, 388);
    ctx.drawImage(imgId_0033, 216, 388);
    ctx.drawImage(imgId_0022, 216, 388);
    ctx.drawImage(imgId_0034, 234, 388);
    ctx.drawImage(imgId_0034, 252, 388);
    ctx.drawImage(imgId_0035, 270, 388);
    ctx.drawImage(imgId_0033, 360, 388);
    ctx.drawImage(imgId_0034, 378, 388);
    ctx.drawImage(imgId_0034, 396, 388);
    ctx.drawImage(imgId_0034, 414, 388);
    ctx.drawImage(imgId_0034, 432, 388);
    ctx.drawImage(imgId_0034, 450, 388);
    ctx.drawImage(imgId_0034, 468, 388);
    ctx.drawImage(imgId_0034, 486, 388);
    ctx.drawImage(imgId_0034, 504, 388);
    ctx.drawImage(imgId_0009, 504, 388);
    ctx.drawImage(imgId_0034, 522, 388);
    ctx.drawImage(imgId_0034, 540, 388);
    ctx.drawImage(imgId_0034, 558, 388);
    ctx.drawImage(imgId_0034, 576, 388);
    ctx.drawImage(imgId_0034, 594, 388);
    ctx.drawImage(imgId_0034, 612, 388);
    ctx.drawImage(imgId_0034, 630, 388);
    ctx.drawImage(imgId_0035, 648, 388);
    ctx.drawImage(imgId_0033, 702, 388);
    ctx.drawImage(imgId_0034, 720, 388);
    ctx.drawImage(imgId_0034, 738, 388);
    ctx.drawImage(imgId_0034, 756, 388);
    ctx.drawImage(imgId_0033, 774, 388);
    ctx.drawImage(imgId_0034, 792, 388);
    ctx.drawImage(imgId_0034, 810, 388);
    ctx.drawImage(imgId_0034, 828, 388);
    ctx.drawImage(imgId_0034, 846, 388);
    ctx.drawImage(imgId_0034, 864, 388);
    ctx.drawImage(imgId_0034, 882, 388);
    ctx.drawImage(imgId_0035, 900, 388);
    // =========================================================
    ctx.drawImage(imgId_0033, 0, 406);
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
    ctx.drawImage(imgId_0052, 198, 406);
    ctx.drawImage(imgId_0033, 216, 406);
    ctx.drawImage(imgId_0034, 234, 406);
    ctx.drawImage(imgId_0034, 252, 406);
    ctx.drawImage(imgId_0035, 270, 406);
    ctx.drawImage(imgId_0013, 288, 406);
    ctx.drawImage(imgId_0013, 306, 406);
    ctx.drawImage(imgId_0013, 324, 406);
    ctx.drawImage(imgId_0013, 342, 406);
    ctx.drawImage(imgId_0033, 360, 406);
    ctx.drawImage(imgId_0034, 378, 406);
    ctx.drawImage(imgId_0034, 396, 406);
    ctx.drawImage(imgId_0034, 414, 406);
    ctx.drawImage(imgId_0017, 432, 406);
    ctx.drawImage(imgId_0018, 450, 406);
    ctx.drawImage(imgId_0018, 468, 406);
    ctx.drawImage(imgId_0018, 486, 406);
    ctx.drawImage(imgId_0019, 504, 406);
    ctx.drawImage(imgId_0013, 522, 406);
    ctx.drawImage(imgId_0013, 540, 406);
    ctx.drawImage(imgId_0013, 558, 406);
    ctx.drawImage(imgId_0013, 576, 406);
    ctx.drawImage(imgId_0013, 594, 406);
    ctx.drawImage(imgId_0013, 612, 406);
    ctx.drawImage(imgId_0013, 630, 406);
    ctx.drawImage(imgId_0013, 648, 406);
    ctx.drawImage(imgId_0013, 666, 406);
    ctx.drawImage(imgId_0013, 684, 406);
    ctx.drawImage(imgId_0033, 702, 406);
    ctx.drawImage(imgId_0034, 720, 406);
    ctx.drawImage(imgId_0034, 738, 406);
    ctx.drawImage(imgId_0034, 756, 406);
    ctx.drawImage(imgId_0033, 774, 406);
    ctx.drawImage(imgId_0034, 792, 406);
    ctx.drawImage(imgId_0034, 810, 406);
    ctx.drawImage(imgId_0034, 828, 406);
    ctx.drawImage(imgId_0034, 846, 406);
    ctx.drawImage(imgId_0034, 864, 406);
    ctx.drawImage(imgId_0034, 882, 406);
    ctx.drawImage(imgId_0035, 900, 406);
    // ======================================================
    ctx.drawImage(imgId_0033, 0, 424);
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
    ctx.drawImage(imgId_0052, 198, 424);
    ctx.drawImage(imgId_0033, 216, 424);
    ctx.drawImage(imgId_0034, 234, 424);
    ctx.drawImage(imgId_0034, 252, 424);
    ctx.drawImage(imgId_0035, 270, 424);
    ctx.drawImage(imgId_0045, 288, 424);
    ctx.drawImage(imgId_0045, 306, 424);
    ctx.drawImage(imgId_0045, 324, 424);
    ctx.drawImage(imgId_0045, 342, 424);
    ctx.drawImage(imgId_0033, 360, 424);
    ctx.drawImage(imgId_0034, 378, 424);
    ctx.drawImage(imgId_0034, 396, 424);
    ctx.drawImage(imgId_0034, 414, 424);
    ctx.drawImage(imgId_0033, 432, 424);
    ctx.drawImage(imgId_0034, 450, 424);
    ctx.drawImage(imgId_0034, 468, 424);
    ctx.drawImage(imgId_0034, 486, 424);
    ctx.drawImage(imgId_0035, 504, 424);
    ctx.drawImage(imgId_0045, 522, 424);
    ctx.drawImage(imgId_0045, 540, 424);
    ctx.drawImage(imgId_0045, 558, 424);
    ctx.drawImage(imgId_0045, 576, 424);
    ctx.drawImage(imgId_0045, 594, 424);
    ctx.drawImage(imgId_0045, 612, 424);
    ctx.drawImage(imgId_0045, 630, 424);
    ctx.drawImage(imgId_0045, 648, 424);
    ctx.drawImage(imgId_0045, 666, 424);
    ctx.drawImage(imgId_0045, 684, 424);
    ctx.drawImage(imgId_0033, 702, 424);
    ctx.drawImage(imgId_0034, 720, 424);
    ctx.drawImage(imgId_0034, 738, 424);
    ctx.drawImage(imgId_0034, 756, 424);
    ctx.drawImage(imgId_0033, 774, 424);
    ctx.drawImage(imgId_0034, 792, 424);
    ctx.drawImage(imgId_0034, 810, 424);
    ctx.drawImage(imgId_0034, 828, 424);
    ctx.drawImage(imgId_0034, 846, 424);
    ctx.drawImage(imgId_0034, 864, 424);
    ctx.drawImage(imgId_0034, 882, 424);
    ctx.drawImage(imgId_0035, 900, 424);
    // ======================================================
    ctx.drawImage(imgId_0033, 0, 442);
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
    ctx.drawImage(imgId_0053, 198, 442);
    ctx.drawImage(imgId_0033, 216, 442);
    ctx.drawImage(imgId_0034, 234, 442);
    ctx.drawImage(imgId_0034, 252, 442);
    ctx.drawImage(imgId_0035, 270, 442);
    ctx.drawImage(imgId_0045, 288, 442);
    ctx.drawImage(imgId_0045, 306, 442);
    ctx.drawImage(imgId_0045, 324, 442);
    ctx.drawImage(imgId_0045, 342, 442);
    ctx.drawImage(imgId_0033, 360, 442);
    ctx.drawImage(imgId_0034, 378, 442);
    ctx.drawImage(imgId_0034, 396, 442);
    ctx.drawImage(imgId_0034, 414, 442);
    ctx.drawImage(imgId_0033, 432, 442);
    ctx.drawImage(imgId_0034, 450, 442);
    ctx.drawImage(imgId_0034, 468, 442);
    ctx.drawImage(imgId_0034, 486, 442);
    ctx.drawImage(imgId_0035, 504, 442);
    ctx.drawImage(imgId_0045, 522, 442);
    ctx.drawImage(imgId_0045, 540, 442);
    ctx.drawImage(imgId_0045, 558, 442);
    ctx.drawImage(imgId_0045, 576, 442);
    ctx.drawImage(imgId_0045, 594, 442);
    ctx.drawImage(imgId_0045, 612, 442);
    ctx.drawImage(imgId_0045, 630, 442);
    ctx.drawImage(imgId_0045, 648, 442);
    ctx.drawImage(imgId_0045, 666, 442);
    ctx.drawImage(imgId_0045, 684, 442);
    ctx.drawImage(imgId_0033, 702, 442);
    ctx.drawImage(imgId_0034, 720, 442);
    ctx.drawImage(imgId_0034, 738, 442);
    ctx.drawImage(imgId_0034, 756, 442);
    ctx.drawImage(imgId_0033, 774, 442);
    ctx.drawImage(imgId_0034, 792, 442);
    ctx.drawImage(imgId_0034, 810, 442);
    ctx.drawImage(imgId_0034, 828, 442);
    ctx.drawImage(imgId_0034, 846, 442);
    ctx.drawImage(imgId_0034, 864, 442);
    ctx.drawImage(imgId_0034, 882, 442);
    ctx.drawImage(imgId_0035, 900, 442);
    // ======================================================
    ctx.drawImage(imgId_0033, 0, 460);
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
    ctx.drawImage(imgId_0052, 198, 460);
    ctx.drawImage(imgId_0033, 216, 460);
    ctx.drawImage(imgId_0034, 234, 460);
    ctx.drawImage(imgId_0034, 252, 460);
    ctx.drawImage(imgId_0035, 270, 460);
    ctx.drawImage(imgId_0045, 288, 460);
    ctx.drawImage(imgId_0045, 306, 460);
    ctx.drawImage(imgId_0045, 324, 460);
    ctx.drawImage(imgId_0045, 342, 460);
    ctx.drawImage(imgId_0033, 360, 460);
    ctx.drawImage(imgId_0034, 378, 460);
    ctx.drawImage(imgId_0034, 396, 460);
    ctx.drawImage(imgId_0034, 414, 460);
    ctx.drawImage(imgId_0033, 432, 460);
    ctx.drawImage(imgId_0034, 450, 460);
    ctx.drawImage(imgId_0034, 468, 460);
    ctx.drawImage(imgId_0034, 486, 460);
    ctx.drawImage(imgId_0035, 504, 460);
    ctx.drawImage(imgId_0045, 522, 460);
    ctx.drawImage(imgId_0045, 540, 460);
    ctx.drawImage(imgId_0045, 558, 460);
    ctx.drawImage(imgId_0045, 576, 460);
    ctx.drawImage(imgId_0045, 594, 460);
    ctx.drawImage(imgId_0045, 612, 460);
    ctx.drawImage(imgId_0045, 630, 460);
    ctx.drawImage(imgId_0045, 648, 460);
    ctx.drawImage(imgId_0045, 666, 460);
    ctx.drawImage(imgId_0045, 684, 460);
    ctx.drawImage(imgId_0033, 702, 460);
    ctx.drawImage(imgId_0034, 720, 460);
    ctx.drawImage(imgId_0034, 738, 460);
    ctx.drawImage(imgId_0034, 756, 460);
    ctx.drawImage(imgId_0033, 774, 460);
    ctx.drawImage(imgId_0034, 792, 460);
    ctx.drawImage(imgId_0034, 810, 460);
    ctx.drawImage(imgId_0034, 828, 460);
    ctx.drawImage(imgId_0034, 846, 460);
    ctx.drawImage(imgId_0034, 864, 460);
    ctx.drawImage(imgId_0034, 882, 460);
    ctx.drawImage(imgId_0035, 900, 460);
    // ======================================================
    ctx.drawImage(imgId_0033, 0, 478);
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
    ctx.drawImage(imgId_0052, 198, 478);
    ctx.drawImage(imgId_0033, 216, 478);
    ctx.drawImage(imgId_0034, 234, 478);
    ctx.drawImage(imgId_0034, 252, 478);
    ctx.drawImage(imgId_0035, 270, 478);
    ctx.drawImage(imgId_0045, 288, 478);
    ctx.drawImage(imgId_0045, 306, 478);
    ctx.drawImage(imgId_0045, 324, 478);
    ctx.drawImage(imgId_0045, 342, 478);
    ctx.drawImage(imgId_0033, 360, 478);
    ctx.drawImage(imgId_0034, 378, 478);
    ctx.drawImage(imgId_0034, 396, 478);
    ctx.drawImage(imgId_0034, 414, 478);
    ctx.drawImage(imgId_0033, 432, 478);
    ctx.drawImage(imgId_0034, 450, 478);
    ctx.drawImage(imgId_0034, 468, 478);
    ctx.drawImage(imgId_0034, 486, 478);
    ctx.drawImage(imgId_0035, 504, 478);
    ctx.drawImage(imgId_0045, 522, 478);
    ctx.drawImage(imgId_0045, 540, 478);
    ctx.drawImage(imgId_0045, 558, 478);
    ctx.drawImage(imgId_0045, 576, 478);
    ctx.drawImage(imgId_0045, 594, 478);
    ctx.drawImage(imgId_0045, 612, 478);
    ctx.drawImage(imgId_0045, 630, 478);
    ctx.drawImage(imgId_0045, 648, 478);
    ctx.drawImage(imgId_0045, 666, 478);
    ctx.drawImage(imgId_0045, 684, 478);
    ctx.drawImage(imgId_0033, 702, 478);
    ctx.drawImage(imgId_0034, 720, 478);
    ctx.drawImage(imgId_0034, 738, 478);
    ctx.drawImage(imgId_0034, 756, 478);
    ctx.drawImage(imgId_0033, 774, 478);
    ctx.drawImage(imgId_0034, 792, 478);
    ctx.drawImage(imgId_0034, 810, 478);
    ctx.drawImage(imgId_0034, 828, 478);
    ctx.drawImage(imgId_0034, 846, 478);
    ctx.drawImage(imgId_0034, 864, 478);
    ctx.drawImage(imgId_0034, 882, 478);
    ctx.drawImage(imgId_0035, 900, 478);
    // ======================================================
    ctx.drawImage(imgId_0049, 0, 496);
    ctx.drawImage(imgId_0050, 18, 496);
    ctx.drawImage(imgId_0050, 36, 496);
    ctx.drawImage(imgId_0050, 54, 496);
    ctx.drawImage(imgId_0051, 72, 496);
    ctx.drawImage(imgId_0050, 90, 496);
    ctx.drawImage(imgId_0051, 108, 496);
    ctx.drawImage(imgId_0045, 126, 496);
    ctx.drawImage(imgId_0045, 144, 496);
    ctx.drawImage(imgId_0045, 162, 496);
    ctx.drawImage(imgId_0045, 180, 496);
    ctx.drawImage(imgId_0045, 198, 496);
    ctx.drawImage(imgId_0052, 198, 496);
    ctx.drawImage(imgId_0049, 216, 496);
    ctx.drawImage(imgId_0050, 234, 496);
    ctx.drawImage(imgId_0050, 252, 496);
    ctx.drawImage(imgId_0051, 270, 496);
    ctx.drawImage(imgId_0045, 288, 496);
    ctx.drawImage(imgId_0045, 306, 496);
    ctx.drawImage(imgId_0045, 324, 496);
    ctx.drawImage(imgId_0045, 342, 496);
    ctx.drawImage(imgId_0049, 360, 496);
    ctx.drawImage(imgId_0050, 378, 496);
    ctx.drawImage(imgId_0050, 396, 496);
    ctx.drawImage(imgId_0050, 414, 496);
    ctx.drawImage(imgId_0049, 432, 496);
    ctx.drawImage(imgId_0050, 450, 496);
    ctx.drawImage(imgId_0050, 468, 496);
    ctx.drawImage(imgId_0050, 486, 496);
    ctx.drawImage(imgId_0051, 504, 496);
    ctx.drawImage(imgId_0045, 522, 496);
    ctx.drawImage(imgId_0045, 540, 496);
    ctx.drawImage(imgId_0045, 558, 496);
    ctx.drawImage(imgId_0045, 576, 496);
    ctx.drawImage(imgId_0045, 594, 496);
    ctx.drawImage(imgId_0045, 612, 496);
    ctx.drawImage(imgId_0045, 630, 496);
    ctx.drawImage(imgId_0045, 648, 496);
    ctx.drawImage(imgId_0045, 666, 496);
    ctx.drawImage(imgId_0045, 684, 496);
    ctx.drawImage(imgId_0049, 702, 496);
    ctx.drawImage(imgId_0050, 720, 496);
    ctx.drawImage(imgId_0050, 738, 496);
    ctx.drawImage(imgId_0050, 756, 496);
    ctx.drawImage(imgId_0049, 774, 496);
    ctx.drawImage(imgId_0050, 792, 496);
    ctx.drawImage(imgId_0050, 810, 496);
    ctx.drawImage(imgId_0050, 828, 496);
    ctx.drawImage(imgId_0050, 846, 496);
    ctx.drawImage(imgId_0050, 864, 496);
    ctx.drawImage(imgId_0050, 882, 496);
    ctx.drawImage(imgId_0051, 900, 496);
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