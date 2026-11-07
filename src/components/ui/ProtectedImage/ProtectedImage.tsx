import './ProtectedImage.scss'

type ProtectedImageProps = {
  src: string
  alt: string
}

/** A product screenshot with a light watermark that cannot be dragged out or saved from the context menu. */
export function ProtectedImage({ src, alt }: ProtectedImageProps) {
  return (
    <span className="protected">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        draggable={false}
        onContextMenu={(event) => event.preventDefault()}
      />
      <span className="protected__mark" aria-hidden="true">
        TeamFlow · Demo
      </span>
    </span>
  )
}
