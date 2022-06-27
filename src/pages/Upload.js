import React, {useState} from 'react';

export default function Upload() {
  const [fileInputState, setFileInputState] = useState('');
  const [previewSource, setPreviewSource] = useState('');
  const [selectedFile, setSelectedFile] = useState('');
  const handleFileInputChange = e => {
    const file = e.target.files[0];
    previewFile(file);
  };

  const previewFile = file => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const handleSubmitFile =(e) => {
    e.preventDefault();
    if(!selectedFile) return;
    uploadImage(previewsSource);
    

  }

  const uploadImage = (base64EncodedImage) => {
    console.log(base64EncodedImage);

  }
  return (
    <div>
      <h1>Upload</h1>
      <form onSubmit={handleSubmitFile}>
        <input
          type="file"
          name="image"
          onChange={handleFileInputChange}
          value={fileInputState}
          className="form-input"
        />
        <button className="button" type="button">
          Add photo
        </button>
      </form>
      {previewSource && (
        <img src={previewSource} alt="" style={{height: '200px'}} />
      )}
    </div>
  );
}
