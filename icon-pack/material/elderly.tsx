import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12.5 5.25C13.6 5.25 14.5 4.35 14.5 3.25C14.5 2.15 13.6 1.25 12.5 1.25C11.4 1.25 10.5 2.15 10.5 3.25C10.5 4.35 11.4 5.25 12.5 5.25ZM19 12.25V22.75H18V12.25C18 11.97 17.78 11.75 17.5 11.75C17.22 11.75 17 11.97 17 12.25V13.25H16V12.56C14.54 12.18 13.3 11.27 12.49 10.04C12.18 10.91 12 11.82 12 12.75C12 12.98 12.02 13.21 12.03 13.44L14 16.25V22.75H12V17.75L10.22 15.21L10 18.75L7 22.75L5.4 21.55L8 18.08V12.75C8 11.6 8.18 10.46 8.5 9.36L7 10.21V13.75H5V9.05L10.4 5.98V5.99C10.99 5.68 11.72 5.66 12.34 6.02C12.7 6.23 12.97 6.53 13.14 6.87L13.93 8.54C14.58 9.85 15.94 10.75 17.5 10.75C18.33 10.75 19 11.42 19 12.25Z" />
    </Svg>
  )
}

Icon.displayName = 'Elderly'

/**
 * Material Icon: Elderly
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:elderly Material Icon Docs}
 */
export const Elderly = memo(Icon)
