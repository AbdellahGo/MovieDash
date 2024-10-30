
type Props = {
  containerStyles?: string,
  bigLoader?: boolean,
  smallLoader?: boolean
}

const Loader = ({ bigLoader, smallLoader, containerStyles }: Props) => {
  return (
    <div className={`${containerStyles}`}>
      <div className={`${bigLoader && 'big-loader'} ${smallLoader && 'small-loader'} loader`}></div>
    </div>
  )
}

export default Loader