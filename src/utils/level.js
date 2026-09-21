const XP_PER_LEVEL = 500
const STARTING_LEVEL = 2

export function getLevelProgress(totalXp) {
  const currentXp = totalXp % XP_PER_LEVEL
  return {
    level: Math.floor(totalXp / XP_PER_LEVEL) + STARTING_LEVEL,
    currentXp,
    xpToNextLevel: XP_PER_LEVEL - currentXp,
    progress: (currentXp / XP_PER_LEVEL) * 100,
    levelXpTarget: XP_PER_LEVEL,
  }
}
