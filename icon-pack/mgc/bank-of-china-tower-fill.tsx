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
          d="M13 1a1 1 0 0 0-1 1v1.382l-.538-.27A1.01 1.01 0 0 0 10 4.017v7.57L7.296 14.29a1.01 1.01 0 0 0-.296.714V21a1 1 0 1 0 0 2h9a1 1 0 1 0 0-2V6.006a1.01 1.01 0 0 0-.558-.903L14 4.382V2a1 1 0 0 0-1-1m.146 6.44a.5.5 0 0 1 .854.353v1.414a.5.5 0 0 1-.146.354l-1 1a.5.5 0 0 1-.854-.354V8.793a.5.5 0 0 1 .146-.354l1-1Zm.374 5.682c.243-.132.48.102.48.378v1.707a.5.5 0 0 1-.146.354l-3.293 3.293a.5.5 0 0 1-.354.146H9.5a.5.5 0 0 1-.5-.5v-.707a.5.5 0 0 1 .146-.354l4.147-4.146a.998.998 0 0 1 .228-.17Z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'BankOfChinaTowerFill'

/**
 * MingCute Icon: Bank Of China Tower Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const BankOfChinaTowerFill = memo(Icon)
