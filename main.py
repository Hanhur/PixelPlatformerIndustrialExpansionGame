# import pygame
# import sys
# import math
# import random

# # Инициализация Pygame
# pygame.init()

# # Константы
# SCREEN_WIDTH = 918
# SCREEN_HEIGHT = 515
# FPS = 60
# TILE_SIZE = 18

# # Цвета
# BLUE = (22, 36, 71)
# RED = (233, 69, 96)
# DARK_RED = (179, 52, 81)
# GREEN = (0, 255, 0)
# LIGHT_GREEN = (204, 255, 204)
# YELLOW = (255, 204, 0)
# DARK_YELLOW = (204, 153, 0)
# BROWN = (204, 153, 102)
# GRAY = (85, 85, 85)
# DARK_GRAY = (51, 51, 51)
# LIGHT_GRAY = (153, 153, 153)
# WHITE = (255, 255, 255)
# BLACK = (0, 0, 0)

# # Создание окна
# screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))
# pygame.display.set_caption("Pixel Platformer Industrial Expansion (1.0)")
# clock = pygame.time.Clock()

# # Шрифты
# font_large = pygame.font.SysFont("Arial", 36, bold=True)
# font_medium = pygame.font.SysFont("Arial", 24)
# font_small = pygame.font.SysFont("Arial", 18)

# class Player:
#     def __init__(self):
#         self.width = 24
#         self.height = 32
#         self.x = 50
#         self.y = 300
#         self.velocity_x = 0
#         self.velocity_y = 0
#         self.speed = 5
#         self.jump_power = 12
#         self.is_jumping = False
#         self.color = RED
#         self.direction = 1  # 1 - вправо, -1 - влево
        
#     def move(self, keys):
#         # Горизонтальное движение
#         if keys[pygame.K_RIGHT] or keys[pygame.K_d]:
#             self.velocity_x = self.speed
#             self.direction = 1
#         elif keys[pygame.K_LEFT] or keys[pygame.K_a]:
#             self.velocity_x = -self.speed
#             self.direction = -1
#         else:
#             self.velocity_x = 0
            
#         # Прыжок
#         if (keys[pygame.K_UP] or keys[pygame.K_w] or keys[pygame.K_SPACE]) and not self.is_jumping:
#             self.velocity_y = -self.jump_power
#             self.is_jumping = True
            
#         # Применение гравитации
#         self.velocity_y += 0.5
        
#         # Обновление позиции
#         self.x += self.velocity_x
#         self.y += self.velocity_y
        
#         # Ограничение в пределах экрана
#         if self.x < 0:
#             self.x = 0
#         if self.x + self.width > SCREEN_WIDTH:
#             self.x = SCREEN_WIDTH - self.width
            
#     def draw(self):
#         # Тело игрока
#         pygame.draw.rect(screen, self.color, (self.x, self.y, self.width, self.height))
        
#         # Голова
#         pygame.draw.rect(screen, DARK_RED, (self.x + 5, self.y + 5, self.width - 10, 10))
        
#         # Глаза
#         if self.direction == 1:  # Смотрит вправо
#             pygame.draw.rect(screen, WHITE, (self.x + self.width - 11, self.y + 8, 3, 3))
#             pygame.draw.rect(screen, WHITE, (self.x + self.width - 16, self.y + 8, 3, 3))
#         else:  # Смотрит влево
#             pygame.draw.rect(screen, WHITE, (self.x + 8, self.y + 8, 3, 3))
#             pygame.draw.rect(screen, WHITE, (self.x + 13, self.y + 8, 3, 3))
            
#     def get_rect(self):
#         return pygame.Rect(self.x, self.y, self.width, self.height)

# class Platform:
#     def __init__(self, x, y, width, height, color=GRAY):
#         self.x = x
#         self.y = y
#         self.width = width
#         self.height = height
#         self.color = color
        
#     def draw(self):
#         pygame.draw.rect(screen, self.color, (self.x, self.y, self.width, self.height))
        
#         # Текстура платформы
#         for i in range(0, self.width, 10):
#             pygame.draw.rect(screen, DARK_GRAY, (self.x + i, self.y, 5, 3))
            
#     def get_rect(self):
#         return pygame.Rect(self.x, self.y, self.width, self.height)

# class Gear:
#     def __init__(self, x, y):
#         self.x = x
#         self.y = y
#         self.radius = 12
#         self.color = YELLOW
#         self.collected = False
        
#     def draw(self):
#         if not self.collected:
#             # Основной круг
#             pygame.draw.circle(screen, self.color, (self.x, self.y), self.radius)
            
