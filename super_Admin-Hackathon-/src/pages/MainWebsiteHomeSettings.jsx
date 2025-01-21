import React, { useState } from 'react';
import axios from 'axios'; 
import './MainWebsiteHomeSettings.css';

function MainWebsiteHomeSettings() {
  const [bannerImage, setBannerImage] = useState(null);
  const [themeText, setThemeText] = useState('');

  const handleFileChange = (event) => {
    setBannerImage(event.target.files[0]);
  };

  const handleTextChange = (event) => {
    setThemeText(event.target.innerText);
  };

  const handleBannerApply = async () => {
    if (bannerImage) {
      const formData = new FormData();
      formData.append('image', bannerImage);

      try {
        const response = await axios.post('https://run.mocky.io/v3/27f70443-980f-4cd5-a8f2-3884524acda3', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        if (response.status === 200) {
          alert('Banner image updated successfully!');
        } else {
          alert('Failed to update banner image');
        }
      } catch (error) {
        console.error('Error uploading banner:', error);
        alert('Error uploading banner');
      }
    }
  };

  const handleTextApply = async () => {
    if (themeText) {
      const data = {
        text: themeText,
      };

      try {
        const response = await axios.post('https://run.mocky.io/v3/d3837a15-7333-431d-ba1f-74e2ac39587d', data, {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.status === 200) {
          alert('Theme text updated successfully!');
        } else {
          alert('Failed to update theme text');
        }
      } catch (error) {
        console.error('Error updating text:', error);
        alert('Error updating text');
      }
    }
  };

  return (
    <>
      <div className="home-settings-body">
        <div className="change-banner">
          <h1>Select New Banner</h1>
          <div>
            <input type="file" onChange={handleFileChange} />
          </div>
          <button onClick={handleBannerApply}>Apply</button>
        </div>
        <div className="change-theme-text">
          <h2>Change Theme Text</h2>
          <p style={{ color: 'black', fontWeight: 'bold' }}>
            Note: Given Theme text is editable.
          </p>
          <p
            contentEditable
            suppressContentEditableWarning
            onInput={handleTextChange}
            style={{ border: '1px solid white', marginTop: '10px', padding: '10px' }}
          >
            {themeText || 'Lorem ipsum dolor sit amet consectetur adipisicing elit...'}
          </p>

          <button onClick={handleTextApply}>Apply</button>
        </div>
      </div>
    </>
  );
}

export default MainWebsiteHomeSettings;
