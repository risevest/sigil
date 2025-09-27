import { memo } from 'react'
import Svg, { G, Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <G fill="none" fillRule="evenodd">
        <Path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035q-.016-.005-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093q.019.005.029-.008l.004-.014-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M12 2a1 1 0 0 1 .78.375l2 2.5A1 1 0 0 1 14 6.5h-1v6.382l3-1.5V11a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v.382a2 2 0 0 1-1.106 1.789l-3.341 1.67a1 1 0 0 0-.553.895v.435a3.001 3.001 0 1 1-2.469.213L7.106 14.67A2 2 0 0 1 6 12.882v-1.15A2 2 0 0 1 7 8a2 2 0 0 1 1 3.732v1.15l3 1.5V6.5h-1a1 1 0 0 1-.78-1.625l2-2.5A1 1 0 0 1 12 2m0 16a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
        />
      </G>
    </Svg>
  )
})
Icon.displayName = 'UsbLine'
/**
 * MingCute Icon: Usb Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const UsbLine = Icon
