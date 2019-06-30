export async function makeSound(sound) {
    try {
        await sound.setPositionAsync(0)
        await sound.playAsync()
    }
    catch (error) {
        console.log(error)
    }
}