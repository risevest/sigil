import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M10.01 20.76C10.01 21.86 10.9 22.75 12 22.75C13.1 22.75 13.99 21.86 13.99 20.76H10.01ZM12 5.75C14.76 5.75 17 7.99 17 10.75V17.75H7V10.75C7 7.99 9.24 5.75 12 5.75ZM12 1.25C11.17 1.25 10.5 1.92 10.5 2.75V3.92C7.36 4.6 5 7.4 5 10.75V16.75L3 18.75V19.75H21V18.75L19 16.75V10.75C19 7.4 16.64 4.6 13.5 3.92V2.75C13.5 1.92 12.83 1.25 12 1.25ZM13 7.75H11V10.75H8V12.75H11V15.75H13V12.75H16V10.75H13V7.75Z" />
    </Svg>
  )
}

Icon.displayName = 'AddAlert'

/**
 * Material Icon: Add Alert
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:add_alert Material Icon Docs}
 */
export const AddAlert = memo(Icon)