#             # Зубья шестерёнки
#             for i in range(8):
#                 angle = (i / 8) * math.pi * 2
#                 x1 = self.x + math.cos(angle) * (self.radius - 3)
#                 y1 = self.y + math.sin(angle) * (self.radius - 3)
#                 x2 = self.x + math.cos(angle) * (self.radius + 3)
#                 y2 = self.y + math.sin(angle) * (self.radius + 3)
#                 next_angle = ((i + 0.5) / 8) * math.pi * 2
#                 x3 = self.x + math.cos(next_angle) * (self.radius - 3)
#                 y3 = self.y + math.sin(next_angle) * (self.radius - 3)
                
#                 pygame.draw.polygon(screen, DARK_YELLOW, [(x1, y1), (x2, y2), (x3, y3)])
                
#             # Центр шестерёнки
#             pygame.draw.circle(screen, DARK_YELLOW, (self.x, self.y), 4)
            
#     def get_rect(self):
#         return pygame.Rect(self.x - self.radius, self.y - self.radius, self.radius * 2, self.radius * 2)

# class Hazard:
#     def __init__(self, x, y, width=40, height=20, hazard_type="saw"):
#         self.x = x
#         self.y = y
#         self.width = width
#         self.height = height
#         self.type = hazard_type
#         self.color = RED
#         self.rotation = 0
        
#     def draw(self):
#         if self.type == "saw":
#             # Вращение пилы
#             self.rotation += 5
#             if self.rotation >= 360:
#                 self.rotation = 0
                
#             # Основной круг пилы
#             pygame.draw.circle(screen, self.color, (self.x + self.width // 2, self.y + self.height // 2), self.width // 2)
            
#             # Зубья пилы
#             for i in range(8):
#                 angle = math.radians(self.rotation + (i / 8) * 360)
#                 x1 = self.x + self.width // 2 + math.cos(angle) * (self.width // 2 - 2)
#                 y1 = self.y + self.height // 2 + math.sin(angle) * (self.width // 2 - 2)
#                 x2 = self.x + self.width // 2 + math.cos(angle) * (self.width // 2 + 5)
#                 y2 = self.y + self.height // 2 + math.sin(angle) * (self.width // 2 + 5)
                
#                 pygame.draw.polygon(screen, DARK_GRAY, [
#                     (self.x + self.width // 2, self.y + self.height // 2),
#                     (x1, y1),
#                     (x2, y2)
#                 ])
#         else:
#             pygame.draw.rect(screen, self.color, (self.x, self.y, self.width, self.height))
            
#     def get_rect(self):
#         return pygame.Rect(self.x, self.y, self.width, self.height)

# class Exit:
#     def __init__(self, x, y):
#         self.x = x
#         self.y = y
#         self.width = 30
#         self.height = 50
#         self.color = GREEN
        
#     def draw(self):
#         pygame.draw.rect(screen, self.color, (self.x, self.y, self.width, self.height))
        
#         # Дверная ручка
#         pygame.draw.circle(screen, LIGHT_GREEN, (self.x + self.width - 10, self.y + self.height // 2), 4)
        
#     def get_rect(self):
#         return pygame.Rect(self.x, self.y, self.width, self.height)

# class Game:
#     def __init__(self):
#         self.state = "start"  # start, playing, game_over, level_complete
#         self.level = 1
#         self.lives = 3
#         self.score = 0
#         self.gears_collected = 0
#         self.total_gears = 0
        
#         self.player = Player()
#         self.platforms = []
#         self.gears = []
#         self.hazards = []
#         self.exit = None
        
#         self.init_level()
        
#     def init_level(self):
#         self.platforms = []
#         self.gears = []
#         self.hazards = []
#         self.gears_collected = 0
        
#         if self.level == 1:
#             # Платформы для уровня 1
#             self.platforms = [
#                 Platform(0, 400, 200, 20),
#                 Platform(250, 350, 150, 20),
#                 Platform(450, 300, 150, 20),
#                 Platform(650, 250, 150, 20),
#                 Platform(500, 200, 100, 20),
#                 Platform(300, 200, 100, 20),
#                 Platform(100, 250, 100, 20),
#             ]
            
#             # Шестерёнки для уровня 1
#             self.gears = [
#                 Gear(100, 220),
#                 Gear(320, 170),
#                 Gear(520, 170),
#                 Gear(700, 220),
#             ]
            
#             # Опасности для уровня 1
#             self.hazards = [
#                 Hazard(400, 380),
#                 Hazard(600, 330),
#             ]
            
#             # Выход
#             self.exit = Exit(750, 200)
            
