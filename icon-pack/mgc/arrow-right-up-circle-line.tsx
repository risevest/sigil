import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" height={size} width={size} {...otherProps}>
      <G fill="none" fillRule="nonzero">
        <Path d="M24 0v24H0V0h24ZM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.105.074.014.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018Zm.264-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.092.01-.009.004-.011.017-.43-.003-.012-.01-.01-.184-.092Z" />
        <Path
          fill={color}
          d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm3.003 3.997a1 1 0 0 1 .994.883l.006.117v5a1 1 0 0 1-1.993.117l-.007-.117v-2.586l-4.296 4.296a1 1 0 0 1-1.497-1.32l.083-.094 4.296-4.296h-2.586a1 1 0 0 1-.116-1.993l.116-.007h5Z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'ArrowRightUpCircleLine'

/**
 * MingCute Icon: Arrow Right Up Circle Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const ArrowRightUpCircleLine = memo(Icon)
