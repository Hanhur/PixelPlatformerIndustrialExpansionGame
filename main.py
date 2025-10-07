import  pygame
import sys
import random

# Inicializace pygame
pygame.init()

SCREEN_WIDTH = 918
SCREEN_HEIGHT = 515
FPS = 30
GRAVITY = 0.5
JUMP_STRENGTH = -12
PLAYER_SPEED = 5

screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))
pygame.display.set_caption("Pixel Platformer Industrial Expansion (1.0)")

# Цвета
beige_red = ("#C1876B")
black = ("#494444")

screen.fill(black)

# Загрузка изображений
player_image = pygame.image.load("images/tile_0034.png")
player_image_rect = player_image.get_rect()
player_image_rect.midbottom = (10, 515)




# Основной игровой цикл
running = True
clock = pygame.time.Clock()
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running == False

    # Отрисовка
    screen.blit(player_image, player_image_rect)

    # Обновление экрана
    pygame.display.update()
    clock.tick(FPS)

# Close pygame
pygame.quit()
sys.exit()
