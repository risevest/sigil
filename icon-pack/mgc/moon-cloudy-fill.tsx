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
          d="M11 6a6.002 6.002 0 0 1 5.703 4.132 5.502 5.502 0 0 1-.982 10.864L15.5 21h-9a4.5 4.5 0 0 1-1.495-8.746A6 6 0 0 1 11 6m3.902-1.33-.103-.249a1.008 1.008 0 0 1 1.095-1.406 7.402 7.402 0 0 1 5.603 9.974 6.518 6.518 0 0 0-4.036-3.688 7.023 7.023 0 0 0-2.262-2.902l.001-.096c0-.577-.105-1.126-.298-1.633"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'MoonCloudyFill'

/**
 * MingCute Icon: Moon Cloudy Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const MoonCloudyFill = memo(Icon)
