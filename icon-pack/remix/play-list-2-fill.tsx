import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M22 18V20H2V18H22ZM2 3.5L10 8.5L2 13.5V3.5ZM22 11V13H12V11H22ZM22 4V6H12V4H22Z" />
    </Svg>
  )
}

Icon.displayName = 'PlayList2Fill'

/**
 * Remix Icon: Play List 2 Fill
 * @see {@link https://remixicon.com/icon/play-list-2-fill Remix Icon Docs}
 */
export const PlayList2Fill = memo(Icon)
