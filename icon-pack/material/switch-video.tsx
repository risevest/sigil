import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M8 13H12V15L15 12L12 9V11H8V9L5 12L8 15V13ZM18 9.5V6C18 5.45 17.55 5 17 5H3C2.45 5 2 5.45 2 6V18C2 18.55 2.45 19 3 19H17C17.55 19 18 18.55 18 18V14.5L22 18.5V5.5L18 9.5ZM16 17H4V7H16V17Z" />
    </Svg>
  )
}

Icon.displayName = 'SwitchVideo'

/**
 * Material Icon: Switch Video
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:switch_video Material Icon Docs}
 */
export const SwitchVideo = memo(Icon)
