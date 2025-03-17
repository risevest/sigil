import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19.5013 7.5L20.4413 5.44L22.5013 4.5L20.4413 3.56L19.5013 1.5L18.5613 3.56L16.5013 4.5L18.5613 5.44L19.5013 7.5Z" />
      <Path d="M17.2113 9.62L14.3813 6.79C14.1813 6.6 13.9313 6.5 13.6713 6.5C13.4113 6.5 13.1613 6.6 12.9613 6.79L1.79128 17.96C1.40128 18.35 1.40128 18.98 1.79128 19.37L4.62128 22.2C4.82128 22.4 5.07128 22.5 5.33128 22.5C5.59128 22.5 5.84128 22.4 6.04128 22.21L17.2113 11.04C17.6013 10.65 17.6013 10.01 17.2113 9.62ZM13.6713 8.92L15.0813 10.33L13.9113 11.5L12.5013 10.09L13.6713 8.92ZM5.33128 20.09L3.92128 18.68L11.0913 11.5L12.5013 12.91L5.33128 20.09Z" />
    </Svg>
  )
}

Icon.displayName = 'AutoFixNormal'

/**
 * Material Icon: Auto Fix Normal
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:auto_fix_normal Material Icon Docs}
 */
export const AutoFixNormal = memo(Icon)
