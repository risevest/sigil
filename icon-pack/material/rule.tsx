import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M16.4499 11.0348L12.9099 7.49484L14.3199 6.08484L16.4399 8.20484L20.6799 3.96484L22.0899 5.37484L16.4499 11.0348ZM10.9099 7.03484H1.90991V9.03484H10.9099V7.03484ZM20.9099 13.4448L19.4999 12.0348L16.9099 14.6248L14.3199 12.0348L12.9099 13.4448L15.4999 16.0348L12.9099 18.6248L14.3199 20.0348L16.9099 17.4448L19.4999 20.0348L20.9099 18.6248L18.3199 16.0348L20.9099 13.4448ZM10.9099 15.0348H1.90991V17.0348H10.9099V15.0348Z" />
    </Svg>
  )
}

Icon.displayName = 'Rule'

/**
 * Material Icon: Rule
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:rule Material Icon Docs}
 */
export const Rule = memo(Icon)
