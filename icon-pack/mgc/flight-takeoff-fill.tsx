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
          d="M21 20a1 1 0 0 1 .117 1.993L21 22H3a1 1 0 0 1-.117-1.993L3 20zM7.93 4.177l6.563 5.36 4.573-.855a3 3 0 0 1 2.953 1.152l.162.219c.18.257.316.524.245.868a2.913 2.913 0 0 1-2.1 2.23L5.208 17.2a1.5 1.5 0 0 1-1.614-.585L.93 12.833a.5.5 0 0 1 .28-.77l1.623-.436a1.5 1.5 0 0 1 1.379.322l.746.656.01.002 4.2-1.64a.01.01 0 0 0 .004-.016L4.447 5.196a.5.5 0 0 1 .257-.8l1.89-.506a1.5 1.5 0 0 1 1.336.287"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'FlightTakeoffFill'

/**
 * MingCute Icon: Flight Takeoff Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const FlightTakeoffFill = memo(Icon)
