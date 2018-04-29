import { Point, Path, Size } from 'paper';

export function translateX(path: Path, x: number) {
  path.translate(new Point(x, 0));
}

export function translateXHandleBounds(path: Path, x: number, size: Size) {
  if (getStartX(path) + x > size.width) {
    path.position.x = 0;
  } else {
    translateX(path, x);
  }
}

export function getStartX(path: Path) {
  return path.position.x - path.bounds.size.width / 2;
}

export function translateXHandleBoundsThenStop(
  path: Path,
  x: number,
  size: Size,
  topX: number
): boolean {
  const posX = getStartX(path);
  const posXAfter = getStartX(path) + x;
  console.log({ posX, posXAfter, topX });
  if (posX <= topX && posXAfter >= topX) {
    return true;
  } else {
    translateXHandleBounds(path, x, size);
    return false;
  }
}

export function getYFrom1To100(size: Size, yPerc: number) {
  return size.height * yPerc / 100;
}

export function getXFrom1To100(size: Size, xPerc: number) {
  return size.width * xPerc / 100;
}
