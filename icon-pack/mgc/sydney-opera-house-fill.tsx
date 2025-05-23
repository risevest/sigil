import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" height={size} width={size} {...otherProps}>
      <G fill="none">
        <Path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M2 19a1 1 0 0 1-.117-1.993L3.044 17c-.013-1.906-.578-3.88-1.812-5.36A1 1 0 0 1 2 10c1.476 0 2.838.41 4.057 1.094-.287-1.6-.84-3.187-1.846-4.481A1 1 0 0 1 5.038 5c5.451.21 8.942 2.276 10.726 5.63C17.65 9.55 19.83 9 22 9a1 1 0 0 1 .8 1.6c-1.628 2.17-2.113 4.43-1.937 6.4H22a1 1 0 0 1 .117 1.992z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'SydneyOperaHouseFill'

/**
 * MingCute Icon: Sydney Opera House Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const SydneyOperaHouseFill = memo(Icon)
