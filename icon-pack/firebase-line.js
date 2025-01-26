import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M9.22296 8.70695L6.91128 13.0414L8.00027 6.32592L9.22296 8.70695ZM10.3684 6.55928L7.69485 1.35292C7.47439 0.923595 6.83377 1.02489 6.75651 1.50129L4 18.4998L5.74819 19.5926L10.94 22.8375C11.5885 23.2428 12.4115 23.2428 13.06 22.8375L20 18.5L18.1424 5.96098C18.0828 5.5587 17.5934 5.39205 17.3007 5.67433L14.566 8.31132L12.4412 4.32721C12.2529 3.97426 11.7471 3.97426 11.5588 4.32721L10.3684 6.55928ZM13.0692 9.75472L8.66667 14L12 7.75L13.0692 9.75472ZM7.23219 18.1616L16.5911 9.137L17.8297 17.4979L12 21.1415L7.23219 18.1616Z" />
    </Svg>
  )
}

Icon.displayName = 'FirebaseLine'

/**
 * Remix Icon: Firebase Line
 * @see {@link https://remixicon.com/icon/firebase-line Remix Icon Docs}
 */
export const FirebaseLine = memo(Icon)