namespace SpriteKind {
    export const Sofie = SpriteKind.create()
    export const Lol = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Sofie, SpriteKind.Lol, function (sprite, otherSprite) {
    Pizza.setPosition(randint(0, 160), randint(0, 120))
    info.startCountdown(10)
})
let Pizza: Sprite = null
scene.setBackgroundColor(13)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 5 5 5 5 5 5 5 . . . . . 
    . . . . 5 d d d d d 5 . . . . . 
    . . . . 5 d 9 d 9 d 5 . . . . . 
    . . . . 5 d d e d d 5 . . . . . 
    . . . . 5 3 d d d 3 5 . . . . . 
    . . . . . d 3 3 3 d . . . . . . 
    . . . . f . d d d . f . . . . . 
    . . . . . f . f . f . . . . . . 
    . . . . . . f f f . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . f . f . . . . . . . 
    `, SpriteKind.Sofie)
Pizza = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . e . e . e . . . . . 
    . . . . e e e e e e e e e . . . 
    . . . e e e f f f f f e . . . . 
    . . . . e e f 9 f 9 f e e . . . 
    . . . e . e f f d f f e . . . . 
    . . . . . . f 3 3 3 f . . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . f . . f . . . . . . . 
    . . . . . f f f f f f f . . . . 
    . . . . . . . . f . . f . . . . 
    . . . . . . . . f . . . . . . . 
    . . . . . f f f f f f f . . . . 
    . . . . . f . . . . . f . . . . 
    `, SpriteKind.Lol)
