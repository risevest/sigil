import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M13.0003 21H18.0003V23H6.00032V21H11.0003V19.9506C7.70689 19.6236 4.88351 17.6987 3.31641 14.9622L5.05319 13.9697C6.43208 16.3776 9.02674 18 12.0003 18C16.4186 18 20.0003 14.4182 20.0003 9.99995C20.0003 7.02637 18.378 4.43171 15.9701 3.05282L16.9626 1.31604C19.9724 3.03965 22.0003 6.28297 22.0003 9.99995C22.0003 15.1853 18.0536 19.4489 13.0003 19.9506V21ZM12.0003 17C8.13433 17 5.00032 13.8659 5.00032 9.99995C5.00032 6.13396 8.13433 2.99995 12.0003 2.99995C15.8663 2.99995 19.0003 6.13396 19.0003 9.99995C19.0003 13.8659 15.8663 17 12.0003 17Z" />
    </Svg>
  )
}

Icon.displayName = 'GlobeFill'

/**
 * Remix Icon: Globe Fill
 * @see {@link https://remixicon.com/icon/globe-fill Remix Icon Docs}
 */
export const GlobeFill = memo(Icon)
