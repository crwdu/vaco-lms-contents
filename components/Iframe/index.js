export default function VideoContent({ url }) {
  return (
    <iframe
      src={url}
      width="100%"
      height="100%"
      frameBorder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      allowFullScreen=""
      style={{ display: "block" }}
    ></iframe>
  );
}