#         elif self.level == 2:
#             # Платформы для уровня 2
#             self.platforms = [
#                 Platform(0, 400, 150, 20),
#                 Platform(200, 380, 100, 20),
#                 Platform(350, 350, 100, 20),
#                 Platform(500, 320, 100, 20),
#                 Platform(650, 290, 150, 20),
#                 Platform(550, 220, 100, 20),
#                 Platform(350, 190, 100, 20),
#                 Platform(150, 160, 100, 20),
#             ]
            
#             # Шестерёнки для уровня 2
#             self.gears = [
#                 Gear(240, 350),
#                 Gear(400, 320),
#                 Gear(600, 290),
#                 Gear(590, 190),
#                 Gear(190, 130),
#             ]
            
#             # Опасности для уровня 2
#             self.hazards = [
#                 Hazard(300, 360),
#                 Hazard(450, 310),
#                 Hazard(700, 270),
#             ]
            
#             # Выход
#             self.exit = Exit(50, 120)
            
#         self.total_gears = len(self.gears)
        
#         # Начальная позиция игрока
#         self.player.x = 50
#         self.player.y = 300
#         self.player.velocity_x = 0
#         self.player.velocity_y = 0
#         self.player.is_jumping = False
        
#     def update(self):
#         if self.state != "playing":
#             return
            
#         # Движение игрока
#         keys = pygame.key.get_pressed()
#         self.player.move(keys)
        
#         # Проверка столкновений с платформами
#         self.player.is_jumping = True
#         for platform in self.platforms:
#             if (self.player.x < platform.x + platform.width and
#                 self.player.x + self.player.width > platform.x and
#                 self.player.y + self.player.height > platform.y and
#                 self.player.y + self.player.height < platform.y + platform.height and
#                 self.player.velocity_y > 0):
#                 self.player.y = platform.y - self.player.height
#                 self.player.velocity_y = 0
#                 self.player.is_jumping = False
                
#         # Проверка столкновений с шестерёнками
#         for gear in self.gears:
#             if (not gear.collected and self.player.get_rect().colliderect(gear.get_rect())):
#                 gear.collected = True
#                 self.gears_collected += 1
#                 self.score += 100
                
#         # Проверка столкновений с опасностями
#         for hazard in self.hazards:
#             if self.player.get_rect().colliderect(hazard.get_rect()):
#                 self.player_die()
#                 return
                
#         # Проверка падения за экран
#         if self.player.y > SCREEN_HEIGHT:
#             self.player_die()
#             return
            
#         # Проверка достижения выхода
#         if (self.exit and self.player.get_rect().colliderect(self.exit.get_rect()) and self.gears_collected == self.total_gears):
#             self.level_complete()
            
#     def player_die(self):
#         self.lives -= 1
        
#         if self.lives <= 0:
#             self.state = "game_over"
#         else:
#             # Перезапуск уровня
#             self.player.x = 50
#             self.player.y = 300
#             self.player.velocity_x = 0
#             self.player.velocity_y = 0
#             self.player.is_jumping = False
            
#             # Сброс собранных шестерёнок
#             self.gears_collected = 0
#             for gear in self.gears:
#                 gear.collected = False
                
#     def level_complete(self):
#         self.state = "level_complete"
#         self.score += 500  # Бонус за завершение уровня
        
#     def next_level(self):
#         self.level += 1
#         self.state = "playing"
#         self.init_level()
        
#     def reset_game(self):
#         self.state = "playing"
#         self.level = 1
#         self.lives = 3
#         self.score = 0
#         self.gears_collected = 0
#         self.init_level()
        
#     def draw_background(self):
#         # Фон
#         screen.fill(BLUE)
        
#         # Трубы
#         pygame.draw.rect(screen, LIGHT_GRAY, (100, 100, 200, 20))
#         pygame.draw.rect(screen, LIGHT_GRAY, (300, 100, 20, 150))
#         pygame.draw.rect(screen, LIGHT_GRAY, (500, 150, 150, 20))
#         pygame.draw.rect(screen, LIGHT_GRAY, (650, 150, 20, 100))
        
#         # Окна
#         for i in range(5):
#             pygame.draw.rect(screen, (74, 157, 227), (50 + i * 60, 50, 40, 60))
            
#         # Болты на стенах
#         for i in range(0, SCREEN_WIDTH, 40):
#             for j in range(0, SCREEN_HEIGHT, 40):
#                 pygame.draw.circle(screen, LIGHT_GRAY, (i, j), 2)
                
#     def draw_ui(self):
#         # Панель статистики
#         pygame.draw.rect(screen, (30, 30, 50), (10, 10, 200, 100))
#         pygame.draw.rect(screen, (50, 50, 70), (10, 10, 200, 100), 2)
        
