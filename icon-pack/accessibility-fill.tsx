import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM13.5 7C13.5 7.82843 12.8284 8.5 12 8.5C11.1716 8.5 10.5 7.82843 10.5 7C10.5 6.17157 11.1716 5.5 12 5.5C12.8284 5.5 13.5 6.17157 13.5 7ZM6.62891 10.4285L7.37107 8.57129C8.82152 9.14306 10.4427 9.49988 12 9.49988C13.5595 9.49988 15.1728 9.13901 16.6264 8.57225C16.6291 8.57118 17.3843 10.4233 17.359 10.4332C16.2818 10.8534 15.1409 11.1471 13.9999 11.3301C13.9999 12.2004 13.9149 13.0939 14.3166 13.8974L15.8943 17.0528L14.1055 17.9472L12.5527 14.8416C12.448 14.6323 12.234 14.5 11.9999 14.5C11.7658 14.5 11.5518 14.6322 11.4471 14.8416L9.89432 17.9472L8.10547 17.0528L9.68318 13.8974C10.0849 13.0939 9.9999 12.2004 9.9999 11.3301C8.85731 11.1468 7.70479 10.8579 6.62891 10.4285Z" />
    </Svg>
  )
}

Icon.displayName = 'AccessibilityFill'

/**
 * Remix Icon: Accessibility Fill
 * @see {@link https://remixicon.com/icon/accessibility-fill Remix Icon Docs}
 */
export const AccessibilityFill = memo(Icon)