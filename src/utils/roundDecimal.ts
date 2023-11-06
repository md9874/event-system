export default function roundDecimal(decimal: number): number {
  return Math.round(decimal * 100) / 100;
}