#         # Уровень
#         level_text = font_small.render(f"Уровень: {self.level}", True, WHITE)
#         screen.blit(level_text, (20, 20))
        
#         # Жизни
#         lives_text = font_small.render(f"Жизни: {self.lives}", True, WHITE)
#         screen.blit(lives_text, (20, 45))
        
#         # Очки
#         score_text = font_small.render(f"Очки: {self.score}", True, WHITE)
#         screen.blit(score_text, (20, 70))
        
#         # Шестерёнки
#         gears_text = font_small.render(f"Шестерёнки: {self.gears_collected}/{self.total_gears}", True, WHITE)
#         screen.blit(gears_text, (20, 95))
        
#     def draw_start_screen(self):
#         self.draw_background()
        
#         title = font_large.render("Pixel Platformer", True, WHITE)
#         subtitle = font_medium.render("Industrial Expansion", True, WHITE)
#         instruction1 = font_small.render("Помоги инженеру собрать все шестерёнки на заброшенной фабрике!", True, WHITE)
#         instruction2 = font_small.render("Избегай опасных механизмов и достигни выхода.", True, WHITE)
#         start_text = font_medium.render("Нажмите ПРОБЕЛ для начала игры", True, YELLOW)
        
#         screen.blit(title, (SCREEN_WIDTH // 2 - title.get_width() // 2, 100))
#         screen.blit(subtitle, (SCREEN_WIDTH // 2 - subtitle.get_width() // 2, 150))
#         screen.blit(instruction1, (SCREEN_WIDTH // 2 - instruction1.get_width() // 2, 220))
#         screen.blit(instruction2, (SCREEN_WIDTH // 2 - instruction2.get_width() // 2, 250))
#         screen.blit(start_text, (SCREEN_WIDTH // 2 - start_text.get_width() // 2, 350))
        
#     def draw_game_over_screen(self):
#         self.draw_background()
        
#         title = font_large.render("Игра окончена", True, RED)
#         score_text = font_medium.render(f"Вы набрали {self.score} очков", True, WHITE)
#         restart_text = font_medium.render("Нажмите R для перезапуска", True, YELLOW)
        
#         screen.blit(title, (SCREEN_WIDTH // 2 - title.get_width() // 2, 150))
#         screen.blit(score_text, (SCREEN_WIDTH // 2 - score_text.get_width() // 2, 220))
#         screen.blit(restart_text, (SCREEN_WIDTH // 2 - restart_text.get_width() // 2, 280))
        
#     def draw_level_complete_screen(self):
#         self.draw_background()
        
#         title = font_large.render("Уровень пройден!", True, GREEN)
#         congrats_text = font_medium.render("Поздравляем! Вы собрали все шестерёнки.", True, WHITE)
#         next_text = font_medium.render("Нажмите ПРОБЕЛ для перехода на следующий уровень", True, YELLOW)
        
#         screen.blit(title, (SCREEN_WIDTH // 2 - title.get_width() // 2, 150))
#         screen.blit(congrats_text, (SCREEN_WIDTH // 2 - congrats_text.get_width() // 2, 220))
#         screen.blit(next_text, (SCREEN_WIDTH // 2 - next_text.get_width() // 2, 280))
        
#     def draw(self):
#         if self.state == "start":
#             self.draw_start_screen()
#         elif self.state == "game_over":
#             self.draw_game_over_screen()
#         elif self.state == "level_complete":
#             self.draw_level_complete_screen()
#         elif self.state == "playing":
#             self.draw_background()
            
#             # Отрисовка платформ
#             for platform in self.platforms:
#                 platform.draw()
                
#             # Отрисовка опасностей
#             for hazard in self.hazards:
#                 hazard.draw()
                
#             # Отрисовка шестерёнок
#             for gear in self.gears:
#                 gear.draw()
                
#             # Отрисовка выхода
#             if self.exit:
#                 self.exit.draw()
                
#             # Отрисовка игрока
#             self.player.draw()
            
#             # Отрисовка интерфейса
#             self.draw_ui()

# # Создание игры
# game = Game()

# # Главный игровой цикл
# running = True
# while running:
#     # Обработка событий
#     for event in pygame.event.get():
#         if event.type == pygame.QUIT:
#             running = False
            
#         if event.type == pygame.KEYDOWN:
#             if event.key == pygame.K_ESCAPE:
#                 running = False
                
#             if game.state == "start" and event.key == pygame.K_SPACE:
#                 game.state = "playing"
                
#             if game.state == "game_over" and event.key == pygame.K_r:
#                 game.reset_game()
                
#             if game.state == "level_complete" and event.key == pygame.K_SPACE:
#                 game.next_level()
                
