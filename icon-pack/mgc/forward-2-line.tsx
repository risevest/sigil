import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" height={size} width={size} {...otherProps}>
      <G fill="none" fillRule="nonzero">
        <Path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01-.184-.092Z" />
        <Path
          fill={color}
          d="M17.954 11.677A7.5 7.5 0 0 0 4 15.5a1 1 0 1 1-2 0 9.5 9.5 0 0 1 17.22-5.537l.537-3.045a1 1 0 1 1 1.97.347l-1.042 5.909a1 1 0 0 1-.412.645 1.1 1.1 0 0 1-.975.125l-5.68-1.001a1 1 0 1 1 .347-1.97l3.989.704Z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'Forward2Line'

/**
 * MingCute Icon: Forward 2 Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const Forward2Line = memo(Icon)
