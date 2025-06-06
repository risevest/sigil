import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" height={size} width={size} {...otherProps}>
      <G fill="none" fillRule="evenodd">
        <Path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M19.264 3.364a1 1 0 0 1 1.221.15l.008.008a1 1 0 0 1 .148 1.225l-1.068 1.761a1 1 0 0 1-1.114.447l-3.63 3.63.414.415c.951.951.925 2.489-.01 3.423a2.382 2.382 0 0 1-1.679.698.37.37 0 0 0-.33.205l-.891 1.78a3 3 0 0 1-.562.78l-3.306 3.306a3 3 0 0 1-4.243 0l-1.414-1.414a3 3 0 0 1 0-4.243l3.306-3.306a3 3 0 0 1 .78-.562l1.78-.89a.37.37 0 0 0 .205-.331c0-.633.256-1.238.698-1.68.934-.934 2.472-.96 3.423-.009l.414.414 3.63-3.63a1 1 0 0 1 .452-1.116zM9.172 14.828a1 1 0 0 1 0 1.414L7.05 18.364a1 1 0 0 1-1.415-1.415l2.122-2.12a1 1 0 0 1 1.414 0"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'ScrewdriverFill'

/**
 * MingCute Icon: Screwdriver Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const ScrewdriverFill = memo(Icon)
