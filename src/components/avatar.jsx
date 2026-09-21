function Avatar({ avatar, size = "medium" }) {
  const styles = {
    "--avatar-skin": avatar.skin,
    "--avatar-hair": avatar.hair,
    "--avatar-eyes": avatar.eyes,
    "--avatar-outfit": avatar.outfit,
  }

  return <div className={`avatar-character ${size}`} style={styles} aria-label="Din avatar">
    {avatar.headwear && <span className="avatar-headwear">{avatar.headwear}</span>}
    <span className="avatar-hair" />
    <span className="avatar-face"><i /><i /></span>
    {avatar.accessory && <span className="avatar-accessory">{avatar.accessory}</span>}
    <span className="avatar-body" />
  </div>
}

export default Avatar
