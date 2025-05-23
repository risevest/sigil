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
          d="M15.5 5a2.5 2.5 0 0 1 2.461 2.058A2.5 2.5 0 0 1 21 9.5V12a8 8 0 0 1-8 8h-.674a8 8 0 0 1-7.155-4.422L2.329 9.894c-.36-.72-.093-1.683.747-2.028 1.043-.427 2.034-.507 3.055.012.296.15.584.347.869.584V7.5a2.5 2.5 0 0 1 3.388-2.338 2.498 2.498 0 0 1 4.224 0A2.49 2.49 0 0 1 15.5 5"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'HandGrabFill'

/**
 * MingCute Icon: Hand Grab Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const HandGrabFill = memo(Icon)
