import { useNavigate } from "react-router-dom"
import Avatar from "../components/avatar"
import ProgressBar from "../components/progressBar"
import ProfileEditForm from "../components/profileEditForm"
import { achievements, avatarCategories } from "../data/profile"
import { useGame } from "../hooks/useGame"
import { getLevelProgress } from "../utils/level"

function Profile() {
  const navigate = useNavigate()
  const { profile, updateAvatar, updateProfileName, resetLearningProgress } = useGame()
  const level = getLevelProgress(profile.totalXp)
  const accuracy = profile.questionsAnswered ? Math.round((profile.correctAnswers / profile.questionsAnswered) * 100) : 0
  const unlockedAchievements = achievements.filter((achievement) => achievement.isUnlocked(profile)).length
  const resetProgress = () => { if (window.confirm("Återställ all nivå- och aktivitetsprogress? XP, avatar och profil behålls.")) resetLearningProgress() }

  return <main className="app-page profile-page">
    <header className="simple-topbar"><button className="brand" onClick={() => navigate("/dashboard")}>← <span>Till dashboard</span></button><button className="profile-nav" onClick={() => navigate("/profile")}><Avatar avatar={profile.avatar} size="tiny" /> {profile.name}</button></header>
    <section className="profile-hero"><div className="profile-avatar-wrap"><Avatar avatar={profile.avatar} size="large" /><span>Level {level.level}</span></div><div className="profile-intro"><p className="eyebrow">DIN PROFIL</p><h1>{profile.name}</h1><p>Fortsätt samla XP, lås upp rewards och bygg din streak.</p><div className="profile-xp"><div><strong>⭐ {profile.totalXp.toLocaleString("sv-SE")} XP</strong><span>{level.currentXp} / {level.levelXpTarget} XP till nästa level</span></div><ProgressBar value={level.progress} /></div></div><div className="membership-card"><span>✦</span><div><p className="eyebrow">MEDLEMSKAP</p><strong>{profile.membership === "premium" ? "Premium" : "Gratis"}</strong><p>{profile.membership === "premium" ? "Alla ämnen är öppna." : "Premiumämnen är märkta i dashboarden."}</p></div></div></section>
    <section className="profile-stat-grid" aria-label="Din statistik"><article><span>🔥</span><strong>{profile.streak} dagar</strong><small>Nuvarande streak</small></article><article><span>🎮</span><strong>{profile.quizzesCompleted}</strong><small>Quiz genomförda</small></article><article><span>💬</span><strong>{profile.questionsAnswered}</strong><small>Frågor besvarade</small></article><article><span>🎯</span><strong>{accuracy}%</strong><small>Rätt svar</small></article></section>
    <div className="profile-layout"><div>
      <ProfileEditForm name={profile.name} onSave={updateProfileName} />
      <section className="profile-section avatar-studio"><div className="section-heading"><div><p className="eyebrow">AVATAR STUDIO</p><h2>Gör avataren till din</h2></div><span>🎨 Anpassa</span></div><div className="avatar-customizer">{avatarCategories.map((category) => <div className="avatar-category" key={category.id}><h3>{category.label}</h3><div className="avatar-options">{category.items.map((item) => { const isSelected = profile.avatar[category.id] === item.value; const isAvailable = item.cost <= profile.totalXp; return <button key={item.id} className={isSelected ? "selected" : ""} disabled={!isAvailable} onClick={() => updateAvatar(category.id, item.value)}>{category.id === "headwear" || category.id === "accessory" ? <span className="item-symbol">{item.value || "—"}</span> : <span className="color-dot" style={{ background: item.value }} />}<span>{item.label}</span>{item.cost > 0 && <small>{isAvailable ? "⭐ " + item.cost : "🔒 " + item.cost}</small>}</button> })}</div></div>)}</div></section>
      <section className="profile-section"><div className="section-heading"><div><p className="eyebrow">ACHIEVEMENTS</p><h2>Dina badges</h2></div><span>{unlockedAchievements}/{achievements.length} upplåsta</span></div><div className="achievement-grid">{achievements.map((achievement) => { const unlocked = achievement.isUnlocked(profile); return <article className={unlocked ? "achievement unlocked" : "achievement"} key={achievement.id}><span>{unlocked ? achievement.icon : "🔒"}</span><div><h3>{achievement.title}</h3><p>{achievement.description}</p></div>{unlocked && <i>✓</i>}</article> })}</div></section>
    </div><aside className="profile-side"><section className="profile-section streak-overview"><p className="eyebrow">STREAK</p><h2>🔥 {profile.streak} dagar</h2><p>Du har pluggat 6 av de senaste 7 dagarna.</p><div className="profile-week">{"MTOTFLS".split("").map((day, index) => <span key={day + index} className={index < 6 ? "active" : ""}><small>{day}</small><i /></span>)}</div><button className="text-button" onClick={() => navigate("/dashboard")}>Plugga och håll igång →</button></section><section className="profile-section next-level"><span>🚀</span><h2>Nästa level</h2><p>Du behöver <strong>{level.xpToNextLevel} XP</strong> till Level {level.level + 1}.</p><ProgressBar value={level.progress} /></section><section className="profile-section dev-tools"><p className="eyebrow">UTVECKLARVERKTYG</p><h2>Testa nivåer från början</h2><p>Återställer bara nivåer och aktiviteter. XP, avatar och profil behålls.</p><button className="reset-progress-button" onClick={resetProgress}>↺ Återställ testprogress</button></section></aside></div>
  </main>
}

export default Profile
