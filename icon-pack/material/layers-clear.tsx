import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M11.9301 5.56453L17.6701 10.0345L15.7801 11.5045L17.2101 12.9245L20.9301 10.0345L11.9301 3.03453L9.34005 5.05453L10.7601 6.47453L11.9301 5.56453ZM20.9301 15.1045L19.3001 13.8345L18.6301 14.3545L20.0601 15.7845L20.9301 15.1045ZM3.34005 1.89453L1.93005 3.30453L6.15005 7.52453L2.93005 10.0345L11.9301 17.0345L14.0301 15.4045L15.4501 16.8245L11.9201 19.5745L4.55005 13.8445L2.93005 15.1045L11.9301 22.1045L16.8801 18.2545L20.6601 22.0345L22.0701 20.6245L3.34005 1.89453ZM11.9301 14.5045L6.19005 10.0345L7.58005 8.95453L12.6001 13.9745L11.9301 14.5045Z" />
    </Svg>
  )
}

Icon.displayName = 'LayersClear'

/**
 * Material Icon: Layers Clear
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:layers_clear Material Icon Docs}
 */
export const LayersClear = memo(Icon)
