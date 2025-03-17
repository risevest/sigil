import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M11 16.5H13C13 17.05 12.55 17.5 12 17.5C11.45 17.5 11 17.05 11 16.5ZM15 15V12.66C15 11.12 14.19 9.84 12.75 9.5V9.25C12.75 8.84 12.41 8.5 12 8.5C11.59 8.5 11.25 8.84 11.25 9.25V9.5C9.82 9.84 9 11.12 9 12.66V15H8V16H16V15H15ZM12 5.5L6 10V19H18V10L12 5.5ZM12 3L20 9V21H4V9L12 3Z" />
    </Svg>
  )
}

Icon.displayName = 'Doorbell'

/**
 * Material Icon: Doorbell
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:doorbell Material Icon Docs}
 */
export const Doorbell = memo(Icon)
