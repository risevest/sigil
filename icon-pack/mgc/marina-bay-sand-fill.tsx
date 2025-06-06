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
          d="M7 4.5a1 1 0 0 0-.866.5H2a1 1 0 0 0-1 1c0 1.07.461 1.892 1.112 2.478.623.56 1.404.896 2.1 1.105.653.196 1.294.298 1.788.353V14a6.734 6.734 0 0 1-1.456 4H4a1 1 0 0 0 0 2h17a1 1 0 1 0 0-2v-8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1.134A1 1 0 0 0 19 4.5h-3a1 1 0 0 0-.866.5h-4.268A1 1 0 0 0 10 4.5zM19 10h-2v3h2zm-4 0h-3v8h1.544A6.733 6.733 0 0 0 15 14zm-5 0H8v3h2z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'MarinaBaySandFill'

/**
 * MingCute Icon: Marina Bay Sand Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const MarinaBaySandFill = memo(Icon)
