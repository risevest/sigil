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
          d="M5.269 4.026c.557-.628 1.463-.628 2.044-.148l.105.095 4.848 4.847.087-.087a1 1 0 0 1 1.497 1.32l-.083.094-.087.087 4.347 4.348c.572.572.614 1.557-.053 2.15a8.974 8.974 0 0 1-4.466 2.142l-.341.051.98 1.318a1.1 1.1 0 0 1-.766 1.751l-.116.006h-6.58a1.1 1.1 0 0 1-1.058-1.403l.04-.115 1.254-3.051A8.99 8.99 0 0 1 3 10a8.97 8.97 0 0 1 2.269-5.974m3.426 14.348L8.028 20h3.446l-.819-1.1a8.935 8.935 0 0 1-1.582-.387l-.378-.14ZM6.407 5.79a7 7 0 0 0 9.803 9.803l-3.944-3.944-1.559 1.558a1 1 0 0 1-1.414-1.414l1.558-1.559zm7.7-.737a3.5 3.5 0 0 1 2.859 2.96 1 1 0 0 1-1.958.393l-.023-.115a1.5 1.5 0 0 0-1.07-1.233l-.155-.035a1 1 0 0 1 .348-1.97ZM14 2a6 6 0 0 1 6 6 1 1 0 0 1-1.993.117L18 8a4 4 0 0 0-4-4 1 1 0 1 1 0-2"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'Radar2Line'

/**
 * MingCute Icon: Radar 2 Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const Radar2Line = memo(Icon)
