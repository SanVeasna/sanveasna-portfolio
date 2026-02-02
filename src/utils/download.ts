const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/San-Veasna.pdf";
    link.download = "San-Veasna.pdf";
    link.click();
  }

export default handleDownload;