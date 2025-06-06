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
          d="M9 1a1 1 0 0 1 1 1v1.133a7.816 7.816 0 0 1 1.528.56c.94.453 1.971 1.142 2.93 2.1.363.364.716.766 1.048 1.207H16a1 1 0 0 1 .616 1.788C17.453 10.454 18 12.511 18 15c0 2.016-.338 4.03-.75 6H19a1 1 0 1 1 0 2H7a1 1 0 1 1 0-2h1V9a1 1 0 0 1 0-2V2a1 1 0 0 1 1-1m1 4.218V7h2.83c-.813-.762-1.774-1.408-2.83-1.782M14.449 9H10v2h5.378c-.253-.745-.57-1.41-.93-2Zm1.408 4H10v3h5.966c.07-1.1.025-2.094-.11-3Zm-.105 5H10v3h5.205c.153-.7.378-1.815.547-3"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'BurjAlArabLine'

/**
 * MingCute Icon: Burj Al Arab Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const BurjAlArabLine = memo(Icon)
