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
          d="M13 3a1 1 0 1 0-2 0v1h-1a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1v1H7.414A2 2 0 0 0 6 11.586l-1.707 1.707a1 1 0 0 0 0 1.414L6 16.414A2 2 0 0 0 7.414 17H11v3H9a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-2v-3h1a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-1v-1h3.586A2 2 0 0 0 18 9.414l1.707-1.707a1 1 0 0 0 0-1.414L18 4.586A2 2 0 0 0 16.586 4H13z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'DirectionsFill'

/**
 * MingCute Icon: Directions Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const DirectionsFill = memo(Icon)
