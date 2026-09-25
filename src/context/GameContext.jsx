import { useEffect, useMemo, useState } from "react"
import { GameContext } from "./gameState"

const initialProfile = {
  name: "",
  totalXp: 0,
  todayXp: 0,
  streak: 0,
  studyMinutes: 0,
  quizzesCompleted: 0,
  questionsAnswered: 0,
  correctAnswers: 0,
  fastAnswers: 0,
  membership: "free",
  topicProgress: {},
  avatar: {
    skin: "#f7c9a9",
    hair: "#5b3526",
    eyes: "#5a3827",
    outfit: "#7657ee",
    headwear: "",
    accessory: "",
  },
}

export function GameProvider({ children }) {
  const [profile, setProfile] = useState(() => {
    const savedProfile = localStorage.getItem("plugghjalpen-profile")
    if (!savedProfile) return initialProfile
    const storedProfile = JSON.parse(savedProfile)
    return {
      ...initialProfile,
      ...storedProfile,
      avatar: { ...initialProfile.avatar, ...storedProfile.avatar },
    }
  })

  useEffect(() => {
    localStorage.setItem("plugghjalpen-profile", JSON.stringify(profile))
  }, [profile])

  const awardXp = (amount, quizStats = {}) => {
    setProfile((current) => ({
      ...current,
      totalXp: current.totalXp + amount,
      todayXp: current.todayXp + amount,
      quizzesCompleted: current.quizzesCompleted + 1,
      questionsAnswered: current.questionsAnswered + (quizStats.questionsAnswered || 0),
      correctAnswers: current.correctAnswers + (quizStats.correctAnswers || 0),
      fastAnswers: current.fastAnswers + (quizStats.fastAnswers || 0),
    }))
  }

  const completeStudyGoal = () => {
    setProfile((current) => ({ ...current, studyMinutes: 15 }))
  }

  const recordLearningSignal = (subjectSlug, topicSlug, levelId, activityId, questionId, signal) => {
    const progressKey = subjectSlug + "/" + topicSlug
    const signalKey = `${levelId}/${activityId}/${questionId}`
    setProfile((current) => {
      const currentTopic = current.topicProgress[progressKey] || { unlockedLevel: 1, completedLevels: [], xp: 0, bestAccuracy: 0, levelActivities: {} }
      const learningSignals = currentTopic.learningSignals || {}
      const previous = learningSignals[signalKey] || { attempts: 0, helpUsed: false, maxHelpLevel: 0, rescueUsed: false, rescueCompleted: false, solvedOriginal: false }
      return {
        ...current,
        topicProgress: {
          ...current.topicProgress,
          [progressKey]: {
            ...currentTopic,
            learningSignals: {
              ...learningSignals,
              [signalKey]: {
                ...previous,
                attempts: Math.max(previous.attempts, signal.attempts || 0),
                helpUsed: previous.helpUsed || Boolean(signal.helpUsed),
                maxHelpLevel: Math.max(previous.maxHelpLevel, signal.helpLevel || 0),
                rescueUsed: previous.rescueUsed || Boolean(signal.rescueUsed),
                rescueCompleted: previous.rescueCompleted || Boolean(signal.rescueCompleted),
                solvedOriginal: previous.solvedOriginal || Boolean(signal.solvedOriginal),
              },
            },
          },
        },
      }
    })
  }

  const updateAvatar = (category, value) => {
    setProfile((current) => ({
      ...current,
      avatar: { ...current.avatar, [category]: value },
    }))
  }

  const updateProfileName = (name) => {
    setProfile((current) => ({ ...current, name }))
  }

  const recordTopicQuiz = (subjectSlug, topicSlug, levelId, quizResult) => {
    const progressKey = subjectSlug + "/" + topicSlug
    setProfile((current) => {
      const currentTopic = current.topicProgress[progressKey] || {
        unlockedLevel: 1,
        completedLevels: [],
        xp: 0,
        bestAccuracy: 0,
      }
      return {
        ...current,
        topicProgress: {
          ...current.topicProgress,
          [progressKey]: {
            ...currentTopic,
            xp: currentTopic.xp + quizResult.xp,
            bestAccuracy: Math.max(currentTopic.bestAccuracy, quizResult.accuracy),
            completedLevels: currentTopic.completedLevels,
            unlockedLevel: currentTopic.unlockedLevel,
          },
        },
      }
    })
  }

  const recordLevelActivity = (subjectSlug, topicSlug, levelId, activityId, result) => {
    const progressKey = subjectSlug + "/" + topicSlug
    setProfile((current) => {
      const currentTopic = current.topicProgress[progressKey] || { unlockedLevel: 1, completedLevels: [], xp: 0, bestAccuracy: 0, levelActivities: {} }
      const levelActivities = currentTopic.levelActivities || {}
      const currentLevel = levelActivities[levelId] || {}
      return {
        ...current,
        topicProgress: {
          ...current.topicProgress,
          [progressKey]: {
            ...currentTopic,
            xp: currentTopic.xp + (result.xp || 0),
            levelActivities: { ...levelActivities, [levelId]: { ...currentLevel, [activityId]: result } },
          },
        },
      }
    })
  }

  const completeLevelActivity = (subjectSlug, topicSlug, levelId, activityId, result, quizStats = {}) => {
    const progressKey = subjectSlug + "/" + topicSlug
    setProfile((current) => {
      const currentTopic = current.topicProgress[progressKey] || { unlockedLevel: 1, completedLevels: [], xp: 0, bestAccuracy: 0, levelActivities: {} }
      const levelActivities = currentTopic.levelActivities || {}
      const currentLevel = levelActivities[levelId] || {}
      if (currentLevel[activityId]) return current
      const xp = result.xp || 0
      return {
        ...current,
        totalXp: current.totalXp + xp,
        todayXp: current.todayXp + xp,
        quizzesCompleted: current.quizzesCompleted + (quizStats.quizCompleted ? 1 : 0),
        questionsAnswered: current.questionsAnswered + (quizStats.questionsAnswered || 0),
        correctAnswers: current.correctAnswers + (quizStats.correctAnswers || 0),
        fastAnswers: current.fastAnswers + (quizStats.fastAnswers || 0),
        topicProgress: {
          ...current.topicProgress,
          [progressKey]: {
            ...currentTopic,
            xp: currentTopic.xp + xp,
            bestAccuracy: Math.max(currentTopic.bestAccuracy || 0, result.accuracy || 0),
            levelActivities: { ...levelActivities, [levelId]: { ...currentLevel, [activityId]: result } },
          },
        },
      }
    })
  }

  const completeStudyLevel = (subjectSlug, topicSlug, levelId, result) => {
    const progressKey = subjectSlug + "/" + topicSlug
    const levelNumber = Number(levelId.replace("level-", ""))
    setProfile((current) => {
      const currentTopic = current.topicProgress[progressKey] || { unlockedLevel: 1, completedLevels: [], xp: 0, bestAccuracy: 0, levelActivities: {} }
      if (currentTopic.completedLevels.includes(levelNumber)) return current
      const completedLevels = [...currentTopic.completedLevels, levelNumber]
      return {
        ...current,
        totalXp: current.totalXp + result.xp,
        todayXp: current.todayXp + result.xp,
        topicProgress: {
          ...current.topicProgress,
          [progressKey]: {
            ...currentTopic,
            xp: currentTopic.xp + result.xp,
            completedLevels,
            unlockedLevel: Math.max(currentTopic.unlockedLevel, levelNumber + 1),
            levelActivities: {
              ...(currentTopic.levelActivities || {}),
              [levelId]: { ...((currentTopic.levelActivities || {})[levelId] || {}), [result.activityId || "bonus"]: result },
            },
          },
        },
      }
    })
  }

  const resetLearningProgress = () => {
    setProfile((current) => ({ ...current, topicProgress: {} }))
  }

  const value = useMemo(() => ({ profile, awardXp, completeStudyGoal, updateAvatar, updateProfileName, recordLearningSignal, recordTopicQuiz, recordLevelActivity, completeLevelActivity, completeStudyLevel, resetLearningProgress }), [profile])

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>
}
