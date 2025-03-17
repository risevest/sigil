import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M7.485 3.29453H20.655C21.765 3.29453 22.655 4.19453 22.655 5.29453V17.2945C22.655 17.6345 22.565 17.9545 22.425 18.2345L20.655 16.4645V7.29453H11.485L7.485 3.29453ZM21.145 22.6045L17.825 19.2945H4.655C3.545 19.2945 2.655 18.3945 2.655 17.2945V5.29453C2.655 4.95453 2.735 4.63453 2.885 4.35453L1.345 2.80453L2.755 1.39453L22.555 21.1945L21.145 22.6045ZM15.825 17.2945L5.825 7.29453H4.655V17.2945H15.825Z" />
    </Svg>
  )
}

Icon.displayName = 'WebAssetOff'

/**
 * Material Icon: Web Asset Off
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:web_asset_off Material Icon Docs}
 */
export const WebAssetOff = memo(Icon)
