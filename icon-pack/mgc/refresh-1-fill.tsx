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
          d="M10.7 19.374a7.504 7.504 0 0 0 7.881-3.778 1.5 1.5 0 0 1 2.63 1.442c-2.102 3.835-6.48 6.093-11.032 5.29-5.71-1.006-9.524-6.452-8.517-12.163C2.67 4.455 8.115.641 13.826 1.648a10.503 10.503 0 0 1 8.631 9.343c.125 1.309-1.265 2.158-2.366 1.549l-2.82-1.561c-1.547-.857-.767-3.22.986-2.986l.102.013A7.5 7.5 0 1 0 10.7 19.374"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'Refresh1Fill'

/**
 * MingCute Icon: Refresh 1 Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const Refresh1Fill = memo(Icon)
