type VideoPlayerProps = {
  url: string;
  className: string;
};


const VideoPlayer = (props: VideoPlayerProps): JSX.Element => {
  const { url, className } = props;
  return (
    <iframe
      className={className}
      src={url}
      title='YouTube video player'
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  );
};

export default VideoPlayer;