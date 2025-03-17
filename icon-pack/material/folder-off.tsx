import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20.655 5.29453H12.655L10.655 3.29453H7.825L11.825 7.29453H20.655V16.4645L22.415 18.2245C22.565 17.9445 22.655 17.6345 22.655 17.2945V7.29453C22.655 6.19453 21.755 5.29453 20.655 5.29453Z" />
      <Path d="M2.755 1.39453L1.345 2.80453L2.905 4.36453C2.755 4.64453 2.665 4.95453 2.665 5.29453L2.655 17.2945C2.655 18.3945 3.555 19.2945 4.655 19.2945H17.825L21.135 22.6045L22.545 21.1945L2.755 1.39453ZM4.655 17.2945V6.12453L15.825 17.2945H4.655Z" />
    </Svg>
  )
}

Icon.displayName = 'FolderOff'

/**
 * Material Icon: Folder Off
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:folder_off Material Icon Docs}
 */
export const FolderOff = memo(Icon)
