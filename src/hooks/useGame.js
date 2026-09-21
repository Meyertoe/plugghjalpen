import { useContext } from "react"
import { GameContext } from "../context/gameState"

export function useGame() {
  return useContext(GameContext)
}
