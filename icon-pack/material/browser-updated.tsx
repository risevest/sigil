import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M22 13V16C22 17.1 21.1 18 20 18H17L18 19V21H6V19L7 18H4C2.9 18 2 17.1 2 16V5C2 3.9 2.9 3 4 3H12V5H4V16H20V13H22ZM15 15L10 10L11.41 8.59L14 11.17V3H16V11.17L18.59 8.59L20 10L15 15Z" />
    </Svg>
  )
}

Icon.displayName = 'BrowserUpdated'

/**
 * Material Icon: Browser Updated
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:browser_updated Material Icon Docs}
 */
export const BrowserUpdated = memo(Icon)
