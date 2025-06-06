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
          d="M17.707 15.707a.414.414 0 0 1 .586 0 2.415 2.415 0 0 0 2.707.491V20a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2v-3.802c.89.405 1.975.241 2.707-.49a.414.414 0 0 1 .586 0 2.414 2.414 0 0 0 3.414 0 .414.414 0 0 1 .586 0 2.414 2.414 0 0 0 3.414 0 .414.414 0 0 1 .586 0 2.414 2.414 0 0 0 3.414 0ZM16 6a1 1 0 0 1 1 1v2h1a3 3 0 0 1 3 3v1.586l-.707.707a.414.414 0 0 1-.586 0 2.414 2.414 0 0 0-3.414 0 .414.414 0 0 1-.586 0 2.414 2.414 0 0 0-3.414 0 .414.414 0 0 1-.586 0 2.414 2.414 0 0 0-3.414 0 .414.414 0 0 1-.586 0 2.414 2.414 0 0 0-3.414 0 .414.414 0 0 1-.586 0L3 13.586V12a3 3 0 0 1 3-3h1V7a1 1 0 0 1 2 0v2h2V7a1 1 0 1 1 2 0v2h2V7a1 1 0 0 1 1-1m-3.5-4c-.319.638-.028 1.05.225 1.41.144.203.275.39.275.59a1 1 0 1 1-2 0c0-.552.5-1.5 1.5-2m-4 0c-.319.638-.028 1.05.225 1.41.144.203.275.39.275.59a1 1 0 0 1-2 0c0-.552.5-1.5 1.5-2m8 0c-.319.638-.028 1.05.225 1.41.144.203.275.39.275.59a1 1 0 1 1-2 0c0-.552.5-1.5 1.5-2"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'CakeFill'

/**
 * MingCute Icon: Cake Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const CakeFill = memo(Icon)
