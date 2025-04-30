import React, { useState } from 'react';

const App: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);

  const handleGenerate = async () => {
    setLoading(true);
    setAudioUrl(null);

    // TODO: Replace with actual API call
    setTimeout(() => {
      const fakeUrl = 'https://example.com/fake-music-file.mp3'; // Replace later
      setAudioUrl(fakeUrl);
      setLoading(false);
    }, 2000);
  };

  // const response = await fetch('https://your-backend.com/generate', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ prompt }),
  // });
  // const { audioUrl } = await response.json();
  // setAudioUrl(audioUrl);
  

  return (
    <div style={{ padding: 40, fontFamily: 'sans-serif', maxWidth: 600, margin: '0 auto' }}>
      <h1>Music Generator Demo</h1>
      <textarea
        placeholder="Enter your music prompt..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        style={{ width: '100%', height: 100, marginBottom: 20 }}
      />
      <button onClick={handleGenerate} disabled={loading || !prompt}>
        {loading ? 'Generating...' : 'Generate'}
      </button>

      {audioUrl && (
        <div style={{ marginTop: 20 }}>
          <audio controls src={audioUrl} />
          <div>
            <a href={audioUrl} download="generated-music.mp3">Download</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