#     # Обновление игры
#     game.update()
    
#     # Отрисовка
#     game.draw()
    
#     # Обновление экрана
#     pygame.display.flip()
    
#     # Ограничение FPS
#     clock.tick(FPS)

# # Выход из игры
# pygame.quit()
# sys.exit()
# ================================================================

import pygame
import sys
import math

# Инициализация Pygame
pygame.init()

# Настройки экрана
SCREEN_WIDTH = 900
SCREEN_HEIGHT = 600
screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))
pygame.display.set_caption("Platform Game")

# Цвета
BLUE = (22, 36, 71)
RED = (233, 69, 96)
DARK_RED = (179, 52, 81)
WHITE = (255, 255, 255)
GRAY = (85, 85, 85)
DARK_GRAY = (51, 51, 51)
YELLOW = (255, 204, 0)
DARK_YELLOW = (204, 153, 0)
BROWN = (153, 102, 0)
GREEN = (0, 255, 0)
LIGHT_GREEN = (204, 255, 204)
LIGHT_BLUE = (74, 157, 227)

# Загрузка изображений (заглушки - в реальной игре нужно загрузить настоящие изображения)
def load_images():
    images = {}
    # В реальной игре здесь нужно загрузить все изображения из папки images
    # Для примера создадим простые поверхности вместо реальных изображений
    for i in range(111):  # от 0005 до 0109
        img_name = f"tile_{i:04d}"
        # Создаем простую цветную поверхность вместо реального изображения
        surf = pygame.Surface((18, 18))
        color = (i * 2 % 255, i * 3 % 255, i * 5 % 255)
        surf.fill(color)
        images[img_name] = surf
    return images

