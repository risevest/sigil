import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M15.225 11.79C16.195 11.12 16.875 10.02 16.875 9C16.875 6.74 15.125 5 12.875 5H6.625V19H13.665C15.755 19 17.375 17.3 17.375 15.21C17.375 13.69 16.515 12.39 15.225 11.79ZM9.625 7.5H12.625C13.455 7.5 14.125 8.17 14.125 9C14.125 9.83 13.455 10.5 12.625 10.5H9.625V7.5ZM13.125 16.5H9.625V13.5H13.125C13.955 13.5 14.625 14.17 14.625 15C14.625 15.83 13.955 16.5 13.125 16.5Z" />
    </Svg>
  )
}

Icon.displayName = 'FormatBold'

/**
 * Material Icon: Format Bold
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:format_bold Material Icon Docs}
 */
export const FormatBold = memo(Icon)
