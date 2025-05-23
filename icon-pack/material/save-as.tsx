import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19.8 11.4V6L15.8 2H3.79999C2.68999 2 1.79999 2.9 1.79999 4V18C1.79999 19.1 2.68999 20 3.79999 20H11.2L13.2 18H3.79999V4H14.97L17.8 6.83V13.4L19.8 11.4ZM13.8 14C13.8 15.66 12.46 17 10.8 17C9.13999 17 7.79999 15.66 7.79999 14C7.79999 12.34 9.13999 11 10.8 11C12.46 11 13.8 12.34 13.8 14ZM4.79999 5H13.8V9H4.79999V5ZM18.79 15.25L20.56 17.02L15.57 22H13.8V20.23L18.79 15.25ZM22.05 15.51L21.2 16.36L19.43 14.59L20.28 13.74C20.48 13.54 20.79 13.54 20.99 13.74L22.05 14.8C22.25 15 22.25 15.32 22.05 15.51Z" />
    </Svg>
  )
}

Icon.displayName = 'SaveAs'

/**
 * Material Icon: Save As
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:save_as Material Icon Docs}
 */
export const SaveAs = memo(Icon)
