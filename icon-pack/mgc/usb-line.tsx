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
          d="M12 2a1 1 0 0 1 .78.375l2 2.5A1 1 0 0 1 14 6.5h-1v6.382l3-1.5V11a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v.382a2 2 0 0 1-1.106 1.789l-3.341 1.67a1 1 0 0 0-.553.895v.435a3.001 3.001 0 1 1-2.469.213L7.106 14.67A2 2 0 0 1 6 12.882v-1.15A2 2 0 0 1 7 8a2 2 0 0 1 1 3.732v1.15l3 1.5V6.5h-1a1 1 0 0 1-.78-1.625l2-2.5A1 1 0 0 1 12 2m0 16a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'UsbLine'

/**
 * MingCute Icon: Usb Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const UsbLine = memo(Icon)
