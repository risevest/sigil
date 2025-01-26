import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20 5C20 6.65685 18.6569 8 17 8C15.3431 8 14 6.65685 14 5C14 3.34315 15.3431 2 17 2C18.6569 2 20 3.34315 20 5ZM7 3C4.79086 3 3 4.79086 3 7V9H5V7C5 5.89543 5.89543 5 7 5H10V3H7ZM17 21C19.2091 21 21 19.2091 21 17V15H19V17C19 18.1046 18.1046 19 17 19H14V21H17ZM7 16C8.65685 16 10 14.6569 10 13C10 11.3431 8.65685 10 7 10C5.34315 10 4 11.3431 4 13C4 14.6569 5.34315 16 7 16ZM17 9C14.7909 9 13 10.7909 13 13H21C21 10.7909 19.2091 9 17 9ZM3 21C3 18.7909 4.79086 17 7 17C9.20914 17 11 18.7909 11 21H3Z" />
    </Svg>
  )
}

Icon.displayName = 'P2pFill'

/**
 * Remix Icon: P2p Fill
 * @see {@link https://remixicon.com/icon/p2p-fill Remix Icon Docs}
 */
export const P2pFill = memo(Icon)
