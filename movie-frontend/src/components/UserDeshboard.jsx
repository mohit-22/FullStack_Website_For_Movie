"use client"

import { useState, useEffect } from "react"
import {
  User,
  Phone,
  Mail,
  MapPin,
  Settings,
  Camera,
  Edit3,
  Save,
  Plus,
  Trash2,
  Globe,
  Clock,
  Flag,
  Eye,
  History,
  Star,
  CreditCard,
  Shield,
  Palette,
  Heart,
  UserX,
} from "lucide-react"
import "./UserDashboard.css"

const UserDashboard = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [activeTab, setActiveTab] = useState("Overview")
  const [editMode, setEditMode] = useState({
    name: false,
    phone: false,
    email: false,
    address: false,
    accountOptions: false,
  })

  const [profileData, setProfileData] = useState({
    name: "Mohit Garg",
    phone: "+91 6377781898",
    emails: ["mohitgarg@gmail.com"],
    newEmail: "",
    address: {
      line1: "IP9 North Jaredesh",
      line2: "mumbai 1294",
      country: "india",
      line3: "420 Farhab Palace",
      line4: "thana Road",
      city: "Pakushuil",
    },
    accountOptions: {
      language: "Hindi",
      timezone: "(GMT+6) Time in India",
      nationality: "India",
      memberId: "XYZ20150403096",
    },
  })

  // Load saved data when component mounts
  useEffect(() => {
    const savedImage = localStorage.getItem("profileImage")
    const savedProfile = localStorage.getItem("profileData")

    if (savedImage) setSelectedImage(savedImage)
    if (savedProfile) setProfileData(JSON.parse(savedProfile))
  }, [])

  // Save data whenever it changes
  useEffect(() => {
    localStorage.setItem("profileData", JSON.stringify(profileData))
  }, [profileData])

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      // Validate image file
      if (!file.type.match("image.*")) {
        alert("Please select an image file")
        return
      }

      // Limit file size to 2MB
      if (file.size > 2 * 1024 * 1024) {
        alert("Image size should be less than 2MB")
        return
      }
      const reader = new FileReader()
      reader.onloadend = () => {
        const imageDataUrl = reader.result
        setSelectedImage(imageDataUrl)
        localStorage.setItem("profileImage", imageDataUrl)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setProfileData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleEmailChange = (e, index) => {
    const newEmails = [...profileData.emails]
    newEmails[index] = e.target.value
    setProfileData((prev) => ({
      ...prev,
      emails: newEmails,
    }))
  }

  const handleAddEmail = () => {
    if (profileData.newEmail && !profileData.emails.includes(profileData.newEmail)) {
      setProfileData((prev) => ({
        ...prev,
        emails: [...prev.emails, prev.newEmail],
        newEmail: "",
      }))
    }
  }

  const handleRemoveEmail = (index) => {
    const newEmails = [...profileData.emails]
    newEmails.splice(index, 1)
    setProfileData((prev) => ({
      ...prev,
      emails: newEmails,
    }))
  }

  const handleAddressChange = (e) => {
    const { name, value } = e.target
    setProfileData((prev) => ({
      ...prev,
      address: {
        ...prev.address,
        [name]: value,
      },
    }))
  }

  const handleAccountOptionChange = (e) => {
    const { name, value } = e.target
    setProfileData((prev) => ({
      ...prev,
      accountOptions: {
        ...prev.accountOptions,
        [name]: value,
      },
    }))
  }

  const toggleEditMode = (field) => {
    setEditMode((prev) => ({
      ...prev,
      [field]: !prev[field],
    }))
  }

  const menuItems = [
    { name: "Overview", icon: Eye },
    { name: "Watchlist", icon: Heart },
    { name: "History", icon: History },
    { name: "Ratings", icon: Star },
    { name: "Subscriptions", icon: CreditCard },
    { name: "Settings", icon: Settings },
    { name: "Profile", icon: User },
    { name: "Security", icon: Shield },
    { name: "Theme", icon: Palette },
  ]

  return (
    <div className="user-dashboard">
      <div className="dashboard-header">
        <div className="header-content">
          <h1>User Profile Dashboard</h1>
          <p>Manage your account settings and preferences</p>
        </div>
        <div className="header-decoration"></div>
      </div>

      <div className="dashboard-container">
        {/* Left Sidebar */}
        <div className="sidebar">
          <div className="profile-section">
            <div className="profile-image-container">
              <div className="image-wrapper">
                <img
                  src={selectedImage || "/placeholder.svg?height=120&width=120"}
                  alt="Profile"
                  className="profile-image"
                />
                <div className="image-overlay">
                  <Camera size={20} />
                </div>
              </div>
              <label className="change-image-btn">
                <Camera size={16} />
                Change Photo
                <input type="file" accept="image/*" onChange={handleImageChange} style={{ display: "none" }} />
              </label>
            </div>

            <div className="profile-info">
              {editMode.name ? (
                <div className="edit-field">
                  <input
                    type="text"
                    name="name"
                    value={profileData.name}
                    onChange={handleInputChange}
                    className="modern-input"
                  />
                  <button onClick={() => toggleEditMode("name")} className="save-btn">
                    <Save size={14} />
                  </button>
                </div>
              ) : (
                <div className="profile-name">
                  <h3>{profileData.name}</h3>
                  <button className="edit-btn" onClick={() => toggleEditMode("name")}>
                    <Edit3 size={14} />
                  </button>
                </div>
              )}

              {editMode.phone ? (
                <div className="edit-field">
                  <input
                    type="tel"
                    name="phone"
                    value={profileData.phone}
                    onChange={handleInputChange}
                    className="modern-input"
                  />
                  <button onClick={() => toggleEditMode("phone")} className="save-btn">
                    <Save size={14} />
                  </button>
                </div>
              ) : (
                <div className="profile-phone">
                  <Phone size={16} />
                  <span>{profileData.phone}</span>
                  <button className="edit-btn" onClick={() => toggleEditMode("phone")}>
                    <Edit3 size={14} />
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="menu-section">
            <h3>BINGE WATCH</h3>
            <ul className="menu-list">
              {menuItems.map((item) => {
                const IconComponent = item.icon
                return (
                  <li
                    key={item.name}
                    className={activeTab === item.name ? "active" : ""}
                    onClick={() => setActiveTab(item.name)}
                  >
                    <IconComponent size={18} />
                    <span>{item.name}</span>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="main-content">
          <div className="settings-section">
            <div className="section-header">
              <Settings size={24} />
              <h2>Account Settings</h2>
            </div>

            <div className="setting-group">
              <div className="group-header">
                <User size={20} />
                <h3>Your Profile</h3>
              </div>
              <div className="selected-profile">
                <div className="profile-card">
                  <div className="profile-avatar">
                    <img src={selectedImage || "/placeholder.svg?height=60&width=60"} alt="Profile" />
                  </div>
                  <div className="profile-details">
                    <p className="profile-id">Selected 2Mv23</p>
                    <p className="profile-name-main">{profileData.name}</p>
                    <p className="profile-phone-main">{profileData.phone}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="setting-group">
              <div className="group-header">
                <Mail size={20} />
                <h3>Email Addresses</h3>
                <button className="edit-toggle-btn" onClick={() => toggleEditMode("email")}>
                  {editMode.email ? <Save size={16} /> : <Edit3 size={16} />}
                  {editMode.email ? "Save" : "Edit"}
                </button>
              </div>

              <div className="email-list">
                {profileData.emails.map((email, index) => (
                  <div key={index} className="email-item">
                    <Mail size={16} className="email-icon" />
                    {editMode.email ? (
                      <>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => handleEmailChange(e, index)}
                          className="modern-input"
                        />
                        <button className="remove-btn" onClick={() => handleRemoveEmail(index)}>
                          <Trash2 size={14} />
                        </button>
                      </>
                    ) : (
                      <span className="email-text">{email}</span>
                    )}
                  </div>
                ))}

                <div className="add-email">
                  <input
                    type="email"
                    placeholder="Add new email address"
                    value={profileData.newEmail}
                    onChange={(e) =>
                      setProfileData((prev) => ({
                        ...prev,
                        newEmail: e.target.value,
                      }))
                    }
                    className="modern-input"
                  />
                  <button className="add-btn" onClick={handleAddEmail}>
                    <Plus size={16} />
                    Add
                  </button>
                </div>
              </div>
            </div>

            <div className="setting-group">
              <div className="group-header">
                <MapPin size={20} />
                <h3>Address Information</h3>
                <button className="edit-toggle-btn" onClick={() => toggleEditMode("address")}>
                  {editMode.address ? <Save size={16} /> : <Edit3 size={16} />}
                  {editMode.address ? "Save" : "Edit"}
                </button>
              </div>

              <div className="address-section">
                <h4>Primary Address</h4>
                {editMode.address ? (
                  <div className="edit-address">
                    <input
                      type="text"
                      name="line1"
                      value={profileData.address.line1}
                      onChange={handleAddressChange}
                      placeholder="Address Line 1"
                      className="modern-input"
                    />
                    <input
                      type="text"
                      name="line2"
                      value={profileData.address.line2}
                      onChange={handleAddressChange}
                      placeholder="Address Line 2"
                      className="modern-input"
                    />
                    <input
                      type="text"
                      name="country"
                      value={profileData.address.country}
                      onChange={handleAddressChange}
                      placeholder="Country"
                      className="modern-input"
                    />
                    <input
                      type="text"
                      name="line3"
                      value={profileData.address.line3}
                      onChange={handleAddressChange}
                      placeholder="Address Line 3"
                      className="modern-input"
                    />
                    <input
                      type="text"
                      name="line4"
                      value={profileData.address.line4}
                      onChange={handleAddressChange}
                      placeholder="Address Line 4"
                      className="modern-input"
                    />
                    <input
                      type="text"
                      name="city"
                      value={profileData.address.city}
                      onChange={handleAddressChange}
                      placeholder="City"
                      className="modern-input"
                    />
                  </div>
                ) : (
                  <div className="address-display">
                    <p>
                      {profileData.address.line1}, {profileData.address.line2}
                    </p>
                    <p>{profileData.address.country}</p>
                    <p>
                      {profileData.address.line3}, {profileData.address.line4}
                    </p>
                    <p>{profileData.address.city}</p>
                  </div>
                )}
              </div>
            </div>

            <div className="setting-group">
              <div className="group-header">
                <Settings size={20} />
                <h3>Account Options</h3>
                <button className="edit-toggle-btn" onClick={() => toggleEditMode("accountOptions")}>
                  {editMode.accountOptions ? <Save size={16} /> : <Edit3 size={16} />}
                  {editMode.accountOptions ? "Save" : "Edit"}
                </button>
              </div>

              <div className="account-options">
                {editMode.accountOptions ? (
                  <div className="edit-account-options">
                    <div className="option-row">
                      <Globe size={16} />
                      <label>Language:</label>
                      <select
                        name="language"
                        value={profileData.accountOptions.language}
                        onChange={handleAccountOptionChange}
                        className="modern-select"
                      >
                        <option value="Bangla">Bangla</option>
                        <option value="English">English</option>
                        <option value="Hindi">Hindi</option>
                      </select>
                    </div>
                    <div className="option-row">
                      <Clock size={16} />
                      <label>Time zone:</label>
                      <select
                        name="timezone"
                        value={profileData.accountOptions.timezone}
                        onChange={handleAccountOptionChange}
                        className="modern-select"
                      >
                        <option value="(GMT+6) Time in Bangladesh">(GMT+6) Bangladesh</option>
                        <option value="(GMT+5.5) India">(GMT+5.5) India</option>
                        <option value="(GMT+8) Singapore">(GMT+8) Singapore</option>
                      </select>
                    </div>
                    <div className="option-row">
                      <Flag size={16} />
                      <label>Nationality:</label>
                      <select
                        name="nationality"
                        value={profileData.accountOptions.nationality}
                        onChange={handleAccountOptionChange}
                        className="modern-select"
                      >
                        <option value="Bangladesh">Bangladesh</option>
                        <option value="India">India</option>
                        <option value="USA">USA</option>
                        <option value="UK">UK</option>
                      </select>
                    </div>
                    <div className="option-row">
                      <User size={16} />
                      <label>Member ID:</label>
                      <span className="member-id">{profileData.accountOptions.memberId}</span>
                    </div>
                  </div>
                ) : (
                  <div className="account-options-display">
                    <div className="option-item">
                      <Globe size={16} />
                      <span>Language: {profileData.accountOptions.language}</span>
                    </div>
                    <div className="option-item">
                      <Clock size={16} />
                      <span>Time zone: {profileData.accountOptions.timezone}</span>
                    </div>
                    <div className="option-item">
                      <Flag size={16} />
                      <span>Nationality: {profileData.accountOptions.nationality}</span>
                    </div>
                    <div className="option-item">
                      <User size={16} />
                      <span>Member ID: {profileData.accountOptions.memberId}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="danger-zone">
              <button className="close-account-btn">
                <UserX size={18} />
                Close Your Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserDashboard
