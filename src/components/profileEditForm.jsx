import { useState } from "react"

function ProfileEditForm({ name, onSave }) {
  const [value, setValue] = useState(name)
  const [error, setError] = useState("")
  const [saved, setSaved] = useState(false)
  const submit = (event) => {
    event.preventDefault()
    const trimmedName = value.trim()
    if (!trimmedName) { setError("Skriv ett namn innan du sparar."); setSaved(false); return }
    onSave(trimmedName)
    setValue(trimmedName)
    setError("")
    setSaved(true)
  }
  return <section className="profile-section profile-edit"><div className="section-heading"><div><p className="eyebrow">PROFILINSTÄLLNINGAR</p><h2>Redigera profil</h2></div></div><form onSubmit={submit} noValidate><label htmlFor="profile-name">Visningsnamn<input id="profile-name" value={value} onChange={(event) => { setValue(event.target.value); setSaved(false) }} required aria-describedby="profile-name-feedback" /></label>{error && <p id="profile-name-feedback" className="form-feedback error">{error}</p>}{saved && <p id="profile-name-feedback" className="form-feedback success">Profilen är sparad.</p>}<button className="primary-button" type="submit">Spara namn</button></form></section>
}

export default ProfileEditForm
