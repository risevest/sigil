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
          d="M12 4.5a6.5 6.5 0 0 0-1.778 12.754c.732.208 1.278.88 1.278 1.688v1.808a1.75 1.75 0 0 1-1.75 1.75H6a1.5 1.5 0 0 1 0-3h1.754A9.498 9.498 0 0 1 2.5 11a9.5 9.5 0 1 1 19 0 9.498 9.498 0 0 1-5.254 8.5H18a1.5 1.5 0 0 1 0 3h-3.75a1.75 1.75 0 0 1-1.75-1.75v-1.808c0-.808.546-1.48 1.278-1.688A6.5 6.5 0 0 0 12 4.5"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'OmegaFill'

/**
 * MingCute Icon: Omega Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const OmegaFill = memo(Icon)
