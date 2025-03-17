import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19 4H5C3.89 4 3 4.9 3 6V18C3 19.1 3.89 20 5 20H9V18H5V8H19V18H15V20H19C20.1 20 21 19.1 21 18V6C21 4.9 20.11 4 19 4ZM12 10L8 14H11V20H13V14H16L12 10Z" />
    </Svg>
  )
}

Icon.displayName = 'OpenInBrowser'

/**
 * Material Icon: Open In Browser
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:open_in_browser Material Icon Docs}
 */
export const OpenInBrowser = memo(Icon)
