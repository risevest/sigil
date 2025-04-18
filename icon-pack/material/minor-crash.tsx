import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M18.92 9.01C18.72 8.42 18.16 8 17.5 8H6.5C5.84 8 5.29 8.42 5.08 9.01L3 15V23C3 23.55 3.45 24 4 24H5C5.55 24 6 23.55 6 23V22H18V23C18 23.55 18.45 24 19 24H20C20.55 24 21 23.55 21 23V15L18.92 9.01ZM6.85 10H17.14L18.18 13H5.81L6.85 10ZM19 20H5V15H19V20ZM6 17.5C6 16.67 6.67 16 7.5 16C8.33 16 9 16.67 9 17.5C9 18.33 8.33 19 7.5 19C6.67 19 6 18.33 6 17.5ZM15 17.5C15 16.67 15.67 16 16.5 16C17.33 16 18 16.67 18 17.5C18 18.33 17.33 19 16.5 19C15.67 19 15 18.33 15 17.5ZM9.41 5L8 6.41L5 3.41L6.41 2L9.41 5ZM16 6.41L14.59 5L17.59 2L19 3.41L16 6.41ZM13 5H11V0H13V5Z" />
    </Svg>
  )
}

Icon.displayName = 'MinorCrash'

/**
 * Material Icon: Minor Crash
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:minor_crash Material Icon Docs}
 */
export const MinorCrash = memo(Icon)
