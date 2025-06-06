import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" height={size} width={size} {...otherProps}>
      <G fill="none">
        <Path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M8.393 2.67c-.51.502-.97 1.09-1.367 1.731C5.795 6.381 5 9.067 5 12.001c0 2.945.847 5.632 2.1 7.606a9.69 9.69 0 0 0 1.426 1.773A10.004 10.004 0 0 1 2 12c0-4.25 2.653-7.883 6.393-9.33M11 3.236v17.499c-.71-.354-1.495-1.07-2.212-2.2C7.745 16.892 7 14.578 7 12c0-2.59.705-4.904 1.724-6.543.661-1.063 1.397-1.764 2.1-2.135zm4.607-.566A10.004 10.004 0 0 1 22 12c0 4.251-2.653 7.883-6.393 9.33.51-.502.97-1.09 1.367-1.73C18.205 17.618 19 14.932 19 12s-.795-5.619-2.026-7.599a9.373 9.373 0 0 0-1.367-1.73ZM13 3.236c.755.343 1.56 1.07 2.276 2.221C16.295 7.097 17 9.411 17 12c0 2.59-.705 4.904-1.724 6.543-.661 1.063-1.397 1.764-2.1 2.136l-.176.086V3.235Z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'EarthLongitudeFill'

/**
 * MingCute Icon: Earth Longitude Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const EarthLongitudeFill = memo(Icon)
