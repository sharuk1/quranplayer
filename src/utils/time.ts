export function formatSeconds(totalSeconds: number) {
  if (!Number.isFinite(totalSeconds)) {
    return '00:00';
  }

  const minutes = Math.floor(totalSeconds / 60)
    .toString()
    .padStart(2, '0');
  const seconds = Math.floor(totalSeconds % 60)
    .toString()
    .padStart(2, '0');

  return `${minutes}:${seconds}`;
}
