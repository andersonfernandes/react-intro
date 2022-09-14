import LoadingGif from '../assets/loading.gif'

export default function Loading({ width, height }) {
  return <img width={width} height={height} src={LoadingGif} alt="Loading animation" />
}
