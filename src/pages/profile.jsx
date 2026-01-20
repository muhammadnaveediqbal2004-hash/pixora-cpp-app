import { useState } from "react";
import "./profile.css";

function Profile() {
    const [isEditing, setIsEditing] = useState(false);
    const [profile, setProfile] = useState({
        // i put some dummy data
        username: "CreativeMind",
        bio: "Digital artist exploring the intersection of code and color.",
        website: "www.pixora.art",
        mood: "Inspired"
    });

    const handleSave = () => {
        setIsEditing(false);
        alert("Profile updated successfully!");
    };

    return (
        <div className="profile-container">
            <div className="profile-card">
                <div className="profile-header">
                    <div className="avatar">
                      {profile.username[0]}
                    </div>
                    {!isEditing ? (
                        <>
                            <h1>@{profile.username}</h1>
                            <p className="mood-tag">{profile.mood}</p>
                            <div className="bio-section">
                                <p>
                                    <strong>
                                      Bio:
                                    </strong> 
                                  {profile.bio}
                                  </p>
                                <p>
                                    <strong>
                                      Web:
                                    </strong> 
                                  <a href="#">
                                      {profile.website}
                                  </a>
                                </p>
                            </div>
                            <button className="edit-btn" onClick={() => setIsEditing(true)}>
                                Edit Profile
                            </button>
                        </>
                    ) : (
                        <div className="edit-form">
                            <label>Username</label>
                            <input 
                                type="text" 
                                value={profile.username} 
                                onChange={(e) => setProfile({...profile, username: e.target.value})} 
                            />
                            
                            <label>Bio (Tell your story)</label>
                            <textarea 
                                value={profile.bio} 
                                onChange={(e) => setProfile({...profile, bio: e.target.value})} 
                            />

                            <label>Website</label>
                            <input 
                                type="text" 
                                value={profile.website} 
                                onChange={(e) => setProfile({...profile, website: e.target.value})} 
                            />

                            <label>Your Creative Mood</label>
                            <select 
                                value={profile.mood} 
                                onChange={(e) => setProfile({...profile, mood: e.target.value})}
                            >
                                <option> Inspired</option>
                                <option> Caffeinated</option>
                                <option> Late Night Grind</option>
                                <option> Dreamy</option>
                                <option> Focused</option>
                            </select>

                            <div className="button-group">
                                <button className="save-btn" onClick={handleSave}>Save Changes</button>
                                <button className="cancel-btn" onClick={() => setIsEditing(false)}>Cancel</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Profile;