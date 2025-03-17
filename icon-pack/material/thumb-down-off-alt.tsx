import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M15 2H6C5.17 2 4.46 2.5 4.16 3.22L1.14 10.27C1.05 10.5 1 10.74 1 11V13C1 14.1 1.9 15 3 15H9.31L8.36 19.57L8.33 19.89C8.33 20.3 8.5 20.68 8.77 20.95L9.83 22L16.42 15.41C16.78 15.05 17 14.55 17 14V4C17 2.9 16.1 2 15 2ZM15 14L10.66 18.34L12 13H3V11L6 4H15V14ZM19 2H23V14H19V2Z" />
    </Svg>
  )
}

Icon.displayName = 'ThumbDownOffAlt'

/**
 * Material Icon: Thumb Down Off Alt
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:thumb_down_off_alt Material Icon Docs}
 */
export const ThumbDownOffAlt = memo(Icon)