# Игровые переменные
class Game:
    def __init__(self):
        self.state = "start"  # start, playing, gameOver, levelComplete
        self.level = 1
        self.lives = 3
        self.score = 0
        self.gears_collected = 0
        self.total_gears = 0
        self.images = load_images()
        
        # Игрок
        self.player = {
            "x": 50,
            "y": 300,
            "width": 24,
            "height": 32,
            "velocity_x": 0,
            "velocity_y": 0,
            "speed": 5,
            "jump_power": 12,
            "is_jumping": False
        }
        
        # Игровые объекты
        self.platforms = []
        self.gears = []
        self.hazards = []
        self.exit = None
        
        # Управление
        self.keys = {
            "right": False,
            "left": False,
            "up": False
        }
        
        # Гравитация
        self.gravity = 0.5

    def init_level(self):
        self.platforms = []
        self.gears = []
        self.hazards = []
        self.gears_collected = 0

        if self.level == 1:
            # Платформы для уровня 1
            self.platforms = [
                {"x": 0, "y": 400, "width": 200, "height": 20},
                {"x": 250, "y": 350, "width": 150, "height": 20},
                {"x": 450, "y": 300, "width": 150, "height": 20},
                {"x": 650, "y": 250, "width": 150, "height": 20},
                {"x": 500, "y": 200, "width": 100, "height": 20},
                {"x": 300, "y": 200, "width": 100, "height": 20},
                {"x": 100, "y": 250, "width": 100, "height": 20},
            ]

            # Шестерёнки для уровня 1
            self.gears = [
                {"x": 100, "y": 220, "radius": 12, "collected": False},
                {"x": 320, "y": 170, "radius": 12, "collected": False},
                {"x": 520, "y": 170, "radius": 12, "collected": False},
                {"x": 700, "y": 220, "radius": 12, "collected": False},
            ]

            # Опасности для уровня 1
            self.hazards = [
                {"x": 400, "y": 380, "width": 40, "height": 20, "type": "saw"},
                {"x": 600, "y": 330, "width": 40, "height": 20, "type": "saw"},
            ]

            # Выход
            self.exit = {"x": 750, "y": 200, "width": 30, "height": 50}

        elif self.level == 2:
            # Платформы для уровня 2
            self.platforms = [
                {"x": 0, "y": 400, "width": 150, "height": 20},
                {"x": 200, "y": 380, "width": 100, "height": 20},
                {"x": 350, "y": 350, "width": 100, "height": 20},
                {"x": 500, "y": 320, "width": 100, "height": 20},
                {"x": 650, "y": 290, "width": 150, "height": 20},
                {"x": 550, "y": 220, "width": 100, "height": 20},
                {"x": 350, "y": 190, "width": 100, "height": 20},
                {"x": 150, "y": 160, "width": 100, "height": 20},
            ]

            # Шестерёнки для уровня 2
            self.gears = [
                {"x": 240, "y": 350, "radius": 12, "collected": False},
                {"x": 400, "y": 320, "radius": 12, "collected": False},
                {"x": 600, "y": 290, "radius": 12, "collected": False},
                {"x": 590, "y": 190, "radius": 12, "collected": False},
                {"x": 190, "y": 130, "radius": 12, "collected": False},
            ]

            # Опасности для уровня 2
            self.hazards = [
                {"x": 300, "y": 360, "width": 40, "height": 20, "type": "saw"},
                {"x": 450, "y": 310, "width": 40, "height": 20, "type": "saw"},
                {"x": 700, "y": 270, "width": 40, "height": 20, "type": "saw"},
            ]

            # Выход
            self.exit = {"x": 50, "y": 120, "width": 30, "height": 50}

        # Начальная позиция игрока
        self.player["x"] = 50
        self.player["y"] = 300
        self.player["velocity_x"] = 0
        self.player["velocity_y"] = 0
        self.player["is_jumping"] = False

        self.total_gears = len(self.gears)

    def move_player(self):
        # Горизонтальное движение
        if self.keys["right"]:
            self.player["velocity_x"] = self.player["speed"]
        elif self.keys["left"]:
            self.player["velocity_x"] = -self.player["speed"]
        else:
            self.player["velocity_x"] = 0

        # Применение гравитации
        self.player["velocity_y"] += self.gravity

        # Обновление позиции
        self.player["x"] += self.player["velocity_x"]
        self.player["y"] += self.player["velocity_y"]

        # Ограничение в пределах экрана
        if self.player["x"] < 0:
            self.player["x"] = 0
        if self.player["x"] + self.player["width"] > SCREEN_WIDTH:
            self.player["x"] = SCREEN_WIDTH - self.player["width"]
        if self.player["y"] > SCREEN_HEIGHT:
            self.player_die()

        # Проверка столкновений с платформами
        self.player["is_jumping"] = True
        for platform in self.platforms:
            if (self.player["x"] < platform["x"] + platform["width"] and
                self.player["x"] + self.player["width"] > platform["x"] and
                self.player["y"] + self.player["height"] > platform["y"] and
                self.player["y"] + self.player["height"] < platform["y"] + platform["height"] and
                self.player["velocity_y"] > 0):
                
                self.player["y"] = platform["y"] - self.player["height"]
                self.player["velocity_y"] = 0
                self.player["is_jumping"] = False

        # Проверка столкновений с шестерёнками
        for gear in self.gears:
            if (not gear["collected"] and
                self.player["x"] < gear["x"] + gear["radius"] and
                self.player["x"] + self.player["width"] > gear["x"] - gear["radius"] and
                self.player["y"] < gear["y"] + gear["radius"] and
                self.player["y"] + self.player["height"] > gear["y"] - gear["radius"]):
                
                gear["collected"] = True
                self.gears_collected += 1
                self.score += 100

        # Проверка столкновений с опасностями
        for hazard in self.hazards:
            if (self.player["x"] < hazard["x"] + hazard["width"] and
                self.player["x"] + self.player["width"] > hazard["x"] and
                self.player["y"] < hazard["y"] + hazard["height"] and
                self.player["y"] + self.player["height"] > hazard["y"]):
                
                self.player_die()

        # Проверка достижения выхода
        if (self.exit and
            self.player["x"] < self.exit["x"] + self.exit["width"] and
            self.player["x"] + self.player["width"] > self.exit["x"] and
            self.player["y"] < self.exit["y"] + self.exit["height"] and
            self.player["y"] + self.player["height"] > self.exit["y"]):
            
            if self.gears_collected == self.total_gears:
                self.level_complete()

    def player_die(self):
        self.lives -= 1

        if self.lives <= 0:
            self.game_over()
        else:
            # Перезапуск уровня
            self.player["x"] = 50
            self.player["y"] = 300
            self.player["velocity_x"] = 0
            self.player["velocity_y"] = 0
            self.player["is_jumping"] = False

            # Сброс собранных шестерёнок
            self.gears_collected = 0
            for gear in self.gears:
                gear["collected"] = False

    def draw_background(self):
        # Трубы
        pygame.draw.rect(screen, (102, 102, 102), (100, 100, 200, 20))
        pygame.draw.rect(screen, (102, 102, 102), (300, 100, 20, 150))
        pygame.draw.rect(screen, (102, 102, 102), (500, 150, 150, 20))
        pygame.draw.rect(screen, (102, 102, 102), (650, 150, 20, 100))

        # Окна
        for i in range(5):
            pygame.draw.rect(screen, LIGHT_BLUE, (50 + i * 60, 50, 40, 60))

        # Болты на стенах
        for i in range(0, SCREEN_WIDTH, 40):
            for j in range(0, SCREEN_HEIGHT, 40):
                pygame.draw.circle(screen, (153, 153, 153), (i, j), 2)

    def draw_saw(self, hazard):
        """Отрисовка пилы с зубьями"""
        center_x = hazard["x"] + hazard["width"] // 2
        center_y = hazard["y"] + hazard["height"] // 2
        radius = hazard["width"] // 2
        
        # Основной круг пилы
        pygame.draw.circle(screen, RED, (center_x, center_y), radius)
        
        # Зубья пилы
        for i in range(8):
            angle = (i / 8) * 2 * math.pi
            next_angle = ((i + 0.5) / 8) * 2 * math.pi
            
            # Координаты точек для зубьев
            x1 = center_x + math.cos(angle) * (radius - 2)
            y1 = center_y + math.sin(angle) * (radius - 2)
            x2 = center_x + math.cos(angle) * (radius + 5)
            y2 = center_y + math.sin(angle) * (radius + 5)
            x3 = center_x + math.cos(next_angle) * (radius - 2)
            y3 = center_y + math.sin(next_angle) * (radius - 2)
            
            # Рисуем треугольник для зуба
            pygame.draw.polygon(screen, DARK_GRAY, [
                (center_x, center_y),
                (x1, y1),
                (x2, y2),
                (x3, y3)
            ])

    def draw_gear(self, gear):
        """Отрисовка шестерёнки с зубьями"""
        if not gear["collected"]:
            # Основной круг
            pygame.draw.circle(screen, YELLOW, (gear["x"], gear["y"]), gear["radius"])
            
            # Зубья шестерёнки
            for i in range(8):
                angle = (i / 8) * 2 * math.pi
                next_angle = ((i + 0.5) / 8) * 2 * math.pi
                
                # Координаты точек для зубьев
                x1 = gear["x"] + math.cos(angle) * (gear["radius"] - 3)
                y1 = gear["y"] + math.sin(angle) * (gear["radius"] - 3)
                x2 = gear["x"] + math.cos(angle) * (gear["radius"] + 3)
                y2 = gear["y"] + math.sin(angle) * (gear["radius"] + 3)
                x3 = gear["x"] + math.cos(next_angle) * (gear["radius"] - 3)
                y3 = gear["y"] + math.sin(next_angle) * (gear["radius"] - 3)
                
                # Рисуем треугольник для зуба
                pygame.draw.polygon(screen, DARK_YELLOW, [(x1, y1), (x2, y2), (x3, y3)])
            
            # Центр шестерёнки
            pygame.draw.circle(screen, BROWN, (gear["x"], gear["y"]), 4)

    def draw_game(self):
        # Очистка экрана
        screen.fill(BLUE)

        # Отрисовка фона
        self.draw_background()

        # Отрисовка платформ
        for platform in self.platforms:
            pygame.draw.rect(screen, GRAY, (platform["x"], platform["y"], platform["width"], platform["height"]))
            
            # Текстура платформ
            for i in range(0, platform["width"], 10):
                pygame.draw.rect(screen, DARK_GRAY, (platform["x"] + i, platform["y"], 5, 3))

        # Отрисовка опасностей
        for hazard in self.hazards:
            if hazard["type"] == "saw":
                self.draw_saw(hazard)

        # Отрисовка шестерёнок
        for gear in self.gears:
            self.draw_gear(gear)

        # Отрисовка выхода
        if self.exit:
            pygame.draw.rect(screen, GREEN, (self.exit["x"], self.exit["y"], self.exit["width"], self.exit["height"]))
            
            # Дверная ручка
            pygame.draw.circle(screen, LIGHT_GREEN, (self.exit["x"] + self.exit["width"] - 10, self.exit["y"] + self.exit["height"] // 2), 4)

        # Отрисовка игрока
        pygame.draw.rect(screen, RED, (self.player["x"], self.player["y"], self.player["width"], self.player["height"]))
        
        # Детали игрока
        # Голова
        pygame.draw.rect(screen, DARK_RED, (self.player["x"] + 5, self.player["y"] + 5, self.player["width"] - 10, 10))
        # Глаза
        pygame.draw.rect(screen, WHITE, (self.player["x"] + 8, self.player["y"] + 8, 3, 3))
        pygame.draw.rect(screen, WHITE, (self.player["x"] + self.player["width"] - 11, self.player["y"] + 8, 3, 3))

        # Отрисовка UI
        font = pygame.font.Font(None, 36)
        level_text = font.render(f"Level: {self.level}", True, WHITE)
        lives_text = font.render(f"Lives: {self.lives}", True, WHITE)
        score_text = font.render(f"Score: {self.score}", True, WHITE)
        gears_text = font.render(f"Gears: {self.gears_collected}/{self.total_gears}", True, WHITE)
        
        screen.blit(level_text, (10, 10))
        screen.blit(lives_text, (10, 50))
        screen.blit(score_text, (10, 90))
        screen.blit(gears_text, (10, 130))

    def draw_start_screen(self):
        screen.fill(BLUE)
        font = pygame.font.Font(None, 64)
        title = font.render("PLATFORM GAME", True, WHITE)
        font = pygame.font.Font(None, 36)
        instruction = font.render("Press SPACE to start", True, WHITE)
        
        screen.blit(title, (SCREEN_WIDTH // 2 - title.get_width() // 2, SCREEN_HEIGHT // 3))
        screen.blit(instruction, (SCREEN_WIDTH // 2 - instruction.get_width() // 2, SCREEN_HEIGHT // 2))

    def draw_game_over(self):
        screen.fill(BLUE)
        font = pygame.font.Font(None, 64)
        title = font.render("GAME OVER", True, RED)
        font = pygame.font.Font(None, 36)
        score = font.render(f"Final Score: {self.score}", True, WHITE)
        instruction = font.render("Press R to restart", True, WHITE)
        
        screen.blit(title, (SCREEN_WIDTH // 2 - title.get_width() // 2, SCREEN_HEIGHT // 3))
        screen.blit(score, (SCREEN_WIDTH // 2 - score.get_width() // 2, SCREEN_HEIGHT // 2))
        screen.blit(instruction, (SCREEN_WIDTH // 2 - instruction.get_width() // 2, SCREEN_HEIGHT // 2 + 50))

    def draw_level_complete(self):
        screen.fill(BLUE)
        font = pygame.font.Font(None, 64)
        title = font.render("LEVEL COMPLETE!", True, GREEN)
        font = pygame.font.Font(None, 36)
        instruction = font.render("Press SPACE for next level", True, WHITE)
        
        screen.blit(title, (SCREEN_WIDTH // 2 - title.get_width() // 2, SCREEN_HEIGHT // 3))
        screen.blit(instruction, (SCREEN_WIDTH // 2 - instruction.get_width() // 2, SCREEN_HEIGHT // 2))

    def start_game(self):
        self.state = "playing"
        self.init_level()

    def level_complete(self):
        self.state = "levelComplete"
        self.score += 500  # Бонус за завершение уровня

    def game_over(self):
        self.state = "gameOver"

    def reset_game(self):
        self.state = "playing"
        self.level = 1
        self.lives = 3
        self.score = 0
        self.gears_collected = 0
        self.init_level()

    def next_level(self):
        self.level += 1
        self.state = "playing"
        self.init_level()

# Основная функция игры
def main():
    clock = pygame.time.Clock()
    game = Game()
    
    running = True
    while running:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                running = False
            
            # Обработка нажатий клавиш
            if event.type == pygame.KEYDOWN:
                if game.state == "start" and event.key == pygame.K_SPACE:
                    game.start_game()
                elif game.state == "gameOver" and event.key == pygame.K_r:
                    game.reset_game()
                elif game.state == "levelComplete" and event.key == pygame.K_SPACE:
                    game.next_level()
                elif game.state == "playing":
                    if event.key == pygame.K_RIGHT or event.key == pygame.K_d:
                        game.keys["right"] = True
                    if event.key == pygame.K_LEFT or event.key == pygame.K_a:
                        game.keys["left"] = True
                    if (event.key == pygame.K_UP or event.key == pygame.K_w or event.key == pygame.K_SPACE) and not game.player["is_jumping"]:
                        game.player["velocity_y"] = -game.player["jump_power"]
                        game.player["is_jumping"] = True
                    if event.key == pygame.K_r:
                        game.reset_game()
            
            if event.type == pygame.KEYUP:
                if event.key == pygame.K_RIGHT or event.key == pygame.K_d:
                    game.keys["right"] = False
                if event.key == pygame.K_LEFT or event.key == pygame.K_a:
                    game.keys["left"] = False
        
        # Игровая логика
        if game.state == "playing":
            game.move_player()
        
        # Отрисовка
        if game.state == "start":
            game.draw_start_screen()
        elif game.state == "playing":
            game.draw_game()
        elif game.state == "gameOver":
            game.draw_game_over()
        elif game.state == "levelComplete":
            game.draw_level_complete()
        
        pygame.display.flip()
        clock.tick(60)

    pygame.quit()
    sys.exit()

if __name__ == "__main__":
    main()