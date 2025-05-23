import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M6.26001 9H2.76001V15H4.26001V13H5.36001L6.26001 15H7.76001L6.86001 12.9C7.36001 12.6 7.76001 12.1 7.76001 11.5V10.5C7.76001 9.7 7.06001 9 6.26001 9ZM6.26001 11.5H4.26001V10.5H6.26001V11.5Z" />
      <Path d="M10.01 9L8.51001 15H10.01L10.39 13.5H12.14L12.51 15H14.01L12.51 9H10.01ZM10.76 12L11.01 11H11.51L11.76 12H10.76Z" />
      <Path d="M19.74 9L19 12L18.26 9H16.74L16 12L15.26 9H13.76L15.26 15H16.74L17.5 11.96L18.26 15H19.74L21.24 9H19.74Z" />
    </Svg>
  )
}

Icon.displayName = 'RawOn'

/**
 * Material Icon: Raw On
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:raw_on Material Icon Docs}
 */
export const RawOn = memo(Icon)
