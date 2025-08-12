"use client";

export default function DownloadPage() {
  const handleDownload = async () => {
    try {
      const res = await fetch("/api/download");
      if (!res.ok) throw new Error("Download failed");

      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "resume.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch (error) {
      console.error(error);
      alert("Download failed!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Download Resume</h1>
      <button
        onClick={handleDownload}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Download
      </button>
    </div>
  );
}
