const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/SanVeasna.pdf";
    link.download = "SanVeasna.pdf";
    link.click();
  }

export default handleDownload;