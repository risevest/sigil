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
          d="M18.9 2A1.1 1.1 0 0 1 20 3.1V5a7 7 0 0 1-4 6.326V20a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-8.674A7 7 0 0 1 4 5V3.1A1.1 1.1 0 0 1 5.1 2zm-1.316 5H6.416a5.016 5.016 0 0 0 2.862 2.696A1.1 1.1 0 0 1 10 10.729V20h4v-9.27c0-.47.296-.878.722-1.034A5.016 5.016 0 0 0 17.584 7M12 11a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1m6-7H6v1h12z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'FlashlightLine'

/**
 * MingCute Icon: Flashlight Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const FlashlightLine = memo(Icon)
