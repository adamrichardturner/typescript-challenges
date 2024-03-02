export const towerBuilder = (nFloors: number): string[] => {
  const newTower: string[] = []
  for (let i = 0; i < nFloors; i++) {
    console.log(i)
  }
  return newTower
}

console.log(towerBuilder(3))
console.log(towerBuilder(6))
