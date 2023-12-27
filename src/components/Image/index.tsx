import { useState } from "react";
import { InView } from 'react-intersection-observer'

interface AsyncImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  inView: boolean;
}

export const Image = ({ inView, ...imageProps }: ImageProps) => {
  const [status, setStatus] = useState('loading')

  return (
    <>
      { status === 'loading' && (<div className="animated-background" />)}
      { inView && (
        <img 
          {...imageProps}
          onLoad={() => setStatus('loaded')}
          onError={() => setStatus('failed')}
        />
      )}
      { status === 'failed' && (<div>error</div>)}
    </>
  )
}

export default function AsyncImage(imageProps: AsyncImageProps) {
  return (
    <InView triggerOnce>
      {({ ref, inView }) => (
        <div ref={ref}>
          <Image inView={inView} {...imageProps} />
        </div>
      )}
    </InView>
  )
}
