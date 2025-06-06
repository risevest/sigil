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
          d="M20 12c0 5.523-4.477 10-10 10a9.965 9.965 0 0 1-6.322-2.251l-.985-.805c-.455-.372-.16-1.108.425-1.063l1.268.096c.72.054 1.464.01 2.159-.126A7.978 7.978 0 0 1 4 12C4 6.477 8.478 2 14 2c2.397 0 4.6.844 6.323 2.252l.985.804c.455.372.16 1.108-.425 1.063l-1.268-.096a8.173 8.173 0 0 0-2.159.126A7.979 7.979 0 0 1 20 12m-8 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'TyphoonFill'

/**
 * MingCute Icon: Typhoon Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const TyphoonFill = memo(Icon)
