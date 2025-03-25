const FileViewer = ({ fileUrl }) => {
    if (!fileUrl) {
      return <p>Please provide a valid file URL.</p>;
    }
  
    return (
      <div style={{ width: "100%", height: "80vh", border: "1px solid #ccc" }}>
        <iframe
          src={fileUrl}
          title="File Viewer"
          width="100%"
          height="100%"
          style={{ border: "none" }}
        />
      </div>
    );
  };
  
  export default FileViewer;