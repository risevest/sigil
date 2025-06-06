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
          d="m11 14.404 2 2V19l1.483-1.113 1.429 1.429-3.296 2.472a1.01 1.01 0 0 1-1.61-.697L11 20.98zM12.524 2.15l.092.062 5.877 4.408a1.1 1.1 0 0 1 .104 1.673l-.104.087-4.97 3.728 6.962 6.963a1 1 0 0 1-1.32 1.497l-.094-.083L3.515 4.93a1 1 0 0 1 1.32-1.497l.094.083L11 9.585V3.02a1.01 1.01 0 0 1 1.524-.87M9.34 12.745l1.428 1.428L6.6 17.3a1 1 0 0 1-1.296-1.518L5.4 15.7zM13 5v5l3.332-2.5z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'BluetoothOffLine'

/**
 * MingCute Icon: Bluetooth Off Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const BluetoothOffLine = memo(Icon)
