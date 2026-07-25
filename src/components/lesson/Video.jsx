import { extractYouTubeId } from '../../utils/youtube'

export default function Video({ video }) {
  const youtubeId = extractYouTubeId(video.url)

  return (
    <div className="video-tab">
      {youtubeId ? (
        <div className="video-embed">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${youtubeId}`}
            title="Video bài học"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : (
        <div className="video-placeholder">
          <button className="video-placeholder__play" aria-label="Phát video">
            ▶
          </button>
        </div>
      )}
      {video.caption && <p className="video-caption">{video.caption}</p>}
    </div>
  )
}
