import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import Dashboard from "./pages/dashboard"
import Subject from "./pages/subject"
import Quiz from "./pages/quiz"
import Results from "./pages/results"
import Profile from "./pages/profile"
import Topic from "./pages/topic"
import Activity from "./pages/activity"
import Level from "./pages/level"
import Memory from "./pages/memory"
import Matching from "./pages/matching"
import Bonus from "./pages/bonus"
import LevelComplete from "./pages/levelComplete"
import ActivityRouter from "./pages/activityRouter"
import BuildSolution from "./pages/buildSolution"
import SolveYourself from "./pages/solveYourself"
import FindError from "./pages/findError"
import PredictOutput from "./pages/predictOutput"
import BuildCode from "./pages/buildCode"
import FindBug from "./pages/findBug"
import FillCode from "./pages/fillCode"
import WriteCode from "./pages/writeCode"
import Why from "./pages/why"
import ActivitySummary from "./pages/activitySummary"
import { GameProvider } from "./context/GameContext"

function App() {
  return (
    <GameProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/:subjectName" element={<Subject />} />
          <Route path="/dashboard/:subjectName/:topicName" element={<Topic />} />
          <Route path="/dashboard/:subjectName/:topicName/level/:levelId" element={<Level />} />
          <Route path="/dashboard/:subjectName/:topicName/activity/:levelId/:activityId" element={<ActivityRouter />} />
          <Route path="/dashboard/:subjectName/:topicName/memory/:levelId" element={<Memory />} />
          <Route path="/dashboard/:subjectName/:topicName/matching/:levelId" element={<Matching />} />
          <Route path="/dashboard/:subjectName/:topicName/build/:levelId" element={<BuildSolution />} />
          <Route path="/dashboard/:subjectName/:topicName/solve/:levelId" element={<SolveYourself />} />
          <Route path="/dashboard/:subjectName/:topicName/find-error/:levelId" element={<FindError />} />
          <Route path="/dashboard/:subjectName/:topicName/predict/:levelId" element={<PredictOutput />} />
          <Route path="/dashboard/:subjectName/:topicName/build-code/:levelId" element={<BuildCode />} />
          <Route path="/dashboard/:subjectName/:topicName/find-bug/:levelId" element={<FindBug />} />
          <Route path="/dashboard/:subjectName/:topicName/fill-code/:levelId" element={<FillCode />} />
          <Route path="/dashboard/:subjectName/:topicName/write-code/:levelId" element={<WriteCode />} />
          <Route path="/dashboard/:subjectName/:topicName/why/:levelId" element={<Why />} />
          <Route path="/dashboard/:subjectName/:topicName/summary/:levelId/:activityId" element={<ActivitySummary />} />
          <Route path="/dashboard/:subjectName/:topicName/bonus/:levelId" element={<Bonus />} />
          <Route path="/dashboard/:subjectName/:topicName/level/:levelId/complete" element={<LevelComplete />} />
          <Route path="/dashboard/:subjectName/:topicName/:activityName/:levelId" element={<Activity />} />
          <Route path="/dashboard/:subjectName/:topicName/quiz/:levelId" element={<Quiz />} />
          <Route path="/dashboard/:subjectName/:topicName/quiz/:levelId/results" element={<Results />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </GameProvider>
  )
}

export default App
