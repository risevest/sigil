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
          d="M12 3a1 1 0 1 1 0 2h-1v1h2.764a2 2 0 0 1 .894.211l3.236 1.618A2 2 0 0 1 19 9.618V12h1v-1a1 1 0 1 1 2 0v4a1 1 0 1 1-2 0v-1h-1v1.5a2 2 0 0 1-.8 1.6l-3.333 2.5a2 2 0 0 1-1.2.4H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4V5H8a1 1 0 0 1 0-2zm-.985 6.643a1 1 0 0 0-1.307.246l-.065.097-1.491 2.484a1.01 1.01 0 0 0 .75 1.524l.116.006h1.216l-.591.986a1 1 0 0 0 1.649 1.125l.066-.096 1.49-2.485a1.01 1.01 0 0 0-.75-1.524L11.982 12h-1.216l.591-.985a1 1 0 0 0-.342-1.372"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'EngineFill'

/**
 * MingCute Icon: Engine Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const EngineFill = memo(Icon)
