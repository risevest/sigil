import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M2 18H12V20H2V18ZM2 11H16V13H2V11ZM2 4H22V6H2V4ZM19 15.1707V9H24V11H21V18C21 19.6569 19.6569 21 18 21C16.3431 21 15 19.6569 15 18C15 16.3431 16.3431 15 18 15C18.3506 15 18.6872 15.0602 19 15.1707ZM18 19C18.5523 19 19 18.5523 19 18C19 17.4477 18.5523 17 18 17C17.4477 17 17 17.4477 17 18C17 18.5523 17.4477 19 18 19Z" />
    </Svg>
  )
}

Icon.displayName = 'PlayListLine'

/**
 * Remix Icon: Play List Line
 * @see {@link https://remixicon.com/icon/play-list-line Remix Icon Docs}
 */
export const PlayListLine = memo(Icon)
