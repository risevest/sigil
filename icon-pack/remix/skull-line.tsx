import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12V16H7C7.55228 16 8 16.4477 8 17V20H16V17C16 16.4477 16.4477 16 17 16H20V12ZM18 18V21C18 21.5523 17.5523 22 17 22H7C6.44772 22 6 21.5523 6 21V18H3C2.44772 18 2 17.5523 2 17V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V17C22 17.5523 21.5523 18 21 18H18ZM7.5 14C6.67157 14 6 13.3284 6 12.5C6 11.6716 6.67157 11 7.5 11C8.32843 11 9 11.6716 9 12.5C9 13.3284 8.32843 14 7.5 14ZM16.5 14C15.6716 14 15 13.3284 15 12.5C15 11.6716 15.6716 11 16.5 11C17.3284 11 18 11.6716 18 12.5C18 13.3284 17.3284 14 16.5 14Z" />
    </Svg>
  )
}

Icon.displayName = 'SkullLine'

/**
 * Remix Icon: Skull Line
 * @see {@link https://remixicon.com/icon/skull-line Remix Icon Docs}
 */
export const SkullLine = memo(Icon)
