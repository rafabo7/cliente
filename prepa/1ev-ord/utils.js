// formateador.js
export function formatTime(ms) {
    const totalCentiseconds = Math.floor(ms / 10);
    const minutes = String(Math.floor(totalCentiseconds / 6000)).padStart(2, '0');
    const seconds = String(Math.floor((totalCentiseconds % 6000) / 100)).padStart(2, '0');
    const centiseconds = String(totalCentiseconds % 100).padStart(2, '0');
    return `${minutes}:${seconds}:${centiseconds}`;
}
