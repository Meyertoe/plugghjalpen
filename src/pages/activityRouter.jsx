import { Navigate, useParams } from "react-router-dom"
import { getLevelById } from "../data/subjects"

function ActivityRouter() {
  const { subjectName, topicName, levelId, activityId } = useParams()
  const level = getLevelById(subjectName, topicName, levelId)
  const activity = level?.activities.find((item) => item.id === activityId)
  if (!activity) return <Navigate to={"/dashboard/" + subjectName + "/" + topicName + "/level/" + levelId} replace />
  const route = "/dashboard/" + subjectName + "/" + topicName
  const destinations = {
    lesson: route + "/learn/" + levelId,
    quiz: route + "/quiz/" + levelId,
    matching: route + "/matching/" + levelId,
    buildSolution: route + "/build/" + levelId,
    solveYourself: route + "/solve/" + levelId,
    findError: route + "/find-error/" + levelId,
    predictOutput: route + "/predict/" + levelId,
    buildCode: route + "/build-code/" + levelId,
    findBug: route + "/find-bug/" + levelId,
    fillCode: route + "/fill-code/" + levelId,
    writeCode: route + "/write-code/" + levelId,
    why: route + "/why/" + levelId,
    bonus: route + "/bonus/" + levelId,
  }
  return <Navigate to={destinations[activity.type] + "?activity=" + activity.id} replace />
}

export default ActivityRouter
