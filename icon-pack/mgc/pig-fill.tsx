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
          d="M18.615 4.212A1 1 0 0 1 19 5v2.101A6.996 6.996 0 0 1 20.71 10H21a1 1 0 0 1 1 1v3a1 1 0 0 1-.553.894l-1.456.729A7.032 7.032 0 0 1 18 17.745V19a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1h-1a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-1.255a7.013 7.013 0 0 1-2.736-3.836A3.001 3.001 0 0 1 2 11v-.5a1 1 0 0 1 2 0v.5a1 1 0 0 0 .037.272A7 7 0 0 1 11 5h2.877l3.88-.97a1 1 0 0 1 .858.182M16.5 9a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"
          fillRule="nonzero"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'PigFill'

/**
 * MingCute Icon: Pig Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const PigFill = memo(Icon)
