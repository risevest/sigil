import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M8.3685 12L13.1162 3.03212L14.8838 3.9679L10.6315 12L14.8838 20.0321L13.1162 20.9679L8.3685 12Z" />
    </Svg>
  )
}

Icon.displayName = 'ArrowLeftWideLine'

/**
 * Remix Icon: Arrow Left Wide Line
 * @see {@link https://remixicon.com/icon/arrow-left-wide-line Remix Icon Docs}
 */
export const ArrowLeftWideLine = memo(Icon)
