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
          d="M14 13a1 1 0 0 1 .993.883L15 14v6a1 1 0 0 1-1.993.117L13 20v-6a1 1 0 0 1 1-1m3 4.5a1 1 0 0 1 1 1V20a1 1 0 1 1-2 0v-1.5a1 1 0 0 1 1-1m3-4.5a1 1 0 0 1 .993.883L21 14v6a1 1 0 0 1-1.993.117L19 20v-6a1 1 0 0 1 1-1M9 13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2zm0 2H5v4h4zm8-2a1 1 0 0 1 .993.883L18 14v1.5a1 1 0 0 1-1.993.117L16 15.5V14a1 1 0 0 1 1-1M9 3a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm10 0a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM9 5H5v4h4zm10 0h-4v4h4z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'QrcodeLine'

/**
 * MingCute Icon: Qrcode Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const QrcodeLine = memo(Icon)
