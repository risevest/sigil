import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" height={size} width={size} {...otherProps}>
      <G fill="none" fillRule="evenodd">
        <Path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="m12.616 2.212 5.877 4.408a1.1 1.1 0 0 1 0 1.76L13.667 12l4.826 3.62a1.1 1.1 0 0 1 0 1.76l-5.877 4.408A1.01 1.01 0 0 1 11 20.98V14l-4.4 3.3a1 1 0 1 1-1.2-1.6l4.933-3.7L5.4 8.3a1 1 0 1 1 1.2-1.6L11 10V3.02c0-.832.95-1.307 1.616-.808M13 14v5l3.333-2.5zm0-9v5l3.333-2.5z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'BluetoothLine'

/**
 * MingCute Icon: Bluetooth Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const BluetoothLine = memo(Icon)
