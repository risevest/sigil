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
          d="M5 4a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm15 4.17V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v1.17c.313-.11.65-.17 1-.17h14c.35 0 .687.06 1 .17M4 11v1h5c.028 0 .056.001.084.004a1 1 0 0 1 1.03.663 2.001 2.001 0 0 0 3.772 0 1 1 0 0 1 1.03-.663C14.943 12 14.972 12 15 12h5v-1a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1m11.465 3A3.998 3.998 0 0 1 12 16a3.998 3.998 0 0 1-3.465-2H4v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'Wallet5Line'

/**
 * MingCute Icon: Wallet 5 Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const Wallet5Line = memo(Icon)
