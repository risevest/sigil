import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12ZM12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5ZM12 9.49988C10.4427 9.49988 8.82151 9.14306 7.37106 8.57129L6.62891 10.4285C7.70479 10.8579 8.8573 11.1468 9.99989 11.3301C9.99989 12.2004 10.0849 13.0939 9.68317 13.8974L8.10546 17.0528L9.89432 17.9472L11.4471 14.8416C11.5518 14.6322 11.7658 14.5 11.9999 14.5C12.234 14.5 12.448 14.6323 12.5527 14.8416L14.1055 17.9472L15.8943 17.0528L14.3166 13.8974C13.9149 13.0939 13.9999 12.2004 13.9999 11.3301C15.1409 11.1471 16.2818 10.8534 17.359 10.4332C17.3843 10.4233 16.6291 8.57118 16.6264 8.57225C15.1728 9.13901 13.5595 9.49988 12 9.49988Z" />
    </Svg>
  )
}

Icon.displayName = 'AccessibilityLine'

/**
 * Remix Icon: Accessibility Line
 * @see {@link https://remixicon.com/icon/accessibility-line Remix Icon Docs}
 */
export const AccessibilityLine = memo(Icon)